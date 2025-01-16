import {
    Annotation,
    END,
    START,
    StateGraph,
    MessagesAnnotation,
  } from "@langchain/langgraph";
  import { BaseMessage, type AIMessage } from "@langchain/core/messages";
  import { ChatOpenAI } from "@langchain/openai";
  import { ToolNode } from "@langchain/langgraph/prebuilt";
  import { z } from "zod";
  import { ALL_TOOLS, fetchEmailsTool } from "./tools";
  
  // Define the classification schema
  const classificationSchema = z.object({
    classifications: z.array(
      z.object({
        category: z.string(),
        instances: z.array(
          z.object({
            name: z.string(),
            confidence: z.number(),
            metadata: z.record(z.any()).optional().default({}),
          }),
        ),
      }),
    ),
  });
  
  // Define state annotations
  const GraphAnnotation = Annotation.Root({
    ...MessagesAnnotation.spec,
    currentEmail: Annotation<any | undefined>,
    unprocessedEmails: Annotation<any[]>,
    classifications: Annotation<z.infer<typeof classificationSchema>>,
  });
  
  // Initialize LLM
  const llm = new ChatOpenAI({
    modelName: 'gpt-4-turbo-preview',
    temperature: 0,
  });
  
  // Create tool node
  const toolNode = new ToolNode(ALL_TOOLS);
  
  // Fetch emails from database
  const fetchEmails = async (state: typeof GraphAnnotation.State) => {
    console.log("inside fetch")
    const result = await fetchEmailsTool.invoke({});
    console.log("resutl is ")
    
    if (result.status === "error") {
      return {
        messages: [{
          role: "assistant",
          content: `Error fetching emails: ${result.message}`
        }],
        unprocessedEmails: [],
      };
    }
  
    if (result.emails.length === 0) {
      return {
        messages: [{
          role: "assistant",
          content: "No unclassified emails found."
        }],
        unprocessedEmails: [],
      };
    }
  
    return {
      messages: [{
        role: "assistant",
        content: `Found ${result.emails.length} emails to process.`
      }],
      unprocessedEmails: result.emails,
    };
  };
  
  // Process next email
  const processNextEmail = async (state: typeof GraphAnnotation.State) => {
    const { unprocessedEmails } = state;
  
    if (!unprocessedEmails || unprocessedEmails.length === 0) {
      return {
        messages: [{
          role: "assistant",
          content: "No more emails to process."
        }],
        currentEmail: undefined,
      };
    }
  
    const nextEmail = unprocessedEmails[0];
    const remainingEmails = unprocessedEmails.slice(1);
  
    const emailContent = `
      Subject: ${nextEmail.subject}
      From: ${JSON.stringify(nextEmail.sender)}
      To: ${JSON.stringify(nextEmail.receiver)}
      Body: ${nextEmail.body}
      Date: ${nextEmail.sentDateTime}
    `.trim();
  
    return {
      messages: [{
        role: "user",
        content: emailContent
      }],
      currentEmail: nextEmail,
      unprocessedEmails: remainingEmails,
    };
  };
  
  // Define the main classification agent
  const classifyAgent = async (state: typeof GraphAnnotation.State) => {
    const { messages, currentEmail } = state;
    
    if (!currentEmail) {
      return { 
        messages: [{
          role: "assistant",
          content: "No email to process."
        }]
      };
    }
  
    const systemMessage = {
      role: "system",
      content: `You are an email classifier specialized for ProficientNow.
      Your task is to analyze emails and classify them according to these categories:
      - Clients (identify specific company names)
      - Contacts (identify specific people and their roles/relationships)
      - Positions (identify specific job titles)
      - Candidates (identify specific candidates and their qualifications)
      
      For each identified instance, provide:
      - name: The identified entity name
      - confidence: A confidence score between 0 and 1
      - metadata: Additional relevant information about the entity
      
      Use the validation tools to verify and store each entity you identify.`
    };
  
    const llmWithTools = llm.bindTools(ALL_TOOLS);
    const result = await llmWithTools.invoke([systemMessage, ...messages]);
    
    return { messages: [...messages, result] };
  };
  
  // shouldContinue function to determine the next node
  const shouldContinue = (state: typeof GraphAnnotation.State) => {
    console.log('shouldContinue - State:', JSON.stringify(state, null, 2));
  
    // Explicit null/undefined checks
    if (!state) {
      console.error('State is undefined or null');
      return "fetch";
    }
  
    const { messages, unprocessedEmails, currentEmail } = state;
  
    // Log detailed state information
    console.log('Unprocessed Emails:', unprocessedEmails?.length || 0);
    console.log('Current Email:', !!currentEmail);
    console.log('Messages Count:', messages?.length || 0);
  
    // If we don't have a current email or unprocessed emails, go to fetch
    if (!currentEmail && (!unprocessedEmails || unprocessedEmails.length === 0)) {
      console.log('Routing to fetch: No current email and no unprocessed emails');
      return "fetch";
    }
  
    // If we have unprocessed emails but no current email, process next
    if (!currentEmail && unprocessedEmails && unprocessedEmails.length > 0) {
      console.log('Routing to process: Unprocessed emails exist');
      return "process";
    }
  
    // Ensure messages exist and is an array
    if (!messages || messages.length === 0) {
      console.log('Routing to process: No messages');
      return "process";
    }
  
    const lastMessage = messages[messages.length - 1];
    
    // If it's not an AI message or has no tool calls, move to next email
    const messageCastAI = lastMessage as AIMessage;
    if (messageCastAI._getType() !== "ai" || !messageCastAI.tool_calls?.length) {
      console.log('Routing to process: No tool calls or not an AI message');
      return "process";
    }
  
    // Execute tools
    console.log('Routing to tools');
    return "tools";
  };
  // Create the workflow
  const workflow = new StateGraph(GraphAnnotation)
    .addNode("fetch", fetchEmails)
    .addNode("process", processNextEmail)
    .addNode("agent", classifyAgent)
    .addNode("tools", toolNode)
    .addEdge(START, "fetch")
    .addEdge("fetch", "process")
    .addEdge("process", "agent")
    .addEdge("tools", "agent")
    .addEdge("agent", "process")
    .addConditionalEdges("fetch", shouldContinue, ["process", END])
    .addConditionalEdges("process", shouldContinue, ["agent", END])
    .addConditionalEdges("agent", shouldContinue, ["tools", "process"])
    .addConditionalEdges("tools", shouldContinue, ["agent", "process"]);
  
  export const graph = workflow.compile();
  
  // Function to run the classification
  export const runEmailClassification = async () => {
    const result = await graph.invoke({
      messages: [],
      currentEmail: undefined,
      unprocessedEmails: [],
      classifications: { classifications: [] }
    });
  
    return result;
  };
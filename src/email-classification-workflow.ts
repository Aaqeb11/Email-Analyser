import {
  Annotation,
  END,
  START,
  StateGraph,
  MessagesAnnotation,
} from '@langchain/langgraph';
import { BaseMessage, type AIMessage } from '@langchain/core/messages';
import { ChatOpenAI } from '@langchain/openai';
import { ToolNode } from '@langchain/langgraph/prebuilt';
import { z } from 'zod';
import { ALL_TOOLS, fetchEmailsTool } from './tools';

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
  console.log('inside fetch');
  const result = await fetchEmailsTool.invoke({});
  console.log('resutl is ');

  if (result.status === 'error') {
    return {
      messages: [
        {
          role: 'assistant',
          content: `Error fetching emails: ${result.message}`,
        },
      ],
      unprocessedEmails: [],
    };
  }

  if (result.emails.length === 0) {
    return {
      messages: [
        {
          role: 'assistant',
          content: 'No unclassified emails found.',
        },
      ],
      unprocessedEmails: [],
    };
  }

  return {
    messages: [
      {
        role: 'assistant',
        content: `Found ${result.emails.length} emails to process.`,
      },
    ],
    unprocessedEmails: result.emails,
  };
};

// Process next email
const processNextEmail = async (state: typeof GraphAnnotation.State) => {
  const { unprocessedEmails } = state;

  if (!unprocessedEmails || unprocessedEmails.length === 0) {
    return {
      messages: [
        {
          role: 'assistant',
          content: 'No more emails to process.',
        },
      ],
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
    messages: [
      {
        role: 'user',
        content: emailContent,
      },
    ],
    currentEmail: nextEmail,
    unprocessedEmails: remainingEmails,
  };
};

// Define the main classification agent
// const classifyAgent = async (state: typeof GraphAnnotation.State) => {
//   const { messages, currentEmail } = state;

//   if (!currentEmail) {
//     return {
//       messages: [
//         {
//           role: 'assistant',
//           content: 'No email to process.',
//         },
//       ],
//     };
//   }

//   // Add tool response messages if the last message was an AI message with tool calls
//   if (messages.length > 0) {
//     const lastMessage = messages[messages.length - 1] as AIMessage;
//     if (lastMessage._getType() === 'ai' && lastMessage.tool_calls?.length) {
//       // If the last message had tool calls but no tool responses, add them
//       const toolResponses = lastMessage.tool_calls.map((tool_call) => ({
//         role: 'tool',
//         tool_call_id: tool_call.id,
//         name: tool_call.name,
//         content: 'Tool execution completed successfully', // Or actual tool response
//       }));

//       return {
//         messages: [...messages, ...toolResponses],
//       };
//     }
//   }

//   const systemMessage = {
//     role: 'system',
//     content: `You are an email classifier specialized for ProficientNow.
//       Your task is to analyze emails and classify them according to these categories:
//       - Clients (identify specific company names)
//       - Contacts (identify specific people and their roles/relationships)
//       - Positions (identify specific job titles)
//       - Candidates (identify specific candidates and their qualifications)

//       For each identified instance, provide:
//       - name: The identified entity name
//       - confidence: A confidence score between 0 and 1
//       - metadata: Additional relevant information about the entity

//       Use the validation tools to verify and store each entity you identify.`,
//   };

//   const llmWithTools = llm.bindTools(ALL_TOOLS);
//   const result = await llmWithTools.invoke([systemMessage, ...messages]);

//   return { messages: [...messages, result] };
// };
const classifyAgent = async (state: typeof GraphAnnotation.State) => {
  const { messages, currentEmail } = state;

  if (!currentEmail) {
    return {
      messages: [
        {
          role: 'assistant',
          content: 'No email to process.',
        },
      ],
    };
  }

  const systemMessage = {
    role: 'system',
    content: `You are an email classifier specialized for ProficientNow.
      Your task is to analyze the current email and classify it according to these categories:
      - Clients (identify specific company names)
      - Contacts (identify specific people and their roles/relationships)
      - Positions (identify specific job titles)
      - Candidates (identify specific candidates and their qualifications)
      
      For each identified instance, provide:
      - name: The identified entity name
      - confidence: A confidence score between 0 and 1
      - metadata: Additional relevant information about the entity
      
      Use the validation tools to verify and store each entity you identify.
      After completing the analysis, provide a completion message.`,
  };

  const llmWithTools = llm.bindTools(ALL_TOOLS);
  const result = await llmWithTools.invoke([systemMessage, ...messages]);

  return {
    messages: [...messages, result],
    currentEmail, // Keep current email state
  };
};
// shouldContinue function to determine the next node
const shouldContinue = (state: typeof GraphAnnotation.State) => {
  const { messages, unprocessedEmails, currentEmail } = state;
  const lastMessage = messages[messages.length - 1];

  console.log('State in shouldContinue:', {
    unprocessedEmails: unprocessedEmails?.length,
    currentEmail: !!currentEmail,
    lastMessageType: lastMessage?._getType?.(),
    messageContent: lastMessage?.content,
  });

  // If last message is a tool message, go back to agent for the same email
  if (lastMessage?._getType?.() === 'tool') {
    console.log('Tool message detected, returning to agent');
    return 'agent';
  }

  // If it's an AI message with tool calls, execute tools
  if (lastMessage?._getType?.() === 'ai') {
    const aiMessage = lastMessage as AIMessage;
    if (aiMessage.tool_calls?.length > 0) {
      console.log('Tool calls detected, routing to tools');
      return 'tools';
    }

    // If AI message has finished (no tool calls) and we have more emails
    if (unprocessedEmails?.length > 0) {
      console.log('AI finished current email, processing next');
      return 'process';
    }
  }

  console.log('No more work to do, ending');
  return END;
};
// Create the workflow
// First, update the workflow to match the tutorial pattern
const workflow = new StateGraph(GraphAnnotation)
  .addNode('fetch', fetchEmails)
  .addNode('process', processNextEmail)
  .addNode('agent', classifyAgent)
  .addNode('tools', toolNode)
  .addEdge(START, 'fetch') // Start with fetch
  .addEdge('fetch', 'process') // Fetch goes to process
  .addEdge('process', 'agent') // Process goes to agent
  .addEdge('tools', 'agent') // Tools go back to agent
  .addConditionalEdges('agent', shouldContinue, ['tools', 'process', END]);
export const graph = workflow.compile();

// Function to run the classification
export const runEmailClassification = async () => {
  const result = await graph.invoke({
    messages: [],
    currentEmail: undefined,
    unprocessedEmails: [],
    classifications: { classifications: [] },
  });

  return result;
};

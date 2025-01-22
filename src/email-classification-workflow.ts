// import {
//   Annotation,
//   END,
//   START,
//   StateGraph,
//   MessagesAnnotation,
// } from '@langchain/langgraph';
// import { BaseMessage, type AIMessage } from '@langchain/core/messages';
// import { ChatOpenAI } from '@langchain/openai';
// import { ToolNode } from '@langchain/langgraph/prebuilt';
// import { z } from 'zod';
// import { ALL_TOOLS, candidateValidationTool, clientValidationTool, contactValidationTool, fetchEmailsTool, fetchSimilarEmailsTool, locationValidationTool, pocValidationTool, positionValidationTool, storeClassificationTool } from './tools';
// import { StructuredOutputParser } from '@langchain/core/output_parsers';

// // Define the classification schema
// const classificationSchema = z.object({
//   classifications: z.array(
//     z.object({
//       category: z.string(),
//       instances: z.array(
//         z.object({
//           name: z.string(),
//           confidence: z.number(),
//           metadata: z.record(z.any()).optional().default({}),
//         }),
//       ),
//     }),
//   ),
// });

// // Define state annotations
// const GraphAnnotation = Annotation.Root({
//   ...MessagesAnnotation.spec,
//   currentEmail: Annotation<any | undefined>,
//   unprocessedEmails: Annotation<any[]>,
//   classifications: Annotation<z.infer<typeof classificationSchema>>,
// });

// // Initialize LLM
// const llm = new ChatOpenAI({
//   modelName: 'gpt-4-turbo-preview',
//   temperature: 0,
// });

// // Create tool node
// const toolNode = new ToolNode(ALL_TOOLS);

// // Fetch emails from database
// const fetchEmails = async (state: typeof GraphAnnotation.State) => {
//     console.log('Fetching emails...');
//     const result = await fetchEmailsTool.invoke({});
  
//     if (result.status === 'error') {
//       return {
//         messages: [
//           {
//             role: 'assistant',
//             content: `Error fetching emails: ${result.message}`,
//           },
//         ],
//         unprocessedEmails: [],
//       };
//     }
  
//     if (result.emails.length === 0) {
//       return {
//         messages: [
//           {
//             role: 'assistant',
//             content: 'No unclassified emails found.',
//           },
//         ],
//         unprocessedEmails: [],
//       };
//     }
  
//     return {
//       messages: [
//         {
//           role: 'assistant',
//           content: `Found ${result.emails.length} emails to process.`,
//         },
//       ],
//       unprocessedEmails: result.emails,
//     };
//   };
  
//   // Enhanced process next email with similar email fetching
//   const processNextEmail = async (state: typeof GraphAnnotation.State) => {
//     const { unprocessedEmails } = state;
  
//     if (!unprocessedEmails || unprocessedEmails.length === 0) {
//       return {
//         messages: [
//           {
//             role: 'assistant',
//             content: 'No more emails to process.',
//           },
//         ],
//         currentEmail: undefined,
//       };
//     }
  
//     const nextEmail = unprocessedEmails[0];
//     const remainingEmails = unprocessedEmails.slice(1);
//     const emailContent = `
//     Subject: ${nextEmail.subject}
//     Body: ${nextEmail.body}
//     From: ${JSON.stringify(nextEmail.sender)}
//     To: ${JSON.stringify(nextEmail.receiver)}
//     `.trim();
    
//     const similarEmailsResult = await fetchSimilarEmailsTool.invoke({
//       emailContent,
//       limit: 3
//     });
//     let contextMessage = '';
//     if (similarEmailsResult.status === 'success' && similarEmailsResult.similarEmails.length > 0) {
//       contextMessage = '\n\nSimilar emails context:\n' + similarEmailsResult.similarEmails
//         .map((email: any, index: number) => {
//           const classifications = email.classifications
//             .map((c: any) => `${c.category}: ${c.instance.name} (confidence: ${c.instance.confidence})`)
//             .join(', ');
          
//           return `Email ${index + 1}:\n` +
//                  `Subject: ${email.subject}\n` +
//                  `Classifications: ${classifications}\n`;
//         })
//         .join('\n');
//     }
  
//     return {
//       messages: [
//         {
//           role: 'user',
//           content: emailContent + contextMessage,
//         },
//       ],
//       currentEmail: nextEmail,
//       unprocessedEmails: remainingEmails,
//     };
//   };

// // Define the main classification agent
// // const classifyAgent = async (state: typeof GraphAnnotation.State) => {
// //   const { messages, currentEmail } = state;

// //   if (!currentEmail) {
// //     return {
// //       messages: [
// //         {
// //           role: 'assistant',
// //           content: 'No email to process.',
// //         },
// //       ],
// //     };
// //   }

// //   // Add tool response messages if the last message was an AI message with tool calls
// //   if (messages.length > 0) {
// //     const lastMessage = messages[messages.length - 1] as AIMessage;
// //     if (lastMessage._getType() === 'ai' && lastMessage.tool_calls?.length) {
// //       // If the last message had tool calls but no tool responses, add them
// //       const toolResponses = lastMessage.tool_calls.map((tool_call) => ({
// //         role: 'tool',
// //         tool_call_id: tool_call.id,
// //         name: tool_call.name,
// //         content: 'Tool execution completed successfully', // Or actual tool response
// //       }));

// //       return {
// //         messages: [...messages, ...toolResponses],
// //       };
// //     }
// //   }

// //   const systemMessage = {
// //     role: 'system',
// //     content: `You are an email classifier specialized for ProficientNow.
// //       Your task is to analyze emails and classify them according to these categories:
// //       - Clients (identify specific company names)
// //       - Contacts (identify specific people and their roles/relationships)
// //       - Positions (identify specific job titles)
// //       - Candidates (identify specific candidates and their qualifications)

// //       For each identified instance, provide:
// //       - name: The identified entity name
// //       - confidence: A confidence score between 0 and 1
// //       - metadata: Additional relevant information about the entity

// //       Use the validation tools to verify and store each entity you identify.`,
// //   };

// //   const llmWithTools = llm.bindTools(ALL_TOOLS);
// //   const result = await llmWithTools.invoke([systemMessage, ...messages]);

// //   return { messages: [...messages, result] };
// // };
// // Enhanced classification agent with schema-compliant output
// const classifyAgent = async (state: typeof GraphAnnotation.State) => {
//     const { messages, currentEmail } = state;
  
//     if (!currentEmail) {
//       return {
//         messages: [
//           {
//             role: 'assistant',
//             content: 'No email to process.',
//           },
//         ],
//       };
//     }
  
//     try {
//       const outputParser = StructuredOutputParser.fromZodSchema(classificationSchema);
//       const formatInstructions = outputParser.getFormatInstructions();
  
//       const emailContent = `
//         Subject: ${currentEmail.subject}
//         Body: ${currentEmail.body}
//         From: ${JSON.stringify(currentEmail.sender)}
//         To: ${JSON.stringify(currentEmail.receiver)}
//         Date: ${currentEmail.sentDateTime}
//       `.trim();
  
//       const similarEmailsResult = await fetchSimilarEmailsTool.invoke({
//         emailContent,
//         limit: 3
//       });
  
//       let similarEmailsContext = '';
//       if (similarEmailsResult.status === 'success' && similarEmailsResult.similarEmails.length > 0) {
//         similarEmailsContext = JSON.stringify(
//           similarEmailsResult.similarEmails.reduce((acc, email) => {
//             email.classifications.forEach(classification => {
//               if (!acc[classification.category]) {
//                 acc[classification.category] = [];
//               }
//               acc[classification.category].push({
//                 name: classification.instance.name,
//                 confidence: classification.instance.confidence,
//                 metadata: classification.instance.metadata
//               });
//             });
//             return acc;
//           }, {}),
//           null,
//           2
//         );
//       }
  
//       const systemMessage = {
//         role: 'system',
//         content: `You are an email classifier for ProficientNow, a staffing agency.
          
//           Analyze both the current email and patterns from similar emails to provide accurate classification.
//           Similar emails have these classifications:
//           ${similarEmailsContext}
          
//           Classify the email into these categories and identify specific instances:
//           - Clients (identify specific company names)
//           - Contacts (identify specific people)
//           - Candidates (identify specific candidates)
//           - Positions (identify specific job titles)
//           - Employees (identify specific employees)
//           - Department (identify specific departments)
//           - Stages (identify specific stages)
//           - Topics (identify main topics)
//           - Location (identify specific locations)
//           - Point of Contacts (identify specific POCs)
          
//           Consider the classifications from similar emails when making your decision.
//           If an entity appears in similar emails with high confidence, it's likely relevant.
          
//           ${formatInstructions}
          
//           Return ONLY the JSON object matching this format, with no additional text or explanation.`
//       };
  
//       const userMessage = {
//         role: 'user',
//         content: emailContent
//       };
  
//       const llmWithTools = llm.bindTools([
//         clientValidationTool,
//         contactValidationTool,
//         positionValidationTool,
//         candidateValidationTool,
//         locationValidationTool,
//         pocValidationTool,
//         storeClassificationTool
//       ]);
  
//       const result = await llmWithTools.invoke([
//         systemMessage,
//         userMessage
//       ]);
  
//       // Extract string content from the message
//       const contentString = typeof result.content === 'string' 
//         ? result.content 
//         : Array.isArray(result.content) 
//           ? result.content.map(c => typeof c === 'string' ? c : JSON.stringify(c)).join('\n')
//           : JSON.stringify(result.content);
  
//       try {
//         // Parse the result
//         const parsedResult = await outputParser.parse(contentString);
        
//         if (parsedResult.classifications.length > 0) {
//           const validatedInstances = await Promise.all(
//             parsedResult.classifications.flatMap(classification =>
//               classification.instances.map(async instance => {
//                 const validationTool = ALL_TOOLS.find(tool => 
//                   tool.name === `${classification.category}ValidationTool`
//                 );
                
//                 if (validationTool) {
//                   const validationResult = await validationTool.call({
//                     name: instance.name,
//                     confidence: instance.confidence,
//                     metadata: instance.metadata,
//                     category: classification.category
//                   });
                  
//                   if (validationResult.status === 'success' || validationResult.status === 'exists') {
//                     return {
//                       instance: validationResult.instance,
//                       confidence: instance.confidence
//                     };
//                   }
//                 }
//                 return null;
//               })
//             )
//           );
  
//           const filteredInstances = validatedInstances.filter(instance => instance !== null);
          
//           if (filteredInstances.length > 0) {
//             await storeClassificationTool.call({
//               emailId: currentEmail.id,
//               classifications: filteredInstances
//             });
//           }
//         }
  
//         // Return both the original messages and the parsed result
//         return {
//           messages: [...messages, userMessage, result],
//           currentEmail,
//           classifications: parsedResult
//         };
//       } catch (error) {
//         console.error('Error parsing classification result:', error);
//         console.log('Failed to parse content:', contentString);
        
//         return {
//           messages: [
//             ...messages,
//             {
//               role: 'assistant',
//               content: `Error parsing classification: ${error.message}. Please ensure the output matches the required format.`
//             }
//           ],
//           currentEmail,
//         };
//       }
//     } catch (error) {
//       console.error('Error in classification:', error);
//       return {
//         messages: [
//           ...messages,
//           {
//             role: 'assistant',
//             content: `Error during classification: ${error.message}`
//           }
//         ],
//         currentEmail,
//       };
//     }
//   };
// // shouldContinue function to determine the next node
// const shouldContinue = (state: typeof GraphAnnotation.State) => {
//   const { messages, unprocessedEmails, currentEmail } = state;
//   const lastMessage = messages[messages.length - 1];

//   console.log('State in shouldContinue:', {
//     unprocessedEmails: unprocessedEmails?.length,
//     currentEmail: !!currentEmail,
//     lastMessageType: lastMessage?.getType?.(),
//     messageContent: lastMessage?.content,
//   });

//   // If last message is a tool message, go back to agent for the same email
//   if (lastMessage?.getType?.() === 'tool') {
//     console.log('Tool message detected, returning to agent');
//     return 'agent';
//   }

//   // If it's an AI message with tool calls, execute tools
//   if (lastMessage?.getType?.() === 'ai') {
//     const aiMessage = lastMessage as AIMessage;
//     if (aiMessage.tool_calls?.length > 0) {
//       console.log('Tool calls detected, routing to tools');
//       return 'tools';
//     }

//     // If AI message has finished (no tool calls) and we have more emails
//     if (unprocessedEmails?.length > 0) {
//       console.log('AI finished current email, processing next');
//       return 'process';
//     }
//   }

//   console.log('No more work to do, ending');
//   return END;
// };
// // Create the workflow
// // First, update the workflow to match the tutorial pattern
// const workflow = new StateGraph(GraphAnnotation)
//   .addNode('fetch', fetchEmails)
//   .addNode('process', processNextEmail)
//   .addNode('agent', classifyAgent)
//   .addNode('tools', toolNode)
//   .addEdge(START, 'fetch')
//   .addEdge('fetch', 'process')
//   .addEdge('process', 'agent')
//   .addEdge('tools', 'agent')
//   .addConditionalEdges('agent', shouldContinue, ['tools', 'process', END]);
// export const graph = workflow.compile();

// // Function to run the classification
// export const runEmailClassification = async () => {
//   const result = await graph.invoke({
//     messages: [],
//     currentEmail: undefined,
//     unprocessedEmails: [],
//     classifications: { classifications: [] },
//   });

//   return result;
// };


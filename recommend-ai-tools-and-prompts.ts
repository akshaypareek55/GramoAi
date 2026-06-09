'use server';
/**
 * @fileOverview A Genkit flow for recommending AI tools and prompts based on a project or workflow description.
 *
 * - recommendAiToolsAndPrompts - A function that handles the AI tool and prompt recommendation process.
 * - RecommendAiToolsAndPromptsInput - The input type for the recommendAiToolsAndPrompts function.
 * - RecommendAiToolsAndPromptsOutput - The return type for the recommendAiToolsAndPrompts function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RecommendAiToolsAndPromptsInputSchema = z.object({
  projectDescription: z
    .string()
    .describe("A detailed description of the user's project or workflow."),
});
export type RecommendAiToolsAndPromptsInput = z.infer<
  typeof RecommendAiToolsAndPromptsInputSchema
>;

const RecommendAiToolsAndPromptsOutputSchema = z.object({
  recommendedTools: z
    .array(
      z.object({
        name: z.string().describe('The name of the recommended AI tool.'),
        description:
          z.string().describe('A brief description of the AI tool and its primary use cases related to the project.'),
      })
    )
    .describe('A list of AI tools recommended for the given project or workflow.'),
  recommendedPrompts: z
    .array(
      z.object({
        useCase: z.string().describe('The specific use case for this prompt.'),
        promptExample:
          z.string().describe('An example prompt tailored for the recommended use case, ready to be used with an AI model.'),
      })
    )
    .describe('A list of example prompts optimized for various aspects of the project.'),
});
export type RecommendAiToolsAndPromptsOutput = z.infer<
  typeof RecommendAiToolsAndPromptsOutputSchema
>;

export async function recommendAiToolsAndPrompts(
  input: RecommendAiToolsAndPromptsInput
): Promise<RecommendAiToolsAndPromptsOutput> {
  return recommendAiToolsAndPromptsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendAiToolsAndPromptsPrompt',
  input: { schema: RecommendAiToolsAndPromptsInputSchema },
  output: { schema: RecommendAiToolsAndPromptsOutputSchema },
  prompt: `You are an expert AI consultant specializing in recommending AI tools and optimizing prompts for various workflows and projects.

Based on the user's project or workflow description, provide a list of recommended AI tools and example prompts that would be most effective.

Ensure that the recommendations are practical and directly relevant to the project described. The output should be a JSON object with two main fields: 'recommendedTools' and 'recommendedPrompts'.

Project or Workflow Description: {{{projectDescription}}}`,
});

const recommendAiToolsAndPromptsFlow = ai.defineFlow(
  {
    name: 'recommendAiToolsAndPromptsFlow',
    inputSchema: RecommendAiToolsAndPromptsInputSchema,
    outputSchema: RecommendAiToolsAndPromptsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

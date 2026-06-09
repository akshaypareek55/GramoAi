'use server';
/**
 * @fileOverview A Genkit flow for optimizing user prompts for various AI platforms.
 *
 * - optimizeUserPrompt - A function that optimizes a user's basic prompt idea.
 * - OptimizeUserPromptInput - The input type for the optimizeUserPrompt function.
 * - OptimizeUserPromptOutput - The return type for the optimizeUserPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeUserPromptInputSchema = z.object({
  idea: z.string().describe('The basic idea or prompt from the user.'),
  targetPlatform:
    z.enum(['Midjourney', 'ChatGPT', 'General'])
      .optional()
      .describe(
        'The target AI platform for which the prompt should be optimized (e.g., Midjourney, ChatGPT, or General).'
      )
      .default('General'),
});
export type OptimizeUserPromptInput = z.infer<
  typeof OptimizeUserPromptInputSchema
>;

const OptimizeUserPromptOutputSchema = z.object({
  optimizedPrompt:
    z.string().describe(
      'The refined and optimized prompt, ready for use in AI platforms.'
    ),
  explanation:
    z.string()
      .optional()
      .describe('An explanation of the optimizations made to the prompt.'),
});
export type OptimizeUserPromptOutput = z.infer<
  typeof OptimizeUserPromptOutputSchema
>;

export async function optimizeUserPrompt(
  input: OptimizeUserPromptInput
): Promise<OptimizeUserPromptOutput> {
  return optimizeUserPromptFlow(input);
}

const optimizePrompt = ai.definePrompt({
  name: 'optimizePrompt',
  input: {schema: OptimizeUserPromptInputSchema},
  output: {schema: OptimizeUserPromptOutputSchema},
  prompt: `You are an expert AI prompt engineer specializing in optimizing prompts for generative AI models like Midjourney and ChatGPT.
Your task is to take a basic idea or prompt provided by the user and expand it into a detailed, creative, and effective prompt tailored for the specified AI platform.

Consider the following when optimizing:
-   **Clarity and Detail**: Add specific descriptions, styles, moods, and settings.
-   **Keywords**: Include relevant keywords that can guide the AI.
-   **Structure**: Format the prompt clearly.
-   **Platform-specific enhancements**: If the target platform is Midjourney, think about common parameters or stylistic cues (e.g., aspect ratios, artistic styles). If ChatGPT, focus on role-playing, constraints, examples, or desired output format.

User's basic idea: {{{idea}}}
Target AI Platform: {{{targetPlatform}}}

Optimize the prompt and provide an explanation of your choices. If no specific platform is mentioned, optimize for general creative AI usage.`,
});

const optimizeUserPromptFlow = ai.defineFlow(
  {
    name: 'optimizeUserPromptFlow',
    inputSchema: OptimizeUserPromptInputSchema,
    outputSchema: OptimizeUserPromptOutputSchema,
  },
  async input => {
    const {output} = await optimizePrompt(input);
    return output!;
  }
);

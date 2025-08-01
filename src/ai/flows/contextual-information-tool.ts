'use server';
/**
 * @fileOverview An AI agent that provides contextual information based on the content being viewed.
 *
 * - getContextualInformation - A function that handles the process of providing contextual information.
 * - ContextualInformationInput - The input type for the getContextualInformation function.
 * - ContextualInformationOutput - The return type for the getContextualInformation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContextualInformationInputSchema = z.object({
  content: z.string().describe('The content of the article or forum post being viewed.'),
});
export type ContextualInformationInput = z.infer<typeof ContextualInformationInputSchema>;

const ContextualInformationOutputSchema = z.object({
  suggestions: z.array(
    z.string().describe('Relevant tips, strategies, or analysis based on the content.')
  ).describe('A list of suggestions to improve gameplay and understanding of the game.'),
});
export type ContextualInformationOutput = z.infer<typeof ContextualInformationOutputSchema>;

export async function getContextualInformation(input: ContextualInformationInput): Promise<ContextualInformationOutput> {
  return contextualInformationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contextualInformationPrompt',
  input: {schema: ContextualInformationInputSchema},
  output: {schema: ContextualInformationOutputSchema},
  prompt: `You are an AI assistant designed to provide relevant tips, strategies, and analysis based on the content a user is viewing in a PUBG Mobile context.

  Analyze the following content and provide a list of suggestions that would improve the user's gameplay and understanding of the game. Focus on actionable advice and insights.

  Content: {{{content}}}

  Suggestions should be concise and directly related to the content provided. Limit the number of suggestions to 3.
  All suggestions must be in Chinese.
  Format the suggestions as a JSON array of strings.
  `,
});

const contextualInformationFlow = ai.defineFlow(
  {
    name: 'contextualInformationFlow',
    inputSchema: ContextualInformationInputSchema,
    outputSchema: ContextualInformationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

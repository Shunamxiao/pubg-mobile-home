'use server';

import { getContextualInformation, type ContextualInformationInput } from '@/ai/flows/contextual-information-tool';

export async function getAIInsights(input: ContextualInformationInput) {
    try {
        const result = await getContextualInformation(input);
        return { success: true, data: result };
    } catch (error) {
        console.error("Error getting AI insights:", error);
        return { success: false, error: "Failed to get AI insights. Please try again." };
    }
}

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Bot, Lightbulb, Loader2 } from 'lucide-react';
import { getAIInsights } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

interface ContextualInfoProps {
  content: string;
}

export function ContextualInfo({ content }: ContextualInfoProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetInsights = async () => {
    setIsLoading(true);
    setError(null);
    setSuggestions([]);

    const result = await getAIInsights({ content });

    if (result.success && result.data?.suggestions) {
      setSuggestions(result.data.suggestions);
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setIsLoading(false);
  };

  return (
    <Card className="mt-12 mb-8 bg-card/50 border-accent/30">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-medium flex items-center">
          <Bot className="mr-2 h-5 w-5 text-accent" />
          AI-Powered Insights
        </CardTitle>
        <Button onClick={handleGetInsights} disabled={isLoading} variant="secondary">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            'Get Tips'
          )}
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
            <p className="text-sm text-muted-foreground">The AI is analyzing the content for strategic tips...</p>
        ) : error ? (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        ) : suggestions.length > 0 ? (
          <ul className="space-y-3 mt-2">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start">
                <Lightbulb className="h-5 w-5 mr-3 mt-1 text-accent shrink-0" />
                <span className="text-muted-foreground">{suggestion}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">Click "Get Tips" to receive AI-powered strategies and analysis based on this article.</p>
        )}
      </CardContent>
    </Card>
  );
}

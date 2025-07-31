import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ArticlesPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-12 text-center">
        Game Articles & Strategies
      </h1>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.slug} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href={`/articles/${article.slug}`} className="block">
              <Image
                src={article.imageUrl}
                alt={article.title}
                data-ai-hint={article.imageHint}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
            </Link>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.date} by {article.author}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{article.summary}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href={`/articles/${article.slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

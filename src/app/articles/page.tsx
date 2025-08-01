import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ArticlesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        News & Guides
      </h1>
      <div className="grid gap-8">
        {articles.map((article) => (
          <Card key={article.slug} className="hover:shadow-primary/10 transition-shadow duration-300">
            <Link href={`/articles/${article.slug}`} className="grid md:grid-cols-12 gap-0 md:gap-6 group">
                <div className="md:col-span-4 relative rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden aspect-video">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    data-ai-hint={article.imageHint}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:col-span-8 p-6 flex flex-col">
                  <CardHeader className="p-0 mb-2">
                      <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">{article.title}</CardTitle>
                      <CardDescription>{article.date} by {article.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{article.summary}</p>
                  </CardContent>
                  <CardFooter className="p-0 mt-4">
                     <Button variant="outline" asChild>
                       <span className="flex items-center">
                         Read More <ArrowRight className="ml-2 h-4 w-4" />
                       </span>
                     </Button>
                  </CardFooter>
                </div>
              </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

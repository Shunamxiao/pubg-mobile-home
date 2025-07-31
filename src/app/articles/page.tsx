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
        游戏文章与攻略
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.slug} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href={`/articles/${article.slug}`} className="block">
              <Image
                src={article.imageUrl}
                alt={article.title}
                data-ai-hint={article.imageHint}
                width={1312}
                height={600}
                className="w-full object-cover aspect-[1312/600]"
              />
            </Link>
            <CardHeader className="p-4">
              <CardTitle className="text-lg leading-tight line-clamp-2 min-h-[2.5rem]">{article.title}</CardTitle>
              <CardDescription className="text-xs pt-1">{article.date} by {article.author}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-grow">
              <p className="text-muted-foreground text-sm line-clamp-3">{article.summary}</p>
            </CardContent>
            <div className="p-4 pt-0">
              <Button asChild variant="link" className="p-0 h-auto text-sm">
                <Link href={`/articles/${article.slug}`}>
                  阅读全文 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

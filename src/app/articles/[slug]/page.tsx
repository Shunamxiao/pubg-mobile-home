import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getArticleBySlug } from '@/lib/data';
import { CommentSection } from '@/components/CommentSection';
import { ContextualInfo } from '@/components/ContextualInfo';
import { MarkdownContent } from '@/components/MarkdownContent';
import type { Metadata, ResolvingMetadata } from 'next'

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: ArticlePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }
 
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [article.imageUrl, ...previousImages],
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-background mx-auto">
      <div className="relative mx-auto w-full h-64 md:h-96">
        <Image
          src={article.imageUrl}
          alt={article.title}
          data-ai-hint={article.imageHint}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <article className="max-w-4xl mx-auto py-12 md:py-16 -mt-32 relative z-10">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-shadow">{article.title}</h1>
            <div className="flex justify-center items-center space-x-4 text-muted-foreground">
              <span>By {article.author}</span>
              <span>&bull;</span>
              <span>{article.date}</span>
            </div>
          </header>
          
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p className="text-xl text-foreground font-semibold">{article.summary}</p>
            <MarkdownContent content={article.content} />
          </div>

          <ContextualInfo content={article.content} />
          
          <CommentSection />
        </article>
      </div>
    </div>
  );
}

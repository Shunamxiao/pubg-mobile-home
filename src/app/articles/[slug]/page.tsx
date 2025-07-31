import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getArticleBySlug } from '@/lib/data';
import { CommentSection } from '@/components/CommentSection';
import { ContextualInfo } from '@/components/ContextualInfo';

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const contentWithLineBreaks = article.content.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <div className="bg-background">
      <div className="relative w-full h-64 md:h-96">
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

      <article className="container max-w-4xl py-12 md:py-16 -mt-32 relative z-10">
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
          {contentWithLineBreaks}
        </div>

        <ContextualInfo content={article.content} />
        
        <CommentSection />
      </article>
    </div>
  );
}

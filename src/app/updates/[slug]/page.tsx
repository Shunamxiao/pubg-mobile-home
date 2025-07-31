import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getUpdateBySlug } from '@/lib/data';
import { MarkdownContent } from '@/components/MarkdownContent';

type UpdatePageProps = {
  params: {
    slug: string;
  };
};

export default function UpdatePage({ params }: UpdatePageProps) {
  const update = getUpdateBySlug(params.slug);

  if (!update) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={update.imageUrl}
          alt={update.title}
          data-ai-hint={update.imageHint}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      <div className="container px-4 md:px-6">
        <article className="max-w-4xl mx-auto py-12 md:py-16 -mt-32 relative z-10">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-2 text-shadow">{update.title}</h1>
            <p className="text-2xl font-bold text-accent">Version {update.version}</p>
            <p className="text-md text-muted-foreground mt-2">{update.date}</p>
          </header>
          
          <div className="text-lg text-foreground/80 leading-relaxed space-y-6">
            <p className="text-xl text-foreground font-semibold">{update.summary}</p>
            <MarkdownContent content={update.content} />
          </div>
        </article>
      </div>
    </div>
  );
}

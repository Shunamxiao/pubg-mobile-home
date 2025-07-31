import Image from 'next/image';
import Link from 'next/link';
import { articles, updates } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GameDownloadButtons } from '@/components/GameDownloadButtons';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="PUBG Mobile battle scene"
          data-ai-hint="battle royale action"
          fill
          className="object-cover object-center -z-10"
          priority
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="container px-4 md:px-6 z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-shadow-lg animate-fade-in-down">
              Welcome to the Battlegrounds
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8 animate-fade-in-up [animation-delay:0.2s]">
              Your one-stop destination for the latest news, patch notes, and pro strategies for PUBG Mobile.
            </p>
            <div id="download" className="animate-fade-in-up [animation-delay:0.4s]">
                <GameDownloadButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Latest Articles</h2>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
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
      </section>

      {/* Version Updates Section */}
      <section className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Version Updates</h2>
        <div className="space-y-6">
          {updates.slice(0, 2).map((update) => (
            <Card key={update.slug} className="hover:shadow-lg transition-shadow duration-300">
              <Link href={`/updates/${update.slug}`}>
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 relative min-h-[200px] rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden">
                    <Image
                      src={update.imageUrl}
                      alt={update.title}
                      data-ai-hint={update.imageHint}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <CardHeader className="p-0 mb-2">
                        <CardTitle>{update.title} - v{update.version}</CardTitle>
                        <CardDescription>{update.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground">{update.summary}</p>
                        <Button asChild variant="link" className="p-0 h-auto mt-4">
                            <span className="flex items-center">
                                View Patch Notes <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                        </Button>
                    </CardContent>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Social Media Feed */}
      <section className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Official Channel</h2>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/uCd6tbUAy6o"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

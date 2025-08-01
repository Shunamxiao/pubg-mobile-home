import Image from 'next/image';
import Link from 'next/link';
import { articles, updates } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GameDownloadButtons } from '@/components/GameDownloadButtons';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MarkdownContent } from '@/components/MarkdownContent';
import { siteConfig } from '@/config/site';


export default function Home() {
  const keywords = ['pubg mobile', 'pubg mobile 官网', 'pubg mobile 下载', 'pubg mobile 官方网站', 'pubg mobile 国际服', 'pubg mobile 国服', 'pubg mobile 更新', 'pubg mobile 最新版本', 'pubg mobile 安卓下载', 'pubg mobile iOS 下载', '地铁逃生', 'pbg大逃杀'];
  return (
    <div className="flex flex-col gap-12 md:gap-16 pb-16">
      {/* Hero Section */}
      <section id="home" className="relative w-full aspect-video flex items-center justify-center text-center text-white">
        <Image
          src={siteConfig.hero.backgroundImage}
          alt="PUBG Mobile下载,地铁逃生下载"
          data-ai-hint="battle royale action"
          fill
          className="object-cover object-center -z-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent -z-10" />
        <div className="container px-4 md:px-6 z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center pb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-shadow-lg animate-fade-in-down">
              {siteConfig.hero.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mb-8 animate-fade-in-up [animation-delay:0.2s]">
              {siteConfig.hero.description}
            </p>
            <div id="download" className="animate-fade-in-up [animation-delay:0.4s]">
                <GameDownloadButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section id="articles" className="container mx-auto px-4 md:px-6 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">{siteConfig.sections.articles.title}</h2>
        <div className="space-y-4">
          {articles.map((article) => (
             <Card key={article.slug} className="hover:shadow-lg transition-shadow duration-300">
                <Link href={`/articles/${article.slug}`} className="grid md:grid-cols-12 gap-0 md:gap-6 group">
                  <div className="md:col-span-4 relative rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden aspect-video md:aspect-square">
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
                        <CardTitle className="group-hover:text-primary transition-colors">{article.title}</CardTitle>
                        <CardDescription>{article.date} by {article.author}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <p className="text-muted-foreground line-clamp-2 md:line-clamp-3">{article.summary}</p>
                    </CardContent>
                    <div className="p-0 mt-4 flex justify-end">
                       <Button variant="outline">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                       </Button>
                    </div>
                  </div>
                </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Version Updates Section */}
      <section id="updates" className="container mx-auto px-4 md:px-6 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">{siteConfig.sections.updates.title}</h2>
        <Accordion type="single" collapsible className="w-full">
          {updates.map((update) => (
            <AccordionItem value={update.slug} key={update.slug}>
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-start md:items-center gap-4">
                  <Image
                    src={update.imageUrl}
                    alt={update.title}
                    data-ai-hint={update.imageHint}
                    width={100}
                    height={100}
                    className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-base md:text-lg">{update.title} - v{update.version}</h3>
                    <p className="text-sm text-muted-foreground mt-1 hidden md:block">{update.summary}</p>
                     <p className="text-xs text-muted-foreground mt-2">{update.date}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="prose prose-invert max-w-none text-foreground/80 p-4 bg-card/20 rounded-b-lg">
                <MarkdownContent content={update.content} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      
      {/* Social Media Feed */}
      <section id="video" className="container mx-auto px-4 md:px-6 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">{siteConfig.sections.video.title}</h2>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={siteConfig.video.url}
            title={siteConfig.video.title}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <div className="sr-only">
        {keywords.join(', ')}
      </div>
    </div>
  );
}

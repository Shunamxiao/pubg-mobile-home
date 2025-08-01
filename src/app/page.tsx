import Image from 'next/image';
import Link from 'next/link';
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
import type { Article } from '@/config/site';


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

      {siteConfig.sections.map((section) => (
        <section key={section.id} id={section.id} className="container mx-auto px-4 md:px-6 scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">{section.title}</h2>
          {section.id === 'articles' ? (
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {(section.items as Article[]).map((article) => (
                <Card key={article.slug} className="group overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                  <Link href={`/articles/${article.slug}`} className="flex flex-col h-full">
                    <div className="relative w-full aspect-[1312/600] overflow-hidden">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        data-ai-hint={article.imageHint}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <CardTitle className="text-base md:text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">{article.title}</CardTitle>
                      <CardDescription className="text-xs mt-1">{article.date}</CardDescription>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2 flex-grow">{article.summary}</p>
                      <div className="mt-4 flex justify-end">
                         <Button variant="outline" size="sm">
                            Read More <ArrowRight className="ml-1 h-3 w-3" />
                         </Button>
                      </div>
                    </div>
                  </Link>
              </Card>
              ))}
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {(section.items as Article[]).map((item) => (
                <AccordionItem value={item.slug} key={item.slug}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-start md:items-center gap-4">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        data-ai-hint={item.imageHint}
                        width={100}
                        height={100}
                        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-base md:text-lg">{item.title} {item.version && `- v${item.version}`}</h3>
                        <p className="text-sm text-muted-foreground mt-1 hidden md:block">{item.summary}</p>
                         <p className="text-xs text-muted-foreground mt-2">{item.date}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="prose prose-invert max-w-none text-foreground/80 p-4 bg-card/20 rounded-b-lg">
                    <MarkdownContent content={item.content} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </section>
      ))}

      {/* Social Media Feed */}
      <section id={siteConfig.video.id} className="container mx-auto px-4 md:px-6 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">{siteConfig.video.title}</h2>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={siteConfig.video.url}
            title={siteConfig.video.playerTitle}
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

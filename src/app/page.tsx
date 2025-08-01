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


export default function Home() {
  const keywords = ['pubg mobile', 'pubg mobile 官网', 'pubg mobile 下载', 'pubg mobile 官方网站', 'pubg mobile 国际服', 'pubg mobile 国服', 'pubg mobile 更新', 'pubg mobile 最新版本', 'pubg mobile 安卓下载', 'pubg mobile iOS 下载', '地铁逃生', 'pbg大逃杀'];
  return (
    <div className="flex flex-col gap-12 md:gap-16 pb-16">
      {/* Hero Section */}
      <section id="home" className="relative w-full aspect-video flex items-center justify-center text-center text-white">
        <Image
          src="https://cdn.apks.cc/blinko/1753975129551-1753975127906-downloadbj.png"
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
            史诗级大逃杀巨作 
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mb-8 animate-fade-in-up [animation-delay:0.2s]">
            超多活动，等你游玩,
            在PUBG MOBILE登上颠峰，尽情开火。 PUBG MOBILE是原创的大逃杀手机游戏，也是手机射击游戏巅峰之作。
            </p>
            <div id="download" className="animate-fade-in-up [animation-delay:0.4s]">
                <GameDownloadButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section id="articles" className="container mx-auto px-4 md:px-6 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">最新文章</h2>
        <Accordion type="single" collapsible className="w-full">
          {articles.map((article) => (
            <AccordionItem value={article.slug} key={article.slug}>
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    data-ai-hint={article.imageHint}
                    width={100}
                    height={100}
                    className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-base md:text-lg">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 hidden md:block">{article.summary}</p>
                     <p className="text-xs text-muted-foreground mt-2">{article.date} by {article.author}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="prose prose-invert prose-lg max-w-none text-foreground/80 p-4 bg-card/20 rounded-b-lg">
                <MarkdownContent content={article.content} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Version Updates Section */}
      <section id="updates" className="container mx-auto px-4 md:px-6 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">版本更新日志</h2>
        <div className="space-y-6">
          {updates.map((update) => (
            <Card key={update.slug} className="hover:shadow-lg transition-shadow duration-300">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 relative rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden">
                    <Image
                      src={update.imageUrl}
                      alt={update.title}
                      data-ai-hint={update.imageHint}
                      width={600}
                      height={300}
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
                    </CardContent>
                  </div>
                </div>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Social Media Feed */}
      <section id="video" className="container mx-auto px-4 md:px-6 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">官方介绍视频</h2>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://cdn.apks.cc/blinko/847dd6a4-18b0-4aa1-9847-956a819e816e.mp4"
            title="YouTube video player"
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

    
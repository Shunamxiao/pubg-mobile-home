import Image from 'next/image';
import Link from 'next/link';
import { articles, updates } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GameDownloadButtons } from '@/components/GameDownloadButtons';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const keywords = ['pubg mobile', 'pubg mobile 官网', 'pubg mobile 下载', 'pubg mobile 官方网站', 'pubg mobile 国际服', 'pubg mobile 国服', 'pubg mobile 更新', 'pubg mobile 最新版本', 'pubg mobile 安卓下载', 'pubg mobile iOS 下载', '地铁逃生', 'pbg大逃杀'];
  return (
    <div className="flex flex-col gap-12 md:gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative w-full aspect-video flex items-center justify-center text-center text-white">
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
      <section className="container mx-auto px-4 md:px-6 mt-[-4rem] relative z-20">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">最新文章</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, 3).map((article) => (
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
                <p className="text-muted-foreground text-sm line-clamp-2">{article.summary}</p>
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
      </section>

      {/* Version Updates Section */}
      <section className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Version Updates</h2>
        <div className="space-y-6">
          {updates.slice(0, 2).map((update) => (
            <Card key={update.slug} className="hover:shadow-lg transition-shadow duration-300">
              <Link href={`/updates/${update.slug}`}>
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 relative rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden">
                    <Image
                      src={update.imageUrl}
                      alt={update.title}
                      data-ai-hint={update.imageHint}
                      width={1312}
                      height={600}
                      className="w-full h-full object-cover aspect-[1312/600]"
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
      <section className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Official Channel</h2>
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

import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

const pageTitle = 'PUBG Mobile官网 | 下载、更新、攻略 - 官方正版入口';
const pageDescription = '欢迎访问PUBG Mobile官网，提供最新游戏下载、更新日志、游戏攻略和玩家社区，支持安卓与iOS系统，一站式掌握刺激战场动态。';

export const metadata: Metadata = {
  title: {
    default: pageTitle,
    template: `%s - PUBG Mobile官网`,
  },
  description: pageDescription,
  keywords: ['PUBG Mobile', 'PUBG Mobile 官网', 'PUBG Mobile 下载', '吃鸡手游', '刺激战场', '地铁逃生', '和平精英国际服', 'PUBG Mobile 更新', 'PUBG Mobile 攻略', 'PUBG Mobile 新手教程', 'PUBG Mobile 安卓下载', 'PUBG Mobile iOS下载'],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    images: ['https://cdn.apks.cc/blinko/1753974441995-1753974441505-share.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

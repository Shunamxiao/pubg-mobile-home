import { Github, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { PubgLogo } from '@/components/icons/PubgLogo';

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/">
                <PubgLogo />
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
            推荐收藏，分享给您的好友！是您获取PUBG Mobile新闻、更新和社区信息的最终目的地。
            这是一个非官方的粉丝自制网站。
            </p>
            </div>
            {/* <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Youtube" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Github" className="text-muted-foreground hover:text-foreground">
                <Github className="h-6 w-6" />
            </Link>
            </div> */}
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} PUBG Mobile Hub. All rights reserved. Game content and materials are trademarks and copyrights of their respective publisher and its licensors.
        </div>
      </div>
    </footer>
  );
}

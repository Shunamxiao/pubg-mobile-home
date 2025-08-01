'use client';
import { Button } from '@/components/ui/button';
import { DownloadCloud, Globe } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function GameDownloadButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="animated-border-btn !p-0 w-[180px] h-[52px] sm:w-[200px] sm:h-[58px] bg-cover bg-center hover:scale-105 transition-transform duration-300 border border-white/50">
                <Link href={siteConfig.downloads.googlePlay.url} target="_blank">
                    <span className="sr-only">{siteConfig.downloads.googlePlay.srText}</span>
                </Link>
            </Button>
            <Button asChild size="lg" className="animated-border-btn !p-0 w-[180px] h-[52px] sm:w-[200px] sm:h-[58px] bg-cover bg-center hover:scale-105 transition-transform duration-300 border border-white/50">
                <Link href={siteConfig.downloads.appStore.url}>
                    <span className="sr-only">{siteConfig.downloads.appStore.srText}</span>
                </Link>
            </Button>
            <Dialog>
                <DialogTrigger asChild>
                    <Button 
                      size="lg" 
                      className="animated-border-btn !p-0 w-[180px] h-[52px] sm:w-[200px] sm:h-[58px] bg-cover bg-center hover:scale-105 transition-transform duration-300 text-white border border-white/50 flex items-center justify-center" 
                      style={{backgroundImage: `url('${siteConfig.downloads.apk.backgroundImage}')`}}
                    >
                        <div className="flex flex-col items-center leading-tight scale-90 sm:scale-100">
                            <span className="text-xs font-medium">{siteConfig.downloads.apk.line1}</span>
                            <span className="font-bold text-lg">{siteConfig.downloads.apk.line2}</span>
                        </div>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{siteConfig.downloads.apk.dialog.title}</DialogTitle>
                        <DialogDescription>
                            {siteConfig.downloads.apk.dialog.description}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <Button asChild size="lg">
                            <Link href={siteConfig.downloads.apk.dialog.panUrl} target="_blank">
                                <DownloadCloud className="mr-2"/>
                                网盘下载
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="secondary">
                             <Link href={siteConfig.downloads.apk.dialog.officialUrl} target="_blank">
                                <Globe className="mr-2"/>
                                官网下载
                             </Link>
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

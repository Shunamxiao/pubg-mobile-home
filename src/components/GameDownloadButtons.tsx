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

export function GameDownloadButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="animated-border-btn !p-0 w-[200px] h-[58px] bg-cover bg-center hover:scale-105 transition-transform duration-300 border border-white/50" style={{backgroundImage: "url('https://cdn.apks.cc/blinko/1753972022261-1753972021905-app_store.png')"}}>
                <Link href="#">
                    <span className="sr-only">Download on the App Store</span>
                </Link>
            </Button>
            <Dialog>
                <DialogTrigger asChild>
                    <Button 
                      size="lg" 
                      className="animated-border-btn !p-0 w-[200px] h-[58px] bg-cover bg-center hover:scale-105 transition-transform duration-300 text-white border border-white/50" 
                      style={{backgroundImage: "url('https://cdn.apks.cc/blinko/1753971933326-1753971932556-apk_download.png')"}}
                    >
                        安卓下载
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>选择下载渠道</DialogTitle>
                        <DialogDescription>
                            请选择您偏好的下载方式。
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <Button asChild size="lg">
                            <Link href="#" target="_blank">
                                <DownloadCloud className="mr-2"/>
                                网盘下载
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="secondary">
                             <Link href="#" target="_blank">
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

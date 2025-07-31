'use client';
import { Button } from '@/components/ui/button';
import { Apple, Bot, DownloadCloud, Globe } from 'lucide-react';
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
            <Button asChild size="lg" className="animated-border-btn bg-primary/90 text-primary-foreground hover:bg-primary hover:scale-105 transition-transform duration-300">
                <Link href="#">
                    <Apple className="mr-2 h-6 w-6" />
                    App Store
                </Link>
            </Button>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size="lg" className="animated-border-btn bg-primary/90 text-primary-foreground hover:bg-primary hover:scale-105 transition-transform duration-300">
                        <Bot className="mr-2 h-6 w-6" />
                        <span>安卓下载</span>
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

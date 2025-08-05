
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { ApkDownloadDialog } from './ApkDownloadDialog';

export function GameDownloadButtons() {
    const [isApkDialogOpen, setIsApkDialogOpen] = useState(false);

    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="animated-border-btn !p-0 w-[180px] h-[52px] sm:w-[200px] sm:h-[58px] bg-cover bg-center hover:scale-105 transition-transform duration-300 border border-white/50" style={{backgroundImage: `url('${siteConfig.downloads.googlePlay.backgroundImage}')`}}>
                <Link href={siteConfig.downloads.googlePlay.url} target="_blank">
                    <span className="sr-only">{siteConfig.downloads.googlePlay.srText}</span>
                </Link>
            </Button>
            <Button asChild size="lg" className="animated-border-btn !p-0 w-[180px] h-[52px] sm:w-[200px] sm:h-[58px] bg-cover bg-center hover:scale-105 transition-transform duration-300 border border-white/50" style={{backgroundImage: `url('${siteConfig.downloads.appStore.backgroundImage}')`}}>
                <Link href={siteConfig.downloads.appStore.url}>
                    <span className="sr-only">{siteConfig.downloads.appStore.srText}</span>
                </Link>
            </Button>
            
            <Button 
              size="lg" 
              onClick={() => setIsApkDialogOpen(true)}
              className="animated-border-btn !p-0 w-[180px] h-[52px] sm:w-[200px] sm:h-[58px] bg-cover bg-center hover:scale-105 transition-transform duration-300 text-white border border-white/50 flex items-center justify-center" 
              style={{backgroundImage: `url('${siteConfig.downloads.apk.backgroundImage}')`}}
            >
                <div className="flex flex-col items-center leading-tight scale-90 sm:scale-100">
                    <span className="text-xs font-medium">{siteConfig.downloads.apk.line1}</span>
                    <span className="font-bold text-lg">{siteConfig.downloads.apk.line2}</span>
                </div>
            </Button>

            <ApkDownloadDialog open={isApkDialogOpen} onOpenChange={setIsApkDialogOpen} />
        </div>
    );
}

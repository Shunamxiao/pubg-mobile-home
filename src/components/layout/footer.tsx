import Link from 'next/link';
import { PubgLogo } from '@/components/icons/PubgLogo';
import { siteConfig } from '@/config/site';

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
                {siteConfig.footer.description}
            </p>
            </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
            {siteConfig.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
        </div>
      </div>
    </footer>
  );
}

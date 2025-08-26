
import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from '@/config/site';
import { AnalyticsScript } from '@/components/AnalyticsScript';
import { CustomHead } from '@/components/CustomHead';

// Metadata is still useful for static tags
export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.seo.title}`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.seo.title}`,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans" className="dark">
      <body className="font-body antialiased bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <AnalyticsScript />
        <CustomHead />
      </body>
    </html>
  );
}

    
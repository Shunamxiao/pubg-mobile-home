
import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from '@/config/site';

// Use generateMetadata for robust server-side head tag generation
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: `${siteConfig.name} - ${siteConfig.seo.title}`,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.seo.description,
    keywords: siteConfig.seo.keywords,
    verification: {
      // Directly add the Baidu site verification code here
      baidu: 'codeva-9XyV2k6cAS',
    },
    openGraph: {
      title: `${siteConfig.name} - ${siteConfig.seo.title}`,
      description: siteConfig.seo.description,
      images: [siteConfig.seo.ogImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans" className="dark">
      <head>
        {/* The <head> tag should be left empty. 
            Next.js will automatically populate it based on the metadata object. */}
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
        {siteConfig.analytics.customBodyScript && (
          <script dangerouslySetInnerHTML={{ __html: siteConfig.analytics.customBodyScript }} />
        )}
      </body>
    </html>
  );
}

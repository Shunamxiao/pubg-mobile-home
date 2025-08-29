
import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from '@/config/site';
import parse from 'react-html-parser';

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

// Server-only component to parse and render raw HTML
function RawHTML({ html, tagName: Tag, ...props }: { html: string; tagName?: keyof JSX.IntrinsicElements; [key: string]: any }) {
  const parsedHtml = parse(html);
  if (Tag) {
    return <Tag {...props}>{parsedHtml}</Tag>;
  }
  return <>{parsedHtml}</>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans" className="dark">
      <head>
        {siteConfig.analytics.customHeadHtml && (
          <RawHTML html={siteConfig.analytics.customHeadHtml} />
        )}
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

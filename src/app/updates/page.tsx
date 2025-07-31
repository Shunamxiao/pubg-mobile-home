import Image from 'next/image';
import Link from 'next/link';
import { updates } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function UpdatesPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-12 text-center">
        Version History & Patch Notes
      </h1>
      <div className="space-y-8 max-w-4xl mx-auto">
        {updates.map((update) => (
          <Card key={update.slug} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <Link href={`/updates/${update.slug}`}>
              <div className="grid md:grid-cols-3 gap-0 bg-card">
                <div className="md:col-span-1 relative">
                  <Image
                    src={update.imageUrl}
                    alt={update.title}
                    data-ai-hint={update.imageHint}
                    width={1312}
                    height={600}
                    className="w-full h-full object-cover aspect-[1312/600]"
                  />
                </div>
                <div className="md:col-span-2 p-6 flex flex-col">
                  <CardHeader className="p-0 mb-2">
                      <CardTitle>{update.title} - v{update.version}</CardTitle>
                      <CardDescription>{update.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <p className="text-muted-foreground">{update.summary}</p>
                  </CardContent>
                  <div className="pt-4">
                    <Button asChild variant="link" className="p-0 h-auto">
                      <span className="flex items-center">
                          View Patch Notes <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

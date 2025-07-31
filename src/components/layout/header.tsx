import Link from 'next/link';
import { PubgLogo } from '@/components/icons/PubgLogo';
import { Button } from '@/components/ui/button';
import { Gamepad2, Menu, Newspaper, Rss } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home', icon: Gamepad2 },
  { href: '/articles', label: 'Articles', icon: Newspaper },
  { href: '/updates', label: 'Updates', icon: Rss },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <PubgLogo />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                  <PubgLogo />
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map(({ href, label, icon: Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      className="flex items-center space-x-2 text-lg font-medium text-foreground/80 hover:text-foreground"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{label}</span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Can add search here later */}
          </div>
          
          <nav className="flex items-center">
            <Button asChild>
              <Link href="/#download">
                Download Game
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

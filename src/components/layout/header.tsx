import Link from 'next/link';
import { PubgLogo } from '@/components/icons/PubgLogo';
import { Button } from '@/components/ui/button';
import { Gamepad2, Menu, Newspaper, Rss } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home', icon: Gamepad2 },
  { href: '/articles', label: 'Articles', icon: Newspaper },
  { href: '/updates', label: 'Updates', icon: Rss },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
            <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Open Menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle className="sr-only">Main Menu</SheetTitle>
                      <Link href="/" className="flex items-center space-x-2">
                        <PubgLogo />
                      </Link>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-4 mt-6">
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
            <Link href="/" className="flex items-center space-x-2">
                <PubgLogo />
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
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

        <div className="flex items-center">
          <Button asChild>
            <Link href="/#download">
              Download Game
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

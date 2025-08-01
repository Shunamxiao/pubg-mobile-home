'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PubgLogo } from '@/components/icons/PubgLogo';
import { Button } from '@/components/ui/button';
import { Gamepad2, Menu, Newspaper, Rss, Video } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: '首页', icon: Gamepad2, sectionId: 'home' },
  { href: '#articles', label: '资讯', icon: Newspaper, sectionId: 'articles' },
  { href: '#updates', label: '更新日志', icon: Rss, sectionId: 'updates' },
  { href: '#video', label: '官方频道', icon: Video, sectionId: 'video' },
];

export function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.sectionId));
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: "-50% 0px -50% 0px" });

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsSheetOpen(false); // Close sheet on link click
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
            <div className="md:hidden">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Open Menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle className="sr-only">Main Menu</SheetTitle>
                      <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-2">
                        <PubgLogo />
                      </a>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-4 mt-6">
                      {navLinks.map(({ href, label, icon: Icon, sectionId }) => (
                        <a
                          key={label}
                          href={href}
                          onClick={(e) => handleLinkClick(e, href)}
                          className={cn(
                            "flex items-center space-x-2 text-lg font-medium hover:text-foreground",
                             activeSection === sectionId ? 'text-foreground' : 'text-foreground/60'
                          )}
                        >
                          <Icon className="h-5 w-5" />
                          <span>{label}</span>
                        </a>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-2">
                <PubgLogo />
            </a>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                {navLinks.map(({ href, label, sectionId }) => (
                <a
                    key={label}
                    href={href}
                    onClick={(e) => handleLinkClick(e, href)}
                    className={cn(
                      "relative transition-colors hover:text-foreground/80 nav-link",
                      activeSection === sectionId
                        ? 'text-foreground nav-link-active'
                        : 'text-foreground/60'
                    )}
                >
                    {label}
                </a>
                ))}
            </nav>
        </div>

        <div className="hidden md:flex items-center">
          <Button asChild>
            <a href="/#download" onClick={(e) => handleLinkClick(e, '#download')}>
              游戏下载
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
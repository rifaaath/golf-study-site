"use client";
import Link from 'next/link';
import { Button } from './ui/button';
import Logo from './logo';
import { useLanguage } from '@/contexts/language-context';
import { LanguageSwitcher } from './language-switcher';

const CALENDLY_LINK = "https://calendly.com/your-scheduling-link";

export function Header() {
  const { translations } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="AI Golf Swing Study Home">
          <Logo />
          <span className="font-bold hidden sm:inline-block text-lg">{translations.header.title}</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              {translations.header.schedule}
            </a>
          </Button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

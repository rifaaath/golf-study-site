"use client";
import Link from "next/link";
import Logo from "./logo";
import { useLanguage } from "@/contexts/language-context";

export function Footer() {
  const { translations } = useLanguage();
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-bold text-lg">{translations.footer.title}</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {translations.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

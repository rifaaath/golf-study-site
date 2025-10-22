"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1">
      <Button
        variant={language === 'en' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => setLanguage("en")}
        className="px-3"
      >
        EN
      </Button>
      <Button
        variant={language === 'de' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => setLanguage("de")}
        className="px-3"
      >
        DE
      </Button>
    </div>
  );
}

"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/contexts/language-context';

const CALENDLY_LINK = "https://calendly.com/hoefler-sebastian";

export function Hero() {
  const { translations } = useLanguage();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-golf-swing');

  return (
    <section className="bg-primary/10">
      <div className="container grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-57px)] py-20 lg:py-0">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-primary">
            {translations.hero.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
           {translations.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" variant="default" asChild className="shadow-lg hover:shadow-xl transition-shadow bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                {translations.hero.cta.schedule}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#details">
                {translations.hero.cta.learnMore}
              </a>
            </Button>
          </div>
        </div>
        <div className="relative h-80 lg:h-[500px] w-full">
          {heroImage && (
             <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover rounded-xl shadow-2xl"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}

import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Benefits } from '@/components/benefits';
import { Details } from '@/components/details';
import { Faq } from '@/components/faq';
import { Footer } from '@/components/footer';
import { Process } from '@/components/process';
import { Location } from '@/components/location';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body text-foreground">
      <Header />
      <main className="flex-1 animate-in fade-in-0 duration-500">
        <Hero />
        <Details />
        <Process />
        <Benefits />
        <Location />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

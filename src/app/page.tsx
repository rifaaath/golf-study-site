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
        <section className="w-full bg-muted/40 py-16">
          <div className="container mx-auto px-4 text-center">
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a question?
            </h2>
            
            <p className="text-muted-foreground mb-10">
              Use the form below and we’ll get back to you as soon as possible.
            </p>

            <div className="flex justify-center">
              <iframe
                className="w-full max-w-3xl h-[650px] rounded-2xl shadow-xl bg-white"
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=887vspaEuECd6PE1mC80YRBxVfDN7_dPoeC2lZ7OJExUODhCTktPTkJPNkdTSUVYMUM4T1lXOFA1TC4u&embed=true"
                frameBorder="0"
                allowFullScreen
              />
            </div>

          </div>
        </section>

        <Faq />
        

      </main>
      <Footer />
    </div>
  );
}

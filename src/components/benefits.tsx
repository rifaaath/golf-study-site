"use client";
import { Gift, ShieldCheck, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';

export function Benefits() {
  const { translations } = useLanguage();
  const benefits = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: translations.benefits.who.title,
      description: translations.benefits.who.description,
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: translations.benefits.privacy.title,
      description: translations.benefits.privacy.description,
    },
    {
      icon: <Gift className="h-10 w-10 text-primary" />,
      title: translations.benefits.incentive.title,
      description: translations.benefits.incentive.description,
    },
  ];

  return (
    <section id="benefits" className="py-20 sm:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{translations.benefits.heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-secondary rounded-full p-4 w-fit">
                  {benefit.icon}
                </div>
                <CardTitle className="pt-4">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

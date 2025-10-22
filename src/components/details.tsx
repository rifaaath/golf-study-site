"use client";
import { CalendarDays, Clock, ShieldCheck, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '@/contexts/language-context';


export function Details() {
  const { translations } = useLanguage();
  const studyDetails = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: translations.details.duration.title,
      description: translations.details.duration.description,
    },
    {
      icon: <CalendarDays className="h-6 w-6 text-primary" />,
      title: translations.details.when.title,
      description: translations.details.when.description,
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: translations.details.who.title,
      description: translations.details.who.description,
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: translations.details.safety.title,
      description: translations.details.safety.description,
    },
  ];

  return (
    <section id="details" className="py-20 sm:py-28 bg-secondary/50">
      <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{translations.details.heading}</h2>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {studyDetails.map((detail) => (
            <Card key={detail.title} className="bg-card">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                {detail.icon}
                <CardTitle>{detail.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{detail.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

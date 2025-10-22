"use client";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Location() {
  const { translations } = useLanguage();
    return (
        <section id="location" className="py-20 sm:py-28 bg-secondary/50">
            <div className="container text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold font-headline">{translations.location.heading}</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    {translations.location.labName}
                </p>
                <p className="text-muted-foreground">
                    {translations.location.address}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{translations.location.parking}</p>
                <div className="mt-8">
                     <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                        <iframe
                            src="https://maps-api-ssl.google.com/maps?hl=en&ll=49.594689,11.026164&output=embed&q=Carl-Thiersch-Stra%C3%9Fe+2b,+91052+Erlangen,+Germany+(Carl-Thiersch-Stra%C3%9Fe+2b)&z=16"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

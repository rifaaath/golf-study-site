"use client";
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/contexts/language-context';

export function Process() {
    const { translations } = useLanguage();
    const processSteps = [
        {
            title: translations.process.steps.marker.title,
            description: translations.process.steps.marker.description,
            imagePlaceholderId: 'marker-placement',
        },
        {
            title: translations.process.steps.swing.title,
            description: translations.process.steps.swing.description,
            imagePlaceholderId: 'swing-recording',
        },
        {
            title: translations.process.steps.analysis.title,
            description: translations.process.steps.analysis.description,
            imagePlaceholderId: 'data-analysis',
        },
    ];

    return (
        <section id="process" className="py-20 sm:py-28">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">{translations.process.heading}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {processSteps.map((step) => {
                        const image = PlaceHolderImages.find(p => p.id === step.imagePlaceholderId);
                        return (
                             <Card key={step.title} className="flex flex-col">
                                {image && (
                                    <div className="relative h-56 w-full">
                                        <Image
                                            src={image.imageUrl}
                                            alt={image.description}
                                            fill
                                            className="object-cover rounded-t-lg"
                                            data-ai-hint={image.imageHint}
                                        />
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle>{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{step.description}</CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

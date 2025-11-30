"use client";

import { Briefcase, Code2, GraduationCap, Languages } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const highlights = [
  {
    icon: Code2,
    title: "Fullstack Development",
    description: "Expertise in modernen Frontend- und Backend-Technologien",
  },
  {
    icon: Briefcase,
    title: "Berufserfahrung",
    description: "Mehrjährige Erfahrung in Web- und WordPress-Entwicklung",
  },
  {
    icon: GraduationCap,
    title: "Kontinuierliche Weiterbildung",
    description: "Stets auf dem neuesten Stand der Webtechnologien",
  },
  {
    icon: Languages,
    title: "Mehrsprachig",
    description: "Deutsch (B1), Englisch (B2), Arabisch (Muttersprache)",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Über mich
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ich bin ein leidenschaftlicher{" "}
                <span className="text-foreground font-semibold">
                  Fullstack Webentwickler
                </span>{" "}
                mit Sitz in Haselünne, Deutschland. Mein Fokus liegt auf der
                Entwicklung moderner, skalierbarer Webanwendungen mit einem
                besonderen Augenmerk auf Performance, Benutzerfreundlichkeit und
                sauberen Code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Mit umfassender Erfahrung in{" "}
                <span className="text-primary font-medium">React</span>,{" "}
                <span className="text-primary font-medium">Next.js</span>,{" "}
                <span className="text-primary font-medium">Node.js</span> und{" "}
                <span className="text-primary font-medium">WordPress</span>{" "}
                entwickle ich sowohl maßgeschneiderte Webanwendungen als auch
                leistungsstarke Content-Management-Systeme. Meine Arbeitsweise
                ist strukturiert, agil und stets darauf ausgerichtet, innovative
                Lösungen für komplexe Herausforderungen zu finden.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Derzeit arbeite ich als WordPress & Frontend Entwickler in
                Deutschland und unterstütze Unternehmen dabei, ihre digitale
                Präsenz zu optimieren und ihre Geschäftsziele durch moderne
                Webtechnologien zu erreichen.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Career Path */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Beruflicher Werdegang & Ausbildung
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6 pb-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="mb-1 text-sm text-primary font-medium">
                    2024 – Heute
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    WordPress & Frontend Entwickler
                  </h4>
                  <p className="text-muted-foreground">
                    Eilinghoff + Team GmbH, Deutschland • Entwicklung und
                    Optimierung von WordPress-Websites, Theme-Entwicklung,
                    Performance-Verbesserungen und Frontend-Lösungen mit
                    modernen Technologien.
                  </p>
                </div>

                <div className="border-l-2 border-primary/70 pl-6 pb-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary/70" />
                  <div className="mb-1 text-sm text-primary/70 font-medium">
                    2023
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    Diplom in Front-End und Back-End Entwicklung
                  </h4>
                  <p className="text-muted-foreground">
                    AFPA, Frankreich • Umfassende Ausbildung in moderner
                    Webentwicklung, Frontend- und Backend-Technologien.
                  </p>
                </div>

                <div className="border-l-2 border-primary/50 pl-6 pb-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary/50" />
                  <div className="mb-1 text-sm text-primary/50 font-medium">
                    2022
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    Praktikant als WordPress-Entwickler
                  </h4>
                  <p className="text-muted-foreground">
                    Foreigners in Europe SRL, Italien • Praktische Erfahrung in
                    der WordPress-Entwicklung, Plugin-Entwicklung und
                    Website-Wartung.
                  </p>
                </div>

                <div className="border-l-2 border-primary/40 pl-6 pb-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary/40" />
                  <div className="mb-1 text-sm text-primary/40 font-medium">
                    2021
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    Webdesigner & Grafikdesigner
                  </h4>
                  <p className="text-muted-foreground">
                    Focus Production, Türkei • Design und Entwicklung von
                    Websites, Branding, UI/UX-Design und digitale
                    Marketinglösungen.
                  </p>
                </div>

                <div className="border-l-2 border-primary/30 pl-6 pb-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary/30" />
                  <div className="mb-1 text-sm text-primary/30 font-medium">
                    2019
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    Webdesigner & Grafikdesigner
                  </h4>
                  <p className="text-muted-foreground">
                    Zero Production, Türkei • Design und Entwicklung von
                    Websites, Grafik-Design und visuelle Identität.
                  </p>
                </div>

                <div className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary/20" />
                  <div className="mb-1 text-sm text-primary/20 font-medium">
                    2009 – 2012
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    Programmierung und Systembetrieb
                  </h4>
                  <p className="text-muted-foreground">
                    Gymnasium in Adra, Syrien • Grundlagen der Programmierung
                    und Systemadministration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

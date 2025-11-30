"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Link from "next/link";

// Image Modal Component
function ImageModal({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  title,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  title: string;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Schließen"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Image Container */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
          <Image
            src={images[currentIndex]}
            alt={`${title} - Bild ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            quality={100}
          />
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Image Slider Component
function ImageSlider({
  images,
  title,
  onImageClick,
}: {
  images: string[];
  title: string;
  onImageClick: (index: number) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-64 bg-primary/20 overflow-hidden group">
      <div
        className="relative w-full h-full cursor-pointer"
        onClick={() => onImageClick(currentIndex)}
      >
        <Image
          src={images[currentIndex]}
          alt={`${title} - Bild ${currentIndex + 1}`}
          fill
          className="object-cover transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
      </div>

      {images.length > 1 && (
        <>
          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.preventDefault();
              prevSlide();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              nextSlide();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Zu Bild ${index + 1} wechseln`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const projects = [
  {
    title: "Mein Termin - SAAS App",
    description:
      "Mein Termin ist eine SAAS-Anwendung zur Terminverwaltung, entwickelt mit Laravel und Vue.js.",
    longDescription:
      "Eine benutzerfreundliche SAAS-App, die es Unternehmen ermöglicht, Termine effizient zu verwalten, Kundenbenachrichtigungen zu senden und Berichte zu generieren.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS", "PHP"],
    category: "PHP",
    images: [
      "/projects/Mein Termin SAAS APP - Laravel - 1.png",
      "/projects/Mein Termin SAAS APP - Laravel - 2.png",
      "/projects/Mein Termin SAAS APP - Laravel - 3.png",
      "/projects/Mein Termin SAAS APP - Laravel - 4.png",
      "/projects/Mein Termin SAAS APP - Laravel - 5.png",
    ],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "PHP Job Portal",
    description:
      "Vollständiges Job-Portal entwickelt mit PHP für Stellenausschreibungen, Bewerbungen und Kandidatenverwaltung.",
    longDescription:
      "Ein umfassendes Job-Portal mit Funktionen für Arbeitgeber und Arbeitnehmer. Enthält Stellenverwaltung, Bewerbungssystem, Kandidatenprofile und Admin-Dashboard.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
    category: "PHP",
    images: [
      "/projects/Job Portal Laravel - 1.png",
      "/projects/Job Portal Laravel - 2.png",
      "/projects/Job Portal Laravel - 3.png",
      "/projects/Job Portal Laravel - 4.png",
      "/projects/Job Portal Laravel - 5.png",
    ],
    github: "https://github.com/almarzouk/php-job-portal",
    live: "#",
    featured: true,
  },
  {
    title: "Next.js E-Commerce Store",
    description:
      "Moderner Online-Shop mit Next.js entwickelt, inklusive Produktverwaltung, Warenkorb und Checkout-Prozess.",
    longDescription:
      "Ein vollständiger E-Commerce Store mit Server-Side Rendering, optimierter Performance und moderner Benutzeroberfläche. Enthält Produktkatalog, Suchfunktion und Bestellverwaltung.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
    category: "Nextjs",
    images: ["/projects/prostore.png"],
    github: "#",
    live: "https://prostore-sgly.vercel.app/",
    featured: true,
  },
  {
    title: "MERN Stack Job Portal",
    description:
      "Full-Stack Job-Portal entwickelt mit MERN-Stack für moderne Stellensuche und Bewerbungsmanagement.",
    longDescription:
      "Vollständige Job-Portal-Anwendung mit MongoDB, Express, React und Node.js. Features: Echtzeit-Benachrichtigungen, Bewerbungsverfolgung und Kandidaten-Matching.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "JWT"],
    category: "Reactjs",
    images: ["/projects/Job Portal nextjs.png"],
    github: "#",
    live: "https://jop-portal-client.vercel.app/",
    featured: false,
  },
  {
    title: "Inventory Management App",
    description:
      "Lagerverwaltungssystem mit Next.js für Bestandskontrolle, Produktverwaltung und Reporting.",
    longDescription:
      "Eine umfassende Inventory-Management-Lösung mit Echtzeit-Bestandsverfolgung, automatischen Bestellungen bei niedrigem Lagerbestand und detaillierten Berichten.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    category: "Nextjs",
    images: ["/projects/Stock management.png"],
    github: "https://github.com/almarzouk/inventory",
    live: "#",
    featured: false,
  },
  {
    title: "Frontend React Amazon Clone",
    description:
      "Amazon-Frontend-Clone mit React entwickelt, inklusive Produktanzeige, Warenkorb und responsivem Design.",
    longDescription:
      "Vollständiger Amazon-Frontend-Clone mit Produktkatalog, Filterung, Warenkorb-Funktionalität und authentischer Amazon-UI/UX.",
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "React Router",
      "Context API",
    ],
    category: "Reactjs",
    images: ["/projects/Amazon Clone.jpg"],
    github: "#",
    live: "https://jumaa-amazon.netlify.app/",
    featured: false,
  },
  {
    title: "Personal Blog mit PHP",
    description:
      "Persönlicher Blog entwickelt mit PHP und Bootstrap für Content-Management und Artikel-Veröffentlichung.",
    longDescription:
      "Ein vollständiges Blog-System mit Admin-Panel, Artikel-Editor, Kategorie-Verwaltung und Kommentar-System.",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
    category: "PHP",
    images: ["/projects/weather app.jpg"],
    github: "#",
    live: "https://jumaa-blog-de.preview-domain.com/",
    featured: false,
  },
  {
    title: "Socialy - Marketing Landing Page",
    description:
      "Responsive Landing Page für ein Lösungsunternehmen mit modernem Design und Call-to-Actions.",
    longDescription:
      "Professionelle Landing Page mit responsivem Design, optimiert für Konversionen und Lead-Generierung.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    category: "Statische Website",
    images: ["/projects/ADEX.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/socialy/",
    featured: false,
  },
  {
    title: "Realvine - Immobilien Landing Page",
    description:
      "Responsive Landing Page für ein Immobilienunternehmen mit Eigenschaftsanzeigen und Kontaktformular.",
    longDescription:
      "Attraktive Landing Page für Immobilien mit Bildergalerien, Eigenschaftsfiltern und Kontaktoptionen.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    category: "Statische Website",
    images: ["/projects/Realvine.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/realvine/",
    featured: false,
  },
  {
    title: "Hoolix - Marketing Landing Page",
    description:
      "Responsive Landing Page für ein Marketingunternehmen mit Service-Übersicht und Portfolio.",
    longDescription:
      "Moderne Marketing-Landing-Page mit Service-Darstellung, Portfolio-Galerie und Lead-Capture-Formularen.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    category: "Statische Website",
    images: ["/projects/Hoolix.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/hoolix/",
    featured: false,
  },
  {
    title: "Dentelo - Zahnarztpraxis Landing Page",
    description:
      "Responsive Landing Page für eine Zahnarztpraxis mit Terminbuchung und Service-Informationen.",
    longDescription:
      "Professionelle Website für Zahnarztpraxis mit Terminbuchung, Behandlungsinformationen und Kontaktmöglichkeiten.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    category: "Statische Website",
    images: ["/projects/Dentelo.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/dentelo/",
    featured: false,
  },
  {
    title: "Crypto Landing Page",
    description:
      "Einfache Landing Page mit React und Tailwind für Kryptowährungs-Informationen.",
    longDescription:
      "Moderne Krypto-Landing-Page mit Echtzeit-Preisen, Marktdaten und responsivem Design.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    category: "Reactjs",
    images: ["/projects/coinbase.jpg"],
    github: "#",
    live: "https://jumaa-coin.netlify.app/",
    featured: false,
  },
  {
    title: "Bank Landing Page",
    description:
      "Einfache Landing Page mit React und Tailwind für moderne Banking-Lösungen.",
    longDescription:
      "Elegante Banking-Landing-Page mit Service-Übersicht und modernem Design.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    category: "Reactjs",
    images: ["/projects/Hoobank.jpg"],
    github: "#",
    live: "https://jumaa-bank.netlify.app/",
    featured: false,
  },
  {
    title: "Agentur Website",
    description:
      "Statische Agentur-Website mit Portfolio, Services und Kontaktinformationen.",
    longDescription:
      "Professionelle Agentur-Website mit Portfolio-Showcase, Service-Beschreibungen und Team-Vorstellung.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "Statische Website",
    images: ["/projects/ADEX.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/agancy/",
    featured: false,
  },
  {
    title: "Loruki - Cloud Hosting Website",
    description:
      "Loruki Website für die Speicherung oder Domainverwaltung mit modernem Design.",
    longDescription:
      "Cloud-Hosting-Website mit Preisplänen, Feature-Vergleichen und Kundenbereich.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "Statische Website",
    images: ["/projects/loruki.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/loruki-website/",
    featured: false,
  },
  {
    title: "Flower Website",
    description:
      "Flower Website für einen schönen Tag mit attraktivem Design und Produktgalerie.",
    longDescription:
      "Elegante Website für Blumengeschäft mit Produktgalerie, Bestellsystem und Kontaktformular.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "Statische Website",
    images: ["/projects/flower.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/theflow/",
    featured: false,
  },
  {
    title: "Applab - App Landing Page",
    description:
      "Applab - Beste App für deinen modernen Lebensstil mit Download-Links und Features.",
    longDescription:
      "Moderne App-Landing-Page mit Feature-Showcase, Screenshots und App-Store-Links.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    category: "Statische Website",
    images: ["/projects/Applap.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/applab/",
    featured: false,
  },
  {
    title: "Tailwind Demo Website",
    description:
      "Demo-Website entwickelt mit Tailwind CSS zur Demonstration von Utility-First-CSS.",
    longDescription:
      "Showcase-Website für Tailwind CSS mit verschiedenen Komponenten und Layout-Beispielen.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
    category: "Tailwind",
    images: ["/projects/Manage.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/manage-tailwind/",
    featured: false,
  },
  {
    title: "Bondi Theme Website",
    description:
      "Bondi Theme Website mit modernem Design und responsivem Layout.",
    longDescription:
      "Attraktive Theme-Website mit mehreren Sektionen, Portfolio-Galerie und Kontaktbereich.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    category: "Statische Website",
    images: ["/projects/ADEX.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/bondi/",
    featured: false,
  },
];

const categories = [
  "Alle",
  "Nextjs",
  "Reactjs",
  "PHP",
  "Statische Website",
  "Tailwind",
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (images: string[], index: number, title: string) => {
    setModalImages(images);
    setModalIndex(index);
    setModalTitle(title);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setModalIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevImage = () => {
    setModalIndex(
      (prev) => (prev - 1 + modalImages.length) % modalImages.length
    );
  };

  const filteredProjects =
    selectedCategory === "Alle"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 bg-secondary/30">
      {/* Image Modal */}
      {modalOpen && (
        <ImageModal
          images={modalImages}
          currentIndex={modalIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
          title={modalTitle}
        />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Ausgewählte Projekte
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eine Auswahl meiner jüngsten Arbeiten, die meine Fähigkeiten in
              der Fullstack-Entwicklung, WordPress und modernen
              Frontend-Technologien demonstrieren.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Projects */}
          {selectedCategory === "Alle" && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <span className="text-primary">★</span> Hervorgehobene Projekte
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-300"
                  >
                    {/* Project Image Slider */}
                    <ImageSlider
                      images={project.images}
                      title={project.title}
                      onImageClick={(imgIndex) =>
                        openModal(project.images, imgIndex, project.title)
                      }
                    />

                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {project.longDescription}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-3">
                      {project.github !== "#" && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1"
                        >
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                      {project.live !== "#" && (
                        <Button size="sm" asChild className="flex-1">
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Projects Grid */}
          <div>
            {selectedCategory !== "Alle" && (
              <h3 className="text-2xl font-semibold mb-8">
                {selectedCategory} Projekte
              </h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects
                .filter((p) => selectedCategory !== "Alle" || !p.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col"
                  >
                    {/* Project Image */}
                    <div
                      className="relative h-48 bg-primary/10 overflow-hidden cursor-pointer"
                      onClick={() =>
                        openModal(project.images, 0, project.title)
                      }
                    >
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <CardHeader className="flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-secondary text-foreground text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-2">
                      {project.github !== "#" && (
                        <Button variant="outline" size="sm" asChild>
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {project.live !== "#" && (
                        <Button size="sm" asChild className="flex-1">
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Ansehen
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Interessiert an meiner Arbeit? Schauen Sie sich mein GitHub-Profil
              für weitere Projekte an.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link
                href="https://github.com/almarzouk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                Weitere Projekte auf GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

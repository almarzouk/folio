import type { Locale } from "@/lib/i18n/config";

export type ProjectCategoryKey =
  | "nextjs"
  | "reactjs"
  | "php"
  | "static"
  | "tailwind";

export type LocalizedProject = {
  title: string;
  description: string;
  longDescription: string;
};

export type PortfolioProject = {
  id: string;
  categoryKey: ProjectCategoryKey;
  featured: boolean;
  images: string[];
  technologies: string[];
  github: string;
  live: string;
  de: LocalizedProject;
  en: LocalizedProject;
};

export function projectCopy(
  p: PortfolioProject,
  locale: Locale
): LocalizedProject {
  return locale === "en" ? p.en : p.de;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "kfz-werkstatt",
    categoryKey: "php",
    featured: true,
    images: [
      "/projects/kfz-01.png",
      "/projects/kfz-02.png",
      "/projects/kfz-03.png",
      "/projects/kfz-04.png",
      "/projects/kfz-05.png",
      "/projects/kfz-06.png",
      "/projects/kfz-07.png",
      "/projects/kfz-08.png",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Blade",
      "MySQL",
      "REST API",
      "Vite",
    ],
    github: "https://github.com/almarzouk/kfz",
    live: "#",
    de: {
      title: "KFZ — Werkstatt & Kundenverwaltung",
      description:
        "Laravel-System für Kfz-Werkstätten: Aufträge, Kunden, Fahrzeuge und Status.",
      longDescription:
        "Backend und Oberflächen für typische Werkstattabläufe — strukturierte Datenmodelle, Rollen und nachvollziehbare Workflows für Team und Kundendialog.",
    },
    en: {
      title: "KFZ — workshop & customer management",
      description:
        "Laravel app for auto workshops: jobs, customers, vehicles, and status.",
      longDescription:
        "Backend and UI for common workshop flows — clear data models, roles, and traceable workflows for staff and customer communication.",
    },
  },
  {
    id: "tms-backend",
    categoryKey: "php",
    featured: true,
    images: [
      "/projects/ticket-management-system-01.png",
      "/projects/ticket-management-system-02.png",
      "/projects/ticket-management-system-03.png",
      "/projects/ticket-management-system-04.png",
      "/projects/ticket-management-system-05.png",
      "/projects/ticket-management-system-06.png",
      "/projects/ticket-management-system-07.png",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "API",
      "MySQL",
      "Auth",
      "Postman",
    ],
    github: "https://github.com/almarzouk/tms-backend",
    live: "#",
    de: {
      title: "TMS — Ticket-Management (Backend)",
      description:
        "Laravel-API für Tickets, Prioritäten, Zuweisungen und Team-Kollaboration.",
      longDescription:
        "Fokus auf saubere API-Schicht, Dokumentation (Postman) und erweiterbare Domänenlogik — geeignet als Basis für Web- oder Mobile-Clients.",
    },
    en: {
      title: "TMS — ticket management (API backend)",
      description:
        "Laravel API for tickets, priorities, assignments, and team collaboration.",
      longDescription:
        "Emphasis on a clean API surface, Postman-ready docs, and extensible domain logic — a solid base for web or mobile clients.",
    },
  },
  {
    id: "mein-termin",
    categoryKey: "php",
    featured: true,
    images: [
      "/projects/Mein Termin SAAS APP - Laravel - 1.png",
      "/projects/Mein Termin SAAS APP - Laravel - 2.png",
      "/projects/Mein Termin SAAS APP - Laravel - 3.png",
      "/projects/Mein Termin SAAS APP - Laravel - 4.png",
      "/projects/Mein Termin SAAS APP - Laravel - 5.png",
    ],
    technologies: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS", "PHP"],
    github: "https://github.com/almarzouk/termin/blob/main/README.md",
    live: "#",
    de: {
      title: "Mein Termin — SaaS",
      description: "Terminverwaltung als SaaS mit Laravel und Vue.js.",
      longDescription:
        "SaaS-App für Termine, Benachrichtigungen und Auswertungen — fokus auf UX und Admin-Workflows.",
    },
    en: {
      title: "Mein Termin — SaaS",
      description: "Appointment SaaS built with Laravel and Vue.js.",
      longDescription:
        "A SaaS product for scheduling, notifications, and reporting — focused on UX and admin workflows.",
    },
  },
  {
    id: "php-job-portal",
    categoryKey: "php",
    featured: false,
    images: [
      "/projects/Job Portal Laravel - 1.png",
      "/projects/Job Portal Laravel - 2.png",
      "/projects/Job Portal Laravel - 3.png",
      "/projects/Job Portal Laravel - 4.png",
      "/projects/Job Portal Laravel - 5.png",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
    github: "https://github.com/almarzouk/my-jobs",
    live: "#",
    de: {
      title: "PHP Job-Portal",
      description: "Job-Portal mit Stellen, Bewerbungen und Admin-Bereich.",
      longDescription:
        "End-to-End-Portal für Arbeitgeber und Kandidaten inkl. Bewerbungsflow und Verwaltung.",
    },
    en: {
      title: "PHP job portal",
      description: "Job board with listings, applications, and admin tools.",
      longDescription:
        "An end-to-end portal for employers and candidates including application flows and dashboards.",
    },
  },
  {
    id: "next-ecommerce",
    categoryKey: "nextjs",
    featured: true,
    images: ["/projects/prostore.png"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "#",
    live: "https://prostore-sgly.vercel.app/",
    de: {
      title: "Next.js E-Commerce",
      description: "Shop mit Katalog, Warenkorb und Checkout.",
      longDescription:
        "SSR-orientierter Store mit moderner UI, Suche und Bestellfluss.",
    },
    en: {
      title: "Next.js e-commerce",
      description: "Store with catalog, cart, and checkout.",
      longDescription:
        "An SSR-oriented storefront with modern UI, search, and order flow.",
    },
  },
  {
    id: "mern-job-portal",
    categoryKey: "reactjs",
    featured: false,
    images: ["/projects/Job Portal nextjs.png"],
    github: "#",
    live: "https://jop-portal-client.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "JWT"],
    de: {
      title: "MERN Job-Portal",
      description: "Full-Stack-Portal mit MERN-Stack.",
      longDescription:
        "Jobsuche, Bewerbungen und APIs mit MongoDB, Express, React und Node.",
    },
    en: {
      title: "MERN job portal",
      description: "Full-stack job board on the MERN stack.",
      longDescription:
        "Job search, applications, and APIs using MongoDB, Express, React, and Node.",
    },
  },
  {
    id: "inventory-management",
    categoryKey: "nextjs",
    featured: false,
    images: ["/projects/Stock management.png"],
    github: "https://github.com/almarzouk/inventory",
    live: "#",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    de: {
      title: "Lagerverwaltung",
      description: "Bestände, Produkte und Reports mit Next.js.",
      longDescription:
        "Inventory-App mit Datenmodell, UI für Lagerbewegungen und Übersichten.",
    },
    en: {
      title: "Inventory management",
      description: "Stock, products, and reporting with Next.js.",
      longDescription:
        "An inventory app with a solid data model, movement UI, and dashboards.",
    },
  },
  {
    id: "amazon-clone",
    categoryKey: "reactjs",
    featured: false,
    images: ["/projects/Amazon Clone.jpg"],
    github: "#",
    live: "https://jumaa-amazon.netlify.app/",
    technologies: ["React", "JavaScript", "CSS3", "React Router", "Context API"],
    de: {
      title: "Amazon UI Clone (React)",
      description: "Frontend-Übung mit Katalog und Warenkorb.",
      longDescription:
        "Responsive Produkt-UI, Filter und Warenkorb — Fokus auf Komponentenstruktur.",
    },
    en: {
      title: "Amazon UI clone (React)",
      description: "Frontend exercise with catalog and cart.",
      longDescription:
        "Responsive product UI, filters, and cart — focused on component structure.",
    },
  },
  {
    id: "realvine",
    categoryKey: "static",
    featured: false,
    images: ["/projects/Realvine.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/realvine/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    de: {
      title: "Realvine — Immobilien LP",
      description: "Landingpage für Immobilien mit Kontakt.",
      longDescription: "Galerie, Highlights und Formular — mobil optimiert.",
    },
    en: {
      title: "Realvine — real estate LP",
      description: "Property landing page with contact flow.",
      longDescription: "Gallery, highlights, and form — mobile optimized.",
    },
  },
  {
    id: "hoolix",
    categoryKey: "static",
    featured: false,
    images: ["/projects/Hoolix.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/hoolix/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    de: {
      title: "Hoolix — Marketing LP",
      description: "Services, Portfolio und Lead-Capture.",
      longDescription: "Marketing-Seite mit Sektionen und Call-to-Actions.",
    },
    en: {
      title: "Hoolix — marketing LP",
      description: "Services, portfolio, and lead capture.",
      longDescription: "A marketing site with sections and strong CTAs.",
    },
  },
  {
    id: "dentelo",
    categoryKey: "static",
    featured: false,
    images: ["/projects/Dentelo.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/dentelo/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    de: {
      title: "Dentelo — Praxis-Website",
      description: "Landingpage für eine Zahnarztpraxis.",
      longDescription: "Termin-CTA, Leistungen und vertrauensbildende Inhalte.",
    },
    en: {
      title: "Dentelo — dental practice site",
      description: "Landing page for a dental practice.",
      longDescription: "Appointment CTAs, services, and trust-building content.",
    },
  },
  {
    id: "bank-landing",
    categoryKey: "reactjs",
    featured: false,
    images: ["/projects/Hoobank.jpg"],
    github: "#",
    live: "https://jumaa-bank.netlify.app/",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    de: {
      title: "Bank Landing Page",
      description: "React/Tailwind UI für Banking-Thema.",
      longDescription: "Hero, Features und CTA — UI-Übung.",
    },
    en: {
      title: "Bank landing page",
      description: "React/Tailwind UI for a banking theme.",
      longDescription: "Hero, features, and CTA — a UI exercise.",
    },
  },
  {
    id: "loruki",
    categoryKey: "static",
    featured: false,
    images: ["/projects/loruki.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/loruki-website/",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    de: {
      title: "Loruki — Hosting LP",
      description: "Cloud-Hosting Landing mit Pricing.",
      longDescription: "Feature-Vergleich und klare Preis-Sektionen.",
    },
    en: {
      title: "Loruki — hosting LP",
      description: "Cloud hosting landing with pricing.",
      longDescription: "Feature comparison and clear pricing sections.",
    },
  },
  {
    id: "flower",
    categoryKey: "static",
    featured: false,
    images: ["/projects/flower.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/theflow/",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    de: {
      title: "Flower Shop Website",
      description: "Produktgalerie und stimmige Typografie.",
      longDescription: "Elegante statische Seite für ein Blumen-Theme.",
    },
    en: {
      title: "Flower shop website",
      description: "Product gallery with refined typography.",
      longDescription: "An elegant static site for a floral theme.",
    },
  },
  {
    id: "applab",
    categoryKey: "static",
    featured: false,
    images: ["/projects/Applap.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/applab/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    de: {
      title: "Applab — App LP",
      description: "App-Landing mit Features und Downloads.",
      longDescription: "Screens, Benefits und Store-Links.",
    },
    en: {
      title: "Applab — app LP",
      description: "App landing with features and download links.",
      longDescription: "Screens, benefits, and store links.",
    },
  },
  {
    id: "tailwind-manage",
    categoryKey: "tailwind",
    featured: false,
    images: ["/projects/Manage.jpg"],
    github: "#",
    live: "https://almarzouk.github.io/manage-tailwind/",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
    de: {
      title: "Tailwind Demo (Manage)",
      description: "Utility-First Komponenten und Layout.",
      longDescription: "Showcase für Tailwind-Patterns und Sections.",
    },
    en: {
      title: "Tailwind demo (Manage)",
      description: "Utility-first components and layout.",
      longDescription: "A showcase of Tailwind patterns and sections.",
    },
  },
];

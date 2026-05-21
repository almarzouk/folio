import type { Locale } from "./config";

export type Messages = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    blog: string;
    contact: string;
    ctaContact: string;
  };
  hero: {
    badge: string;
    greeting: string;
    roleLine: string;
    roleHighlight: string;
    techTags: string[];
    bio: string;
    ctaProjects: string;
    ctaContact: string;
    cvDownload: string;
    expBadge: string;
    projectsBadge: string;
  };
  about: {
    title: string;
    titleAccent: string;
    locationLine: string;
    bio1: string;
    bio2: string;
    highlights: { title: string; description: string }[];
    timelineTitle: string;
    timelineTitleAccent: string;
    currentLabel: string;
    timeline: {
      period: string;
      role: string;
      company: string;
      description: string;
      current?: boolean;
    }[];
  };
  skills: {
    title: string;
    titleAccent: string;
    subtitle: string;
    categories: {
      frontend: string;
      backend: string;
      databases: string;
      cmsDevops: string;
      design: string;
      mobile: string;
    };
    extrasTitle: string;
    extrasTitleAccent: string;
    extras: string[];
  };
  projects: {
    title: string;
    titleAccent: string;
    subtitle: string;
    categories: Record<string, string>;
    featured: string;
    featuredAccent: string;
    categoryProjects: string;
    code: string;
    liveDemo: string;
    view: string;
    githubCta: string;
    githubCtaButton: string;
    modalClose: string;
    modalPrev: string;
    modalNext: string;
    modalImage: string;
    modalDot: string;
  };
  contact: {
    title: string;
    titleAccent: string;
    subtitle: string;
    email: string;
    location: string;
    social: string;
    availabilityTitle: string;
    availabilityText: string;
    formTitle: string;
    name: string;
    emailLabel: string;
    subject: string;
    message: string;
    placeholders: { name: string; email: string; subject: string; message: string };
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    privacyNote: string;
    formSubjectPrefix: string;
    formError: string;
    autoresponseThanks: string;
    autoresponseReceived: string;
    autoresponseClosing: string;
    autoresponseSignature: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    builtWith: string;
    impressum: string;
    privacy: string;
  };
  jsonLd: {
    personDescription: string;
    websiteDescription: string;
    jobTitle: string;
  };
};

const de: Messages = {
  meta: {
    title: "Jumaa Almarzouk | Fullstack-Webentwickler — Stellensuche",
    description:
      "Fullstack-Webentwickler (React, Next.js, WordPress) sucht eine Festanstellung in Deutschland. Standort Haselünne — Remote oder Hybrid möglich.",
  },
  nav: {
    home: "Start",
    about: "Über mich",
    skills: "Skills",
    projects: "Arbeiten",
    blog: "Blog",
    contact: "Kontakt",
    ctaContact: "Kennenlernen",
  },
  hero: {
    badge: "Aktuell: Stellensuche (Festanstellung)",
    greeting: "Hallo, ich bin",
    roleLine: "Fullstack-",
    roleHighlight: "Webentwickler",
    techTags: ["Laravel", "PHP", "MySQL", "React", "Next.js"],
    bio: "Ich baue zuverlässige, schnelle Weblösungen — Backend mit Laravel/PHP & MySQL, Frontend mit React und Next.js. Ich suche ein Team, in dem ich langfristig mitwachsen kann.",
    ctaProjects: "Ausgewählte Arbeiten",
    ctaContact: "Kontakt für Arbeitgeber",
    cvDownload: "Lebenslauf (PDF)",
    expBadge: "5+ Jahre Erfahrung",
    projectsBadge: "20+ Projekte",
  },
  about: {
    title: "Über",
    titleAccent: "mich",
    locationLine: "Haselünne, Emsland · Deutschland",
    bio1:
      "Ich bin Fullstack-Webentwickler mit Fokus auf sauberen Code, Performance und klare Kommunikation im Team.",
    bio2:
      "Mein Backend-Stack ist Laravel/PHP mit MySQL, im Frontend arbeite ich mit React, Next.js und Tailwind. So bringe ich Features von der API bis zum UI in Produktion — passend für Produkt- oder Agenturteams.",
    highlights: [
      {
        title: "Fullstack",
        description: "Moderne Frontends und stabile APIs & Backends",
      },
      {
        title: "Berufserfahrung",
        description: "WordPress, Themes, Performance und Teamarbeit",
      },
      {
        title: "Weiterbildung",
        description: "Aktuell zu Best Practices und neuen Web-APIs",
      },
      {
        title: "Sprachen",
        description: "Deutsch (B1) · Englisch (B2) · Arabisch (Muttersprache)",
      },
    ],
    timelineTitle: "Beruflicher",
    timelineTitleAccent: "Werdegang",
    currentLabel: "Aktuell",
    timeline: [
      {
        period: "2024 – heute",
        role: "WordPress- & Frontend-Entwickler",
        company: "Eilinghoff + Team GmbH, Deutschland",
        description:
          "WordPress-Websites, Theme-Entwicklung, Performance und Frontend-Lösungen im Kundenprojekt.",
        current: true,
      },
      {
        period: "2023",
        role: "Diplom — Front- & Backend-Entwicklung",
        company: "AFPA, Frankreich",
        description: "Intensive Ausbildung in moderner Webentwicklung.",
      },
      {
        period: "2022",
        role: "Praktikum — WordPress-Entwickler",
        company: "Foreigners in Europe SRL, Italien",
        description: "WordPress, Plugins und Wartung.",
      },
      {
        period: "2021",
        role: "Web- & Grafikdesigner",
        company: "Focus Production, Türkei",
        description: "Websites, Branding und UI/UX.",
      },
      {
        period: "2019",
        role: "Web- & Grafikdesigner",
        company: "Zero Production, Türkei",
        description: "Webdesign, Grafik und visuelle Identität.",
      },
    ],
  },
  skills: {
    title: "Technologien &",
    titleAccent: "Kompetenzen",
    subtitle:
      "Stack und Methoden, mit denen ich im Alltag produktiv arbeite — erweiterbar je nach Team-Setup.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Datenbanken",
      cmsDevops: "CMS & DevOps",
      design: "Design & UX",
      mobile: "Mobile & Web",
    },
    extrasTitle: "Weitere",
    extrasTitleAccent: "Skills",
    extras: [
      "Agile / Scrum",
      "Clean Code",
      "SEO",
      "Performance",
      "API-Integration",
      "Git",
      "Testing & Debugging",
      "Responsive Design",
      "Barrierefreiheit",
      "Deployment",
    ],
  },
  projects: {
    title: "Ausgewählte",
    titleAccent: "Arbeiten",
    subtitle:
      "Einblicke in Projekte aus Fullstack-Entwicklung, WordPress und modernen Frontends — als Referenz für meine Arbeitsweise.",
    categories: {
      all: "Alle",
      nextjs: "Next.js",
      reactjs: "React",
      php: "PHP",
      static: "Statische Sites",
      tailwind: "Tailwind",
    },
    featured: "Hervorgehoben",
    featuredAccent: "Referenzen",
    categoryProjects: "Projekte",
    code: "Code",
    liveDemo: "Live Demo",
    view: "Ansehen",
    githubCta: "Mehr Code und Experimente finden Sie auf GitHub.",
    githubCtaButton: "Profil auf GitHub",
    modalClose: "Schließen",
    modalPrev: "Vorheriges Bild",
    modalNext: "Nächstes Bild",
    modalImage: "Bild",
    modalDot: "Zu Bild wechseln",
  },
  contact: {
    title: "Kontakt",
    titleAccent: "aufnehmen",
    subtitle:
      "Recruiter:innen und Teams: Schreiben Sie mir gern — ich antworte in der Regel innerhalb von 24 Stunden.",
    email: "E-Mail",
    location: "Standort",
    social: "Profile",
    availabilityTitle: "Verfügbarkeit",
    availabilityText:
      "Ich suche eine Festanstellung (Remote deutschlandweit oder Hybrid im Raum Niedersachsen/NRW).",
    formTitle: "Nachricht senden",
    name: "Name",
    emailLabel: "E-Mail",
    subject: "Betreff",
    message: "Nachricht",
    placeholders: {
      name: "Ihr Name",
      email: "ihre@email.de",
      subject: "z. B. Kennenlerntermin",
      message: "Kurz zu Rolle, Team und nächsten Schritten …",
    },
    submit: "Nachricht senden",
    submitting: "Wird gesendet …",
    successTitle: "Nachricht gesendet",
    successBody: "Vielen Dank — ich melde mich zeitnah bei Ihnen.",
    privacyNote:
      "Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.",
    formSubjectPrefix: "Portfolio / Stellensuche:",
    formError: "Senden fehlgeschlagen. Bitte erneut versuchen oder per E-Mail melden.",
    autoresponseThanks: "Vielen Dank für Ihre Nachricht",
    autoresponseReceived: "Ich habe Ihre Nachricht erhalten und melde mich schnellstmöglich.",
    autoresponseClosing: "Mit freundlichen Grüßen",
    autoresponseSignature: "Jumaa Almarzouk — Fullstack-Webentwickler",
  },
  footer: {
    tagline:
      "Fullstack-Webentwickler — Stellensuche. Fokus auf Laravel, PHP, MySQL, React und Next.js.",
    navTitle: "Navigation",
    contactTitle: "Kontakt",
    builtWith: "Erstellt mit",
    impressum: "Impressum",
    privacy: "Datenschutz",
  },
  jsonLd: {
    personDescription:
      "Fullstack-Webentwickler sucht Festanstellung; React, Next.js, WordPress, Deutschland.",
    websiteDescription: "Persönliche Website und Portfolio von Jumaa Almarzouk.",
    jobTitle: "Fullstack Web Developer",
  },
};

const en: Messages = {
  meta: {
    title: "Jumaa Almarzouk | Full-stack Web Developer — Open to work",
    description:
      "Full-stack developer (React, Next.js, WordPress) seeking full-time employment in Germany. Based in Haselünne — remote or hybrid.",
  },
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Work",
    blog: "Blog",
    contact: "Contact",
    ctaContact: "Get in touch",
  },
  hero: {
    badge: "Open to full-time roles",
    greeting: "Hi, I'm",
    roleLine: "Full-stack",
    roleHighlight: "Web Developer",
    techTags: ["Laravel", "PHP", "MySQL", "React", "Next.js"],
    bio: "I ship reliable, fast web products — backend with Laravel/PHP & MySQL, frontend with React and Next.js. Looking for a team where I can grow long term.",
    ctaProjects: "Selected work",
    ctaContact: "Contact (hiring)",
    cvDownload: "Résumé (PDF)",
    expBadge: "5+ years experience",
    projectsBadge: "20+ projects",
  },
  about: {
    title: "About",
    titleAccent: "me",
    locationLine: "Haselünne, Emsland · Germany",
    bio1:
      "I'm a full-stack web developer focused on clean code, performance, and clear collaboration.",
    bio2:
      "My backend stack is Laravel/PHP with MySQL, paired with React, Next.js, and Tailwind on the frontend. I take features from API to UI in production — a good fit for product or agency teams.",
    highlights: [
      {
        title: "Full-stack",
        description: "Modern frontends and solid APIs & backends",
      },
      {
        title: "Experience",
        description: "WordPress, themes, performance, teamwork",
      },
      {
        title: "Learning",
        description: "Continuously leveling up on web best practices",
      },
      {
        title: "Languages",
        description: "German (B1) · English (B2) · Arabic (native)",
      },
    ],
    timelineTitle: "Career",
    timelineTitleAccent: "timeline",
    currentLabel: "Current",
    timeline: [
      {
        period: "2024 – present",
        role: "WordPress & frontend developer",
        company: "Eilinghoff + Team GmbH, Germany",
        description:
          "WordPress sites, theme development, performance, and frontend delivery for client projects.",
        current: true,
      },
      {
        period: "2023",
        role: "Diploma — front- & back-end development",
        company: "AFPA, France",
        description: "Intensive training in modern web development.",
      },
      {
        period: "2022",
        role: "Internship — WordPress developer",
        company: "Foreigners in Europe SRL, Italy",
        description: "WordPress, plugins, and maintenance.",
      },
      {
        period: "2021",
        role: "Web & graphic designer",
        company: "Focus Production, Turkey",
        description: "Websites, branding, and UI/UX.",
      },
      {
        period: "2019",
        role: "Web & graphic designer",
        company: "Zero Production, Turkey",
        description: "Web design, graphics, and visual identity.",
      },
    ],
  },
  skills: {
    title: "Tech &",
    titleAccent: "skills",
    subtitle:
      "Tools and practices I use day to day — adaptable to your team’s stack.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      cmsDevops: "CMS & DevOps",
      design: "Design & UX",
      mobile: "Mobile & Web",
    },
    extrasTitle: "Also",
    extrasTitleAccent: "comfortable with",
    extras: [
      "Agile / Scrum",
      "Clean code",
      "SEO",
      "Performance",
      "API integration",
      "Git",
      "Testing & debugging",
      "Responsive design",
      "Accessibility",
      "Deployment",
    ],
  },
  projects: {
    title: "Selected",
    titleAccent: "work",
    subtitle:
      "A sample of full-stack, WordPress, and frontend work — to illustrate how I ship.",
    categories: {
      all: "All",
      nextjs: "Next.js",
      reactjs: "React",
      php: "PHP",
      static: "Static sites",
      tailwind: "Tailwind",
    },
    featured: "Featured",
    featuredAccent: "references",
    categoryProjects: "projects",
    code: "Code",
    liveDemo: "Live demo",
    view: "Open",
    githubCta: "More code and experiments are on GitHub.",
    githubCtaButton: "GitHub profile",
    modalClose: "Close",
    modalPrev: "Previous image",
    modalNext: "Next image",
    modalImage: "Image",
    modalDot: "Go to image",
  },
  contact: {
    title: "Get in",
    titleAccent: "touch",
    subtitle:
      "Recruiters and hiring teams: message me — I usually reply within 24 hours.",
    email: "Email",
    location: "Location",
    social: "Profiles",
    availabilityTitle: "Availability",
    availabilityText:
      "I'm looking for full-time employment (remote across Germany or hybrid in Lower Saxony/NRW).",
    formTitle: "Send a message",
    name: "Name",
    emailLabel: "Email",
    subject: "Subject",
    message: "Message",
    placeholders: {
      name: "Your name",
      email: "you@company.com",
      subject: "e.g. intro call",
      message: "Role, team, and next steps …",
    },
    submit: "Send message",
    submitting: "Sending…",
    successTitle: "Message sent",
    successBody: "Thank you — I'll get back to you shortly.",
    privacyNote:
      "Required fields. Your details are handled confidentially and not shared with third parties.",
    formSubjectPrefix: "Portfolio / hiring:",
    formError: "Could not send. Please try again or email me directly.",
    autoresponseThanks: "Thank you for your message",
    autoresponseReceived: "I've received it and will get back to you as soon as I can.",
    autoresponseClosing: "Best regards",
    autoresponseSignature: "Jumaa Almarzouk — Full-stack web developer",
  },
  footer: {
    tagline:
      "Full-stack web developer — open to work. Focus on Laravel, PHP, MySQL, React, and Next.js.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    builtWith: "Built with",
    impressum: "Legal notice",
    privacy: "Privacy",
  },
  jsonLd: {
    personDescription:
      "Full-stack web developer seeking full-time work; React, Next.js, WordPress, Germany.",
    websiteDescription: "Personal website and portfolio of Jumaa Almarzouk.",
    jobTitle: "Fullstack Web Developer",
  },
};

const byLocale: Record<Locale, Messages> = { de, en };

export function getMessages(locale: Locale): Messages {
  return byLocale[locale];
}

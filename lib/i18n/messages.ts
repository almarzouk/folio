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
    facts: string[];
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
    levels: {
      production: string;
      daily: string;
      familiar: string;
    };
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
    caseStudyLabel: string;
    viewCaseStudy: string;
    backToProjects: string;
    caseStudyProblem: string;
    caseStudySolution: string;
    caseStudyRole: string;
    caseStudyHighlights: string;
    caseStudyChallenges: string;
    caseStudyGallery: string;
    apiDocs: string;
    archiveTitle: string;
    archiveSubtitle: string;
    archiveSubtitleText: string;
    showArchive: string;
    hideArchive: string;
  };
  contact: {
    title: string;
    titleAccent: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
    cvDownload: string;
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
  openToWork: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaContact: string;
    items: { title: string; description: string }[];
  };
};

const de: Messages = {
  meta: {
    title: "Jumaa Almarzouk | Fullstack Web & Mobile Developer — Stellensuche",
    description:
      "Fullstack Web & Mobile Developer (PHP, Laravel, React, Next.js, Vue.js, React Native) sucht eine Fullstack-/Backend-Position im Raum Meppen & Emsland. Standort: Haselünne.",
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
    badge: "Stellensuche · Raum Meppen & Emsland",
    greeting: "Hallo, ich bin",
    roleLine: "Fullstack Web & Mobile",
    roleHighlight: "Developer",
    techTags: ["PHP", "Laravel", "React", "Next.js", "Vue.js", "React Native"],
    bio: "Fullstack-Entwicklung mit Schwerpunkt Backend (PHP, Laravel) sowie modernen Frontends und Mobile-Apps (Next.js, React, Vue.js, React Native). Gesucht: Fullstack- oder Backend-orientierte Position im Raum Meppen & Emsland.",
    ctaProjects: "Ausgewählte Arbeiten",
    ctaContact: "Kontakt für Arbeitgeber",
    cvDownload: "Lebenslauf (PDF)",
    expBadge: "Laravel · Mobile",
    projectsBadge: "Web & Apps",
  },
  about: {
    title: "Über",
    titleAccent: "mich",
    locationLine: "Haselünne (Raum Meppen / Emsland) · Deutschland",
    bio1:
      "Fullstack Web & Mobile Developer mit Schwerpunkt Backend-Entwicklung (PHP, Laravel) sowie modernen Frontend- und Mobile-Technologien (Next.js, React, Vue.js, React Native).",
    bio2:
      "Erfahrung in skalierbaren Webanwendungen, REST APIs, Authentifizierung, Datenbankdesign und plattformübergreifenden Apps. Strukturiert, lösungsorientiert und erfahren in agilen Teams.",
    highlights: [
      {
        title: "Fullstack",
        description: "Laravel-Backends, REST APIs und moderne Frontends",
      },
      {
        title: "Mobile",
        description: "Plattformübergreifende Apps mit React Native",
      },
      {
        title: "Ausbildung",
        description: "Full Stack Webentwickler — AFPA, Frankreich",
      },
      {
        title: "Sprachen",
        description:
          "Arabisch (Muttersprache) · Deutsch (B1) · Englisch (B2) · Französisch (B1)",
      },
    ],
    facts: [
      "Deutsch B1",
      "Englisch B2",
      "Französisch B1",
      "Arabisch Muttersprache",
      "Führerschein B",
      "Eigenes Fahrzeug",
      "Reisebereit (DE)",
    ],
    timelineTitle: "Beruflicher",
    timelineTitleAccent: "Werdegang",
    currentLabel: "Aktuell",
    timeline: [
      {
        period: "04/2026 – heute",
        role: "Fullstack Web Developer (Laravel, Next.js, React, Vue.js, React Native)",
        company: "Dream Soft GmbH — Haselünne",
        description:
          "Fullstack-Entwicklung mit Laravel (Backend) sowie Next.js, React und Vue.js (Frontend). Aufbau eines digitalen Serviceportals zur Nachverfolgung von Produktions- und Serviceabläufen. Plattformübergreifende Mobile-Apps mit React Native — eigenverantwortlich als alleiniger Fullstack-Entwickler im Projekt.",
        current: true,
      },
      {
        period: "06/2024 – 03/2026",
        role: "Fullstack Web Developer (PHP / Laravel Fokus)",
        company: "Eilinghoff + Team — Rheine",
        description:
          "Backend-Entwicklung mit PHP & Laravel: REST APIs, Business-Logik, MySQL & Eloquent, Performance-Optimierung und MVC-Struktur. Agile Teamarbeit und Deployment.",
      },
      {
        period: "11/2022 – 02/2023",
        role: "Web Developer — Praktikum (Remote)",
        company: "Europe SRL — Rom",
        description:
          "Mitarbeit an PHP-/JS-Webanwendungen sowie Backend- und API-nahen Aufgaben.",
      },
      {
        period: "2022 – 2023",
        role: "Full Stack Webentwickler",
        company: "AFPA Institut, Frankreich",
        description: "Ausbildung in moderner Full-Stack-Webentwicklung.",
      },
    ],
  },
  skills: {
    title: "Technologien &",
    titleAccent: "Kompetenzen",
    subtitle:
      "Stack, mit dem ich skalierbare Webanwendungen, APIs und Mobile-Apps umsetze.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Datenbanken",
      cmsDevops: "Tools",
      design: "Qualität",
      mobile: "Mobile",
    },
    extrasTitle: "Weitere",
    extrasTitleAccent: "Skills",
    extras: [
      "Agile Teams",
      "MVC",
      "Clean Code",
      "Performance",
      "Authentifizierung",
      "Git & GitHub",
      "Composer",
      "npm",
      "Vercel",
      "Deployment",
    ],
    levels: {
      production: "Produktion",
      daily: "Täglich",
      familiar: "Vertraut",
    },
  },
  projects: {
    title: "Ausgewählte",
    titleAccent: "Arbeiten",
    subtitle:
      "Einblicke in Laravel-Backends, Serviceportale, Mobile-Apps und moderne Frontends — als Referenz für meine Arbeitsweise.",
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
    caseStudyLabel: "Case Study",
    viewCaseStudy: "Case Study lesen",
    backToProjects: "Zurück zu den Projekten",
    caseStudyProblem: "Ausgangslage",
    caseStudySolution: "Lösung",
    caseStudyRole: "Meine Rolle",
    caseStudyHighlights: "Highlights",
    caseStudyChallenges: "Herausforderungen",
    caseStudyGallery: "Weitere Screenshots",
    apiDocs: "API-Dokumentation",
    archiveTitle: "Weitere",
    archiveSubtitle: "Projekte",
    archiveSubtitleText:
      "Frühere Landing Pages und UI-Übungen — ergänzend zur Hauptarbeit.",
    showArchive: "Archiv anzeigen",
    hideArchive: "Archiv ausblenden",
  },
  contact: {
    title: "Kontakt",
    titleAccent: "aufnehmen",
    subtitle:
      "Recruiter:innen und Teams im Raum Meppen & Emsland: Schreiben Sie mir gern — ich antworte in der Regel innerhalb von 24 Stunden.",
    email: "E-Mail",
    phone: "Telefon",
    location: "Standort",
    cvDownload: "Lebenslauf herunterladen",
    social: "Profile",
    availabilityTitle: "Verfügbarkeit",
    availabilityText:
      "Ich suche eine Fullstack- oder Backend-orientierte Position im Raum Meppen & Emsland. Reisebereit in DE, Führerschein B, eigenes Fahrzeug.",
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
    autoresponseSignature: "Jumaa Almarzouk — Fullstack Web & Mobile Developer",
  },
  footer: {
    tagline:
      "Fullstack Web & Mobile Developer — Stellensuche. Laravel, PHP, React, Next.js, Vue.js und React Native.",
    navTitle: "Navigation",
    contactTitle: "Kontakt",
    builtWith: "Erstellt mit",
    impressum: "Impressum",
    privacy: "Datenschutz",
  },
  openToWork: {
    badge: "Verfügbar für Festanstellung",
    title: "Offen für",
    titleAccent: "Fullstack & Backend",
    subtitle:
      "Ich suche eine langfristige Position im Raum Meppen & Emsland — mit Fokus auf Laravel, APIs und moderne Frontends.",
    ctaContact: "Jetzt kontaktieren",
    items: [
      {
        title: "Fullstack / Backend",
        description: "PHP, Laravel, REST APIs, React, Next.js, Vue.js",
      },
      {
        title: "Raum Meppen & Emsland",
        description: "Haselünne · vor Ort, hybrid oder remote (DE)",
      },
      {
        title: "Mobilität",
        description: "Führerschein B · eigenes Fahrzeug · reisebereit",
      },
      {
        title: "Sofort verfügbar",
        description: "Festanstellung · agile Teams · langfristige Mitwirkung",
      },
    ],
  },
  jsonLd: {
    personDescription:
      "Fullstack Web & Mobile Developer sucht Fullstack-/Backend-Position im Raum Meppen und Emsland. PHP, Laravel, React, Next.js, Vue.js, React Native.",
    websiteDescription: "Persönliche Website und Portfolio von Jumaa Almarzouk.",
    jobTitle: "Fullstack Web & Mobile Developer",
  },
};

const en: Messages = {
  meta: {
    title: "Jumaa Almarzouk | Full-stack Web & Mobile Developer — Open to work",
    description:
      "Full-stack web & mobile developer (PHP, Laravel, React, Next.js, Vue.js, React Native) seeking a full-stack / backend role in the Meppen & Emsland area. Based in Haselünne.",
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
    badge: "Open to work · Meppen & Emsland area",
    greeting: "Hi, I'm",
    roleLine: "Full-stack Web & Mobile",
    roleHighlight: "Developer",
    techTags: ["PHP", "Laravel", "React", "Next.js", "Vue.js", "React Native"],
    bio: "Full-stack development with a backend focus (PHP, Laravel) plus modern frontends and mobile apps (Next.js, React, Vue.js, React Native). Looking for a full-stack or backend-oriented role in the Meppen & Emsland area.",
    ctaProjects: "Selected work",
    ctaContact: "Contact (hiring)",
    cvDownload: "Résumé (PDF)",
    expBadge: "Laravel · Mobile",
    projectsBadge: "Web & apps",
  },
  about: {
    title: "About",
    titleAccent: "me",
    locationLine: "Haselünne (Meppen / Emsland area) · Germany",
    bio1:
      "Full-stack web & mobile developer with a backend focus (PHP, Laravel) and modern frontend and mobile technologies (Next.js, React, Vue.js, React Native).",
    bio2:
      "Experience building scalable web apps, REST APIs, authentication, database design, and cross-platform mobile apps. Structured, solution-oriented, and used to agile teams.",
    highlights: [
      {
        title: "Full-stack",
        description: "Laravel backends, REST APIs, and modern frontends",
      },
      {
        title: "Mobile",
        description: "Cross-platform apps with React Native",
      },
      {
        title: "Education",
        description: "Full-stack web developer — AFPA, France",
      },
      {
        title: "Languages",
        description:
          "Arabic (native) · German (B1) · English (B2) · French (B1)",
      },
    ],
    facts: [
      "German B1",
      "English B2",
      "French B1",
      "Arabic native",
      "Driving licence B",
      "Own vehicle",
      "Willing to travel (DE)",
    ],
    timelineTitle: "Career",
    timelineTitleAccent: "timeline",
    currentLabel: "Current",
    timeline: [
      {
        period: "04/2026 – present",
        role: "Full-stack web developer (Laravel, Next.js, React, Vue.js, React Native)",
        company: "Dream Soft GmbH — Haselünne",
        description:
          "Full-stack development with Laravel (backend) plus Next.js, React, and Vue.js (frontend). Building a digital service portal to track production and service workflows. Cross-platform mobile apps with React Native — sole full-stack developer on the project.",
        current: true,
      },
      {
        period: "06/2024 – 03/2026",
        role: "Full-stack web developer (PHP / Laravel focus)",
        company: "Eilinghoff + Team — Rheine",
        description:
          "Backend development with PHP & Laravel: REST APIs, business logic, MySQL & Eloquent, performance work, and MVC structure. Agile teamwork and deployment.",
      },
      {
        period: "11/2022 – 02/2023",
        role: "Web developer — internship (remote)",
        company: "Europe SRL — Rome",
        description:
          "Contributed to PHP/JS web applications and backend/API-related work.",
      },
      {
        period: "2022 – 2023",
        role: "Full-stack web developer training",
        company: "AFPA Institute, France",
        description: "Training in modern full-stack web development.",
      },
    ],
  },
  skills: {
    title: "Tech &",
    titleAccent: "skills",
    subtitle:
      "The stack I use to ship scalable web apps, APIs, and mobile products.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      cmsDevops: "Tools",
      design: "Quality",
      mobile: "Mobile",
    },
    extrasTitle: "Also",
    extrasTitleAccent: "comfortable with",
    extras: [
      "Agile teams",
      "MVC",
      "Clean code",
      "Performance",
      "Authentication",
      "Git & GitHub",
      "Composer",
      "npm",
      "Vercel",
      "Deployment",
    ],
    levels: {
      production: "Production",
      daily: "Daily",
      familiar: "Familiar",
    },
  },
  projects: {
    title: "Selected",
    titleAccent: "work",
    subtitle:
      "A sample of Laravel backends, service portals, mobile apps, and modern frontends — to illustrate how I ship.",
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
    caseStudyLabel: "Case study",
    viewCaseStudy: "Read case study",
    backToProjects: "Back to projects",
    caseStudyProblem: "Problem",
    caseStudySolution: "Solution",
    caseStudyRole: "My role",
    caseStudyHighlights: "Highlights",
    caseStudyChallenges: "Challenges",
    caseStudyGallery: "More screenshots",
    apiDocs: "API documentation",
    archiveTitle: "More",
    archiveSubtitle: "projects",
    archiveSubtitleText:
      "Earlier landing pages and UI exercises — supplementary to core work.",
    showArchive: "Show archive",
    hideArchive: "Hide archive",
  },
  contact: {
    title: "Get in",
    titleAccent: "touch",
    subtitle:
      "Recruiters and teams in the Meppen & Emsland area: message me — I usually reply within 24 hours.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    cvDownload: "Download résumé",
    social: "Profiles",
    availabilityTitle: "Availability",
    availabilityText:
      "I'm looking for a full-stack or backend-oriented role in the Meppen & Emsland area. Willing to travel in Germany, driving licence B, own vehicle.",
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
    autoresponseSignature: "Jumaa Almarzouk — Full-stack web & mobile developer",
  },
  footer: {
    tagline:
      "Full-stack web & mobile developer — open to work. Laravel, PHP, React, Next.js, Vue.js, and React Native.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    builtWith: "Built with",
    impressum: "Legal notice",
    privacy: "Privacy",
  },
  openToWork: {
    badge: "Open to full-time roles",
    title: "Open to",
    titleAccent: "full-stack & backend",
    subtitle:
      "I'm looking for a long-term role in the Meppen & Emsland area — focused on Laravel, APIs, and modern frontends.",
    ctaContact: "Contact me",
    items: [
      {
        title: "Full-stack / backend",
        description: "PHP, Laravel, REST APIs, React, Next.js, Vue.js",
      },
      {
        title: "Meppen & Emsland area",
        description: "Haselünne · on-site, hybrid, or remote (Germany)",
      },
      {
        title: "Mobility",
        description: "Driving licence B · own vehicle · willing to travel",
      },
      {
        title: "Available now",
        description: "Full-time · agile teams · long-term contribution",
      },
    ],
  },
  jsonLd: {
    personDescription:
      "Full-stack web & mobile developer seeking a full-stack / backend role in the Meppen and Emsland area. PHP, Laravel, React, Next.js, Vue.js, React Native.",
    websiteDescription: "Personal website and portfolio of Jumaa Almarzouk.",
    jobTitle: "Fullstack Web & Mobile Developer",
  },
};

const byLocale: Record<Locale, Messages> = { de, en };

export function getMessages(locale: Locale): Messages {
  return byLocale[locale];
}

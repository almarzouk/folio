# 📁 Projektstruktur - Vollständige Übersicht

## Verzeichnisbaum

```
portfolio/
├── 📁 app/                          # Next.js App Router
│   ├── layout.tsx                   # Root Layout (Theme Provider, Fonts)
│   ├── page.tsx                     # Hauptseite (Index)
│   └── globals.css                  # Globale Styles & Design Tokens
│
├── 📁 components/                   # React Komponenten
│   ├── 📁 ui/                       # UI-Basiskomponenten
│   │   ├── button.tsx               # Button Komponente
│   │   ├── card.tsx                 # Card Komponente
│   │   ├── input.tsx                # Input Komponente
│   │   └── textarea.tsx             # Textarea Komponente
│   │
│   ├── header.tsx                   # Navigation Header (sticky)
│   ├── hero.tsx                     # Hero Section (Landing)
│   ├── about.tsx                    # Über mich Section
│   ├── skills.tsx                   # Skills Section
│   ├── projects.tsx                 # Projekte Section
│   ├── contact.tsx                  # Kontakt Section
│   ├── footer.tsx                   # Footer
│   ├── theme-provider.tsx           # Theme Context Provider
│   └── theme-toggle.tsx             # Dark/Light Mode Toggle
│
├── 📁 lib/                          # Utility-Funktionen
│   ├── utils.ts                     # Helper-Funktionen (cn, etc.)
│   └── slot.ts                      # Slot Component Helper
│
├── 📁 public/                       # Statische Assets
│   └── 📁 projects/                 # Projekt-Bilder (optional)
│       ├── booking-system.jpg
│       ├── amazon-clone.jpg
│       └── ...
│
├── 📄 package.json                  # Dependencies & Scripts
├── 📄 tsconfig.json                 # TypeScript Konfiguration
├── 📄 tailwind.config.ts            # Tailwind CSS Konfiguration
├── 📄 postcss.config.mjs            # PostCSS Konfiguration
├── 📄 next.config.mjs               # Next.js Konfiguration
├── 📄 .eslintrc.json                # ESLint Konfiguration
├── 📄 .gitignore                    # Git Ignore-Datei
│
├── 📄 README.md                     # Haupt-Dokumentation
├── 📄 QUICKSTART.md                 # Schnellstart-Anleitung
├── 📄 DESIGN.md                     # Design-Konzept
├── 📄 CONTENT.md                    # Alle Inhalte auf Deutsch
└── 📄 DEPLOYMENT.md                 # Deployment-Anleitung
```

---

## 📝 Datei-Beschreibungen

### Konfigurationsdateien

#### `package.json`

- Dependencies für das Projekt
- Scripts: `dev`, `build`, `start`, `lint`
- Enthält: Next.js, React, TypeScript, Tailwind CSS

#### `tsconfig.json`

- TypeScript-Einstellungen
- Path-Aliase (`@/*`)
- Compiler-Optionen

#### `tailwind.config.ts`

- Tailwind CSS Konfiguration
- Custom Colors (Primary, Accent, etc.)
- Theme-Extension
- Dark Mode Einstellungen

#### `next.config.mjs`

- Next.js Konfiguration
- Image-Optimierung
- Remote Patterns

---

### App-Verzeichnis (Next.js 14 App Router)

#### `app/layout.tsx`

**Zweck**: Root Layout für die gesamte App

- Theme Provider
- Font-Konfiguration (Inter)
- SEO Meta-Tags
- HTML & Body Wrapper

**Wichtige Exports**:

- `metadata`: SEO-Informationen
- `RootLayout`: Layout-Komponente

#### `app/page.tsx`

**Zweck**: Hauptseite (Homepage)

- Importiert alle Sektionen
- Definiert die Seitenstruktur

**Struktur**:

```tsx
<Header />
<Hero />
<About />
<Skills />
<Projects />
<Contact />
<Footer />
```

#### `app/globals.css`

**Zweck**: Globale Styles

- Tailwind Imports
- CSS Custom Properties (Design Tokens)
- Dark Mode Variablen
- Custom Animationen

---

### Komponenten

#### `components/header.tsx`

**Typ**: Client Component
**Zweck**: Sticky Navigation Header

**Features**:

- Responsive Navigation
- Mobile Menu (Hamburger)
- Scroll-basierte Transparenz
- Theme Toggle
- CTA Button

**State**:

- `isScrolled`: Scroll-Zustand
- `isMobileMenuOpen`: Mobile Menu Status

#### `components/hero.tsx`

**Typ**: Client Component
**Zweck**: Hero/Landing Section

**Features**:

- Große Überschrift mit Gradient
- Tagline & Beschreibung
- CTA Buttons
- Social Links (GitHub, LinkedIn, E-Mail)
- Animierte Hintergrund-Elemente
- Scroll-Indikator

#### `components/about.tsx`

**Typ**: Client Component
**Zweck**: Über mich Section

**Features**:

- Einführungstext
- Highlight-Cards (4 Stück)
- Beruflicher Werdegang (Timeline)
- Icons von Lucide React

**Highlights**:

1. Fullstack Development
2. Berufserfahrung
3. Kontinuierliche Weiterbildung
4. Mehrsprachig

#### `components/skills.tsx`

**Typ**: Client Component
**Zweck**: Skills Section

**Features**:

- 6 Skill-Kategorien mit Icons
- Skill-Bars mit Prozentangabe
- Weitere Kompetenzen (Tags)
- Hover-Effekte

**Kategorien**:

1. Frontend Entwicklung
2. Backend Entwicklung
3. Datenbanken
4. CMS & Tools
5. UI/UX & Design
6. Mobile & Responsive

#### `components/projects.tsx`

**Typ**: Client Component
**Zweck**: Projekte Section

**Features**:

- Projekt-Filter (Alle, Fullstack, Frontend, WordPress)
- Featured Projects (Hervorgehoben)
- Projekt-Cards mit Hover-Effekten
- Technologie-Tags
- GitHub & Live Demo Links

**State**:

- `selectedCategory`: Aktiver Filter

**Projekte**: 6 Beispielprojekte vordefiniert

#### `components/contact.tsx`

**Typ**: Client Component
**Zweck**: Kontakt Section

**Features**:

- Kontaktformular (UI-only)
- Kontaktinformationen (E-Mail, Standort)
- Social Links
- Verfügbarkeits-Info
- Success-Message nach Absenden

**State**:

- `formData`: Formular-Daten
- `isSubmitted`: Success-Status

**Form-Felder**:

- Name (required)
- E-Mail (required)
- Betreff (required)
- Nachricht (required)

#### `components/footer.tsx`

**Typ**: Server Component
**Zweck**: Footer

**Bereiche**:

1. Brand Section (Name, Beschreibung, Standort)
2. Quick Links (Navigation)
3. Kontakt & Social (Links)
4. Copyright & Credits

#### `components/theme-provider.tsx`

**Typ**: Client Component
**Zweck**: Theme Context Provider

**Features**:

- Light/Dark/System Mode
- LocalStorage Persistenz
- Automatic System Preference Detection

**Exports**:

- `ThemeProvider`: Provider Component
- `useTheme`: Hook für Theme-Zugriff

#### `components/theme-toggle.tsx`

**Typ**: Client Component
**Zweck**: Dark Mode Toggle Button

**Features**:

- Icon-Wechsel (Sun/Moon)
- Smooth Transitions
- Mounted-Check (SSR-safe)

---

### UI-Komponenten (`components/ui/`)

#### `button.tsx`

**Zweck**: Wiederverwendbare Button-Komponente

**Variants**:

- `default`: Primary Button
- `destructive`: Danger Button
- `outline`: Outline Button
- `secondary`: Secondary Button
- `ghost`: Ghost Button
- `link`: Link Button

**Sizes**:

- `default`: Standard
- `sm`: Klein
- `lg`: Groß
- `icon`: Icon-Button

#### `card.tsx`

**Zweck**: Card-Container

**Exports**:

- `Card`: Container
- `CardHeader`: Header-Bereich
- `CardTitle`: Titel
- `CardDescription`: Beschreibung
- `CardContent`: Inhalt
- `CardFooter`: Footer

#### `input.tsx`

**Zweck**: Eingabefeld

**Features**:

- Styled Input
- Focus-Ring
- Error-States ready

#### `textarea.tsx`

**Zweck**: Mehrzeiliges Textfeld

**Features**:

- Styled Textarea
- Resizable
- Min-Height: 120px

---

### Lib-Verzeichnis

#### `lib/utils.ts`

**Zweck**: Utility-Funktionen

**Exports**:

- `cn()`: Class Names zusammenführen (clsx + tailwind-merge)

**Verwendung**:

```tsx
<div className={cn("base-class", condition && "conditional-class")} />
```

---

## 🎨 Design-System

### Farben (Light Mode)

```css
--primary: hsl(221.2, 83.2%, 53.3%)     /* Blau */
--accent: hsl(142.1, 76.2%, 36.3%)      /* Grün */
--background: hsl(0, 0%, 100%)          /* Weiß */
--foreground: hsl(222.2, 84%, 4.9%)     /* Dunkel */
```

### Farben (Dark Mode)

```css
--primary: hsl(217.2, 91.2%, 59.8%)     /* Helles Blau */
--accent: hsl(142.1, 70.6%, 45.3%)      /* Helles Grün */
--background: hsl(222.2, 84%, 4.9%)     /* Dunkel */
--foreground: hsl(210, 40%, 98%)        /* Hell */
```

### Typografie

- **Font**: Inter (Google Fonts)
- **Sizes**: xs (12px) bis 5xl (48px)
- **Weights**: 400 (Regular), 600 (Semibold), 700 (Bold)

### Spacing

- **Sections**: py-20 sm:py-24 lg:py-32
- **Cards**: p-6
- **Gaps**: gap-4 bis gap-8

---

## 🚀 Scripts

### Entwicklung

```bash
npm run dev       # Entwicklungsserver (Port 3000)
```

### Production

```bash
npm run build     # Production Build erstellen
npm run start     # Production Server starten
```

### Code-Qualität

```bash
npm run lint      # ESLint ausführen
```

---

## 📊 Technologie-Stack

### Core

- **Framework**: Next.js 14.2.5 (App Router)
- **UI Library**: React 18.3.1
- **Language**: TypeScript 5

### Styling

- **CSS Framework**: Tailwind CSS 3.4.1
- **Utility**: clsx, tailwind-merge
- **Variants**: class-variance-authority

### Icons & UI

- **Icons**: Lucide React 0.427.0
- **Components**: Custom (Shadcn-inspired)

### Development

- **Linting**: ESLint 8
- **Config**: TypeScript, PostCSS, Autoprefixer

---

## 🔄 Datenfluss

```
User Browser
    ↓
Next.js Server (SSR/SSG)
    ↓
React Components
    ↓
Theme Provider (Context)
    ↓
UI Components
    ↓
Tailwind CSS (Styling)
    ↓
Rendered HTML
```

---

## 🎯 Performance-Optimierungen

1. **Next.js Image**: Automatische Bildoptimierung
2. **Font Optimization**: Variable Fonts (Inter)
3. **CSS Purging**: Tailwind entfernt ungenutztes CSS
4. **Code Splitting**: Automatisch durch Next.js
5. **Static Generation**: Wo möglich
6. **Client Components**: Nur wo nötig (Interaktivität)

---

## 📱 Responsive Breakpoints

```
Mobile:   < 640px   (sm)
Tablet:   640-1024px (md-lg)
Desktop:  > 1024px   (xl+)
```

**Mobile-First**: Alle Styles zuerst für Mobile, dann erweitert.

---

**Diese Struktur ist optimiert für Performance, Wartbarkeit und Skalierbarkeit.**

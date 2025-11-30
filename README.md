# Portfolio von Jumaa Almarzouk

Ein modernes, professionelles Portfolio entwickelt mit **Next.js 14**, **TypeScript**, **Tailwind CSS** und **Shadcn UI**.

![Portfolio Preview](https://via.placeholder.com/1200x600/4F46E5/FFFFFF?text=Jumaa+Almarzouk+Portfolio)

## 🚀 Features

- ✅ **Moderne Tech Stack**: Next.js 14 mit App Router, TypeScript, Tailwind CSS
- ✅ **Responsive Design**: Optimiert für alle Geräte (Mobile-First)
- ✅ **Dark Mode**: Umschaltbarer Dark/Light Mode mit System-Präferenz
- ✅ **Performance**: Optimiert für schnelle Ladezeiten und beste Web Vitals
- ✅ **SEO-optimiert**: Meta-Tags, strukturierte Daten, Sitemap
- ✅ **Animations**: Sanfte Animationen und Übergänge
- ✅ **Accessibility**: WCAG-konforme Barrierefreiheit
- ✅ **Komponentenbasiert**: Wiederverwendbare UI-Komponenten mit Shadcn UI

## 📋 Inhalte

- **Hero Section**: Einprägsame Vorstellung mit Social Links
- **Über mich**: Detaillierte Beschreibung meiner Erfahrung und Fähigkeiten
- **Skills**: Umfassende Übersicht meiner technischen Kompetenzen
- **Projekte**: Showcase meiner besten Arbeiten mit Filter-Funktion
- **Kontakt**: Kontaktformular und Kontaktinformationen

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Animations**: CSS Transitions & Keyframes

### Tools & Deployment

- **Version Control**: Git & GitHub
- **Package Manager**: npm
- **Deployment**: Vercel (empfohlen)
- **Code Quality**: ESLint, TypeScript

## 📦 Installation

### Voraussetzungen

- Node.js 18+ installiert
- npm oder yarn

### Schritt 1: Repository klonen

```bash
git clone https://github.com/almarzouk/portfolio.git
cd portfolio
```

### Schritt 2: Abhängigkeiten installieren

```bash
npm install
# oder
yarn install
```

### Schritt 3: Entwicklungsserver starten

```bash
npm run dev
# oder
yarn dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser.

## 🏗️ Projektstruktur

```
portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root Layout mit Theme Provider
│   ├── page.tsx             # Hauptseite
│   └── globals.css          # Globale Styles
├── components/              # React Komponenten
│   ├── ui/                  # UI-Komponenten (Shadcn)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── header.tsx           # Navigation Header
│   ├── hero.tsx             # Hero Section
│   ├── about.tsx            # Über mich Section
│   ├── skills.tsx           # Skills Section
│   ├── projects.tsx         # Projekte Section
│   ├── contact.tsx          # Kontakt Section
│   ├── footer.tsx           # Footer
│   ├── theme-provider.tsx   # Theme Context Provider
│   └── theme-toggle.tsx     # Dark Mode Toggle
├── lib/                     # Utility-Funktionen
│   └── utils.ts
├── public/                  # Statische Assets
├── package.json
├── tailwind.config.ts       # Tailwind Konfiguration
├── tsconfig.json            # TypeScript Konfiguration
└── next.config.mjs          # Next.js Konfiguration
```

## 🎨 Design-Konzept

### Farbschema

**Light Mode:**

- Primary: `hsl(221.2, 83.2%, 53.3%)` - Professionelles Blau
- Accent: `hsl(142.1, 76.2%, 36.3%)` - Frisches Grün
- Background: `hsl(0, 0%, 100%)` - Weiß
- Foreground: `hsl(222.2, 84%, 4.9%)` - Dunkel

**Dark Mode:**

- Primary: `hsl(217.2, 91.2%, 59.8%)` - Helles Blau
- Accent: `hsl(142.1, 70.6%, 45.3%)` - Helles Grün
- Background: `hsl(222.2, 84%, 4.9%)` - Dunkel
- Foreground: `hsl(210, 40%, 98%)` - Hell

### Typografie

- **Font Family**: Inter (Google Fonts)
- **Heading**: Bold, verschiedene Größen (3xl-5xl)
- **Body**: Regular, 16px base size
- **Code**: Monospace für technische Details

### Spacing & Layout

- **Container**: Max-width 1280px, responsive padding
- **Sections**: 80-128px vertikaler Abstand
- **Grid**: 1-3 Spalten je nach Viewport
- **Border Radius**: 0.5rem (8px)

## 🚀 Deployment

### Vercel (Empfohlen)

1. **GitHub Repository pushen**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Auf Vercel deployen**
   - Gehen Sie zu [vercel.com](https://vercel.com)
   - Klicken Sie auf "New Project"
   - Importieren Sie Ihr GitHub Repository
   - Vercel erkennt automatisch Next.js
   - Klicken Sie auf "Deploy"

### Alternative: Netlify

```bash
npm run build
```

Dann den `out` Ordner zu Netlify hochladen.

### Environment Variables (Optional)

Für Produktionsumgebung können Sie `.env.local` erstellen:

```env
NEXT_PUBLIC_SITE_URL=https://ihre-domain.de
```

## 📝 Anpassung

### Persönliche Daten ändern

Bearbeiten Sie die entsprechenden Komponenten:

**Hero Section** (`components/hero.tsx`):

```typescript
<h1>Ihr Name</h1>
<p>Ihre E-Mail</p>
```

**Über mich** (`components/about.tsx`):
Passen Sie den Text und die Highlights an.

**Projekte** (`components/projects.tsx`):

```typescript
const projects = [
  {
    title: "Ihr Projekt",
    description: "Beschreibung",
    technologies: ["Tech1", "Tech2"],
    // ...
  },
];
```

### Farben anpassen

Bearbeiten Sie `app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Ihre Farbe */
  --accent: 142.1 76.2% 36.3%; /* Ihre Akzentfarbe */
}
```

### Neue Sektion hinzufügen

1. Komponente erstellen: `components/neue-section.tsx`
2. In `app/page.tsx` importieren und einfügen
3. Link in `components/header.tsx` hinzufügen

## 📱 Browser-Unterstützung

- Chrome (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Edge (letzte 2 Versionen)

## 🔧 Wartung & Updates

```bash
# Abhängigkeiten aktualisieren
npm update

# Next.js aktualisieren
npm install next@latest react@latest react-dom@latest

# Sicherheitsprüfung
npm audit
```

## 📄 Lizenz

Dieses Projekt ist für persönliche Nutzung erstellt. Sie können es als Vorlage verwenden, aber bitte passen Sie alle persönlichen Informationen an.

## 👤 Kontakt

**Jumaa Almarzouk**

- 🌐 Portfolio: [jumaa-portfolio.netlify.app](https://jumaa-portfolio.netlify.app)
- 💼 LinkedIn: [linkedin.com/in/almarzouk](https://linkedin.com/in/almarzouk)
- 🐙 GitHub: [github.com/almarzouk](https://github.com/almarzouk)
- 📧 E-Mail: jumaa@example.com
- 📍 Standort: Haselünne, Deutschland

---

**Entwickelt mit ❤️ und Next.js**

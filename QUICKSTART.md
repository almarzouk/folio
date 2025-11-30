# 🚀 Quick Start Guide

Schnellstart-Anleitung für dein Portfolio-Projekt.

## ⚡ Schnellinstallation (5 Minuten)

### Schritt 1: Dependencies installieren

```bash
cd /Users/jumaaalmarrzouk/Desktop/portfolio
npm install
```

### Schritt 2: Entwicklungsserver starten

```bash
npm run dev
```

### Schritt 3: Browser öffnen

Öffne [http://localhost:3000](http://localhost:3000)

**Fertig!** 🎉 Dein Portfolio läuft jetzt lokal.

---

## 📝 Wichtige Anpassungen

### 1. E-Mail-Adresse ändern

**Dateien zu bearbeiten:**

- `components/hero.tsx` (Zeile mit `mailto:`)
- `components/contact.tsx` (Zeile mit `jumaa@example.com`)
- `components/footer.tsx` (Zeile mit `jumaa@example.com`)

**Suchen & Ersetzen:**

```bash
# Alle Vorkommen von jumaa@example.com ersetzen
jumaa@example.com → deine-email@domain.de
```

### 2. Projekt-Bilder hinzufügen

**Ordner erstellen:**

```bash
mkdir -p public/projects
```

**Bilder hinzufügen:**

- `public/projects/booking-system.jpg`
- `public/projects/amazon-clone.jpg`
- `public/projects/wordpress-site.jpg`
- `public/projects/portfolio.jpg`
- `public/projects/task-app.jpg`
- `public/projects/blog-cms.jpg`

**Format**: JPG oder WebP, Größe: 1200x675px (16:9)

### 3. Lebenslauf PDF hinzufügen

**Datei hinzufügen:**

```bash
# PDF in public Ordner kopieren
public/cv-jumaa-almarzouk.pdf
```

**Link aktualisieren in `components/hero.tsx`:**

```tsx
<Button variant="outline" size="lg" asChild>
  <a href="/cv-jumaa-almarzouk.pdf" download>
    <Download className="mr-2 h-4 w-4" />
    Lebenslauf (PDF)
  </a>
</Button>
```

### 4. Projekt-Links aktualisieren

**Datei**: `components/projects.tsx`

Ersetze `#` mit echten Links:

```tsx
github: "https://github.com/almarzouk/projekt-name";
live: "https://projekt-url.de";
```

---

## 🎨 Farben anpassen (Optional)

**Datei**: `app/globals.css`

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Deine Hauptfarbe */
  --accent: 142.1 76.2% 36.3%; /* Deine Akzentfarbe */
}
```

**Farben finden**: [HSL Color Picker](https://hslpicker.com/)

---

## 🌐 Deployment in 10 Minuten

### Option 1: Vercel (Empfohlen)

1. **GitHub Repository erstellen**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/IhrUsername/portfolio.git
git push -u origin main
```

2. **Auf Vercel deployen**

   - Gehe zu [vercel.com](https://vercel.com)
   - Klicke "New Project"
   - Importiere GitHub Repo
   - Klicke "Deploy"

3. **Fertig!** Deine URL: `https://ihr-projekt.vercel.app`

### Option 2: Netlify

1. **Build erstellen**

```bash
npm run build
```

2. **Auf Netlify deployen**
   - Gehe zu [netlify.com](https://netlify.com)
   - Drag & Drop den `.next` Ordner
   - Oder verbinde GitHub Repo

---

## 🛠️ Häufige Aufgaben

### Neues Projekt hinzufügen

**Datei**: `components/projects.tsx`

```tsx
const projects = [
  // Dein neues Projekt
  {
    title: "Projekt Titel",
    description: "Kurze Beschreibung",
    longDescription: "Lange Beschreibung",
    technologies: ["React", "Node.js"],
    category: "Fullstack",
    image: "/projects/bild.jpg",
    github: "https://github.com/...",
    live: "https://...",
    featured: true, // für Hervorhebung
  },
  // ... andere Projekte
];
```

### Neue Skill-Kategorie hinzufügen

**Datei**: `components/skills.tsx`

```tsx
const skillCategories = [
  {
    title: "Neue Kategorie",
    icon: Code2, // Icon von lucide-react
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    skills: [{ name: "Skill Name", level: 85 }],
  },
];
```

### Berufserfahrung aktualisieren

**Datei**: `components/about.tsx`

Finde den Bereich "Beruflicher Werdegang" und passe die Positionen an.

---

## 📦 Nützliche Befehle

```bash
# Entwicklungsserver starten
npm run dev

# Production Build erstellen
npm run build

# Production Build testen
npm run start

# Code-Qualität prüfen
npm run lint

# Dependencies aktualisieren
npm update

# Cache löschen
rm -rf .next node_modules
npm install
```

---

## 🐛 Troubleshooting

### Port 3000 bereits belegt

```bash
# Anderen Port verwenden
PORT=3001 npm run dev
```

### Build-Fehler

```bash
# Cache löschen und neu installieren
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### TypeScript-Fehler

```bash
# TypeScript neu kompilieren
npm run build
```

---

## 📚 Weitere Dokumentation

- **Design-Konzept**: Siehe `DESIGN.md`
- **Inhalte**: Siehe `CONTENT.md`
- **Deployment**: Siehe `DEPLOYMENT.md`
- **Allgemein**: Siehe `README.md`

---

## ✅ Checkliste vor dem Launch

- [ ] E-Mail-Adresse aktualisiert
- [ ] Projekt-Bilder hinzugefügt
- [ ] Lebenslauf-PDF hochgeladen
- [ ] Projekt-Links aktualisiert
- [ ] GitHub & LinkedIn Links geprüft
- [ ] Alle Texte geprüft
- [ ] Responsive Design getestet
- [ ] Dark Mode getestet
- [ ] Performance getestet (Lighthouse)
- [ ] SEO-Tags geprüft

---

## 🆘 Hilfe benötigt?

**Dokumentation:**

- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- TypeScript: [typescriptlang.org/docs](https://www.typescriptlang.org/docs)

**Community:**

- Next.js Discord: [nextjs.org/discord](https://nextjs.org/discord)
- Stack Overflow: Tag `next.js`

---

**Viel Erfolg mit deinem Portfolio! 🚀**

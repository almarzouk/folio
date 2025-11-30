# Blog System - Dokumentation

## Übersicht

Das Portfolio enthält jetzt ein vollwertiges Blog-System mit 6 ausführlichen Artikeln über Webentwicklung und KI.

## Struktur

```
/data/blog/posts.json      # Alle Blog-Artikel als JSON
/app/blog/page.tsx          # Blog-Übersichtsseite
/app/blog/[slug]/page.tsx   # Einzelne Artikel-Seite
```

## Features

### ✅ Blog-Übersichtsseite (`/blog`)

- Grid-Layout mit allen Artikeln
- Such-Funktion (Titel, Excerpt, Tags)
- Kategorie-Filter (Frontend, Backend, AI, etc.)
- Responsive Design
- Lesezeit-Anzeige
- Datum-Formatierung (Deutsch)

### ✅ Artikel-Detailseite (`/blog/[slug]`)

- Vollständiger Artikel mit formatiertem Content
- Meta-Informationen (Autor, Datum, Lesezeit)
- Tags und Kategorie
- Ähnliche Artikel (gleiche Kategorie)
- CTA-Bereich
- "Zurück zum Blog" Navigation
- SEO-optimierte Metadata

### ✅ Navigation

- Blog-Link im Header
- Blog-Link im Footer
- Responsive Mobile-Menü

## Vorhandene Artikel (6)

1. **React vs. Next.js** (12 min)

   - Vollständiger Vergleich
   - Wann welches Framework verwenden
   - Migration-Tipps

2. **PHP vs. Laravel** (15 min)

   - Natives PHP vs. Framework
   - Vor- und Nachteile
   - Best Practices

3. **Symfony vs. Laravel** (18 min)

   - PHP-Framework-Vergleich
   - Enterprise vs. Rapid Development
   - Technische Details

4. **KI-Revolution in der Webentwicklung** (20 min)

   - GitHub Copilot, ChatGPT
   - AI-Tools für Entwickler
   - Zukunft der Entwicklung

5. **ChatGPT für Entwickler** (22 min)

   - Praktischer Leitfaden
   - Prompt-Engineering
   - Best Practices

6. **TypeScript vs. JavaScript** (25 min)
   - Detaillierter Vergleich
   - Migration-Guide
   - Wann TypeScript verwenden

## Neue Artikel hinzufügen

Bearbeiten Sie `/data/blog/posts.json`:

```json
{
  "id": 7,
  "slug": "url-freundlicher-slug",
  "title": "Artikel-Titel",
  "excerpt": "Kurze Zusammenfassung (1-2 Sätze)",
  "content": "Vollständiger Artikel-Text in Markdown...",
  "author": "Jumaa Almarzouk",
  "date": "2024-11-XX",
  "category": "Kategorie",
  "tags": ["Tag1", "Tag2"],
  "readTime": "XX min"
}
```

### Content-Formatierung

Der `content` unterstützt:

- `# Überschrift 1`
- `## Überschrift 2`
- `### Überschrift 3`
- `**Fetter Text**`
- Listen mit `- Item` oder `1. Item`
- Code-Blöcke mit \`\`\`code\`\`\`
- Normale Absätze (Leerzeile zwischen Absätzen)

## SEO

Jeder Artikel hat:

- Dynamische Meta-Tags
- OpenGraph-Tags für Social Sharing
- Keywords aus Tags
- Author-Information
- Publish-Date

## Deployment

Das Blog-System ist statisch:

- Alle Artikel werden zur Build-Zeit generiert
- Extrem schnelle Ladezeiten
- SEO-freundlich
- Kostenlos auf Vercel deploybar

## Zukünftige Erweiterungen (Optional)

- [ ] RSS-Feed
- [ ] Suche mit Fuse.js
- [ ] Reading Progress Bar
- [ ] Comments mit Giscus
- [ ] View Counter
- [ ] Table of Contents
- [ ] Code Syntax Highlighting
- [ ] Bilder-Support
- [ ] Markdown-Dateien statt JSON

## Performance

- Static Generation (SSG)
- Optimale Core Web Vitals
- Keine Datenbank erforderlich
- CDN-freundlich

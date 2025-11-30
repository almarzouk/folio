# Deployment-Anleitung

Diese Anleitung zeigt Ihnen, wie Sie Ihr Portfolio auf verschiedenen Plattformen deployen können.

## 🚀 Vercel (Empfohlen)

Vercel ist die empfohlene Plattform für Next.js-Anwendungen und bietet die beste Integration.

### Schritt-für-Schritt Anleitung

#### 1. GitHub Repository erstellen

```bash
# In Ihrem Projektordner
git init
git add .
git commit -m "Initial commit: Portfolio setup"
git branch -M main
git remote add origin https://github.com/IhrUsername/portfolio.git
git push -u origin main
```

#### 2. Vercel Account erstellen

1. Besuchen Sie [vercel.com](https://vercel.com)
2. Klicken Sie auf "Sign Up"
3. Melden Sie sich mit GitHub an

#### 3. Projekt deployen

1. Klicken Sie auf "Add New..." → "Project"
2. Wählen Sie Ihr GitHub Repository aus
3. Vercel erkennt automatisch Next.js
4. Belassen Sie die Standard-Einstellungen:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next
5. Klicken Sie auf "Deploy"

#### 4. Deployment abwarten

- Der erste Build dauert ca. 2-3 Minuten
- Nach Abschluss erhalten Sie eine URL wie: `https://ihr-projekt.vercel.app`

#### 5. Custom Domain (Optional)

1. Gehen Sie zu Ihrem Projekt → "Settings" → "Domains"
2. Fügen Sie Ihre Domain hinzu
3. Folgen Sie den DNS-Anweisungen

### Automatische Deployments

Jedes Mal, wenn Sie Code zu GitHub pushen, wird automatisch ein neues Deployment erstellt:

```bash
git add .
git commit -m "Update: Beschreibung Ihrer Änderungen"
git push
```

---

## 🌐 Netlify

Eine Alternative zu Vercel mit ähnlichen Features.

### Deployment-Schritte

#### 1. Build-Konfiguration

Erstellen Sie `netlify.toml` im Root-Verzeichnis:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

#### 2. Auf Netlify deployen

1. Besuchen Sie [netlify.com](https://netlify.com)
2. Klicken Sie auf "Add new site" → "Import an existing project"
3. Verbinden Sie GitHub und wählen Sie Ihr Repository
4. Build-Einstellungen:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Klicken Sie auf "Deploy site"

---

## 🐳 Docker (Selbst-Hosting)

Für selbst gehostete Deployments.

### Dockerfile erstellen

```dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose (Optional)

```yaml
version: "3.8"

services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### Build und Run

```bash
# Image bauen
docker build -t portfolio .

# Container starten
docker run -p 3000:3000 portfolio
```

---

## 📊 Performance-Optimierung

### Vor dem Deployment

1. **Bilder optimieren**

   - Verwenden Sie WebP-Format
   - Komprimieren Sie alle Bilder
   - Nutzen Sie Next.js Image Component

2. **Bundle analysieren**

```bash
npm install @next/bundle-analyzer

# In next.config.mjs
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Analyze
ANALYZE=true npm run build
```

3. **Environment Variables**

Erstellen Sie `.env.production`:

```env
NEXT_PUBLIC_SITE_URL=https://ihre-domain.de
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
```

---

## 🔒 Sicherheit & Best Practices

### 1. Security Headers

Fügen Sie zu `next.config.mjs` hinzu:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};
```

### 2. Robots.txt

Erstellen Sie `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://ihre-domain.de/sitemap.xml
```

### 3. Sitemap

Erstellen Sie `app/sitemap.ts`:

```typescript
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ihre-domain.de",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
```

---

## 📈 Monitoring & Analytics

### Google Analytics (Optional)

1. **Google Tag Manager installieren**

Erstellen Sie `components/analytics.tsx`:

```typescript
"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </>
  );
}
```

2. **In Layout einbinden**

```typescript
import Analytics from "@/components/analytics";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## ✅ Deployment-Checkliste

Vor dem finalen Deployment:

- [ ] Alle persönlichen Daten aktualisiert
- [ ] E-Mail-Adressen und Links geprüft
- [ ] Bilder optimiert und komprimiert
- [ ] Meta-Tags und SEO-Daten korrekt
- [ ] Responsive Design auf allen Geräten getestet
- [ ] Dark/Light Mode funktioniert
- [ ] Alle Links funktionieren
- [ ] Formular-Validierung getestet
- [ ] Performance-Score > 90 (Lighthouse)
- [ ] Keine Console-Errors
- [ ] Analytics eingerichtet (optional)
- [ ] Custom Domain konfiguriert (optional)

---

## 🆘 Troubleshooting

### Build-Fehler

```bash
# Cache löschen
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Port bereits in Verwendung

```bash
# Prozess finden und beenden
lsof -ti:3000 | xargs kill -9

# Anderen Port verwenden
PORT=3001 npm run dev
```

### Deployment schlägt fehl

1. Prüfen Sie die Build-Logs in Vercel/Netlify
2. Stellen Sie sicher, dass `package.json` korrekt ist
3. Überprüfen Sie Node.js-Version (18+)
4. Testen Sie lokalen Build: `npm run build`

---

## 📞 Support

Bei Problemen:

1. Überprüfen Sie die [Next.js Dokumentation](https://nextjs.org/docs)
2. Lesen Sie die [Vercel Dokumentation](https://vercel.com/docs)
3. Öffnen Sie ein Issue auf GitHub

---

**Viel Erfolg mit Ihrem Portfolio! 🚀**

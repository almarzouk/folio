# Deployment auf Vercel - Anleitung

## 🚀 Schnellstart

### Option 1: Über GitHub (Empfohlen)

#### Schritt 1: GitHub Repository erstellen

1. Gehe zu [GitHub](https://github.com)
2. Klicke auf **"New repository"**
3. Repository-Name: `portfolio` (oder beliebiger Name)
4. **Wichtig**: Wähle **Public** oder **Private**
5. **NICHT** "Initialize with README" anhaken
6. Klicke **"Create repository"**

#### Schritt 2: Code zu GitHub pushen

Führe folgende Befehle im Terminal aus:

```bash
cd /Users/jumaaalmarrzouk/Desktop/portfolio

# Remote hinzufügen (ersetze USERNAME mit deinem GitHub-Username)
git remote add origin https://github.com/USERNAME/portfolio.git

# Branch umbenennen zu main
git branch -M main

# Zu GitHub pushen
git push -u origin main
```

Wenn nach Passwort gefragt wird, verwende ein **Personal Access Token** statt Passwort:

- Gehe zu GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token → Wähle "repo" permissions
- Kopiere das Token und verwende es als Passwort

#### Schritt 3: Auf Vercel deployen

1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke **"Sign Up"** oder **"Login"**
3. Wähle **"Continue with GitHub"**
4. Klicke **"Import Project"** oder **"Add New..."** → **"Project"**
5. Wähle dein `portfolio` Repository aus
6. Vercel erkennt automatisch Next.js
7. **Environment Variables** hinzufügen:
   - Klicke auf **"Environment Variables"**
   - Füge hinzu:
     - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
     - **Value**: `G-3FPJQHZ97M`
     - **Environment**: Alle auswählen (Production, Preview, Development)
8. Klicke **"Deploy"**

⏱️ **Deployment dauert ca. 2-3 Minuten**

### Option 2: Direkt ohne GitHub (Vercel CLI)

```bash
# Vercel CLI installieren
npm install -g vercel

# In Projekt-Verzeichnis
cd /Users/jumaaalmarrzouk/Desktop/portfolio

# Deployen
vercel

# Folge den Prompts:
# - Login mit Email oder GitHub
# - Set up and deploy? Yes
# - Which scope? (dein Account)
# - Link to existing project? No
# - Project name? (Enter für Default)
# - In which directory is your code? ./
# - Override settings? No

# Environment Variable hinzufügen
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID
# Wert eingeben: G-3FPJQHZ97M
# Environments auswählen: Production, Preview, Development

# Production Deployment
vercel --prod
```

## 📋 Nach dem Deployment

### 1. Domain-URL erhalten

Nach erfolgreichem Deployment bekommst du eine URL wie:

- `https://portfolio-username.vercel.app`
- oder
- `https://jumaa-almarzouk.vercel.app`

### 2. Metadata aktualisieren

Öffne `app/layout.tsx` und aktualisiere `metadataBase`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://DEINE-VERCEL-URL.vercel.app"),
  // ...
};
```

Commit und push die Änderung:

```bash
git add app/layout.tsx
git commit -m "Update metadataBase URL"
git push
```

Vercel deployt automatisch neu!

### 3. Custom Domain (Optional)

1. Gehe zu deinem Vercel Project → **Settings** → **Domains**
2. Füge deine Domain hinzu (z.B. `jumaaalmarzouk.com`)
3. Folge den DNS-Anweisungen
4. Vercel stellt automatisch SSL-Zertifikat bereit

### 4. Google Analytics aktualisieren

1. Gehe zu [Google Analytics](https://analytics.google.com)
2. Admin → Data Streams → Web → Deinen Stream auswählen
3. **Website URL** aktualisieren mit deiner Vercel-URL
4. Speichern

### 5. Formspree testen

- Gehe zu deiner Vercel-URL
- Scrolle zu Kontakt-Formular
- Sende Test-Nachricht
- Prüfe Email-Eingang

## 🔄 Zukünftige Updates

### Automatisches Deployment (mit GitHub)

Jedes Mal wenn du zu GitHub pushst, deployt Vercel automatisch:

```bash
# Änderungen machen
# Dateien bearbeiten...

# Commit
git add .
git commit -m "Beschreibung der Änderungen"
git push

# Vercel deployt automatisch!
```

### Manuelles Deployment (ohne GitHub)

```bash
vercel --prod
```

## 🛠️ Troubleshooting

### Build-Fehler

Wenn Deployment fehlschlägt:

1. Lokal testen:

```bash
npm run build
```

2. Fehler beheben
3. Erneut deployen

### Environment Variables vergessen

1. Vercel Dashboard → Projekt → **Settings** → **Environment Variables**
2. Variable hinzufügen
3. **Redeploy** triggern

### Alte Version wird angezeigt

- Warte 1-2 Minuten
- Hard Refresh: `Ctrl/Cmd + Shift + R`
- Oder Incognito-Modus

## ✅ Checkliste vor Deployment

- [x] `npm run build` läuft ohne Fehler
- [x] `.env.local` enthält `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [x] Alle Änderungen committed
- [x] GitHub Account erstellt (für Option 1)
- [x] Vercel Account erstellt

## 📊 Nach Deployment prüfen

1. **Homepage**: `https://DEINE-URL.vercel.app/`
2. **Blog**: `https://DEINE-URL.vercel.app/blog`
3. **Einzelner Artikel**: `https://DEINE-URL.vercel.app/blog/react-vs-nextjs-vollstaendiger-vergleich`
4. **OG Image**: `https://DEINE-URL.vercel.app/og-image`
5. **Kontakt-Formular**: Teste Nachricht senden
6. **Theme Toggle**: Dark/Light Mode testen
7. **Mobile View**: Responsive Design prüfen

## 🎉 Fertig!

Dein Portfolio ist jetzt live!

- 🌐 **URL**: https://DEINE-VERCEL-URL.vercel.app
- 📱 **Mobile-optimiert**
- ⚡ **Blitzschnell**
- 🔍 **SEO-optimiert**
- 📝 **Blog mit 6 Artikeln**
- 📧 **Kontakt-Formular funktioniert**
- 📊 **Google Analytics aktiv**

## 💡 Nächste Schritte (Optional)

1. **Custom Domain** kaufen und verbinden
2. **Mehr Blog-Artikel** hinzufügen
3. **Portfolio-Projekte** aktualisieren
4. **CV** aktualisieren
5. **Neue Features** hinzufügen

---

**Support**:

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- Bei Fragen: GitHub Issues oder Vercel Support

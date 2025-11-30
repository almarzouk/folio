# 🎨 Design-Konzept & Dokumentation

## Übersicht

Dieses Portfolio folgt einem **modernen, minimalistischen Design-Ansatz** mit Fokus auf Lesbarkeit, Performance und professioneller Ausstrahlung.

---

## 🎨 Farbschema

### Light Mode (Standard)

#### Primärfarben

- **Primary**: `hsl(221.2, 83.2%, 53.3%)` - #4F46E5 (Indigo)

  - Verwendung: Buttons, Links, Highlights, Call-to-Actions
  - Psychologie: Vertrauen, Professionalität, Technologie

- **Accent**: `hsl(142.1, 76.2%, 36.3%)` - #10B981 (Grün)
  - Verwendung: Sekundäre Highlights, Success-States
  - Psychologie: Wachstum, Innovation, Erfolg

#### Neutrale Farben

- **Background**: `hsl(0, 0%, 100%)` - #FFFFFF (Weiß)
- **Foreground**: `hsl(222.2, 84%, 4.9%)` - #0F172A (Sehr Dunkelblau)
- **Muted**: `hsl(210, 40%, 96.1%)` - #F1F5F9 (Hellgrau)
- **Border**: `hsl(214.3, 31.8%, 91.4%)` - #E2E8F0 (Grau)

### Dark Mode

#### Primärfarben

- **Primary**: `hsl(217.2, 91.2%, 59.8%)` - #3B82F6 (Helleres Blau)
- **Accent**: `hsl(142.1, 70.6%, 45.3%)` - #22C55E (Helleres Grün)

#### Neutrale Farben

- **Background**: `hsl(222.2, 84%, 4.9%)` - #0F172A (Dunkelblau)
- **Foreground**: `hsl(210, 40%, 98%)` - #F8FAFC (Fast Weiß)
- **Muted**: `hsl(217.2, 32.6%, 17.5%)` - #1E293B (Dunkelgrau)
- **Border**: `hsl(217.2, 32.6%, 17.5%)` - #1E293B

---

## 📝 Typografie

### Schriftart

- **Familie**: Inter (Google Fonts)
- **Fallback**: system-ui, -apple-system, sans-serif
- **Variable Font**: Für optimale Performance

### Schriftgrößen

```
xs:   0.75rem  (12px)
sm:   0.875rem (14px)
base: 1rem     (16px)  ← Standard
lg:   1.125rem (18px)
xl:   1.25rem  (20px)
2xl:  1.5rem   (24px)
3xl:  1.875rem (30px)
4xl:  2.25rem  (36px)
5xl:  3rem     (48px)
```

### Font Weights

- **Regular**: 400 - Body Text
- **Medium**: 500 - Subtle Emphasis
- **Semibold**: 600 - Subheadings
- **Bold**: 700 - Headings, CTAs

### Line Heights

- **Headings**: 1.2 - Kompakt für Impact
- **Body**: 1.6 - Optimale Lesbarkeit
- **UI Elements**: 1.4 - Balance zwischen Dichte und Klarheit

---

## 📐 Spacing & Layout

### Spacing Scale (Tailwind)

```
0:   0px
1:   0.25rem  (4px)
2:   0.5rem   (8px)
3:   0.75rem  (12px)
4:   1rem     (16px)   ← Standard Padding
6:   1.5rem   (24px)
8:   2rem     (32px)
12:  3rem     (48px)
16:  4rem     (64px)   ← Section Spacing
20:  5rem     (80px)
24:  6rem     (96px)
32:  8rem     (128px)  ← Large Section Spacing
```

### Container

- **Max Width**: 1280px (xl)
- **Padding**:
  - Mobile: 16px (4)
  - Tablet: 24px (6)
  - Desktop: 32px (8)

### Section Spacing

- **Mobile**: 80px (20) vertikal
- **Tablet**: 96px (24) vertikal
- **Desktop**: 128px (32) vertikal

---

## 🎯 UI-Komponenten

### Buttons

#### Primary Button

```css
Background: Primary Color (#4F46E5)
Text: White
Padding: 12px 32px
Border Radius: 8px
Hover: Slightly darker (bg-primary/90)
```

#### Secondary Button

```css
Background: Transparent
Border: 1px solid Border Color
Text: Foreground
Padding: 12px 32px
Hover: Slight background (accent/10)
```

### Cards

```css
Background: Card Background
Border: 1px solid Border
Border Radius: 8px
Padding: 24px
Shadow: Subtle shadow on hover
Transition: 300ms smooth
```

### Input Fields

```css
Height: 40px
Padding: 8px 12px
Border: 1px solid Border
Border Radius: 6px
Focus: Ring 2px Primary Color
```

---

## 🌈 UI-Philosophie

### Design-Prinzipien

1. **Minimalismus**

   - Weniger ist mehr
   - Fokus auf Inhalte
   - Keine überflüssigen Dekorationen

2. **Klarheit**

   - Klare Hierarchie
   - Leicht scannbarer Inhalt
   - Intuitive Navigation

3. **Konsistenz**

   - Einheitliche Spacing
   - Wiederholbare Patterns
   - Vorhersagbares Verhalten

4. **Accessibility**
   - WCAG 2.1 AA konform
   - Hohe Kontraste
   - Keyboard-Navigation
   - Screen-Reader freundlich

---

## 🎭 Animationen & Transitions

### Grundprinzipien

- **Subtil**: Nicht ablenkend
- **Schnell**: 200-300ms für UI
- **Smooth**: ease-out für natürliches Gefühl

### Häufige Transitions

```css
/* Hover Effects */
transition: all 0.3s ease-out;

/* Color Changes */
transition: color 0.2s ease-out;

/* Transforms */
transition: transform 0.3s ease-out;
```

### Keyframe Animations

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 📱 Responsive Design

### Breakpoints

```
sm:  640px   - Große Phones
md:  768px   - Tablets
lg:  1024px  - Laptops
xl:  1280px  - Desktops
2xl: 1536px  - Large Desktops
```

### Mobile-First Approach

- Design für Mobile zuerst
- Progressive Enhancement für größere Screens
- Touch-optimierte Tap-Targets (min 44x44px)

### Grid System

```
Mobile:   1 Spalte
Tablet:   2 Spalten
Desktop:  3-4 Spalten
```

---

## 🖼️ Bilder & Icons

### Icons

- **Bibliothek**: Lucide React
- **Größen**: 16px, 20px, 24px
- **Stroke Width**: 2px (Standard)

### Projekt-Bilder

- **Format**: WebP (mit JPG Fallback)
- **Aspect Ratio**: 16:9 für Project Cards
- **Optimierung**: Next.js Image Component

---

## ♿ Accessibility Features

### Farb-Kontrast

- **AA Standard**: Minimum 4.5:1 für normalen Text
- **AAA Standard**: 7:1 für kleine Texte (wo möglich)

### Keyboard Navigation

- Alle interaktiven Elemente fokussierbar
- Sichtbarer Focus-Ring
- Logische Tab-Reihenfolge

### Screen Reader

- Semantisches HTML
- ARIA-Labels wo nötig
- Alt-Texte für Bilder

### Dark Mode

- Automatische System-Präferenz-Erkennung
- Manueller Toggle
- Persistente Speicherung

---

## 📊 Performance-Ziele

### Lighthouse Scores

- **Performance**: > 95
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Ladezeiten

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Largest Contentful Paint**: < 2.5s

---

## 🎨 Design-Tokens

### Border Radius

```css
--radius-sm: 4px   - Small elements
--radius-md: 6px   - Default
--radius-lg: 8px   - Cards, Buttons
--radius-xl: 12px  - Large containers
```

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
--shadow-md: 0 4px 6px rgba(0,0,0,0.1)
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1)
```

---

## 🔄 Design-Workflow

### Komponenten-Hierarchie

1. **Atoms**: Button, Input, Icon
2. **Molecules**: Card, Form Field, Nav Item
3. **Organisms**: Header, Footer, Section
4. **Templates**: Page Layout
5. **Pages**: Complete Views

### Style-Guide

Alle Komponenten folgen dem definierten Design-System für maximale Konsistenz.

---

**Design erstellt für maximale Benutzerfreundlichkeit und professionelle Ausstrahlung.**

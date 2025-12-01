# Modern Shopify Theme

Ein professionelles, modernes Shopify-Theme mit **Tailwind CSS** und **React** für interaktive Komponenten.

## Features

- 🎨 **Tailwind CSS** - Modernes Utility-First CSS Framework
- ⚛️ **React** - Interaktive Komponenten für bessere UX
- 🚀 **Hero-Banner** - Auffälliger Hero-Bereich mit modernem Design
- 🛒 **Sales-Pipeline** - Professioneller E-Commerce-Flow
- 📱 **Vollständig Responsive** - Optimiert für alle Geräte
- ⚡ **Performance-Optimiert** - Schnelle Ladezeiten
- 🎯 **SEO-Freundlich** - Meta-Tags und strukturierte Daten

## Installation

### 1. Dependencies installieren

```bash
npm install
```

### 2. CSS builden (Tailwind)

```bash
# Development (mit Watch-Mode)
npm run watch

# Production Build
npm run build
```

### 3. React-Komponenten builden

```bash
# Development (mit Watch-Mode)
npm run watch:react

# Production Build
npm run build:react
```

### 4. Theme zu Shopify hochladen

Das Theme kann direkt über GitHub in Shopify importiert werden:

1. Gehen Sie zu **Online Store > Themes**
2. Klicken Sie auf **Add theme > Add from GitHub**
3. Geben Sie die Repository-URL ein
4. Nach dem Import aktivieren Sie das Theme

**Wichtig:** Nach dem Import müssen Sie die CSS- und JS-Dateien builden. Sie können entweder:
- Lokal builden und die generierten Dateien committen
- Oder Shopify's Theme Development Tools verwenden

## Theme-Struktur

```
ShopifyTheme/
├── assets/
│   ├── input.css          # Tailwind Input (wird zu base.css kompiliert)
│   ├── base.css           # Kompilierte Tailwind CSS
│   ├── global.js          # Globale JavaScript-Funktionalität
│   ├── react-components.jsx # React-Komponenten
│   └── react-components.js  # Kompilierte React-Komponenten
├── config/
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/
│   └── theme.liquid
├── sections/
│   ├── hero-banner.liquid
│   ├── featured-collections.liquid
│   ├── featured-products.liquid
│   ├── main-product.liquid
│   └── main-collection.liquid
├── snippets/
│   ├── header.liquid
│   ├── footer.liquid
│   └── product-card.liquid
├── templates/
│   ├── index.json
│   ├── product.json
│   └── collection.json
├── package.json
├── tailwind.config.js
├── webpack.config.js
└── postcss.config.js
```

## Design-System

Das Theme verwendet Tailwind CSS mit einem konsistenten Design-System:

- **Farben**: Anpassbar über Theme-Einstellungen
- **Typografie**: Moderne, lesbare Schriftarten
- **Spacing**: Konsistente Abstände
- **Components**: Wiederverwendbare UI-Komponenten

### Tailwind-Klassen

Das Theme nutzt Utility-Klassen von Tailwind:

```html
<!-- Buttons -->
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-accent">Accent Button</button>

<!-- Cards -->
<div class="card">Card Content</div>
<div class="product-card">Product Card</div>

<!-- Container -->
<div class="container-custom">Content</div>
```

## React-Komponenten

Das Theme verwendet React für interaktive Komponenten:

- **ProductCard** - Interaktive Produktkarten mit Add-to-Cart
- **CartCount** - Dynamischer Warenkorb-Zähler

React wird über CDN geladen, die Komponenten werden über Webpack kompiliert.

## Entwicklung

### Lokale Entwicklung

1. Installieren Sie die Dependencies: `npm install`
2. Starten Sie den Watch-Mode für CSS: `npm run watch`
3. Starten Sie den Watch-Mode für React: `npm run watch:react`
4. Verwenden Sie Shopify CLI für Theme-Entwicklung

### Shopify CLI

```bash
# Theme hochladen
shopify theme push

# Live-Vorschau
shopify theme dev
```

## Anpassungen

### Farben ändern

Farben können im Shopify Admin unter **Theme Settings** angepasst werden.

### Tailwind konfigurieren

Bearbeiten Sie `tailwind.config.js` um das Design-System anzupassen.

### React-Komponenten erweitern

Bearbeiten Sie `assets/react-components.jsx` und builden Sie mit `npm run build:react`.

## Browser-Unterstützung

- Chrome (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Edge (letzte 2 Versionen)

## Support

Bei Fragen oder Problemen erstellen Sie bitte ein Issue im GitHub-Repository.

## Lizenz

Dieses Theme ist für den kommerziellen und privaten Gebrauch frei verfügbar.

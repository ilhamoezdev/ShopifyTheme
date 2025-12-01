# Modern Shopify Theme

Ein modernes, produktionsreifes Shopify-Theme mit Hero-Banner und Sales-Pipeline-Funktionalität.

## Features

- 🎨 **Modernes Design-System** - Einheitliches, responsives Design mit Glassmorphism-Effekten
- 🚀 **Hero-Banner** - Auffälliger Hero-Bereich mit anpassbaren Gradienten und Call-to-Action
- 🛒 **Sales-Pipeline** - Direkter Einkaufsfluss mit Produktkategorien und Featured Products
- 📱 **Vollständig Responsive** - Optimiert für alle Geräte
- ⚡ **Performance-Optimiert** - Schnelle Ladezeiten und optimierte Assets
- 🎯 **SEO-Freundlich** - Meta-Tags und strukturierte Daten

## Theme-Struktur

```
ShopifyTheme/
├── assets/              # CSS, JavaScript und andere Assets
│   ├── base.css        # Basis-Styles und Design-System
│   ├── global.js       # Globale JavaScript-Funktionalität
│   └── section-*.css   # Section-spezifische Styles
├── config/             # Theme-Konfiguration
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/             # Theme-Layout
│   └── theme.liquid
├── locales/            # Übersetzungen
│   ├── de.json
│   └── en.default.json
├── sections/           # Wiederverwendbare Sections
│   ├── hero-banner.liquid
│   ├── featured-collections.liquid
│   ├── featured-products.liquid
│   ├── main-product.liquid
│   ├── main-collection.liquid
│   └── related-products.liquid
├── snippets/           # Wiederverwendbare Code-Snippets
│   ├── header.liquid
│   ├── footer.liquid
│   ├── product-card.liquid
│   └── meta-tags.liquid
└── templates/          # Seiten-Templates
    ├── index.json
    ├── product.json
    └── collection.json
```

## Installation über GitHub

### Schritt 1: Repository auf GitHub hochladen

1. Erstellen Sie ein neues Repository auf GitHub
2. Pushen Sie diesen Code in das Repository:

```bash
git init
git add .
git commit -m "Initial commit: Modern Shopify Theme"
git branch -M main
git remote add origin https://github.com/IHR-USERNAME/IHR-REPO.git
git push -u origin main
```

### Schritt 2: Theme in Shopify importieren

1. Gehen Sie zu Ihrem Shopify Admin
2. Navigieren Sie zu **Online Store > Themes**
3. Klicken Sie auf **Add theme > Add from GitHub**
4. Geben Sie die GitHub-Repository-URL ein
5. Klicken Sie auf **Connect** und folgen Sie den Anweisungen
6. Nach dem Import können Sie das Theme aktivieren

## Konfiguration

### Theme-Einstellungen

Nach dem Import können Sie das Theme im Shopify Admin unter **Online Store > Themes > Customize** anpassen:

- **Colors**: Primär-, Sekundär- und Akzentfarben
- **Typography**: Schriftarten für Überschriften und Body-Text
- **Header**: Logo-Text und Suchfunktion
- **Footer**: Footer-Text und Links

### Sections konfigurieren

#### Hero-Banner
- Überschrift und Text
- Button-Label und Link
- Hintergrundbild
- Gradient-Farben

#### Featured Collections
- Titel und Beschreibung
- Anzahl der Spalten
- Zu zeigende Collections

#### Featured Products
- Titel und Beschreibung
- Collection auswählen
- Anzahl der Produkte
- Anzahl der Spalten

## Sales-Pipeline

Das Theme bietet eine vollständige Sales-Pipeline:

1. **Hero-Banner** - Erste Aufmerksamkeit und Call-to-Action
2. **Featured Collections** - Produktkategorien für einfache Navigation
3. **Featured Products** - Hervorgehobene Produkte zum direkten Kauf
4. **Product Pages** - Detaillierte Produktseiten mit Variantenauswahl
5. **Collection Pages** - Übersichtliche Produktlisten
6. **Add to Cart** - Direkter Warenkorb-Zugriff

## Design-System

Das Theme verwendet ein konsistentes Design-System mit:

- **Farben**: Anpassbar über Theme-Einstellungen
- **Typografie**: Moderne, lesbare Schriftarten
- **Spacing**: Konsistente Abstände (xs, sm, md, lg, xl, 2xl)
- **Border Radius**: Einheitliche abgerundete Ecken
- **Shadows**: Subtile Schatten für Tiefe
- **Transitions**: Sanfte Übergänge für bessere UX

## Browser-Unterstützung

- Chrome (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Edge (letzte 2 Versionen)

## Anpassungen

### Eigene Styles hinzufügen

Fügen Sie Ihre eigenen Styles in `assets/base.css` hinzu oder erstellen Sie neue CSS-Dateien in `assets/`.

### Neue Sections erstellen

Erstellen Sie neue `.liquid`-Dateien in `sections/` und fügen Sie sie zu Ihren Templates hinzu.

### JavaScript erweitern

Erweitern Sie `assets/global.js` oder erstellen Sie neue JavaScript-Dateien.

## Support

Bei Fragen oder Problemen erstellen Sie bitte ein Issue im GitHub-Repository.

## Lizenz

Dieses Theme ist für den kommerziellen und privaten Gebrauch frei verfügbar.


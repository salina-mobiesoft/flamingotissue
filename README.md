# FlamingoTissue.com

> Official static website for **Flamingo Paper Products, Inc.**, reconstructed from scratch using **AstroJS (v5)** based on reference archives from the live site and the Wayback Machine.

---

## 📖 Overview

This repository contains the complete, modern, responsive website for **FlamingoTissue.com**. The project faithfully reproduces the original branding, color palette (`#ff61c5` Flamingo Pink and `#c2006c` Magenta), image banners, hero slider, navigation, product catalog, executive leadership team, and customer service resources.

### Key Highlights
- **Zero Database Dependency:** Pure static architecture compiled with AstroJS. All user actions, wholesale inquiries, quote builders, and support requests link directly to client-side `mailto:support@flamingotissue.com` handlers.
- **Faithful Restoration:** Restored all recoverable pages (`/management`, `/faqs`, `/contact-us`, `/delivery-info`, `/privacy`, `/terms-conditions`, `/legal-agreement`).
- **Full SEO & Social Sharing:** Includes responsive viewport meta, canonical URLs, OpenGraph tags, Twitter Card metadata, Schema.org `Organization` JSON-LD structured data, dynamic XML sitemap (`/sitemap.xml`), and `robots.txt`.
- **Accessibility (a11y):** Semantic HTML5 landmarks, WCAG 2.1 AA color contrast compliance, ARIA labels, skip-to-content links, and keyboard-accessible mobile drawer navigation.
- **Untouched Resources:** The `resources/` folder was created first and preserved untouched.
- **Audit Reports & Screenshots:** Comprehensive reports and headless Chromium visual snapshots saved in `artifacts/`.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.17.0 or later (Node v20+ or v26+ recommended)
- **npm**: v9+ (or pnpm / yarn)

### Installation
Clone or navigate to the repository directory and install the dependencies:

```bash
npm install
```

### Development Server
Start the local development server with hot-module reloading:

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) in your browser.

### Production Build
Compile the static website for production deployment:

```bash
npm run build
```

The compiled static assets and HTML pages will be output to the `dist/` directory.

### Preview Production Build
Preview the locally built `dist/` output:

```bash
npm run preview
```

---

## 🗂️ Project Structure

```text
FlamingoTissue/
├── .gitignore               # Git ignore patterns
├── README.md                # Project documentation
├── astro.config.mjs         # Astro site configuration
├── package.json             # NPM dependencies and build scripts
├── artifacts/               # Test audit reports and visual screenshots
│   ├── VERIFICATION_REPORT.md
│   ├── 01_homepage_desktop.png
│   ├── 02_homepage_mobile.png
│   └── ... (additional page screenshots)
├── resources/               # Pristine reference folder (untouched)
├── public/                  # Static assets (images, banners, logos, icons)
│   ├── flamingo-tissue-1500h.png
│   ├── flamingo-manufacturing-1500w.jpg
│   ├── flamingo-tissue-1-1140x380-500h.jpg
│   ├── management-1-200h.jpg through management-7-200h.jpg
│   ├── pink-12-200x200-200h.jpg through pink-48-500x500-200h.jpg
│   └── blue-12-200x200-200h.jpg through blue-48-228x228-200h.jpg
└── src/
    ├── components/          # Reusable Astro UI components
    │   ├── Header.astro     # Responsive navigation, announcement bar & mobile drawer
    │   ├── Footer.astro     # 4-column footer with information & support links
    │   ├── HeroSlider.astro # Accessible 4-slide banner carousel
    │   └── ProductCard.astro# Product showcase card with specs & inquiry actions
    ├── data/                # Data models
    │   ├── products.js      # Product catalog specifications
    │   └── team.js          # Executive leadership biographies
    ├── layouts/
    │   └── Layout.astro     # Core HTML shell with full SEO, OG & JSON-LD
    ├── styles/
    │   └── global.css       # Brand design tokens, colors & typography
    └── pages/               # Routing matrix
        ├── index.astro      # Home (Hero slider, featured products, brand values)
        ├── about.astro      # About Flamingo (Story, history & factory image)
        ├── wholesale.astro  # Wholesale sales & commercial distribution programs
        ├── management.astro # Management (Bios & headshots for 8 leaders)
        ├── faqs.astro       # Interactive FAQ accordions (Septic safety & plies)
        ├── products.astro   # Complete 6-product catalog & technical specs
        ├── contact-us.astro # Contact details & mailto message composer
        ├── specials.astro   # Special offers & volume discount tiers
        ├── legal-agreement.astro # Legal Statement & DMCA copyright terms
        ├── delivery-info.astro   # Freight transit times & pallet logistics
        ├── privacy.astro    # Privacy policy & California resident disclosures
        ├── terms-conditions.astro # Terms of sale & service
        ├── returns.astro    # Product returns policy & RMA composer
        ├── sitemap.astro    # Full HTML directory and site map
        ├── gift-certificates.astro # Commercial purchase vouchers
        ├── affiliates.astro # Regional distributor program
        ├── 404.astro        # Custom 404 error page
        ├── robots.txt.ts    # Dynamic robots.txt
        └── sitemap.xml.ts   # Dynamic XML sitemap
```

---

## 📄 Restored Pages & Directory

| Route | Title | Key Features |
| :--- | :--- | :--- |
| `/` | **Home** | Hero slider with all 4 original banners, lead statement, featured products, values |
| `/about` | **About Flamingo** | History since 1965, manufacturing facility photo, quality standards |
| `/wholesale` | **Wholesale** | Original emails (`sales@`, `info@`, `jobs@`, `support@`), quote builder |
| `/management` | **Management** | Complete leadership biographies and photos for all 8 executives |
| `/faqs` | **FAQs** | Interactive accordions for septic safety, sewer compatibility & ply specs |
| `/products` | **Products** | 6-product catalog, Super & Plus series filter, technical specs comparison |
| `/contact-us` | **Contact Us** | Facility address (City of Industry, CA), phone (888-580-8091), direct `mailto:support@flamingotissue.com` |
| `/specials` | **Special Offers** | Restored special offers notice & tiered wholesale volume discount pricing |
| `/legal-agreement` | **Legal Agreement** | Complete legal statement, trademark notice & copyright infringement terms |
| `/delivery-info`| **Delivery Information** | Freight transit times, LTL/FTL pallet shipping, receiving inspection |
| `/privacy` | **Privacy Policy** | Full privacy policy, California Civil Code disclosures, cookie notices |
| `/terms-conditions` | **Terms & Conditions** | Commercial terms of service, payment terms, and governing California law |
| `/returns` | **Product Returns** | Customer return guidelines & direct RMA request composer |
| `/sitemap` | **Site Map** | Complete HTML directory of all pages and product collections |
| `/gift-certificates` | **Gift Certificates** | Corporate purchase vouchers & credit inquiries |
| `/affiliates` | **Affiliates** | Regional distributor & commercial supply partner program |
| `/404` | **404 Page** | Friendly error recovery page |
| `/robots.txt` & `/sitemap.xml` | **Search Engine Directives** | Full crawler indexing support |

---

## 🎨 Branding & Design Tokens

- **Primary Pink:** `#ff61c5`
- **Magenta / Accent Dark Pink:** `#c2006c`
- **Soft Pink Tint:** `#fff0f9`
- **Text Color:** `#191818` / `#595959`
- **Font Family:** `Inter`, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

---

## 📞 Support & Contacts

- **Customer Support Email:** [support@flamingotissue.com](mailto:support@flamingotissue.com)
- **Wholesale Sales:** [sales@flamingotissue.com](mailto:sales@flamingotissue.com)
- **General Inquiries:** [info@flamingotissue.com](mailto:info@flamingotissue.com)
- **Careers:** [jobs@flamingotissue.com](mailto:jobs@flamingotissue.com)
- **Telephone:** [888-580-8091](tel:888-580-8091)
- **Address:** 15117 Salt Lake Avenue, City of Industry, CA 91746

---

*Copyright &copy; 1965 - 2017 Flamingo Paper Products, Inc. All Rights Reserved.*

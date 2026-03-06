

## Plan: Build Highlux.in Premium Lighting E-Commerce Website

This is a full rebuild of the existing blog template into a premium lighting e-commerce site. The project will be restructured with new pages, components, data, and a dark/warm color scheme.

---

### Phase 1: Foundation & Theming

**Color System Overhaul** (`src/index.css`)
- Dark primary background (`hsl(220 20% 8%)`) with warm gold accents (`hsl(42 80% 55%)`)
- Light mode: clean white/warm gray with gold accents
- New CSS variables for `--gold`, `--warm-white`, `--dark-surface`

**Typography Update** (`index.html`, `tailwind.config.ts`)
- Swap to premium fonts: Playfair Display (headings) + Inter (body)
- Update Google Fonts import

**Logo Component** (`src/components/HighluxLogo.tsx`)
- SVG-based "HIGHLUX.IN" wordmark with a glow/beam accent element
- Works on dark and light backgrounds via `currentColor`

---

### Phase 2: Shared Components

| Component | Purpose |
|---|---|
| `Header.tsx` | Rewrite with Highlux branding, 6-page nav, dark theme |
| `Footer.tsx` | New footer with contact info, quick links, social icons, WhatsApp |
| `WhatsAppButton.tsx` | Floating WhatsApp icon on all pages, links to `wa.me/918287223086` |
| `CategoryCard.tsx` | Reusable card for product category grids (image, title, CTA) |
| `HeroBanner.tsx` | Full-width hero with background image, overlay text, CTA buttons |
| `SectionHeading.tsx` | Reusable heading with decorative accent line |

---

### Phase 3: Data Layer

**New data files:**
- `src/data/categories.ts` — All category definitions for Landscape, Underwater, Architectural with names, descriptions, placeholder images (Unsplash lighting photos)
- `src/data/blogs.ts` — 5 blog posts (LED benefits, landscape guide, underwater guide, indoor vs outdoor, energy efficiency)

**Remove:** `src/data/articles.ts` and old Article type

---

### Phase 4: Pages (6 main + supporting)

**1. Home Page** (`src/pages/Index.tsx`)
- Full-width hero slider with 3 slides (landscape, underwater, architectural lighting images)
- "Why Highlux" features section with icons
- 3 category preview cards with "Explore" buttons
- Testimonials/trust section
- CTA banner ("Get Quote")
- Newsletter signup

**2. Landscape Lighting** (`src/pages/LandscapeLighting.tsx`)
- Hero banner with landscape lighting background
- 6 category cards in responsive grid: Bollard Lights, Tree Uplighter, Ground Burial, Pathway Highlighter, Wall Lights, Wall Washer
- Each card: placeholder image, title, brief description, "View Products" button (links to empty placeholder for now)

**3. Underwater Lighting** (`src/pages/UnderwaterLighting.tsx`)
- Hero with pool/fountain background, subtle CSS water ripple effect
- 4 category cards: Pool Surface Mounted, Ground/Wall Recessed IP68, Fountain Nozzle Mounted, Stand Mounted Adjustable
- Water-themed decorative elements

**4. Architectural Lighting** (`src/pages/ArchitecturalLighting.tsx`)
- Hero with architectural interior lighting background
- 9 category cards in grid: Panel Lights, Concealed & COB, SMPS Drivers, Wall Washer Indoor, Track Lights, Magnetic Track, Surface Mounted Indoor, Street/Flood Lights, Spot Lights

**5. Blogs** (`src/pages/Blogs.tsx`)
- Blog listing page with 5 SEO-optimized lighting articles
- Card grid with featured image, title, excerpt, date, read time
- Individual blog detail page (`src/pages/BlogPost.tsx`)

**6. Contact Us** (`src/pages/Contact.tsx`)
- Google Maps embed (iframe with the Chandni Chowk address)
- Contact form: Name, Phone, Email, Message fields with validation
- Address, phone, business hours display
- WhatsApp direct link

---

### Phase 5: Routing & Cleanup

**Update `App.tsx`:**
- Remove old routes (Wellness, Travel, Creativity, Growth, Article, Authors, StyleGuide, Privacy, Terms)
- Add new routes: `/`, `/landscape-lighting`, `/underwater-lighting`, `/architectural-lighting`, `/blogs`, `/blogs/:slug`, `/contact`

**Remove old files:** Old page components, old data, old HeroSection, IntroSection, ArticleCard

---

### Phase 6: Polish

- Smooth scroll animations on all sections (intersection observer or CSS)
- Hover effects on category cards (scale + glow)
- WhatsApp floating button on every page via App.tsx
- Mobile responsive: hamburger menu, stacked grids, touch-friendly
- Unsplash images for all hero/category backgrounds (lighting-themed queries)

---

### Technical Notes
- No backend needed for this phase; all data is static
- E-commerce structure is placeholder-ready (category pages link to future product listings)
- Blog content will be hardcoded in the data file, SEO-friendly with proper heading hierarchy
- WhatsApp link format: `https://wa.me/918287223086`
- Google Maps embed uses the provided Delhi address


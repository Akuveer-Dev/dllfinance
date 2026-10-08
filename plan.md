# Dhana Lakshmi Loans — Implementation Plan

## Product and implementation

Build a one-page, responsive marketing and loan-enquiry website for Dhana Lakshmi Loans (DLL) using **Next.js App Router, React, JavaScript, Tailwind CSS, and Motion/Framer Motion where useful**. The initialized managed project is empty, so set up the requested stack explicitly. Keep loan products, hero carousel slides, FAQs, benefits, financial goals, and testimonial placeholders in separate editable data modules. Use reusable presentation components for navigation, cards, FAQ rows, sections, CTAs, forms, and footer. Keep application enquiry forms client-side with basic validation and clear confirmation; do not imply a loan application was transmitted or approved. There is no configured phone/email, map credential, loan engine, or backend submission endpoint, so represent contact details, business hours, map integration, and legal pages with honest labeled placeholders/anchors and avoid fabricated contact channels. The optional Google Maps capability was not selected.

Keep a static `/manus-routes.json` for the home route before starting the preview server. Add page metadata, semantic headings, accessible interactions, and crawlable initial content. This is a public informational website; do not enable server/database services without a need.

### Project structure

- `app/` — App Router layout, global styles, and landing page.
- `components/` — reusable navigation, hero/carousel, feature/loan cards, process timeline, testimonial placeholders, FAQ accordion, enquiry form, CTA and footer.
- `data/` — editable loan types, carousel slide descriptions, trust/benefit items, goals, FAQs, footer links, and clearly identified placeholder reviews.
- `data/siteContent.js` — references the six independently generated Indian-context hero-carousel images using their returned Managed Storage URLs; update slide records here to change imagery.
- `public/manus-routes.json` — page route manifest.
- `plan.md` and `TODO.md` — approved implementation/design decisions and complete outcome acceptance clauses.

## Design direction

- **Design Movement:** Contemporary Indian consumer-finance editorial design: warm, bright, human-centered and confidence-building rather than bank-dashboard or luxury-finance.
- **Core Principles:** 1) reassuring clarity; 2) human-scale local relevance; 3) energetic simplicity; 4) responsible, candid language.
- **Color Philosophy:** Bright energetic blue is DLL’s recognizable anchor and conveys capable, dependable assistance; happy yellow adds optimism and highlights primary actions; white and blue/yellow tints maintain openness and readable contrast. Restrict brand UI colors to blue, yellow, white and their tints/shades; avoid separate decorative color families.
- **Layout Paradigm:** An editorial, asymmetric split hero with text on one side and a framed, gently rotating local-life visual on the other; subsequent sections alternate full-width bands, offset cards and a horizontal-to-stacked process path rather than repeating a uniform centered grid.
- **Signature Elements:** A compact custom DLL monogram mark built from a rounded blue tile and a yellow rising-path/coin motif; soft pill labels and hand-drawn-style curved connectors; oversized rounded carousel window with small, tactile indicators.
- **Interaction Philosophy:** Make the next step clear and low-pressure. Navigation anchors, forms, FAQ rows, and carousel controls work with keyboard/touch and explicit focus states; form feedback clearly describes only local form completion.
- **Animation:** Use restrained Motion transitions for carousel fades/slight image drift and section entrance; honor reduced-motion preference; keep layout dimensions stable and avoid animated numeric/financial claims.
- **Typography System:** Use an expressive, friendly sans such as Manrope for headings and Inter for body/UI (with system fallbacks); bold short headline hierarchy, comfortably readable body copy, tabular clarity for labels and ample line height.
- **Brand Essence:** “Approachable lending guidance for everyday Indian goals”—trustworthy, helpful, clear.
- **Brand Voice:** Plain-spoken, warm and non-pressuring. Examples: “Finance that moves with you.” “Tell us what you need; we’ll help you explore your options.”
- **Wordmark & Logo:** Custom DLL mark: blue rounded square with a yellow, upward-curving path suggesting a way forward, paired with a carefully spaced “DHANA LAKSHMI LOANS” wordmark; avoid a default-font-only logo.
- **Signature Brand Color:** Energetic DLL blue (`#1769E8`), supported by joyful yellow (`#FFD84D`) and white.

## Delivery constraints

Use the managed web project and its current preview/runtime configuration. Do not publish unless the user requests publication; deliver the live preview URL. Do not invent phone/email contacts, company history, licenses, awards, interest rates, approval claims, processing times, statistics, or real customer testimonials. Keep any testimonial content visibly marked as replaceable placeholder material. The data-driven architecture must make changing loan categories, hero messages, and FAQ content independent of component redesign.

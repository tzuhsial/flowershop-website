# Cat Safe Flowers

Premium one-page landing site for **Cat Safe Flowers**, a small-batch florist in Newton, Massachusetts focused on lily-free, cat-conscious bouquet drops.

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- App Router
- Static site, no backend

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Production Build

```bash
npm run build
npm run start
```

## Project Structure

```text
src/app
  globals.css
  layout.tsx
  page.tsx
src/components
  AnimatedSection.tsx
  Badge.tsx
  BouquetCard.tsx
  ButtonLink.tsx
  SectionHeading.tsx
src/lib
  data.ts
public
  images
```

## Notes

- The preorder form is UI-only and does not submit anywhere yet.
- The contact flow supports order interest, sales inquiries, and general reach-outs.
- Floral visuals are local placeholder art designed to approximate an editorial photography direction.
- The site includes pet-safety disclaimers and avoids claims that any bouquet is safe for ingestion.

## Suggested Next Improvements

- Shopify integration for product inventory and fulfillment
- Stripe preorder checkout
- Instagram embedding for fresh bouquet drops
- Email capture and waitlist flow
- CMS/admin panel for bouquet drops, FAQs, and gallery updates

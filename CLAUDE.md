# IMSC 2027 — Next.js landing page

Static, responsive one-page site for the 12th International Maritime Science Conference in Split, 6–7 May 2027.

## Stack

- Next.js App Router with TypeScript and React Server Components by default
- GSAP and ScrollTrigger, with `@gsap/react` `useGSAP` for scoped animation setup and cleanup
- CSS Modules for reusable components and each page section
- `next/font` Inter Tight font
- Local photographs and partner logos in `public/`

## Structure

- `app/` — root layout, landing page, and global styles
- `components/` — reusable Button, SectionHeader, SplitText, RevealImage, Marquee, Avatar, Container, and Tag components
- `sections/` — one folder and CSS Module per landing-page section
- `data/content.ts` — typed placeholder content consumed by the page sections
- `styles/theme.css` — shared color, type, spacing, layout, radius, and easing tokens
- `public/` — conference imagery, logos, and favicon assets

## Page order

Nav, Hero, Ticker, About, Why Attend, Speakers, Programme, Testimonials, Registration, Partners, Host, FAQ, CTA/countdown, Gallery, Footer.

## Animations

Animations are initialized in the client-side `components/AnimationRoot.tsx` and scoped with `useGSAP`. The page supports hero intro and parallax, word reveals, image clip reveals, batched card/row reveals, velocity-reactive marquees, FAQ transitions, CTA background scale, and a countdown to `2027-05-06T09:00:00+02:00`. Reduced-motion preferences disable GSAP motion, and content remains visible without JavaScript.

## Development

Run `npm run dev` to start the site, `npm run lint` to run ESLint, and `npm run build` to create a production build.

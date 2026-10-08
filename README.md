# Zookini Tours

Marketing site for [Zookini Tours](https://www.zookini.co.za/), a boutique tour house in the Cape Winelands. The public domain stays **zookini.co.za**. DNS is not configured in this repo.

## Stack

- Next.js (App Router) at the repository root
- TypeScript
- Tailwind CSS v4
- `next` is a production dependency in `package.json`, so Vercel can detect the app with the default Root Directory

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

`package-lock.json` is the lockfile. `npm ci` is the clean install. `pnpm install` and `pnpm build` also work if you prefer pnpm; commit a `pnpm-lock.yaml` if that becomes the team default.

## Deploy on Vercel

1. Import this GitHub repository.
2. Leave **Root Directory** as the repository root. Do not point it at a subfolder.
3. Framework preset: Next.js. No environment variables are required for v1.
4. Production branch: `main`.
5. When you are ready for the custom domain, add `zookini.co.za` in the Vercel project and point DNS there. Nothing in this codebase registers the domain.

## Brand

Direction: Celebration Host + Journey Gallery. Tagline: **Celebrating Life!** / **Celebrate Life!**

| Token | Hex | Use |
| --- | --- | --- |
| Primary teal | `#80A6AD` | Hero washes, bands |
| Dark teal | `#607D82` | Wordmark, depth |
| Accent | `#BAD2D6` | Chips, borders |
| Logo sky | `#6EC8E8` | Sunburst only |
| Off-white | `#EDEFF0` | Page ground |
| White | `#FFFFFF` | Cards |
| Body | `#5E5E5E` | Copy |
| Muted | `#9C9C9C` | Non-essential meta |
| Ink | `#3E5559` | Same teal family, deepened so small white text meets WCAG AA |

Type: Raleway for display and labels, Futura / system sans for body, Cookie for short flourishes only.

The official mark is the supplied sunburst: **ZOOKINI TOURS** arched above, **CELEBRATE LIFE!** below. Files: `public/logo-zookini.jpeg` (original), `public/logo-zookini.png` (white knocked out, for light grounds), and `public/logo-zookini-on-dark.png` (white wordmark, cyan sun, for teal bands). The header, footer, and About page use `src/components/Logo.tsx`. The browser icon is the sunburst; the apple touch icon is the full mark on off-white.

Voice: a warm host. Leisure, corporate, and educational journeys. Small groups, usually 12 to 16, with a Tour Director.

## Contact

- Phone / WhatsApp: +27 82 334 8854 (`https://wa.me/27823348854`)
- Email: anita@zookini.co.za
- Facebook: https://www.facebook.com/zookinitours/
- Instagram: https://www.instagram.com/zookinitours/
- Pinterest: http://pinterest.com/ZookiniTours

## Enquire (v1)

Tour pages and `/enquire` share one form: name, email, phone, tour or pillar, dates, group size, message.

v1 opens a `mailto:anita@zookini.co.za` message. **TODO:** replace that stub with a real backend (Route Handler plus an email provider). See the comment in `src/components/EnquireForm.tsx`.

WhatsApp is a deep link to +27823348854 on the homepage, tour pages (sticky on desktop, bar on mobile), `/enquire`, `/contact`, corporate, and educational.

## Routes

| Path | Page |
| --- | --- |
| `/` | Host hero, three pillars, filterable mosaic, three-step strip, Anita note, contact band |
| `/tours` | Full catalogue and theme chips (`?theme=foodie` and the other theme ids) |
| `/tours/[slug]` | Story, facts, outline, includes, enquire form, link to policies |
| `/corporate` | Breakaways and named clients |
| `/educational` | Outdoor classroom |
| `/about` | House story |
| `/enquire` | Shared form (`?tour=` pre-selects a tour, `corporate`, or `educational`) |
| `/contact` | Phone, email, WhatsApp, Paarl |
| `/policies` | Booking conditions (not repeated in full on every tour) |

Tour names in the seed include Women & Wine Weekend (not the older “Woman & Wine” spelling).

Photography in `public/images` is placeholder stock until Zookini’s own library arrives.

## Content

Copy and tour outlines live in `src/content/tours.ts` and `src/content/site.ts`. Day-by-day blocks for routes without a published clock are marked as outlines.

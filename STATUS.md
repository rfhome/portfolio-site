_Last updated: 2026-07-15_

## What this app is

Personal portfolio site for Roberto Fonseca (catalystedgeconnect.com). React 18 + TypeScript SPA built with Vite 5 and Tailwind CSS v3. Deployed to Vercel (auto-deploy on push to `main`). DNS via Cloudflare (GoDaddy nameservers → Cloudflare → Vercel). Contact form uses a `/api/contact` Vercel serverless function with Cloudflare Turnstile bot protection and Resend email delivery.

## Current state

**Live and healthy.** In active use at https://www.catalystedgeconnect.com. Vercel Analytics installed and collecting traffic data.

## What was built / fixed (recent sessions)

- Two-column hero with professional headshot + teal accent frame (`src/App.tsx`)
- SEO: canonical, Open Graph, Twitter Card, Person JSON-LD schema, XML sitemap (`index.html`, `public/sitemap.xml`)
- Google Search Console verified (`public/google379f235e1870fa4e.html`)
- robots.txt: allows search engines + PerplexityBot; blocks AI training crawlers; includes `Sitemap:` directive (`public/robots.txt`)
- `og:image` and `twitter:image` wired to headshot (`index.html`)
- `<header>` semantic element wrapping nav (`src/App.tsx`)
- Vercel Analytics added (`src/main.tsx`, `package.json`)
- Full content narrative refresh: hero tagline, about section (heading + 2 paragraphs + card subtitles), `High-Impact IC` expertise tag, context lines above experience bullets, portfolio headline/intro, contact copy (`src/data.ts`, `src/App.tsx`)

## Open follow-ups

### Before next session
- None — site is fully deployed and consistent.

### Near-term backlog
- **OG image (landscape):** headshot is portrait; a 1200×630 branded card (name + title on teal) would look much better in LinkedIn/Slack link previews. Easy to generate with a Canvas script.
- **Footer links:** currently just copyright + domain. Could add LinkedIn icon link and quick-nav anchors.

### Medium-term backlog
- Blog or case studies page (low priority, Roberto's call)
- Separate personal domain (strategic, low priority)

## Key file locations

| File | Purpose |
|---|---|
| `src/data.ts` | **All editable content** — edit here to update portfolio without touching components |
| `src/App.tsx` | All React components (Nav, Hero, About, Expertise, Experience, Projects, Certifications, Contact, Footer) |
| `index.html` | SEO meta tags, Open Graph, JSON-LD schema, page title |
| `api/contact.ts` | Vercel serverless function — Turnstile verification + Resend email delivery |
| `public/robots.txt` | Crawler allow/block rules |
| `public/sitemap.xml` | XML sitemap — update `lastmod` date after content changes |
| `public/images/headshot.png` | Hero headshot (teal background version) |
| `.env.example` | Template for required env vars |

## Known quirks

- **Negative CSS insets on the teal accent frame** behind the headshot can't be expressed in Tailwind — they use an inline `style` prop on an absolutely-positioned `div` (`inset: '18px -18px -18px 18px'`).
- **Email obfuscation:** the nav "Get in Touch" mailto link assembles the address at runtime via array join (`['rbfonseca', '.consulting@gmail.com'].join('')`) — intentional, keeps the address out of raw HTML to reduce scraping.
- **Git workflow:** Roberto edits `src/data.ts` directly on GitHub UI. Always run `git pull --rebase` before making local edits to avoid push rejections.
- **Turnstile env vars:** `VITE_TURNSTILE_SITE_KEY` must be set in Vercel project settings (client-side, prefixed `VITE_`). `TURNSTILE_SECRET_KEY` and `RESEND_API_KEY` are server-side only (no `VITE_` prefix). See `.env.example`.
- **`vercel.json` functions block removed:** Vercel was rejecting `"runtime": "@vercel/node"` without a version string. Removing the block entirely lets Vercel auto-detect Node.js for `/api`. Do not re-add a `functions` block unless specifying a versioned runtime string.
- **sitemap.xml `lastmod`** should be updated manually after significant content changes. Currently set to `2026-06-22`.

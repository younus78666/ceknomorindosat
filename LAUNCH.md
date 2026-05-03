# CekNomorIndosat.com — Launch Playbook

26 routes built and indexable. Code-side is launch-ready. The steps below
require your account credentials and cannot be automated from the codebase.

## Pre-flight (do once before deploy)

- [ ] Push the repo to your git host
- [ ] Connect Cloudflare Pages / Vercel / Netlify to the repo
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Set custom domain `ceknomorindosat.com` and `www.ceknomorindosat.com` (force HTTPS, redirect www → apex)
- [ ] Wait for DNS + SSL to propagate (5-30 min)
- [ ] Smoke test: `https://ceknomorindosat.com/` loads

## Step 1 — Analytics IDs (5 min)

Edit `src/data/analytics.config.ts` and paste the IDs you create:

```ts
GA4_MEASUREMENT_ID: "G-XXXXXXXXXX"   // analytics.google.com → Admin → Data Streams
GTM_ID: ""                            // optional. tagmanager.google.com → leave blank to use direct gtag
CLARITY_PROJECT_ID: "abc1234567"     // clarity.microsoft.com → new project
REQUIRE_CONSENT: true                 // false to skip the banner
```

Rebuild and redeploy. The consent banner already wires Consent Mode v2 default-denied,
flips to `granted` on accept, and propagates to gtag.

Custom events that already fire (check in GA4 → Realtime → Events):
- `page_view` — auto
- `article_read_75` — when 75% of article scrolled into view
- `outbound_click` — any external link click
- `contact_form_submit` — wire forms with `data-event="contact"`
- `correction_report_submit` — wire forms with `data-event="correction"`

## Step 2 — Search Console + Bing (10 min)

1. **Google Search Console**
   - search.google.com/search-console → Add property → URL prefix → `https://ceknomorindosat.com/`
   - Verify ownership via DNS TXT record (preferred) or HTML tag
   - Sitemaps → submit `https://ceknomorindosat.com/sitemap-index.xml`

2. **Bing Webmaster Tools**
   - bing.com/webmasters → Add site → import from GSC (one click) OR verify manually
   - Sitemaps → submit `https://ceknomorindosat.com/sitemap-index.xml`

## Step 3 — IndexNow (instant indexing for Bing/Yandex/Naver/Seznam)

The IndexNow key file is already at `public/169ce40444e342008e0511ca87032bab.txt`.
After deploy, verify it's reachable:

```
curl https://ceknomorindosat.com/169ce40444e342008e0511ca87032bab.txt
# Must return: 169ce40444e342008e0511ca87032bab
```

Then push all URLs:

```
node scripts/submit-indexnow.mjs
```

The script submits all 26 URLs by default. Pass paths to submit specific ones:

```
node scripts/submit-indexnow.mjs / /cek-nomor-indosat-im3
```

Re-run the script whenever you publish or substantially update a page.

## Step 4 — Top-10 manual indexing (Google)

GSC URL Inspection accepts ~10 manual requests per day. Submit these in order:

1. `https://ceknomorindosat.com/`
2. `https://ceknomorindosat.com/cek-nomor-indosat-im3`
3. `https://ceknomorindosat.com/cek-nomor-indosat-lewat-ussd`
4. `https://ceknomorindosat.com/cek-kuota-indosat`
5. `https://ceknomorindosat.com/cek-pulsa-indosat`
6. `https://ceknomorindosat.com/kode-dial-indosat`
7. `https://ceknomorindosat.com/cara-registrasi-kartu-indosat`
8. `https://ceknomorindosat.com/tentang-kami`
9. `https://ceknomorindosat.com/kebijakan-editorial`
10. `https://ceknomorindosat.com/disclaimer`

In each: Inspect URL → Test live URL → Request indexing.

## Step 5 — Adsterra and Monetag (after first 100 visits)

1. Sign up at monetag.com — Indonesian traffic is well-priced. Paste zone IDs into
   `src/data/ads.config.ts` and flip `ADS_ENABLED = true`.
2. Once 10+ pages have organic traffic (week 2-3), apply to adsterra.com.
3. Don't double-stack the same ad type. Recommended split:
   - Monetag: popunder, social bar, push (background formats)
   - Adsterra: in-content banner, native (visible formats)

## Step 6 — Monitoring (10 min)

| Tool | URL | What it watches | Free tier |
|---|---|---|---|
| UptimeRobot | uptimerobot.com | HTTP uptime, every 5 min | 50 monitors free |
| GSC Coverage | search.google.com/search-console | Indexing status weekly | Free, unlimited |
| GSC Core Web Vitals | GSC → Experience → CWV | LCP/INP/CLS field data | Free |
| Clarity | clarity.microsoft.com | Heatmaps, session replays | Free, unlimited |
| Bing Webmaster | bing.com/webmasters | Bing-specific issues | Free |

Set up UptimeRobot:
1. Create account → Add new monitor → HTTPS → `https://ceknomorindosat.com/`
2. Interval: 5 minutes. Alert: email + (optional) Telegram.
3. Add second monitor for `/sitemap-index.xml` to catch sitemap regressions.

## 30-day action plan

### Week 1 — indexing and crawl
- Day 1: Deploy, run IndexNow, submit GSC + Bing sitemaps, request top-10 in GSC.
- Day 2-3: Verify GSC shows pages "Discovered" or "Crawled". Fix any errors that surface.
- Day 5: Manual `site:ceknomorindosat.com` check on Google + Bing — should see at least homepage indexed.
- Day 7: Open GSC → Coverage report. Address any "Excluded" reasons.

### Week 2 — impressions
- GSC → Performance → start collecting impression data.
- Note which queries trigger impressions but no clicks.
- Verify analytics is firing: GA4 Realtime + Clarity dashboard.
- If <50 impressions/day, run IndexNow again for top 10.

### Week 3 — CTR optimization
- Pull GSC Performance → Queries with >100 impressions and <3% CTR.
- For each, rewrite the title or meta description to match search intent.
- Edit the page's `seo.title` / `seo.description` in source, redeploy.
- Resubmit those URLs via IndexNow.

### Week 4 — content expansion
- Pull GSC → Performance → Queries you rank for in positions 11-30.
- These are quick wins. Pick the 5 highest-impression queries that don't yet have
  a dedicated page, write a 600-900 word post per query.
- Each new post: register in `src/data/internal-links.ts`, link from existing pages,
  submit via IndexNow.

## Final launch verdict

| Gate | Status | Notes |
|---|---|---|
| Build | PASS | 26 routes built clean |
| TypeScript / build errors | PASS | none |
| SEO metadata | PASS | titles 45-58 chars, descriptions 127-152 chars |
| Schema | PASS | WebSite + Article/BlogPosting + FAQPage + HowTo + BreadcrumbList + Organization on all relevant pages |
| Mobile responsive | PASS | hamburger nav, 44px+ touch targets, table overflow |
| Accessibility | PASS | WCAG AA contrast, lang=id, skip link, ARIA labels |
| CWV-ready | PASS | system fonts only, ad slot CLS reservation, no blocking JS |
| Placeholder text | PASS | none (`_template-example.astro` is excluded by underscore prefix) |
| Broken links | PASS in source | nav and breadcrumbs all resolve to existing routes |
| Legal pages linked | PASS | 9 trust pages in footer |
| Analytics ready | PASS | gtag + GTM + Clarity scaffolded, paste IDs to activate |
| Ads do not break layout | PASS | per-format `min-height` reservation tested at 90px and 250px |
| llms.txt | PASS | `public/llms.txt` lists all 26 URLs |
| sitemap.xml | PASS | auto-generated, registered in robots.txt |
| robots.txt | PASS | AI crawlers explicitly allowed, sitemap reference present |
| IndexNow | PASS | key file deployed, submit script ready |

**Launch verdict: PASS** — site is technically ready.

## Outstanding warnings

1. **No og-default.png yet** — `og:image` meta is omitted (cleaner than 404). Generate a 1200×630 PNG when ready, save to `public/og-default.png`, then set `defaultOgImage: "/og-default.png"` in `src/data/site.config.ts`.
2. **Empty analytics IDs** — paste IDs to activate. Without them, no data flows but the site works fine.
3. **Empty ad zone IDs** — placeholders render until you activate Monetag/Adsterra.
4. **Domain not deployed** — code is ready; deployment is your step.

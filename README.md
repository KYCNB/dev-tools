# DevTools Hub — dev.kycnb.top

Free online developer tools site. Static HTML + vanilla JS, hosted on Cloudflare Pages, monetized with Google AdSense.

## Site structure

```
dev-tools/
├── index.html                 # Homepage: tool grid + intro
├── about.html                 # About page (required for AdSense)
├── contact.html               # Contact page (required for AdSense)
├── privacy.html               # Privacy policy (required for AdSense)
├── 404.html                   # Custom 404
├── robots.txt                 # Crawler rules + sitemap pointer
├── sitemap.xml                # All public URLs
├── ads.txt                    # AdSense verification (placeholder — replace!)
├── assets/
│   ├── css/style.css          # Global styles
│   └── js/main.js             # Shared scripts (copy buttons, footer year)
└── tools/
    ├── json-formatter.html
    ├── timestamp-converter.html
    ├── base64-encoder.html
    ├── url-encoder.html
    ├── uuid-generator.html
    ├── hash-generator.html
    └── regex-tester.html
```

All tools are pure front-end JavaScript. Nothing is uploaded to any server.

---

## 1. Deploy to Cloudflare Pages

1. Create a GitHub repository, e.g. `dev-tools`, and push this folder:
   ```bash
   git init
   git add .
   git commit -m "DevTools Hub initial"
   git remote add origin https://github.com/<your-username>/dev-tools.git
   git push -u origin main
   ```
2. Go to Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the `dev-tools` repo. Framework preset: **None** (static files). Build command: leave empty. Build output directory: `/` (root).
4. Deploy. Cloudflare gives you a temporary `*.pages.dev` URL first.

## 2. Custom domain (dev.kycnb.top)

1. In Cloudflare, add `kycnb.top` as a zone (DNS → Add site), then change the nameservers at your registrar to the two Cloudflare NS records shown. Wait for activation.
2. In the Pages project → **Custom domains** → **Set up a custom domain** → enter `dev.kycnb.top`.
3. Cloudflare automatically adds the DNS record and issues an SSL certificate. Make sure **HTTPS** is enforced (SSL/TLS → Edge Certificates → Always Use HTTPS).

## 3. Submit to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console), add a **Domain property** or **URL prefix** property: `https://dev.kycnb.top/`.
2. Submit `https://dev.kycnb.top/sitemap.xml` in **Sitemaps**.
3. Use **URL Inspection** to request indexing of the homepage and a couple of tool pages.

## 4. Connect Google AdSense

1. Register at [adsense.google.com](https://adsense.google.com) with a Google account (must be 18+).
2. After initial approval, add `https://dev.kycnb.top` as a site.
3. Paste the AdSense **auto ads** code into the `<head>` of every page, replacing this comment:
   ```html
   <!-- AdSense Auto Ads: paste your ad code here after approval -->
   ```
4. Replace the placeholder in `ads.txt` with your real publisher ID:
   ```
   google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
   ```
   Then redeploy.
5. Submit the site for review. Keep adding real content (tool guides, FAQ) while waiting — it improves the chances of passing review.

> Common rejection reasons: missing About/Contact/Privacy pages (all present here), too little text content, non-original copied text, site still under construction. Do NOT click your own ads, buy traffic, or ask others to click — that leads to a permanent ban.

## 5. Cloudflare recommended settings

- **Bot management**: make sure Googlebot is allowed (default is fine; do not enable aggressive bot fight mode, or Google may not crawl).
- **Caching**: long cache for `assets/`, shorter for HTML so new content is picked up quickly.
- **Redirects** (optional): add `301` rules if you ever move URLs.

## Maintenance checklist

- [ ] All 7 tools work on desktop and mobile
- [ ] privacy.html / about.html / contact.html reachable from the footer
- [ ] sitemap.xml includes every public page
- [ ] robots.txt references the sitemap
- [ ] ads.txt contains the real publisher ID after approval
- [ ] Every tool page has its own title, description and FAQ (AdSense + SEO)

# Dev-Guide

A beginner-friendly, multilingual directory of developer services with honest
free-tier limits and paid prices verified on official pages.

- Static site: plain HTML/CSS/JS, no build step. Open `index.html` or serve the folder.
- Languages: Arabic (RTL), English, Spanish, French, German. Switch from the header pills.
- Structure:
  - `index.html` home with the category grid
  - one page per category (15 total: `hosting.html`, `domains.html`, `databases.html`, `email.html`, `auth.html`, `serverless.html`, `monitoring.html`, `analytics.html`, `forms.html`, `courses.html`, `tools.html`, `design.html`, `dns-ssl.html`, `payments.html`, `ai.html`)
  - live search box on the home page and every category page filters as you type
  - one data file per category in `assets/js/data/`, loaded by `assets/js/dataload.js` (add new categories there)
  - UI strings in `assets/js/i18n.js`, renderer in `assets/js/app.js`
- Every entry links its official pricing/limits source. Prices in USD, verified 27 November 2026. Prices change; check the source before committing.

## Adding a service

Add an entry to the right file in `assets/js/data/` with `free`, `paid`, and
optional `note` translated into all five languages, plus `url` and `source`.

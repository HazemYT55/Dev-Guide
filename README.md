# Dev-Guide

A beginner-friendly, multilingual directory of developer services with honest
free-tier limits and paid prices verified on official pages.

- Static site: plain HTML/CSS/JS, no build step. Open `index.html` or serve the folder.
- Languages: Arabic (RTL), English, Spanish, French, German. Switch from the header pills.
- Structure:
  - `index.html` home with the category grid
  - one page per category (`hosting.html`, `domains.html`, `databases.html`, `email.html`, `auth.html`, `serverless.html`, `monitoring.html`, `analytics.html`, `forms.html`)
  - one data file per category in `assets/js/data/`
  - UI strings in `assets/js/i18n.js`, renderer in `assets/js/app.js`
- Every entry links its official pricing/limits source. Prices in USD, verified 27 November 2026. Prices change; check the source before committing.

## Adding a service

Add an entry to the right file in `assets/js/data/` with `free`, `paid`, and
optional `note` translated into all five languages, plus `url` and `source`.

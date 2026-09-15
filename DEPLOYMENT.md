# LauMVP V17 — Deployment Guide

## What is already production-ready
- responsive home + About page
- favicon / Apple touch icon
- social preview image
- Open Graph + X/Twitter metadata
- canonical URLs
- robots.txt
- sitemap.xml
- custom 404 page
- web manifest
- .nojekyll for GitHub Pages
- real Steam + X + YouTube + TikTok + Instagram links
- custom studio email contact behavior

## Keep this exact folder structure at the repository root

index.html
about.html
404.html
styles.css
script.js
robots.txt
sitemap.xml
site.webmanifest
.nojekyll
assets/

Do NOT upload the outer `laumvp-production-v17` folder as a nested website folder. The files above should be at the ROOT of the GitHub repository.

## Deployment order
1. Create a GitHub repository.
2. Upload this production folder's contents to the repository root.
3. Enable GitHub Pages from the main branch/root.
4. Test the temporary github.io website first.
5. Test desktop + phone.
6. Only after the temporary site works, add `laumvp.com` as the GitHub Pages custom domain.
7. Configure Porkbun DNS.
8. Wait for DNS verification.
9. Turn on Enforce HTTPS.
10. Final QA on https://laumvp.com.

## Contact form
The current form uses `mailto:`. It does not store data and requires the visitor's configured email application.
This is safe to launch, but a real form backend can be added later.

## Discord
Discord remains visibly disabled until the actual invite URL is supplied.

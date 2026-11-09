# Ayodeji Olu-Ewulo — Portfolio

Personal portfolio built with React, Vite, Framer Motion, Three.js and Lenis.

**Live:** https://isaacayodeji.github.io/ayodeji-portfolio/

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs ./dist
npm run preview  # serves ./dist at http://localhost:4173 (opening dist/index.html from disk won't work)
```

## Deploy (GitHub Pages)

```bash
npm run deploy   # builds and pushes ./dist to the gh-pages branch
```

In the repo settings, set **Pages → Source** to *Deploy from a branch* → `gh-pages` / `(root)`.

Content lives in `src/data.js`; the downloadable CV is `public/Isaac_Ayodeji_Olu-Ewulo_CV.pdf`.

## Résumé

The web résumé lives in `public/resume/` and is published alongside the site:

- Web: https://isaacayodeji.github.io/ayodeji-portfolio/resume/
- PDF: https://isaacayodeji.github.io/ayodeji-portfolio/Isaac_Ayodeji_Olu-Ewulo_CV.pdf

When the CV changes, replace both the PDF in `public/` and the files in `public/resume/`, then `npm run deploy`.

## Previous design

The earlier Create React App version of the portfolio is preserved on the `legacy-design` branch.

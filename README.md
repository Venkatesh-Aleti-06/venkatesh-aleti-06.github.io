# Aleti Venkatesh - Portfolio

Angular 20 single-page portfolio with scroll animations, hosted on GitHub Pages.

## Quick start

```bash
npm install
ng serve
```

Open http://localhost:4200

## Project structure

```
src/
├── app/
│   ├── components/            6 UI sections, each with .ts + .html + .css
│   ├── data/portfolio-data.ts ALL CONTENT in one file
│   ├── app.ts                 root component
│   └── app.html               page layout
├── index.html
├── main.ts
└── styles.css
public/                        profile.jpg, resume PDF
```

## Edit your content

Everything (name, skills, projects, certifications, links) is in **`src/app/data/portfolio-data.ts`**. Change it there and the whole site updates.

## Deploy to GitHub Pages

```bash
npm install -g angular-cli-ghpages
ng build
npx angular-cli-ghpages --dir=dist/portfolio/browser --base-href=/
```

Site live at `https://<your-username>.github.io`.

## Full build notes

See `ANGULAR_NOTES.md` for a step-by-step walkthrough of what each file does and why.

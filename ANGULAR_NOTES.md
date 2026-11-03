# Angular Portfolio - Step by Step Notes

A record of everything we did and learned while building this portfolio from scratch.

---

## 1. Prerequisites

**Check if Node.js and npm are installed:**
```bash
node -v
npm -v
```

- **Node.js** runs JavaScript on your laptop (not just in a browser). Angular's dev tools and build system are written in JavaScript, so they need Node.
- **npm** (Node Package Manager) comes with Node. It installs libraries like Angular, same way `pip` installs Python libraries.
- `-v` prints the version. Need Node 18 or newer.

If `node` is not recognized, install the LTS version from https://nodejs.org (Windows installer .msi, 64-bit). Make sure "Add to PATH" stays ticked. Close your terminal/IDE and reopen it after installing.

---

## 2. Install Angular CLI

```bash
npm install -g @angular/cli
```

- The **Angular CLI** gives you the `ng` command.
- `-g` means install **globally**, so `ng` works in any folder on your laptop.
- You only run this once per laptop (or when upgrading Angular).

---

## 3. Create a new Angular project

```bash
ng new portfolio
```

The CLI asks a few questions:

| Question | Choose | Why |
|---|---|---|
| Stylesheet format | **CSS** | Simpler than SCSS; portfolio doesn't need preprocessor features |
| Server-side rendering (SSR)? | **No** | GitHub Pages hosts static files only, can't run a Node server |
| AI tool integration | **None** or **Claude Code** | Adds AI-helper config; doesn't change the site |

**What `ng new` creates for you:**

```
portfolio/
├── public/                     # static files (images, PDFs, favicon)
├── src/                        # your actual source code
│   ├── app/
│   │   ├── app.ts              # root component logic
│   │   ├── app.html            # root template
│   │   ├── app.css             # root styles (scoped to this component)
│   │   ├── app.config.ts       # app-wide setup
│   │   ├── app.routes.ts       # route-to-page mapping (not needed for one-pager)
│   │   └── app.spec.ts         # tests
│   ├── index.html              # the ONE HTML page the browser loads
│   ├── main.ts                 # entry point that boots the app
│   └── styles.css              # global CSS
├── node_modules/               # installed libraries (never edit)
├── .editorconfig               # editor formatting rules
├── .gitignore                  # files Git ignores
├── .prettierrc                 # auto-format rules
├── angular.json                # Angular build/serve config
├── package.json                # project ID + libraries + commands
├── package-lock.json           # exact installed versions (auto-generated)
├── README.md                   # project description
├── tsconfig.json               # TypeScript settings
├── tsconfig.app.json           # TypeScript for the app
└── tsconfig.spec.json          # TypeScript for tests
```

**Which files you actually touch:**
- `package.json` (indirectly, via `npm install`)
- `angular.json` (rarely, for build options)
- Everything inside `src/app/`

---

## 4. Core Angular concepts

### Single Page Application (SPA)
Angular builds a **single-page application**. The browser loads `index.html` once, and Angular swaps content on the page using JavaScript. No full page reloads.

### Components
Everything in Angular is a **component**. A component is one piece of UI (the header, the hero section, the footer). Each component has three files:
- `.ts` — TypeScript logic (the class)
- `.html` — the template
- `.css` — styles scoped to this component only

### `index.html` + `<app-root>`
`index.html` contains `<app-root></app-root>`. Angular replaces that tag with the root component (`app.ts` → `app.html`), which then renders child components like `<app-header>`, `<app-hero>`.

### `main.ts`
The entry file. It calls `bootstrapApplication(App)` to start Angular with the root `App` component.

### Server-side rendering (SSR) vs client-side
- **Client-side (default):** browser loads JavaScript, then builds the page.
- **SSR:** a Node server builds HTML before sending. Faster first load, better for SEO, but needs a running server. We don't use it because GitHub Pages is static-only.
- **SSG (prerendering):** builds HTML once at build time; works on static hosts.

---

## 5. Generate components

Each component is created with:
```bash
ng generate component components/header
```

Or shorter:
```bash
ng g c components/header
```

This creates a folder `src/app/components/header/` with four files: `.ts`, `.html`, `.css`, `.spec.ts`.

We generated 6 components:
```bash
ng g c components/header
ng g c components/hero
ng g c components/skills
ng g c components/projects
ng g c components/certifications
ng g c components/contact
```

---

## 6. Install AOS (Animate On Scroll)

```bash
npm install aos
npm install --save-dev @types/aos
```

- `aos` is the actual library.
- `@types/aos` is TypeScript type definitions so the editor understands AOS code.
- `--save-dev` marks it as a dev-only dependency (not needed in the live build).

**Using AOS in Angular:**

In `app.ts`:
```ts
import AOS from 'aos';

export class App implements OnInit {
  ngOnInit() {
    AOS.init({ duration: 700, once: false, offset: 100, mirror: true });
  }
}
```

In `index.html` add the AOS stylesheet:
```html
<link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
```

In templates, add `data-aos` attributes:
```html
<p data-aos="fade-up">Animates in on scroll</p>
<span [attr.data-aos-delay]="i * 25">Staggered delay</span>
```

**AOS options we used:**
- `duration: 700` — animation length in ms
- `once: false` — replay every time the element scrolls into view
- `offset: 100` — trigger 100px before element enters viewport
- `mirror: true` — animate on scroll up too

---

## 7. Project structure (final)

```
portfolio/
├── public/
│   ├── profile.jpg
│   └── Aleti_Venkatesh_Resume.pdf
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/            (.ts + .html + .css)
│   │   │   ├── hero/
│   │   │   ├── skills/
│   │   │   ├── projects/
│   │   │   ├── certifications/
│   │   │   └── contact/
│   │   ├── data/
│   │   │   └── portfolio-data.ts  # ALL YOUR CONTENT in one file
│   │   ├── app.ts                 # root component
│   │   ├── app.html               # <app-header>, <app-hero>, ...
│   │   └── app.css
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── tsconfig.json
```

**One file for all content: `portfolio-data.ts`**

Every component imports from this file. Change your name, skills, or project list here and the whole site updates:

```ts
import { portfolioData } from '../../data/portfolio-data';

export class Hero {
  data = portfolioData;
}
```

---

## 8. Key Angular syntax in templates

**Show a value from the class:**
```html
<h1>{{ data.name }}</h1>
```

**Loop over an array (`*ngFor`):**
```html
<span *ngFor="let s of data.skills; let i = index"
      [class]="'tag ' + s.color">
  {{ s.name }}
</span>
```

**Bind an attribute (`[attr.xxx]`):**
```html
<span [attr.data-aos-delay]="i * 25">...</span>
```

**Bind a property / class / href:**
```html
<a [href]="data.resume" [class]="'btn ' + color">...</a>
```

**Imports in standalone components:**
```ts
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgFor],     // required when using *ngFor
  ...
})
```

---

## 9. Public folder (for assets)

In the newer Angular (v18+), static files live in `public/` instead of `src/assets/`.

- Any file in `public/` is served from the site root.
- In templates, reference them WITHOUT the folder name:
  ```html
  <img src="profile.jpg">
  <a href="Aleti_Venkatesh_Resume.pdf">Resume</a>
  ```
- `favicon.ico` already lives there — leave it alone.

---

## 10. Run the dev server

```bash
ng serve
```

- Starts a local server at **http://localhost:4200**
- Watches your files and reloads the browser on save
- Keep it running in one terminal; use a second terminal for other commands

---

## 11. Build for production

```bash
ng build
```

- Outputs optimised static files to `dist/portfolio/`
- These are what you deploy

---

## 12. Deploy to GitHub Pages

**Prerequisite:** install the deploy helper once:
```bash
npm install -g angular-cli-ghpages
```

**Steps:**
1. Create a GitHub repo named exactly `<your-username>.github.io` (e.g. `venkatesh-aleti.github.io`).
2. Push this project to that repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. Build and deploy:
   ```bash
   ng build
   npx angular-cli-ghpages --dir=dist/portfolio/browser --base-href=/
   ```
4. Wait a minute, then open `https://<your-username>.github.io`.

The `--base-href=/` is important because the repo is at the root, not a sub-path.

---

## 13. Common commands reference

| Command | What it does |
|---|---|
| `node -v` / `npm -v` | Check Node and npm versions |
| `npm install -g @angular/cli` | Install Angular CLI globally |
| `ng new portfolio` | Create new Angular project |
| `ng serve` | Start dev server at localhost:4200 |
| `ng generate component components/foo` | Create a new component |
| `ng g c components/foo` | Short form of above |
| `ng build` | Production build to `dist/` |
| `npm install aos` | Install a library |
| `npm install --save-dev @types/aos` | Install a dev-only library |
| `npx angular-cli-ghpages --dir=dist/portfolio/browser` | Deploy to GitHub Pages |

---

## 14. Why we built it this way

- **Each UI section = its own component** → easier to edit, cleaner code, re-usable.
- **All content in one data file** → change your name/projects in one place, the whole site updates.
- **AOS for animations** → no custom JS to maintain, just add `data-aos` attributes.
- **Public folder for assets** → simple paths, works for GitHub Pages.
- **Static site** → GitHub Pages = free hosting, no backend needed.

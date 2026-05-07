# MedAI Literacy Initiative — Website

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Next.js — just click Deploy
4. Done. Every push to `main` auto-deploys.

Custom domain: Vercel Dashboard → your project → Settings → Domains

---

## How to Update Content

**All text, descriptions, names, and image paths live in one file:**

```
content.js
```

Open it, find the section you want to change, edit the text, save, push. That's it.

### Updating Images

1. Add your image to `/public/images/` (e.g. `eric-yang.jpg`)
2. In `content.js`, find the `imageSrc` field and update the path:
   ```js
   imageSrc: "/images/eric-yang.jpg",
   ```

Image naming reference:
- `hero.jpg` — homepage hero background
- `about.jpg` — about page
- `eric-yang.jpg` — Eric's headshot
- `malinda-lu.jpg` — Malinda's headshot
- `yale-sprout.jpg` — Yale Sprout program card
- `newton-chinese-school.jpg` — Newton Chinese School program card
- `tzu-chi.jpg` — Tzu Chi program card
- `logo-yale-sprout.png` — Yale Sprout logo (collaborators page)
- `logo-newton-chinese-school.png` — Newton Chinese School logo
- `logo-tzu-chi.png` — Tzu Chi logo
- `gallery-1.jpg`, `gallery-2.jpg`, ... — gallery images

### Adding a Gallery Image

In `content.js`, find the `gallery.images` array and add:
```js
{
  src: "/images/gallery-4.jpg",
  alt: "Description of photo",
  caption: "Caption shown under the photo",
},
```

### Adding a New Program

In `content.js`, find `programs.items` and add a new object following the same shape as the existing ones.

### Adding a Tutorial

In `content.js`, find `tutorials.items` and add a new entry. Set `status: "available"` and provide a real `href` to link it.

---

## Project Structure

```
medai-literacy/
├── content.js              ← ALL editable content lives here
├── app/
│   ├── layout.tsx          ← Navbar + Footer wrapper
│   ├── globals.css         ← Design tokens (colors, fonts, utilities)
│   ├── page.tsx            ← Home page
│   ├── about/page.tsx
│   ├── programs/page.tsx
│   ├── leadership/page.tsx
│   ├── collaborators/page.tsx
│   ├── gallery/page.tsx
│   ├── tutorials/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
└── public/
    └── images/             ← Drop all your photos here
```

## Changing Colors or Fonts

Open `app/globals.css` and edit the `:root` variables at the top:

```css
:root {
  --navy:  #0a0f1e;   /* main background */
  --cyan:  #00d4ff;   /* accent color */
  /* ... */
}
```

# Artemis Prime 🛍️

A full-featured e-commerce storefront built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🛒 Shopping cart with quantity management
- 🏷️ Product collections & catalog
- 🔍 Search & filter
- ❤️ Wishlist
- 🌙 Dark mode
- 📦 Order tracking
- 💳 UPI payment flow
- 🔐 Admin panel with product/collection management
- 📸 Image upload (drag & drop)
- 📱 Fully responsive

---

## Local Development

### Prerequisites
- Node.js 18+
- npm 9+

### Setup

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/artemis-prime.git
cd artemis-prime

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173/Art3misPrime/](http://localhost:5173/Art3misPrime/) in your browser.

---

## Deploy to GitHub Pages

### One-time setup (do this once)

1. Push this repo to GitHub
2. Go to your repo → **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. In `vite.config.ts`, set `base` to your repo name:
   ```ts
   base: '/Art3misPrime/',
   ```
5. Push to `main` — the GitHub Action will build and deploy automatically

Your site will be live at:
```
https://YOUR_USERNAME.github.io/Art3misPrime/
```

### Subsequent deploys

Every push to `main` triggers an automatic redeploy via the included GitHub Actions workflow.

---

## Project Structure

```
artemis-prime/
├── public/
│   └── favicon.svg
├── src/
│   ├── ArtemisPrime.tsx     # Main app component
│   ├── storagePolyfill.ts   # window.storage → localStorage bridge
│   ├── index.css            # Tailwind base styles
│   └── main.tsx             # React entry point
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages auto-deploy
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Admin Access

First-time setup: Click the user icon and use the **Set Up Admin Account** flow to create your admin credentials. These are stored encrypted in browser localStorage.

---

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| TypeScript | 5 |
| Vite | 5 |
| Tailwind CSS | 3 |
| lucide-react | 0.263 |

---

## License

MIT

# 🎥 Clips Demo

A full-stack video sharing app built with **Angular 16** and a fully serverless **Cloudflare** backend — no Firebase, no Vercel.

🔗 **Live:** [clips-demo.pages.dev](https://clips-demo.pages.dev)

---

## 🏗️ Architecture

| Layer | Technology |
|---|---|
| Frontend | Angular 16, Tailwind CSS |
| Auth | Clerk (`@clerk/clerk-js`) |
| API | Cloudflare Workers (TypeScript) |
| Database | Cloudflare D1 (SQLite) |
| Storage | Cloudflare R2 |
| Hosting | Cloudflare Pages |
| Video processing | FFmpeg.wasm |

---

## ✨ Features

- **Auth** — Sign up / sign in via Clerk with JWT-secured API calls
- **Upload** — Drag-and-drop MP4 upload with real-time progress bar
- **Screenshots** — Automatic thumbnail extraction using FFmpeg.wasm in the browser
- **Manage clips** — Edit title, delete clips, copy shareable links
- **Pagination** — Cursor-based infinite scroll on the public clips feed
- **COOP/COEP headers** — Required for `SharedArrayBuffer` (FFmpeg.wasm)

---

## 🛠️ Tech Stack

**Frontend**
- Angular 16 (NgModules)
- Tailwind CSS
- `@clerk/clerk-js` — vanilla JS auth SDK wrapped in a custom `ClerkService`
- `@ffmpeg/ffmpeg` + `@ffmpeg/core` — in-browser video processing

**Backend (Cloudflare Workers — [`clips-api`](https://clips-api.ragn.workers.dev/api/health))**
- Hono-style routing in a single Worker entry point
- D1 (SQLite) for users and clips metadata
- R2 for video and screenshot storage
- Clerk JWKS JWT validation via Web Crypto API
- Proxy-upload pattern: Worker issues one-time tokens, proxies PUT to R2

---

## 🚀 Local Development

```bash
git clone https://github.com/rafael-a-g-n/clips-demo.git
cd clips-demo
npm install --legacy-peer-deps
npm start
```

The app runs at `http://localhost:4200` and talks to the deployed Worker at `https://clips-api.ragn.workers.dev`.

---

## 🔑 Environment

`src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  clerkPublishableKey: 'pk_test_...',   // Clerk publishable key (safe to commit)
  apiUrl: 'https://clips-api.ragn.workers.dev',
  r2PublicUrl: 'https://pub-....r2.dev',
};
```

---

## 📦 Deployment

Pushes to `main` automatically build and deploy via **GitHub Actions** → **Cloudflare Pages**.

The Worker is deployed separately from `f:/Projects/clips-api` using Wrangler:

```bash
cd ../clips-api
wrangler deploy
```

---

## 👤 Contact

- GitHub: [rafael-a-g-n](https://github.com/rafael-a-g-n)
- LinkedIn: [Rafael Nogueira](https://www.linkedin.com/in/ragn/)


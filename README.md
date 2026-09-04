# farhadipour.com — Personal Academic Website

Bilingual (EN / FA) personal website of **Hamidreza Farhadipour** — Data Scientist & M.Sc. student in Computer Science.
Research focus: network traffic analysis · time-series modeling · anomaly detection.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · shadcn/ui · Framer Motion · next-themes

---

## Local development

```bash
bun install
bun run dev          # http://localhost:3000
bun run lint         # code quality check
```

## Deploy to GitHub Pages (farhadipour.com)

The site is deployed as a **static export**, built automatically by GitHub Actions
(workflow: `.github/workflows/deploy.yml`).

### One-time setup

1. Push this project to your GitHub repository (branch `main`).
2. In the repository open **Settings → Pages → Build and deployment** and set
   **Source → GitHub Actions**. *(Important — the default "Deploy from a branch" will not work with Next.js source code.)*
3. Custom domain: **Settings → Pages → Custom domain → `farhadipour.com`**.
   The `public/CNAME` file in this repo preserves the domain on every deploy.
4. After the first successful deploy, enable **Enforce HTTPS** in the same settings page.

### Updating the site

Every `git push` to `main` triggers an automatic rebuild and deploy (~1–2 minutes).
No manual build step is needed.

### Manual static build (optional)

```bash
bun run build:static     # output in ./out
```

---

## Editing content

| What | Where |
| --- | --- |
| All texts (bio, research, publications, projects, skills, timeline, blog, contact) | `src/lib/content.ts` (single source of truth, EN + FA) |
| Profile photo | `public/images/profile.jpg` (900px) · `public/images/profile-sm.jpg` (240px) |
| CV PDF | `public/cv/` — regenerate with `python scripts/make_cv.py` |
| Colors / fonts / theme tokens | `src/app/globals.css` · `src/app/layout.tsx` |
| Sections layout | `src/components/site/` |
| SEO metadata | `src/app/layout.tsx` |

> **Note:** academic facts currently in `content.ts` (universities, thesis, publications,
> stats, honors, email) are **sample placeholders** — replace them with real data.

## راهنمای فارسی

- برای اجرای محلی: `bun install` و بعد `bun run dev`
- برای انتشار: کل پروژه را روی شاخهٔ `main` ریپو push کنید، سپس در تنظیمات ریپو
  **Settings → Pages → Source → GitHub Actions** را انتخاب کنید.
- از این به بعد هر `git push` سایت را خودکار بیلد و منتشر می‌کند.
- دامنهٔ `farhadipour.com` از طریق فایل `public/CNAME` حفظ می‌شود.
- همهٔ متن‌های سایت (فارسی و انگلیسی) در یک فایل است: `src/lib/content.ts`

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start dev server
bun run build    # Production build (also serves as typecheck)
bun run lint     # ESLint (eslint-config-next)
bun run format   # Prettier auto-format
```

## Architecture

This is a personal portfolio site (dylanwahbe.com) built with **Next.js 16 App Router**, **TypeScript**, and **Tailwind CSS**. Deployed on Vercel.

### Content System

Portfolio content is split into two MDX directories:

- `app/portfolio/work/` — detailed case studies with individual pages (linked internally)
- `app/portfolio/projects/` — shorter entries that link externally

Each MDX file has YAML frontmatter with fields: `title`, `order`, `summary`, `image`, `color`, `link`, `heroImage`, `previewImage`, `date`, `hidden`, `gradientColors`, `role`, `years`, `logo`. Parsing lives in `app/portfolio/utils.ts` (`getWorkPosts()` and `getProjectPosts()`), which reads files from disk at build time. MDX is rendered with `next-mdx-remote`.

Only work posts get individual pages, statically generated via `generateStaticParams` in `app/portfolio/[slug]/page.tsx`.

### Key Files

- `app/layout.tsx` — Root layout with fonts (Instrument Sans/Serif), metadata, analytics
- `app/providers.tsx` — Client-side ThemeProvider wrapper (next-themes, selector-based dark mode)
- `app/components/mdx.tsx` — Custom MDX components with sugar-high syntax highlighting
- `app/components/posts.tsx` — Portfolio card grid with work/projects sections and staggered two-column layout
- `app/og/route.tsx` — Dynamic Open Graph image generation endpoint
- `app/global.css` — Prose styles, code highlighting colors, dark mode CSS variables

### Styling

Tailwind CSS with dark mode via `selector` strategy. Custom fonts configured in `tailwind.config.js`. Global prose and code-block styles in `app/global.css`.

### Formatting

Prettier with: `semi: false`, `singleQuote: true`.

# StreamHub Web (Next.js)

Desktop web frontend for StreamHub — Home and Profile screens.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- lucide-react

## Setup

```bash
npm install
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

| Route | Screen |
|-------|--------|
| `/` | Home |
| `/profile` | Profile |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

## Structure

```
src/
  app/                 # routes (page.tsx, layout, globals)
  components/
    layout/            # AppShell, Sidebar, Header
    home/              # home sections
    profile/           # profile sections
    shared/            # StoryCircle, VideoThumbnail, CategoryCard
    ui/                # primitives (Button)
  data/                # fixture / mock content
  types/               # shared domain types
  lib/                 # helpers (cn, formatting)
```

Mock media is loaded from Unsplash / pravatar. Swap `src/data/fixtures.ts` when wiring a real API.

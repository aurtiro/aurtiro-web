# CLAUDE.md

## Environment
- Node/npm are not on the default PATH. Always prefix shell commands with:
  `export PATH=/opt/homebrew/bin:$PATH`
- Working dir: `/Users/recruit/Desktop/my-website`

## Execution preference
- Run all shell/build/deploy commands directly in this session. Do not tell the user to run them in their own terminal — just execute them here.

## Commands
- Build: `npm run build`
- Dev: `npm run dev`
- Deploy (Vercel prod): `npx vercel --prod`

## Stack
- Vite + React 19 + TypeScript + Tailwind v4
- React Router v6, lucide-react icons
- Output: `dist/`

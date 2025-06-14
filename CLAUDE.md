# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production  
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm generate:types` - Generate Payload TypeScript types
- `pnpm payload migrate:create` - Create database migration
- `pnpm payload migrate` - Run database migrations

## Architecture

This is a **Payload CMS** website template built with **Next.js App Router**. The application combines a headless CMS backend with a statically generated frontend in a single deployment.

### Key Structure

- **Frontend**: Next.js app in `src/app/(frontend)/` with SSG pages and API routes
- **Admin Panel**: Payload CMS admin interface in `src/app/(payload)/admin/`
- **Collections**: Data models in `src/collections/` (Pages, Posts, Media, Categories, Users)
- **Globals**: Site-wide data (Header, Footer) in `src/Header/` and `src/Footer/`
- **Blocks**: Layout building blocks in `src/blocks/` for flexible page composition
- **Components**: Reusable UI components in `src/components/`

### Database & Storage

- **Database**: PostgreSQL via `@payloadcms/db-postgres`
- **Environment**: Requires `DATABASE_URI` and `PAYLOAD_SECRET` in `.env`
- **Migrations**: Required for schema changes in production

### Content Management

- **Draft/Publish**: Pages and Posts support draft previews and scheduled publishing
- **Layout Builder**: Pages use modular blocks (Hero, Content, Media, CTA, Archive)
- **Rich Text**: Lexical editor with custom blocks and media integration
- **SEO**: Built-in SEO plugin for meta management
- **Search**: Server-side search functionality via Payload Search plugin

### Frontend Features

- **Static Generation**: Pages pre-rendered with on-demand revalidation
- **Live Preview**: Real-time content preview in admin panel
- **Theme System**: Dark/light mode via `src/providers/Theme/`
- **Styling**: TailwindCSS + shadcn/ui components
- **Forms**: Contact forms via Form Builder plugin

### Important Files

- `src/payload.config.ts` - Main Payload configuration
- `src/payload-types.ts` - Auto-generated TypeScript types
- `src/utilities/` - Helper functions for URL generation, meta tags, etc.
- `src/access/` - Access control policies
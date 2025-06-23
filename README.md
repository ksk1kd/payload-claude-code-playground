# Payload Claude Code Playground

A comprehensive website template built with **Payload CMS** and **Next.js App Router**, featuring a headless CMS backend with a statically generated frontend in a single deployment.

## Overview

This project demonstrates modern web development practices using:
- **Payload CMS 3.42.0** - Headless CMS with admin panel
- **Next.js 15.3.0** - React framework with App Router
- **PostgreSQL** - Database via `@payloadcms/db-postgres`
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components

## Quick Start

### Prerequisites

- Node.js 18.20.2+ or 20.9.0+
- pnpm 9+ or 10+
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd payload-claude-code-playground
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   ```
   
   Configure the following environment variables:
   ```env
   DATABASE_URI=postgresql://username:password@localhost:5432/database_name
   PAYLOAD_SECRET=your-secret-key-here
   ```

4. **Database setup**
   ```bash
   # Create and run migrations
   pnpm payload migrate:create
   pnpm payload migrate
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin

### First Steps

1. **Create admin user** - Follow the setup wizard in the admin panel
2. **Seed database** - Use the seed functionality to populate with sample content
3. **Explore collections** - Navigate through Pages, Posts, News, and Jobs
4. **Try the layout builder** - Create pages using the block system

## Development

### Available Scripts

See [CLAUDE.md](./CLAUDE.md) for detailed development commands and workflow.

Key commands:
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm generate:types` - Generate TypeScript types

### Development Workflow

1. **Make changes** - Edit code in `src/` directory
2. **Test locally** - Use `pnpm dev` for development
3. **Build verification** - Run `pnpm build` to verify compilation
4. **Code quality** - Run `pnpm lint` to check standards
5. **Type generation** - Run `pnpm generate:types` after schema changes

## Project Structure

```
src/
├── app/                     # Next.js App Router
│   ├── (frontend)/         # Frontend pages
│   └── (payload)/          # Admin panel
├── collections/            # Payload collections
├── blocks/                 # Layout building blocks
├── components/             # Reusable React components
├── heros/                  # Hero components
├── utilities/              # Helper functions
└── payload.config.ts       # Payload configuration
```

## Documentation

Comprehensive documentation is available in the `docs/` directory:

- **Architecture** - System design and structure
- **Collections** - Data models and usage
- **Blocks** - Layout building system
- **Pages** - Page specifications and design

See [DOCUMENTATION_TODO.md](./DOCUMENTATION_TODO.md) for documentation progress.

## Database

This project uses PostgreSQL with strict schema management:

- **Development** - Schema push enabled for rapid development
- **Production** - Migration-based schema management required
- **Migrations** - Use `pnpm payload migrate:create` for schema changes
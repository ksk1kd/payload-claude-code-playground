# Architecture Overview

This document provides a high-level overview of the Payload Claude Code Playground architecture, explaining how the various components work together to create a modern, scalable web application.

## System Architecture

The application follows a **monolithic architecture** with clear separation of concerns, combining a headless CMS backend with a statically generated frontend in a single Next.js deployment.

```
┌─────────────────────────────────────────────────────────────┐
│                    Next.js Application                      │
├─────────────────────────────────────────────────────────────┤
│  Frontend (Static)          │    Admin Panel & API          │
│  ├── Pages (SSG)           │    ├── Payload Admin UI       │
│  ├── Posts/News/Jobs       │    ├── Collections API        │
│  ├── Search & Forms        │    ├── Authentication         │
│  └── Media Display         │    └── File Upload            │
├─────────────────────────────────────────────────────────────┤
│                    Payload CMS Core                         │
│  ├── Collections (Pages, Posts, News, Jobs, Users, Media)  │
│  ├── Globals (Header, Footer)                              │
│  ├── Blocks (Layout Builder)                               │
│  └── Plugins (SEO, Search, Forms, Redirects)               │
├─────────────────────────────────────────────────────────────┤
│                  PostgreSQL Database                        │
│  ├── Content Tables                                        │
│  ├── Media Storage Records                                 │
│  ├── User Authentication                                   │
│  └── System Tables                                         │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

### Core Technologies
- **Next.js 15.3.0** - React framework with App Router
- **Payload CMS 3.42.0** - Headless content management system
- **PostgreSQL** - Primary database via `@payloadcms/db-postgres`
- **TypeScript 5.7.3** - Type-safe development
- **React 19.1.0** - UI library

### Frontend Technologies
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Lexical** - Rich text editor
- **React Hook Form** - Form handling

### Development & Build Tools
- **pnpm** - Package manager
- **ESLint** - Code linting
- **Sharp** - Image optimization
- **Geist** - Typography

## Application Structure

### Frontend Routes (`src/app/(frontend)/`)
```
/                           # Homepage
/[slug]                     # Dynamic pages
/news                       # News listing
/news/[slug]                # News detail
/posts                      # Blog posts listing
/posts/[slug]               # Blog post detail
/posts/category/[slug]      # Posts by category
/recruit                    # Job listings
/recruit/[slug]             # Job detail
/members                    # Members listing
/members/[slug]             # Member profile
/search                     # Search functionality
```

### Admin Panel (`src/app/(payload)/`)
```
/admin                      # Admin dashboard
/admin/collections/*        # Collection management
/admin/globals/*            # Global content management
```

### API Routes (`src/app/api/`)
```
/api/[...slug]              # Payload API endpoints
/api/graphql                # GraphQL endpoint
```

## Data Flow

### Content Creation Flow
1. **Admin creates content** → Payload Admin Panel
2. **Content saved** → PostgreSQL Database
3. **Triggers revalidation** → Next.js ISR
4. **Frontend updated** → Static pages regenerated

### Frontend Rendering Flow
1. **User visits page** → Next.js App Router
2. **Data fetched** → Payload Local API
3. **Page rendered** → Static Site Generation (SSG)
4. **Media optimized** → Sharp image processing

## Key Features

### Content Management
- **Layout Builder** - Flexible page composition using blocks
- **Draft/Publish Workflow** - Content versioning and preview
- **Live Preview** - Real-time content preview
- **Rich Text Editing** - Lexical editor with custom blocks

### Performance Optimizations
- **Static Site Generation (SSG)** - Pre-rendered pages
- **On-demand Revalidation** - Automatic cache invalidation
- **Image Optimization** - Sharp-powered image processing
- **Incremental Static Regeneration (ISR)** - Background page updates

### Developer Experience
- **TypeScript Integration** - Auto-generated types from schema
- **Hot Module Replacement** - Fast development feedback
- **Code Splitting** - Optimized bundle sizes
- **ESLint Integration** - Code quality enforcement

## Security Architecture

### Authentication & Authorization
- **Admin Authentication** - Payload user system
- **Access Control** - Collection-level permissions
- **CORS Configuration** - Cross-origin request protection
- **Environment Variables** - Secure configuration management

### Data Security
- **SQL Injection Protection** - Parameterized queries
- **Input Validation** - Schema-based validation
- **File Upload Security** - Type and size restrictions
- **HTTPS Enforcement** - Secure communication

## Scalability Considerations

### Database
- **PostgreSQL** - ACID compliance and scalability
- **Connection Pooling** - Efficient database connections
- **Migrations** - Schema versioning and deployment

### Performance
- **Static Generation** - Reduced server load
- **CDN Ready** - Static asset optimization
- **Caching Strategy** - Multi-layer caching approach
- **Image Optimization** - Responsive image delivery

### Monitoring
- **Error Handling** - Comprehensive error boundaries
- **Logging** - Development and production logging
- **Performance Metrics** - Core Web Vitals tracking

## Configuration Files

### Core Configuration
- `src/payload.config.ts` - Main Payload configuration
- `next.config.js` - Next.js configuration
- `tailwind.config.mjs` - TailwindCSS configuration
- `tsconfig.json` - TypeScript configuration

### Environment Configuration
- `.env` - Environment variables
- `package.json` - Dependencies and scripts
- `eslint.config.mjs` - Linting rules

## Integration Points

### External Services
- **PostgreSQL Database** - Content and user data storage
- **File Storage** - Media upload and serving
- **Search Engine** - Built-in Payload search

### Internal APIs
- **Payload Local API** - Server-side data fetching
- **GraphQL API** - Flexible data queries
- **REST API** - Standard CRUD operations

## Development Workflow

1. **Local Development**
   - Hot reload with `pnpm dev`
   - Database schema push for rapid iteration
   - TypeScript type generation

2. **Build Process**
   - Static page pre-generation
   - Asset optimization
   - Type checking and linting

3. **Deployment**
   - Database migrations
   - Environment configuration
   - Static asset serving

This architecture provides a solid foundation for building scalable, maintainable web applications with excellent developer experience and performance characteristics.
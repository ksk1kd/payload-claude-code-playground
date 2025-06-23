# Next.js Frontend Architecture

This document outlines the Next.js frontend architecture, including App Router structure, rendering strategies, and component organization.

## App Router Structure

The project uses Next.js 15.3.0 with the App Router architecture, providing file-based routing and modern React features.

### Route Organization

```
src/app/
├── (frontend)/              # Frontend route group
│   ├── [slug]/             # Dynamic pages
│   ├── news/               # News section
│   ├── posts/              # Blog posts
│   ├── recruit/            # Job listings
│   ├── members/            # Member profiles
│   ├── search/             # Search functionality
│   ├── layout.tsx          # Frontend layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── (payload)/              # Admin route group
│   ├── admin/              # Admin panel
│   ├── api/                # API routes
│   └── layout.tsx          # Admin layout
└── api/                    # Additional API routes
```

## Route Groups & Layouts

### Frontend Route Group `(frontend)`

**Purpose:** Groups all public-facing pages with shared layout and styling.

**Layout Features:**
- Global navigation header
- Footer component
- Theme provider integration
- SEO metadata handling

**Key Components:**
```typescript
// src/app/(frontend)/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AdminBar />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
```

### Admin Route Group `(payload)`

**Purpose:** Isolates admin panel and API routes with separate layout.

**Features:**
- Payload admin interface
- Authentication handling
- Admin-specific styling
- API endpoint management

## Rendering Strategies

### Static Site Generation (SSG)

**Primary Strategy:** Most pages are statically generated at build time for optimal performance.

**Implementation:**
```typescript
// Example: src/app/(frontend)/[slug]/page.tsx
export async function generateStaticParams() {
  const pages = await payload.find({
    collection: 'pages',
    limit: 1000,
  })

  return pages.docs.map((page) => ({
    slug: page.slug,
  }))
}

export default async function Page({ params }) {
  const page = await payload.find({
    collection: 'pages',
    where: { slug: { equals: params.slug } },
  })

  return <RenderPage page={page.docs[0]} />
}
```

### Incremental Static Regeneration (ISR)

**On-Demand Revalidation:** Content changes trigger page regeneration.

**Hook Implementation:**
```typescript
// Collection hooks trigger revalidation
afterChange: [
  ({ doc, req }) => {
    revalidatePath(`/${doc.slug}`)
  }
]
```

### Server-Side Rendering (SSR)

**Dynamic Content:** Search results and user-specific content use SSR.

**Example:**
```typescript
// src/app/(frontend)/search/page.tsx
export default async function SearchPage({ searchParams }) {
  const results = await payload.find({
    collection: 'posts',
    where: {
      or: [
        { title: { contains: searchParams.q } },
        { content: { contains: searchParams.q } },
      ],
    },
  })

  return <SearchResults results={results} />
}
```

## Component Architecture

### Component Organization

```
src/components/
├── ui/                     # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
├── blocks/                 # Layout building blocks
├── forms/                  # Form components
├── navigation/             # Navigation components
└── [feature]/              # Feature-specific components
```

### Component Patterns

#### Server Components (Default)
- Data fetching components
- Layout components
- Static content rendering

#### Client Components
- Interactive components
- State management
- Browser-only features

**Example:**
```typescript
'use client'

import { useState } from 'react'

export function InteractiveComponent() {
  const [state, setState] = useState()
  // Client-side logic
}
```

## Data Fetching Patterns

### Payload Local API

**Server Components:** Direct database access through Payload Local API.

```typescript
import { getPayloadHMR } from '@payloadcms/next/utilities'

const payload = await getPayloadHMR({ config })

const data = await payload.find({
  collection: 'posts',
  limit: 10,
})
```

### API Routes

**Client Components:** HTTP requests to API endpoints.

```typescript
// src/app/api/posts/route.ts
export async function GET() {
  const posts = await payload.find({
    collection: 'posts',
  })

  return Response.json(posts)
}
```

## Styling Architecture

### TailwindCSS Configuration

**File:** `tailwind.config.mjs`

**Features:**
- Custom color palette
- Typography scale
- Component utilities
- Dark mode support

### CSS Variables

**File:** `src/cssVariables.js`

**Dynamic Theming:**
```typescript
export const cssVariables = {
  '--theme-primary': 'hsl(var(--primary))',
  '--theme-secondary': 'hsl(var(--secondary))',
  // Additional variables
}
```

### Global Styles

**File:** `src/app/(frontend)/globals.css`

**Includes:**
- TailwindCSS base styles
- Custom utility classes
- Component overrides
- Dark mode styles

## State Management

### Theme Provider

**File:** `src/providers/Theme/index.tsx`

**Features:**
- Light/dark mode switching
- System preference detection
- Persistent theme storage

### Form State

**Library:** React Hook Form

**Implementation:**
```typescript
import { useForm } from 'react-hook-form'

export function ContactForm() {
  const { register, handleSubmit, formState } = useForm()
  // Form logic
}
```

## Image Optimization

### Next.js Image Component

**Configuration:**
```typescript
// next.config.js
images: {
  remotePatterns: [
    {
      hostname: 'localhost',
      protocol: 'http',
    },
  ],
}
```

**Usage:**
```typescript
import Image from 'next/image'

<Image
  src={media.url}
  alt={media.alt}
  width={media.width}
  height={media.height}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Sharp Integration

**Processing:** Automatic image optimization via Sharp.

**Features:**
- Format conversion (WebP, AVIF)
- Responsive image generation
- Size optimization
- Focal point cropping

## Performance Optimizations

### Code Splitting

**Automatic:** Next.js automatically splits code by routes.

**Manual:** Dynamic imports for heavy components.

```typescript
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Spinner />,
})
```

### Bundle Analysis

**Tool:** Next.js Bundle Analyzer

**Usage:**
```bash
npm run build && npm run analyze
```

### Caching Strategy

**Static Assets:** Long-term caching for immutable assets.

**API Responses:** Cache-Control headers for dynamic content.

**ISR:** Stale-while-revalidate for content pages.

## SEO Implementation

### Metadata API

**File-based Metadata:**
```typescript
// src/app/(frontend)/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const page = await getPage(params.slug)

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description,
    openGraph: {
      title: page.meta?.title || page.title,
      description: page.meta?.description,
      images: page.meta?.image,
    },
  }
}
```

### Structured Data

**JSON-LD:** Implemented via Payload SEO plugin.

**Schema Types:**
- Article
- Organization
- WebPage
- BlogPosting

## Error Handling

### Error Boundaries

**File:** `src/app/(frontend)/error.tsx`

**Features:**
- Graceful error display
- Error reporting
- Recovery mechanisms

### 404 Pages

**File:** `src/app/(frontend)/not-found.tsx`

**Features:**
- Custom 404 design
- Search suggestions
- Navigation helpers

## Environment Configuration

### Next.js Configuration

**File:** `next.config.js`

**Key Settings:**
- Payload integration via `withPayload`
- Image optimization
- Redirects handling
- React Strict Mode

### Environment Variables

**Required:**
- `NEXT_PUBLIC_SERVER_URL` - Public-facing URL
- `DATABASE_URI` - Database connection
- `PAYLOAD_SECRET` - JWT secret

## Development Features

### Hot Module Replacement

**Fast Refresh:** Instant updates during development.

**Component State:** Preserved during code changes.

### TypeScript Integration

**Strict Mode:** Full type checking enabled.

**Generated Types:** Auto-generated from Payload schema.

### Development Tools

**ESLint:** Code quality enforcement.

**Prettier:** Code formatting.

**Husky:** Git hooks for quality gates.

This architecture provides a scalable, performant foundation for the frontend application while maintaining developer productivity and user experience.
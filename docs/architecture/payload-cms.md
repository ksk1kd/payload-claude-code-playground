# Payload CMS Configuration

This document details the Payload CMS configuration, including core settings, plugins, and customizations used in the project.

## Configuration Overview

The main Payload configuration is located in `src/payload.config.ts` and follows Payload CMS 3.x structure with TypeScript support.

### Core Configuration

```typescript
export default buildConfig({
  admin: { /* Admin panel configuration */ },
  editor: defaultLexical,
  db: postgresAdapter({ /* Database configuration */ }),
  collections: [Pages, Posts, News, Jobs, Media, Categories, Users],
  globals: [Header, Footer],
  plugins: [ /* Plugin configuration */ ],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: { /* TypeScript configuration */ },
  jobs: { /* Background jobs configuration */ }
})
```

## Database Configuration

### PostgreSQL Adapter
```typescript
db: postgresAdapter({
  pool: {
    connectionString: process.env.DATABASE_URI || '',
  },
})
```

**Environment Variables:**
- `DATABASE_URI` - PostgreSQL connection string
- Format: `postgresql://username:password@localhost:5432/database_name`

**Development vs Production:**
- **Development**: Schema push enabled for rapid iteration
- **Production**: Migration-based schema management required

## Admin Panel Configuration

### Admin Interface
```typescript
admin: {
  components: {
    beforeLogin: ['@/components/BeforeLogin'],
    beforeDashboard: ['@/components/BeforeDashboard'],
  },
  importMap: {
    baseDir: path.resolve(dirname),
  },
  user: Users.slug,
  livePreview: { /* Live preview configuration */ }
}
```

### Live Preview Settings
```typescript
livePreview: {
  breakpoints: [
    { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
    { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
    { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
  ],
}
```

**Features:**
- Multi-device preview breakpoints
- Real-time content preview
- Integration with frontend routes

## Collections Structure

### Registered Collections
1. **Pages** - Dynamic pages with layout builder
2. **Posts** - Blog posts with categories
3. **News** - News articles with publication workflow
4. **Jobs** - Job postings for recruitment
5. **Media** - File uploads and media management
6. **Categories** - Taxonomy system
7. **Users** - Authentication and user management

### Collection Files Location
```
src/collections/
├── Pages/index.ts
├── Posts/index.ts
├── News/index.ts
├── Jobs/index.ts
├── Media.ts
├── Categories.ts
└── Users/index.ts
```

## Global Configuration

### Header & Footer
```typescript
globals: [Header, Footer]
```

**Global Files:**
- `src/Header/config.ts` - Header configuration
- `src/Footer/config.ts` - Footer configuration

**Purpose:**
- Site-wide navigation data
- Footer content and links
- Global branding elements

## Plugin System

### Installed Plugins

#### 1. SEO Plugin
```typescript
seoPlugin({
  generateTitle,
  generateURL,
})
```
**Features:**
- Meta title and description generation
- Open Graph and Twitter Card support
- Canonical URL generation
- Sitemap integration

#### 2. Redirects Plugin
```typescript
redirectsPlugin({
  collections: ['pages', 'posts'],
  overrides: { /* Custom field overrides */ },
})
```
**Features:**
- URL redirect management
- Collection-based redirects
- Automatic revalidation on changes

#### 3. Form Builder Plugin
```typescript
formBuilderPlugin({
  fields: { payment: false },
  formOverrides: { /* Custom form configuration */ }
})
```
**Features:**
- Dynamic form creation
- Field type validation
- Lexical editor integration for confirmations

#### 4. Search Plugin
```typescript
searchPlugin({
  collections: ['posts'],
  beforeSync: beforeSyncWithSearch,
  searchOverrides: { /* Custom search fields */ }
})
```
**Features:**
- Full-text search functionality
- Collection-based search indexing
- Custom field overrides

#### 5. Nested Docs Plugin
```typescript
nestedDocsPlugin({
  collections: ['categories'],
  generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
})
```
**Features:**
- Hierarchical content organization
- URL generation for nested structures
- Parent-child relationships

#### 6. Payload Cloud Plugin
```typescript
payloadCloudPlugin()
```
**Features:**
- Payload Cloud integration
- Deployment optimization
- CDN configuration

## Rich Text Editor

### Lexical Configuration
```typescript
editor: defaultLexical
```

**Default Configuration** (`src/fields/defaultLexical.ts`):
- Standard text formatting
- Block-level elements
- Media embedding
- Custom block integration

**Features:**
- WYSIWYG editing experience
- Extensible block system
- JSON-based storage
- Frontend rendering support

## Background Jobs

### Jobs Configuration
```typescript
jobs: {
  access: {
    run: ({ req }) => {
      if (req.user) return true
      const authHeader = req.headers.get('authorization')
      return authHeader === `Bearer ${process.env.CRON_SECRET}`
    },
  },
  tasks: [],
}
```

**Access Control:**
- Authenticated users can run jobs
- Cron jobs via `CRON_SECRET` environment variable
- Secure job execution

**Use Cases:**
- Scheduled content publishing
- Automated content processing
- Background data synchronization

## TypeScript Integration

### Type Generation
```typescript
typescript: {
  outputFile: path.resolve(dirname, 'payload-types.ts'),
}
```

**Generated Types:**
- Collection interfaces
- Field type definitions
- Plugin type extensions
- API response types

**Benefits:**
- Full type safety
- IDE autocompletion
- Compile-time error checking
- API contract validation

## Security Configuration

### CORS Settings
```typescript
cors: [getServerSideURL()].filter(Boolean)
```

**Security Features:**
- Environment-based CORS configuration
- Request origin validation
- Cross-site request protection

### Environment Variables
```typescript
secret: process.env.PAYLOAD_SECRET
```

**Required Variables:**
- `PAYLOAD_SECRET` - JWT signing secret
- `DATABASE_URI` - Database connection
- `CRON_SECRET` - Background job authentication

## Media Handling

### Sharp Integration
```typescript
sharp
```

**Image Processing:**
- Automatic image optimization
- Multiple format support
- Responsive image generation
- File size optimization

**Configuration Benefits:**
- Improved performance
- Reduced bandwidth usage
- Better user experience
- SEO optimization

## Development vs Production

### Development Mode
- Hot module replacement
- Schema push enabled
- Detailed error messages
- Development plugins

### Production Mode
- Optimized builds
- Migration-based schema updates
- Error logging
- Performance monitoring

## Customization Points

### Admin Components
- Custom login screen
- Dashboard customization
- Field-level customizations
- Collection-specific overrides

### Plugin Extensions
- Custom field types
- Hook implementations
- API extensions
- Third-party integrations

This configuration provides a robust foundation for content management while maintaining flexibility for future enhancements and customizations.
# Database Architecture

This document outlines the database design, schema structure, and data management strategies used in the Payload Claude Code Playground project.

## Database Overview

The application uses **PostgreSQL** as the primary database with Payload CMS managing the schema through its PostgreSQL adapter.

### Database Configuration

```typescript
// src/payload.config.ts
db: postgresAdapter({
  pool: {
    connectionString: process.env.DATABASE_URI || '',
  },
})
```

**Connection String Format:**
```
postgresql://username:password@localhost:5432/database_name
```

## Schema Management

### Development vs Production

#### Development Mode
- **Schema Push**: Automatic schema synchronization
- **Fast Iteration**: Immediate schema changes without migrations
- **Hot Reloading**: Database schema updates on code changes

#### Production Mode
- **Migration-Based**: Controlled schema updates
- **Version Control**: Schema changes tracked in migration files
- **Rollback Support**: Ability to revert schema changes

### Migration Workflow

```bash
# Create a new migration
pnpm payload migrate:create

# Run pending migrations
pnpm payload migrate

# Check migration status
pnpm payload migrate:status
```

## Collection Tables

### Core Collections

#### 1. Pages Collection
**Table Name:** `pages`

**Key Fields:**
```sql
CREATE TABLE pages (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  slug VARCHAR UNIQUE NOT NULL,
  layout JSONB,              -- Layout builder blocks
  meta JSONB,                -- SEO metadata
  published_at TIMESTAMP,
  _status VARCHAR DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Purpose:** Dynamic pages with layout builder functionality.

#### 2. Posts Collection
**Table Name:** `posts`

**Key Fields:**
```sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  slug VARCHAR UNIQUE NOT NULL,
  content JSONB,             -- Rich text content
  excerpt TEXT,
  featured_image INTEGER REFERENCES media(id),
  categories INTEGER[] REFERENCES categories(id)[],
  authors INTEGER[] REFERENCES users(id)[],
  published_at TIMESTAMP,
  _status VARCHAR DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Purpose:** Blog posts with categorization and authoring.

#### 3. News Collection
**Table Name:** `news`

**Key Fields:**
```sql
CREATE TABLE news (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  slug VARCHAR UNIQUE NOT NULL,
  content JSONB,
  summary TEXT,
  featured_image INTEGER REFERENCES media(id),
  authors INTEGER[] REFERENCES users(id)[],
  published_at TIMESTAMP,
  _status VARCHAR DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Purpose:** News articles with publication workflow.

#### 4. Jobs Collection
**Table Name:** `jobs`

**Key Fields:**
```sql
CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  slug VARCHAR UNIQUE NOT NULL,
  description JSONB,
  location VARCHAR,
  job_type VARCHAR,          -- full-time, part-time, contract
  salary_range VARCHAR,
  requirements JSONB,
  benefits JSONB,
  application_deadline DATE,
  _status VARCHAR DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Purpose:** Job postings for recruitment functionality.

#### 5. Media Collection
**Table Name:** `media`

**Key Fields:**
```sql
CREATE TABLE media (
  id SERIAL PRIMARY KEY,
  filename VARCHAR NOT NULL,
  alt TEXT,
  caption TEXT,
  width INTEGER,
  height INTEGER,
  sizes JSONB,               -- Responsive image sizes
  focal_point JSONB,         -- Image focal point data
  file_size INTEGER,
  mime_type VARCHAR,
  url VARCHAR,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Purpose:** File uploads and media management.

#### 6. Categories Collection
**Table Name:** `categories`

**Key Fields:**
```sql
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  slug VARCHAR UNIQUE NOT NULL,
  description TEXT,
  parent INTEGER REFERENCES categories(id),
  breadcrumbs JSONB,         -- Nested docs breadcrumb data
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Purpose:** Hierarchical taxonomy system.

#### 7. Users Collection
**Table Name:** `users`

**Key Fields:**
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,  -- Hashed password
  first_name VARCHAR,
  last_name VARCHAR,
  roles VARCHAR[] DEFAULT ARRAY['user'],
  reset_password_token VARCHAR,
  reset_password_expiration TIMESTAMP,
  salt VARCHAR,
  hash VARCHAR,
  login_attempts INTEGER DEFAULT 0,
  lock_until TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Purpose:** User authentication and authorization.

## Global Tables

### Header & Footer
**Table Names:** `header`, `footer`

**Structure:**
```sql
CREATE TABLE header (
  id SERIAL PRIMARY KEY,
  nav_items JSONB,           -- Navigation structure
  logo_data JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE footer (
  id SERIAL PRIMARY KEY,
  nav_items JSONB,
  social_links JSONB,
  copyright_text TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Purpose:** Site-wide navigation and branding data.

## Plugin Tables

### SEO Plugin
**Table Name:** `_seo`

**Purpose:** SEO metadata for collections.

### Search Plugin
**Table Name:** `_search`

**Purpose:** Search index for full-text search functionality.

### Redirects Plugin
**Table Name:** `redirects`

**Purpose:** URL redirect management.

### Form Builder Plugin
**Table Name:** `forms`, `form_submissions`

**Purpose:** Dynamic form creation and submission handling.

## Versioning & Drafts

### Version Tables
Each collection with drafts enabled has corresponding version tables:

```sql
-- Example for pages
CREATE TABLE pages_versions (
  id SERIAL PRIMARY KEY,
  parent_id INTEGER REFERENCES pages(id),
  version JSONB,             -- Complete document version
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Features:**
- Draft/published workflow
- Version history tracking
- Scheduled publishing support

## Relationships

### One-to-Many Relationships
- **Posts → Categories**: Posts can have multiple categories
- **News → Authors**: News articles can have multiple authors
- **Pages → Media**: Pages can reference multiple media items

### Many-to-Many Relationships
- **Posts ↔ Users**: Authors relationship
- **Categories ↔ Posts**: Categorization system

### One-to-One Relationships
- **Media → File**: Each media record represents one file

## Indexing Strategy

### Primary Indexes
```sql
-- Slug-based lookups
CREATE INDEX idx_pages_slug ON pages(slug);
CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_news_slug ON news(slug);
CREATE INDEX idx_jobs_slug ON jobs(slug);

-- Status filtering
CREATE INDEX idx_pages_status ON pages(_status);
CREATE INDEX idx_posts_status ON posts(_status);

-- Publication date
CREATE INDEX idx_posts_published_at ON posts(published_at);
CREATE INDEX idx_news_published_at ON news(published_at);
```

### JSONB Indexes
```sql
-- Content search
CREATE INDEX idx_posts_content ON posts USING GIN(content);
CREATE INDEX idx_pages_layout ON pages USING GIN(layout);
```

## Data Types

### JSONB Usage
**Collections using JSONB:**
- **Layout Blocks**: Flexible block structure
- **Rich Text Content**: Lexical editor output
- **SEO Metadata**: Dynamic meta fields
- **Media Sizes**: Responsive image data

**Benefits:**
- Schema flexibility
- Efficient querying
- Native JSON operations
- Indexing support

### Array Types
**Usage Examples:**
- **Categories**: `INTEGER[]` for multiple category assignment
- **Authors**: `INTEGER[]` for multiple author assignment
- **Roles**: `VARCHAR[]` for user role management

## Performance Considerations

### Query Optimization
- **Connection Pooling**: Efficient database connections
- **Query Planning**: PostgreSQL query optimizer
- **Index Usage**: Strategic index placement
- **JSONB Operations**: Efficient JSON querying

### Caching Strategy
- **Application-Level**: Payload built-in caching
- **Database-Level**: PostgreSQL shared buffers
- **Query Result Caching**: Selective result caching

### Backup & Recovery
- **Automated Backups**: Regular database snapshots
- **Point-in-Time Recovery**: Transaction log archiving
- **Migration Safety**: Reversible schema changes

## Environment-Specific Configurations

### Development Database
```bash
# Local PostgreSQL instance
DATABASE_URI=postgresql://user:password@localhost:5432/payload_dev

# Schema push enabled
PAYLOAD_DATABASE_PUSH=true
```

### Production Database
```bash
# Production connection with SSL
DATABASE_URI=postgresql://user:password@prod-host:5432/payload_prod?sslmode=require

# Migration-based updates
PAYLOAD_DATABASE_PUSH=false
```

## Monitoring & Maintenance

### Health Checks
- Connection pool monitoring
- Query performance tracking
- Index usage analysis
- Storage utilization monitoring

### Maintenance Tasks
- Regular VACUUM operations
- Index maintenance
- Statistics updates
- Connection pool optimization

This database architecture provides a solid foundation for content management while maintaining performance, scalability, and data integrity.
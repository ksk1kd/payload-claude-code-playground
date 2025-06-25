# Pages Overview

This document provides an overview of the page structure and routing system for the Payload CMS website template built with Next.js App Router.

## Application Architecture

The application uses **Next.js App Router** with a **dual route group structure** that separates content delivery from administrative functionality:

- **`(frontend)`** - Public-facing website pages and content
- **`(payload)`** - Payload CMS admin panel and API endpoints

## Frontend Page Structure

### Route Organization

The frontend uses a hierarchical routing structure designed for content management and user experience:

```
/
├── [slug]                    # Dynamic CMS pages
├── posts/                    # Blog content section
├── news/                     # News and announcements  
├── members/                  # Team member profiles
├── recruit/                  # Job postings and recruitment
└── search/                   # Search functionality
```

### Page Types

#### 1. Dynamic CMS Pages (`[slug]`)
- **Purpose**: Flexible page system managed through Payload CMS
- **Content Source**: Pages collection with block-based layouts
- **Features**: Draft/publish workflow, SEO optimization, flexible content blocks
- **Examples**: About, Contact, Company pages

#### 2. Content Collection Pages
Each content type has dedicated page structures:

**Posts Section**
- Index page with pagination
- Individual post pages
- Category-based filtering with pagination
- Archive functionality

**News Section**
- News listing with pagination
- Individual news article pages
- Time-sensitive content display

**Members Section**  
- Team member directory
- Individual member profile pages
- Professional information display

**Recruitment Section**
- Job listings and recruitment content
- Individual job posting pages
- Application-focused design

#### 3. Utility Pages
- **Search**: Global content search functionality
- **Error Handling**: Custom 404 and error pages

## Content Management Features

### Static Generation
- **Build-time Generation**: All pages pre-rendered for performance
- **Incremental Static Regeneration (ISR)**: Content updates trigger re-generation
- **Draft Preview**: Real-time preview of draft content

### SEO Optimization
- **Automatic Sitemaps**: Generated for each content type
- **Meta Tags**: Comprehensive SEO fields for all pages
- **Structured Data**: Schema markup for content types
- **Social Sharing**: Open Graph optimization

### Performance Features
- **Image Optimization**: Automatic image processing and resizing
- **Lazy Loading**: Deferred loading for improved performance
- **Edge Caching**: Global content distribution
- **Pagination**: Efficient content browsing

## Layout System

### Global Layout
- **Header**: Navigation and branding
- **Footer**: Site information and links
- **Theme Provider**: Dark/light mode support
- **Admin Bar**: Content management shortcuts for authenticated users

### Responsive Design
- **Mobile-first**: Optimized for mobile devices
- **Flexible Layouts**: Adaptive content presentation
- **Touch-friendly**: Mobile interaction optimization

## Content Delivery

### Data Sources
- **Payload Collections**: Primary content source
- **Block System**: Flexible page composition
- **Media Management**: Optimized file delivery
- **Search Integration**: Full-text search capabilities

### Cache Strategy
- **Static Pages**: Pre-generated for fast delivery
- **API Responses**: Cached for performance
- **Media Assets**: CDN-optimized delivery
- **Database Queries**: Optimized for minimal overhead

## Development Features

### Draft System
- **Preview Mode**: Real-time draft content preview
- **Publication Workflow**: Draft, review, and publish process
- **Version Control**: Content history tracking

### Admin Integration
- **Live Preview**: In-admin page preview
- **Direct Editing**: Content editing within page context
- **Publishing Controls**: Schedule and manage content publication

## Access Control

### Public Pages
- All frontend pages publicly accessible when published
- Draft content restricted to authenticated users
- Preview functionality for content review

### Authentication
- Admin access through Payload authentication
- Role-based permissions for content management
- Secure API endpoints for data access

## Related Documentation

### Page-Specific Documentation
- [Top Page](./top-page.md) - Home page design and functionality
- [Dynamic Pages](./dynamic-pages.md) - CMS-driven page system
- [Posts Pages](./posts-pages.md) - Blog content structure
- [News Pages](./news-pages.md) - News and announcements
- [Recruit Pages](./recruit-pages.md) - Job posting system
- [Members Pages](./members-pages.md) - Team member profiles
- [Search Page](./search-page.md) - Search functionality
- [Error Pages](./error-pages.md) - Error handling and 404 pages

### Technical Documentation
- [Next.js Frontend](../architecture/nextjs-frontend.md) - Frontend architecture
- [Collections Overview](../collections/overview.md) - Content structure
- [Block System](../blocks/overview.md) - Content composition system
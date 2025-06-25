# Dynamic Pages

This document provides comprehensive documentation for the dynamic page system that handles flexible, CMS-driven pages through the `[slug]` route.

## Page Structure Overview

The dynamic pages system consists of one main route type:

- **Dynamic Pages** (`/[slug]`) - Flexible CMS-driven pages with block-based layouts

## Dynamic Pages System (`/[slug]`)

### Purpose & Functionality

The dynamic pages system provides a flexible foundation for content-driven pages managed through Payload CMS, supporting unlimited page layouts through a modular block system.

### Data Sources

#### Page Content
- **Source**: Pages collection via Payload API
- **Fields**: title, hero, layout (blocks), meta, slug, publishedAt
- **Draft Support**: Live preview for draft pages
- **Fallback**: Home page fallback for root route

#### Static Generation
- **Strategy**: `generateStaticParams()` for all published pages
- **Caching**: React cache for efficient slug-based queries
- **Revalidation**: Automatic when page content changes
- **Draft Mode**: Preview support for unpublished content

### User Interactions

- **Block Navigation**: Scroll through modular content blocks
- **Hero Engagement**: Interact with hero sections based on impact level
- **Form Submission**: Complete forms embedded through FormBlocks
- **Media Viewing**: View images and media through MediaBlocks
- **Link Following**: Navigate through CallToAction and content links

### SEO Considerations

- **Dynamic Metadata**: Generated using `generateMeta()` utility
- **Open Graph**: Automatic OG image and metadata generation
- **Meta Descriptions**: Custom or auto-generated descriptions
- **URL Structure**: Clean slug-based URLs (`/about`, `/services`)
- **Default Fallbacks**: Website template OG image when none specified


## Related Documentation

- [Pages Collection](../collections/pages.md) - Page content structure and fields
- [Block System](../blocks/overview.md) - Detailed block documentation
- [Hero Components](../blocks/hero-blocks.md) - Hero system documentation
- [SEO Implementation](../architecture/nextjs-frontend.md#seo) - Search optimization
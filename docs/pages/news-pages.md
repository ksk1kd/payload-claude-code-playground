# News Pages

This document provides comprehensive documentation for the news section of the website, covering news listing, individual articles, and pagination functionality.

## Page Structure Overview

The news section consists of three main page types:

- **News Index** (`/news`) - Main news listing page
- **Individual News** (`/news/[slug]`) - Detailed news article pages  
- **Paginated News** (`/news/page/[pageNumber]`) - Additional news listing pages

## News Index Page (`/news`)

### Purpose & Functionality

The news index serves as the main entry point for news content, displaying the most recent articles in a clean, scannable format.


### Data Sources

#### Content Query
- **Source**: News collection via Payload API
- **Fields Retrieved**: title, slug, categories, meta, publishedAt
- **Limit**: 10 articles per page
- **Order**: Most recent first (publishedAt desc)

#### Static Generation
- **Strategy**: force-static with 10-minute revalidation
- **Performance**: Pre-rendered at build time
- **Updates**: ISR (Incremental Static Regeneration) for content changes

### User Interactions

- **Article Navigation**: Click titles to view full articles
- **Page Navigation**: Use pagination controls for older content
- **Category Viewing**: Visual category indicators (display only)

### SEO Considerations

- **Page Title**: "Payload Website Template News"
- **Meta Description**: Automatically generated from page content
- **Structured Data**: News article schema markup
- **Sitemap**: Included in `/news-sitemap.xml`


## Individual News Page (`/news/[slug]`)

### Purpose & Functionality

Dedicated pages for reading complete news articles with rich content and related article suggestions.


### Data Sources

#### Article Content
- **Source**: Individual news document from News collection
- **Depth**: Includes related content and media
- **Population**: Authors and categories fully populated
- **Draft Support**: Live preview for draft content

#### Static Generation
- **Strategy**: `generateStaticParams()` for all published articles
- **Caching**: React cache for efficient slug-based queries
- **Revalidation**: Automatic when content changes

### User Interactions

- **Content Reading**: Scroll through rich text content
- **Media Viewing**: Interactive images and videos
- **Related Content**: Navigate to suggested articles
- **Social Sharing**: Meta tags optimized for social platforms

### SEO Considerations

- **Dynamic Metadata**: Generated using `generateMeta()` utility
- **Open Graph**: Optimized images and descriptions
- **Schema Markup**: NewsArticle structured data
- **URL Structure**: Clean `/news/article-title` format


## Paginated News Pages (`/news/page/[pageNumber]`)

### Purpose & Functionality

Additional pages for browsing older news content with consistent navigation and layout.

### Page Structure

#### Layout Consistency
- **Layout**: Identical to main news index page
- **Navigation**: Seamless pagination experience
- **Content Display**: Same layout and functionality as main index

#### URL Structure
- **Pattern**: `/news/page/2`, `/news/page/3`, etc.
- **Starting Point**: Page 2 (since page 1 is `/news`)
- **Validation**: Invalid page numbers return 404

### Data Sources

#### Content Strategy
- **Query Logic**: Offset-based pagination with same field selection
- **Page Size**: 10 articles per page (consistent)
- **Ordering**: Chronological by publication date

#### Static Generation
- **Pre-generation**: All valid pagination pages created at build time
- **Validation**: Prevents generation of empty or invalid pages
- **Performance**: Fast loading through static delivery

### User Interactions

- **Page Navigation**: Previous/next controls with page numbers
- **Article Access**: Same interaction patterns as main index
- **Deep Linking**: Direct access to specific page numbers

### SEO Considerations

- **Page Titles**: Dynamic titles like "News - Page 2 | Site Name"
- **Canonical URLs**: Proper canonicalization for paginated content
- **Pagination Meta**: rel="prev"/rel="next" link tags
- **Indexing**: Appropriate robots meta for pagination



## Related Documentation

- [News Collection](../collections/news.md) - Content structure and fields
- [SEO Implementation](../architecture/nextjs-frontend.md#seo) - Search optimization
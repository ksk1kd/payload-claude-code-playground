# Posts Pages

This document provides comprehensive documentation for the posts section of the website, covering blog post listings, individual articles, category archives, and pagination functionality.

## Page Structure Overview

The posts section consists of five main page types:

- **Posts Index** (`/posts`) - Main blog post listing page
- **Individual Posts** (`/posts/[slug]`) - Detailed blog post pages  
- **Paginated Posts** (`/posts/page/[pageNumber]`) - Additional post listing pages
- **Category Archives** (`/posts/category/[slug]`) - Category-specific post listings
- **Category Pagination** (`/posts/category/[slug]/page/[pageNumber]`) - Paginated category listings

## Posts Index Page (`/posts`)

### Purpose & Functionality

The posts index serves as the main entry point for blog content, displaying the most recent posts in a clean, grid-based layout optimized for content discovery.

### Data Sources

#### Content Query
- **Source**: Posts collection via Payload API
- **Fields Retrieved**: title, slug, categories, meta, publishedAt, hero
- **Limit**: 12 posts per page
- **Order**: Most recent first (publishedAt desc)

#### Static Generation
- **Strategy**: force-static with 10-minute revalidation
- **Performance**: Pre-rendered at build time
- **Updates**: ISR (Incremental Static Regeneration) for content changes

### User Interactions

- **Post Navigation**: Click post cards to view full articles
- **Page Navigation**: Use pagination controls for older content
- **Visual Browsing**: Grid layout with hero images for easy scanning

### SEO Considerations

- **Page Title**: "Payload Website Template Posts"
- **Meta Description**: Automatically generated from page content
- **Structured Data**: Blog posting schema markup
- **Sitemap**: Included in `/posts-sitemap.xml`

## Individual Posts Page (`/posts/[slug]`)

### Purpose & Functionality

Dedicated pages for reading complete blog posts with rich content, author attribution, and related post suggestions.

### Data Sources

#### Article Content
- **Source**: Individual post document from Posts collection
- **Depth**: Includes related content, authors, and media
- **Population**: Authors, categories, and related posts fully populated
- **Draft Support**: Live preview for draft content

#### Static Generation
- **Strategy**: `generateStaticParams()` for all published posts
- **Caching**: React cache for efficient slug-based queries
- **Revalidation**: Automatic when content changes

### User Interactions

- **Content Reading**: Scroll through rich text content with embedded blocks
- **Author Navigation**: Click author names to view member profiles
- **Category Browsing**: Click categories to view category archives
- **Related Content**: Navigate to suggested related posts
- **Social Sharing**: Meta tags optimized for social platforms

### SEO Considerations

- **Dynamic Metadata**: Generated using `generateMeta()` utility
- **Open Graph**: Optimized images and descriptions
- **Schema Markup**: BlogPosting structured data
- **URL Structure**: Clean `/posts/post-title` format

## Paginated Posts Pages (`/posts/page/[pageNumber]`)

### Purpose & Functionality

Additional pages for browsing older blog content with consistent navigation and layout.

### Page Structure

#### Layout Consistency
- **Layout**: Identical to main posts index page
- **Navigation**: Seamless pagination experience
- **Content Display**: Same grid layout and functionality as main index

#### URL Structure
- **Pattern**: `/posts/page/2`, `/posts/page/3`, etc.
- **Starting Point**: Page 2 (since page 1 is `/posts`)
- **Validation**: Invalid page numbers return 404

### Data Sources

#### Content Strategy
- **Query Logic**: Offset-based pagination with same field selection
- **Page Size**: 12 posts per page (consistent)
- **Ordering**: Chronological by publication date

#### Static Generation
- **Pre-generation**: All valid pagination pages created at build time
- **Validation**: Prevents generation of empty or invalid pages
- **Performance**: Fast loading through static delivery

### User Interactions

- **Page Navigation**: Previous/next controls with page numbers
- **Post Access**: Same interaction patterns as main index
- **Deep Linking**: Direct access to specific page numbers

### SEO Considerations

- **Page Titles**: Dynamic titles like "Posts - Page 2 | Site Name"
- **Canonical URLs**: Proper canonicalization for paginated content
- **Pagination Meta**: rel="prev"/rel="next" link tags
- **Indexing**: Appropriate robots meta for pagination

## Category Archive Pages (`/posts/category/[slug]`)

### Purpose & Functionality

Dedicated pages for browsing posts within specific categories, providing focused content discovery by topic.

### Data Sources

#### Category Content
- **Source**: Posts collection filtered by category
- **Validation**: Category existence check (404 if not found)
- **Fields**: Same as main posts index with category filtering
- **Count**: Dynamic post count per category

#### Static Generation
- **Strategy**: Pre-generates all category archive pages
- **Category List**: Generated from all available categories
- **Performance**: Static delivery for fast category browsing

### User Interactions

- **Filtered Browsing**: View posts within specific categories
- **Post Navigation**: Access individual posts from category view
- **Pagination**: Navigate through multiple pages of category content
- **Context Awareness**: Clear indication of current category filter

### SEO Considerations

- **Category Titles**: Dynamic titles like "Technology Posts | Site Name"
- **Meta Descriptions**: Category-specific descriptions
- **Structured Data**: Category-aware schema markup
- **URL Structure**: Clean `/posts/category/category-name` format

## Category Pagination Pages (`/posts/category/[slug]/page/[pageNumber]`)

### Purpose & Functionality

Paginated navigation within category archives for categories with large numbers of posts.

### Page Structure

#### Advanced Navigation
- **Category Context**: Maintains category filter across pagination
- **URL Pattern**: `/posts/category/technology/page/2`
- **Validation**: Validates both category existence and page numbers
- **Base Path**: Custom pagination base path for categories

#### Dynamic Generation
- **Complex Static Generation**: Generates pagination for each category
- **Optimized Queries**: Counts posts per category to determine pages needed
- **Error Handling**: Returns 404 for invalid category/page combinations

### Data Sources

#### Category-Specific Content
- **Filtering**: Posts filtered by specific category
- **Pagination**: Same 12-post limit as general pagination
- **Ordering**: Consistent chronological ordering

#### Performance Strategy
- **Efficient Generation**: Only generates necessary pagination pages
- **Category Optimization**: Pre-calculates pagination needs per category
- **Static Delivery**: Fast loading for category browsing

### User Interactions

- **Category-Focused Navigation**: Browse through category-specific content
- **Consistent Experience**: Same interaction patterns as general pagination
- **Clear Context**: Category name maintained in page titles and navigation

### SEO Considerations

- **Dynamic Titles**: "Technology Posts - Page 2 | Site Name"
- **Category Context**: SEO maintains category relevance
- **Pagination Structure**: Proper prev/next relationships
- **Content Focus**: Category-specific meta descriptions

## Related Documentation

- [Posts Collection](../collections/posts.md) - Content structure and fields
- [Categories Collection](../collections/categories.md) - Category taxonomy system
- [SEO Implementation](../architecture/nextjs-frontend.md#seo) - Search optimization
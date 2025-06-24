# Posts Collection

The Posts collection manages blog content with rich text editing, author relationships, and categorization. It provides a complete blogging system with advanced content management features.

## Collection Purpose

The Posts collection provides comprehensive blog functionality through:
- **Rich Content Creation**: Advanced text editing with embedded blocks
- **Author Attribution**: Multi-author support with relationship management
- **Content Organization**: Category-based organization and related content
- **Publication Workflow**: Draft, schedule, and publish capabilities

## Field Structure

### Core Fields

#### Title
- Primary identifier for the post
- Used as admin title and SEO title fallback
- Required field for post identification

#### Content Structure (Tabs)

The post content is organized into three main tabs:

### 1. Content Tab

#### Hero Image
- Optional featured image for the post
- Displayed prominently in post header
- References Media collection for optimized image handling

#### Rich Text Content
**Advanced Content Editor** with comprehensive formatting capabilities:

**Rich Text Features**:
- **Headings**: H1-H4 support for content structure
- **Embedded Blocks**: Banner, Code, and MediaBlock integration
- **Editing Tools**: Fixed and inline editing interfaces
- **Content Dividers**: Horizontal rules for section breaks
- **Standard Formatting**: Bold, italic, links, lists, and more

### 2. Meta Tab

#### Related Posts
- Self-referential relationships for content discovery
- Excludes current post from selection automatically
- Supports multiple related posts for engagement

#### Categories
- Multiple category assignment per post
- References Categories collection for organization
- Used for content filtering and discovery

### 3. SEO Tab
Comprehensive SEO configuration identical to Pages collection:
- Meta title, description, and image
- Social sharing optimization
- Search result preview

## Author Management

### Authors Field
- Multiple authors per post support
- References Users collection for attribution
- Privacy protection through secure data handling

### Populated Authors
- **Read-only field** automatically populated for safe data exposure
- **Privacy Protection** ensures sensitive user data remains secure
- **Frontend Ready** data structure optimized for public consumption

## Publishing & Versioning

### Publication Date
- **Automatic Timestamps**: Set when content status changes to published
- **Precise Scheduling**: Date and time picker for exact publication control
- **Accessible Interface**: Sidebar placement for easy editing access

### Version Control
- **Draft system**: Auto-save every 100ms
- **Scheduled publishing**: Future publication dates
- **Version history**: Up to 50 versions per post
- **Live preview**: Real-time content preview

## Admin Interface Features

### Live Preview
- Real-time preview during editing
- URL generation: `/posts/{slug}`
- Preview token support for draft content

### Default Columns
Admin list view displays:
- Title
- Slug  
- Last updated timestamp

### Content Management
- **Sidebar fields**: Authors, categories, related posts
- **Rich text editor**: Advanced Lexical editor
- **Media integration**: Drag-and-drop image insertion

## Hooks & Automation

### Content Hooks
- **After Change**: `revalidatePost` - Triggers Next.js ISR
- **After Read**: `populateAuthors` - Safely exposes author data
- **After Delete**: `revalidateDelete` - Cleans up cached content

### Author Population Process
- **Secure Data Handling**: Automatically processes author information without exposing private user data
- **Selective Information**: Only public-safe author details are made available
- **Performance Optimized**: Efficient processing of author relationships

## URL Structure & Frontend Integration

### URL Pattern
- Individual post pages: `/posts/{slug}`
- Posts listing page: `/posts`
- Category-filtered posts: `/posts/category/{slug}`

### Default Population
- **Optimized Queries**: Only essential data loaded by default
- **Related Content**: Categories and meta information included
- **Performance Focus**: Reduced database overhead for faster loading

## Content Relationships

### Direct Relationships
- **Categories**: Content organization and filtering
- **Related Posts**: Content discovery and engagement
- **Authors**: Attribution and author pages
- **Media**: Hero images and embedded content

### Block Integration
Posts can embed specialized content blocks:
- **Banner**: Promotional content and announcements
- **Code**: Syntax-highlighted code snippets
- **MediaBlock**: Rich media with captions and positioning

## SEO & Social Features

### Built-in SEO
- **Auto-generated meta**: From title and content
- **Open Graph**: Social media sharing optimization
- **Schema markup**: Rich snippets for search engines
- **URL optimization**: Clean, descriptive URLs

### Social Integration
- **Category-based discovery**: Related content suggestions
- **Author attribution**: Bylines and author pages
- **Related posts**: Increased engagement and session time

## Performance Optimization

### Caching Strategy
- **ISR (Incremental Static Regeneration)**: Fast page loads
- **On-demand revalidation**: Content updates trigger cache refresh
- **Selective population**: Only necessary data loaded by default

### Image Optimization
- **Hero images**: Optimized through Media collection
- **Embedded media**: Multiple sizes for responsive images
- **Lazy loading**: Improved page load performance

## Content Workflow

### Editorial Process
1. **Draft Creation**: Authors create draft posts
2. **Content Development**: Rich text editing with live preview
3. **Categorization**: Assign relevant categories
4. **Author Assignment**: Multiple authors if collaborative
5. **SEO Optimization**: Meta fields and social optimization
6. **Scheduling**: Set publication date/time
7. **Publishing**: Content goes live with cache revalidation

### Content Management
- **Version history**: Track all changes
- **Auto-save**: Never lose work
- **Preview**: See exact final appearance
- **Scheduling**: Plan content calendar

## Related Documentation
- [Categories Collection](./categories.md)
- [Users Collection](./users.md)
- [Media Collection](./media.md)
- [Block System](../blocks/overview.md)
- [Rich Text Features](../blocks/content.md)
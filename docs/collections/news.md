# News Collection

The News collection manages news articles and announcements with rich text editing and author relationships. It provides a streamlined content management system for time-sensitive organizational communications.

## Collection Purpose

The News collection provides streamlined content management for organizational communications through:
- **Time-Sensitive Content**: Optimized for announcements and updates
- **Author Attribution**: Multi-author support for collaborative news
- **Content Organization**: Category-based filtering and discovery
- **Publication Workflow**: Draft, schedule, and publish capabilities

## Field Structure

### Core Fields

#### Title
- Primary identifier for the news article
- Used as admin title and SEO title fallback
- Required field for article identification

#### Content Structure (Tabs)

The news content is organized into three main tabs:

### 1. Content Tab

#### Rich Text Content
**Streamlined Content Editor** optimized for news articles:

**Rich Text Features**:
- **Headings**: H1-H4 support for article structure
- **Embedded Blocks**: Banner, Code, and MediaBlock integration
- **Editing Tools**: Fixed and inline editing interfaces
- **Content Dividers**: Horizontal rules for section organization
- **Standard Formatting**: Bold, italic, links, lists, and more

### 2. Meta Tab

#### Related News
- Self-referential relationships for related articles
- Excludes current article from selection automatically
- Supports multiple related news items for content discovery

#### Categories
- Multiple category assignment per news article
- References Categories collection for organization
- Used for content filtering and discovery

### 3. SEO Tab
Comprehensive SEO configuration:
- Meta title, description, and image
- Social sharing optimization
- Search result preview

## Author Management

### Authors Field
- Multiple authors per news article support
- References Users collection for attribution
- Supports collaborative authoring workflows

### Populated Authors
- **Read-only field** automatically populated for safe data exposure
- **Simplified author data** includes only essential information
- **Privacy protection** ensures no sensitive user data is exposed

## Publishing & Versioning

### Publication Date
- **Automatic Timestamps**: Set when article status changes to published
- **Precise Scheduling**: Date and time picker for exact publication control
- **Accessible Interface**: Sidebar placement for easy editing access

### Version Control
- **Draft system**: Auto-save every 100ms
- **Scheduled publishing**: Future publication dates
- **Version history**: Up to 50 versions per article
- **Live preview**: Real-time content preview

## Admin Interface Features

### Live Preview
- Real-time preview during editing
- URL generation: `/news/{slug}`
- Preview token support for draft content

### Default Columns
Admin list view displays:
- Title
- Slug
- Last updated timestamp

### Content Management
- **Sidebar fields**: Authors, categories, related news
- **Rich text editor**: Advanced Lexical editor
- **Media integration**: Embedded content blocks

## Hooks & Automation

### Content Hooks
- **After Change**: `revalidateNews` - Triggers Next.js ISR
- **After Read**: `populateAuthors` - Safely exposes author data
- **After Delete**: `revalidateDelete` - Cleans up cached content

### Author Population Process
- **Streamlined Processing**: Automatically handles author information with simplified data structure
- **Privacy Protection**: Only essential author details are made available
- **Performance Optimized**: Efficient processing designed for news content needs

## URL Structure & Frontend Integration

### URL Pattern
- Individual news article pages: `/news/{slug}`
- News listing page: `/news`
- Category-filtered news: `/news/category/{slug}`

### Default Population
- **Optimized Queries**: Essential data loaded by default
- **Related Content**: Categories and meta information included
- **Performance Focus**: Reduced database overhead for faster loading

## Content Relationships

### Direct Relationships
- **Categories**: Content organization and filtering
- **Related News**: Content discovery and engagement
- **Authors**: Attribution and author information
- **Media**: Embedded content through blocks

### Block Integration
News articles can embed specialized content blocks:
- **Banner**: Important announcements and highlights
- **Code**: Technical documentation and examples
- **MediaBlock**: Images, videos, and rich media content

## Content Characteristics

### Streamlined Design
- **Content-Focused**: Emphasis on text content over visual elements
- **Essential Author Data**: Simplified author information for organizational use
- **Category-Oriented**: Strong emphasis on organizational categories

### Primary Use Cases
- **Company Announcements**: Official communications
- **Press Releases**: External news and updates
- **Internal Updates**: Team and organizational news
- **Event Announcements**: Upcoming events and activities

## SEO & Social Features

### Built-in SEO
- **Auto-generated meta**: From title and content
- **Open Graph**: Social media sharing optimization
- **News-specific markup**: Optimized for news aggregators
- **URL optimization**: Clean, descriptive URLs

### Social Integration
- **Category-based discovery**: Related content suggestions
- **Author attribution**: Bylines and author information
- **Related news**: Increased engagement

## Performance Optimization

### Caching Strategy
- **ISR (Incremental Static Regeneration)**: Fast page loads
- **On-demand revalidation**: Content updates trigger cache refresh
- **Selective population**: Only necessary data loaded

### Content Delivery
- **Static generation**: Pre-rendered for performance
- **Edge caching**: Global content distribution
- **Optimized queries**: Minimal database impact

## Content Workflow

### Editorial Process
1. **Draft Creation**: Authors create draft articles
2. **Content Development**: Rich text editing with live preview
3. **Categorization**: Assign relevant categories
4. **Author Assignment**: Multiple authors if needed
5. **SEO Optimization**: Meta fields and social optimization
6. **Scheduling**: Set publication date/time
7. **Publishing**: Content goes live with cache revalidation

### News Management
- **Time-sensitive content**: Scheduling for announcements
- **Quick updates**: Fast content creation and publishing
- **Category organization**: Easy content filtering
- **Author collaboration**: Multiple contributors

## Related Documentation
- [Posts Collection](./posts.md) - Blog content management
- [Categories Collection](./categories.md) - Content organization
- [Users Collection](./users.md) - Author management
- [Block System](../blocks/overview.md) - Embedded content
- [Rich Text Features](../blocks/content.md) - Content editing
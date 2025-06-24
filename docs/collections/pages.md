# Pages Collection

The Pages collection manages static and dynamic page content with flexible block-based layouts. It serves as the foundation for the website's page structure and content management.

## Collection Purpose

The Pages collection provides the foundation for website structure through:
- **Flexible Content**: Block-based layout system for diverse page types
- **Draft Workflow**: Content can be drafted, previewed, and scheduled
- **SEO Integration**: Built-in search engine optimization features
- **Live Preview**: Real-time preview during content editing

## Field Structure

### Core Fields

#### Title
- Primary identifier for the page
- Used as admin title and browser title fallback
- Required field for page identification

#### Content Structure (Tabs)

The page content is organized into three main tabs:

### 1. Hero Tab
Contains the hero section configuration:
- Uses shared hero field configuration across the site
- Supports multiple hero types (High Impact, Medium Impact, Low Impact)
- Configurable background media and content options

### 2. Content Tab
**Layout Field** - Block-based content system for flexible page layouts

**Available Content Blocks**:
- **CallToAction**: CTA buttons and promotional content
- **Content**: Rich text content with advanced formatting
- **MediaBlock**: Image and video content with captions
- **Archive**: Automatic content listings (posts, news, etc.)
- **FormBlock**: Contact forms and data collection

### 3. SEO Tab
Comprehensive SEO configuration:
- **Meta Title**: Custom or auto-generated from page title
- **Meta Description**: Search engine description
- **Meta Image**: Social sharing image (Open Graph)
- **Preview**: Live preview of search results and social cards

## Admin Interface Features

### Live Preview
- Real-time preview during editing
- Auto-save every 100ms for optimal preview experience
- Preview URL generation based on page slug

### Default Columns
Admin list view displays:
- Title
- Slug
- Last updated timestamp

### Preview Generation
- Automatic preview URL generation based on page slug
- Real-time preview during content editing
- Draft content accessible via preview tokens

## Publishing & Versioning

### Draft System
- **Auto-save**: Frequent intervals for live preview functionality
- **Scheduled Publish**: Content can be scheduled for future publication
- **Version Control**: Multiple versions tracked per page

### Publication Date
- Automatic timestamp when page is published
- Manual override available for specific publication timing
- Sidebar positioning for easy access during editing

## Automation Features

### Content Revalidation
- **After Changes**: Automatically updates frontend when content is modified
- **After Deletion**: Cleans up cached pages when content is removed
- **Before Publishing**: Sets publication timestamps automatically

## URL Structure & Routing

### Slug Generation
- Uses shared slug field configuration across collections
- Auto-generated from page title
- Customizable for SEO optimization
- Validates URL format and ensures uniqueness

### Frontend Routing
Pages are accessible at:
- Custom page URLs based on slug (e.g., /about, /contact)
- Home page accessible at root URL

## Content Relationships

### Media Integration
- Hero section can reference Media collection
- MediaBlock can embed images/videos
- SEO meta images reference Media collection

### Form Integration
- FormBlock enables contact forms
- Configurable field types and validation
- Email notifications and data storage

## Block System Integration

The Pages collection serves as the primary container for the block system:

### Block Configuration
Each block type provides:
- **Unique functionality** (CTA, content, media, etc.)
- **Admin interface** for content editing
- **Frontend rendering** components
- **Type safety** for reliable content structure

### Layout Flexibility
- **Unlimited blocks** per page
- **Reorderable content** via drag-and-drop
- **Collapsible admin** interface for better UX
- **Required field** ensures content is provided

## SEO Optimization

### Built-in SEO Features
- **Auto-generation**: Meta titles from page titles
- **Social Sharing**: Open Graph image support
- **Search Preview**: Real-time preview of search results
- **URL Optimization**: Clean, SEO-friendly URLs

### Meta Field Configuration
- **Meta Title Field**: Auto-generation capabilities from page title
- **Meta Image Field**: Integration with media collection for social sharing
- **Meta Description Field**: Custom descriptions for search engines
- **Preview Field**: Real-time preview of search results and social cards

## Access Control

### Read Access
- **Published pages**: Public access
- **Draft pages**: Authenticated users only
- **Preview URLs**: Accessible via preview tokens

### Write Access
- **Create**: Authenticated users
- **Update**: Authenticated users
- **Delete**: Authenticated users

## Related Documentation
- [Block System Overview](../blocks/overview.md)
- [SEO Configuration](../architecture/nextjs-frontend.md#seo)
- [Media Collection](./media.md)
- [Hero Components](../blocks/hero-blocks.md)
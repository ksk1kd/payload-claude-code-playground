# Collections Overview

This document provides an overview of the Payload CMS collections used in this application. Collections are the primary data structures that define content types and their fields.

## Collection Architecture

The application uses **8 core collections** organized around different content types:

### Content Collections
- **Pages** - Static and dynamic page content with flexible layouts
- **Posts** - Blog posts with rich content and author relationships
- **News** - News articles and announcements
- **Jobs** - Job postings for recruitment

### System Collections
- **Users** - User accounts, authentication, and profiles
- **Media** - File and image management
- **Categories** - Taxonomy system for content organization

## Common Features

All collections share these standard features:

### Access Control
- **Create/Update/Delete**: Requires authentication for content management
- **Read**: Most collections support draft/publish workflow with public published content
- **Exceptions**: 
  - Media: Publicly accessible for content display
  - Categories: Publicly accessible for content filtering
  - Users: Restricted access for privacy protection

### SEO Integration
Content collections (Pages, Posts, News, Jobs) include comprehensive SEO fields:
- Meta title and description
- Open Graph image
- Preview functionality
- Auto-generation capabilities

### Versioning & Drafts
Content collections support:
- Draft/publish workflow
- Version history for content tracking
- Scheduled publishing capabilities
- Live preview with auto-save functionality

### URL Structure
All content collections use slug-based URLs:
- Auto-generated slugs from titles
- Custom slug override capability
- URL validation and formatting

## Collection Capabilities Overview

### Content Collections (Pages, Posts, News, Jobs)
- **Access Model**: Draft/publish workflow with public published content
- **Version Control**: Full versioning and draft management
- **SEO Features**: Comprehensive meta fields and social sharing optimization
- **Rich Content**: Advanced text editing with embedded blocks and media

### System Collections

#### Users Collection
- **Access Model**: Restricted to authenticated users for privacy
- **Purpose**: Authentication, profiles, and author attribution
- **Content Type**: Profile information and account management

#### Media Collection  
- **Access Model**: Public read access for content delivery
- **Purpose**: File and image management with automatic optimization
- **Content Type**: Images, files with captions and metadata

#### Categories Collection
- **Access Model**: Public read access for content filtering
- **Purpose**: Taxonomy system for content organization
- **Content Type**: Simple taxonomy labels

## Content Management Workflow

1. **Creation**: Authenticated users create new content
2. **Drafting**: Content saved as drafts with auto-save functionality
3. **Preview**: Live preview available during editing process
4. **Publishing**: Content published with automatic publication timestamps
5. **Cache Updates**: Frontend automatically updates when content changes

## Content Features

### Editorial Experience
- **Rich Text Editing**: Advanced text editor with embedded blocks and media
- **Relationship Management**: Connect content across different collections
- **File Handling**: Integrated media management with automatic optimization
- **Structured Data**: Organized content with arrays and grouped fields
- **Tabbed Interface**: Clean, organized editing experience

### Content Organization
- **Live Preview**: Real-time content preview during editing
- **Optimized Views**: Streamlined list views for content management
- **Contextual Fields**: Related information grouped logically
- **Meaningful Titles**: Clear content identification system

## Collection Documentation

Detailed specifications for each collection type:

### Content Collections
- [Pages Collection](./pages.md) - Flexible page layouts and block system
- [Posts Collection](./posts.md) - Blog content with author attribution
- [News Collection](./news.md) - Organizational announcements and updates
- [Jobs Collection](./jobs.md) - Recruitment and job posting management

### System Collections
- [Users Collection](./users.md) - Authentication and user profiles
- [Media Collection](./media.md) - File management and image optimization
- [Categories Collection](./categories.md) - Content taxonomy and organization
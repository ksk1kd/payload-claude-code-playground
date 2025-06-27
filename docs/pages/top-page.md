# Top Page

This document provides comprehensive documentation for the home page (root route `/`) of the website.

## Page Structure Overview

The top page consists of one main route:

- **Home Page** (`/`) - Root route that serves as the main landing page

## Home Page System (`/`)

### Purpose & Functionality

The home page serves as the primary entry point for the website, providing a welcoming introduction and navigation hub that showcases the organization's key content and services.

### Data Sources

#### Page Content
- **Source**: Pages collection with slug 'home'
- **Fallback**: Static home content when no CMS page exists
- **Fields**: title, hero, layout (blocks), meta
- **Special Handling**: Root route mapping for home page

#### Static Generation
- **Strategy**: Integrated with dynamic page system
- **Template Sharing**: Uses same template as other dynamic pages
- **Caching**: React cache for efficient home page queries
- **Revalidation**: Automatic when home page content changes

### User Interactions

- **Landing Experience**: First impression and site navigation
- **Hero Engagement**: Interact with configurable hero sections
- **Block Navigation**: Scroll through modular content blocks
- **Site Discovery**: Access to main site sections and content
- **Call-to-Actions**: Engage with promotional content and conversions

### SEO Considerations

- **Root Domain**: Optimized for primary site keywords
- **Meta Title**: "Payload Website Template" or custom title
- **Open Graph**: Default site image and metadata
- **Canonical URL**: Root domain canonical structure
- **Schema Markup**: Website and organization structured data

## Technical Implementation

### Route Architecture

#### Unified Template System
- **Template Sharing**: Uses same component as `[slug]/page.tsx`
- **Slug Default**: Defaults to 'home' when no slug provided
- **Code Reuse**: Minimizes duplication between root and dynamic routes

#### Special Route Handling
- **Database Slug**: Stored as 'home' in Pages collection
- **URL Mapping**: 'home' slug maps to root URL `/`
- **Static Generation**: Excluded from slug-based parameter generation

### Content Management

#### CMS Integration
- **Flexible Content**: Same block system as other pages
- **Hero Configuration**: All hero types available (none, low, medium, high impact)
- **Draft System**: Full draft/publish workflow support
- **Live Preview**: Real-time content preview in admin

#### Fallback Content
- **Static Fallback**: Basic welcome page when no CMS content exists
- **Default Structure**: Minimal content with admin dashboard link
- **Bootstrap Content**: Provides immediate functionality after setup

### Home Page Features

#### Hero System Integration
- **Impact Levels**: Full range of hero options available
- **Welcome Messaging**: Primary site introduction and value proposition
- **Visual Branding**: Hero background and branding elements
- **Action Orientation**: Call-to-action buttons and navigation

#### Content Blocks
- **Flexible Layout**: Unlimited content blocks for home page composition
- **Feature Highlights**: Showcase key services, products, or content
- **Social Proof**: Testimonials, case studies, and success stories
- **Contact Integration**: Forms and contact information blocks

## Related Documentation

- [Dynamic Pages](./dynamic-pages.md) - Shared page template system
- [Pages Collection](../collections/pages.md) - Content structure and fields
- [Block System](../blocks/overview.md) - Content composition system
- [SEO Implementation](../architecture/nextjs-frontend.md#seo) - Search optimization
# Block System Overview

This document provides a comprehensive overview of the block system used throughout the website for flexible content composition.

## Block System Architecture

The block system enables modular, reusable content components that can be combined to create flexible page layouts. Content editors can arrange blocks in any order to build custom page experiences.

### Core Components

#### RenderBlocks Component
- **Purpose**: Central rendering system for all block types
- **Location**: Handles dynamic block type mapping and rendering
- **Functionality**: Maps block data to appropriate React components
- **Styling**: Applies consistent spacing and container classes

#### Block Registration
- **Component Mapping**: Each block type maps to a specific React component
- **Type Safety**: TypeScript interfaces ensure data consistency
- **Dynamic Rendering**: Blocks rendered based on blockType identifier

## Available Block Types

### Content Blocks

#### Content Block
- **Purpose**: Multi-column rich text content with flexible layouts
- **Features**: 1/3, 1/2, 2/3, and full-width column options
- **Use Cases**: Main page content, articles, formatted text sections

#### CallToAction Block
- **Purpose**: Promotional sections with action-oriented content
- **Features**: Rich text content with prominent action buttons
- **Use Cases**: Product promotions, service highlights, conversion elements

#### MediaBlock
- **Purpose**: Image and video content display
- **Features**: Media upload integration with optional captions
- **Use Cases**: Image galleries, featured visuals, video content

#### Archive Block
- **Purpose**: Dynamic content listings from collections
- **Features**: Automated feeds, filtering, pagination support
- **Use Cases**: Blog feeds, news listings, content archives

#### FormBlock
- **Purpose**: Data collection and user interaction forms
- **Features**: Contact forms, newsletter signup, custom field types
- **Use Cases**: Contact pages, lead generation, user feedback

### Utility Blocks

#### Banner Block
- **Purpose**: Status messages and important notifications
- **Features**: Info, warning, error, and success message types
- **Use Cases**: System messages, announcements, alerts

#### Code Block
- **Purpose**: Syntax-highlighted code snippets
- **Features**: Copy functionality, multiple language support
- **Use Cases**: Documentation, tutorials, technical content


## Related Documentation

- [Content Block](./content.md) - Multi-column rich text content
- [CallToAction Block](./call-to-action.md) - Promotional content blocks
- [MediaBlock](./media-block.md) - Image and video display
- [Archive Block](./archive-block.md) - Dynamic content listings
- [FormBlock](./form.md) - Contact and data collection forms
# Error Pages

This document provides comprehensive documentation for error handling and error pages throughout the website.

## Page Structure Overview

The error handling system consists of:

- **404 Page** (`not-found.tsx`) - Page not found error handling
- **Redirect System** - Automatic redirect management before showing errors
- **Consistent Error Patterns** - Standardized error handling across all page types

## 404 Page (`not-found.tsx`)

### Purpose & Functionality

The 404 page provides users with a clear, helpful response when they attempt to access non-existent content, offering easy navigation back to the main site.

### Data Sources

#### Static Content
- **Content Type**: Static error page content
- **No Dynamic Data**: Does not fetch from CMS collections
- **Consistent Layout**: Uses site layout with header and footer
- **Theme Integration**: Inherits site theme settings

### User Interactions

- **Error Recognition**: Clear indication that the requested page doesn't exist
- **Recovery Navigation**: Single-click "Go home" button for easy site return
- **Layout Consistency**: Familiar site navigation remains available
- **Visual Clarity**: Clean, minimal design focused on recovery action

### SEO Considerations

- **HTTP Status**: Proper 404 status code returned
- **Meta Title**: "404 - Page Not Found | Site Name"
- **Search Accessibility**: Site search and navigation remain available
- **Crawl Guidance**: Search engines understand content is not available

## Error Handling System

### Redirect Management

#### PayloadRedirects Component
- **Purpose**: Central redirect handling before showing 404 errors
- **CMS Integration**: Redirects configured through Payload admin
- **Performance**: Cached redirect lookups for optimal speed
- **Flexibility**: Supports both URL and document reference redirects

#### Redirect Priority
- **Check Sequence**: Configured redirects checked before triggering 404
- **Content Types**: Handles redirects for all content collections
- **Cache Efficiency**: Redirect rules cached for performance
- **Automatic Updates**: Cache invalidated when redirect rules change

### Error Patterns Across Page Types

#### Dynamic Pages (`[slug]`)
- **Data Query**: Attempt to fetch page content by slug
- **Redirect Check**: Use PayloadRedirects for redirect management
- **Fallback Logic**: Special home page fallback for root route
- **404 Trigger**: Next.js notFound() when no content or redirect exists

#### Content Pages (Posts, News, Jobs, Members)
- **Consistent Pattern**: All content pages follow same error handling approach
- **Query Validation**: Check for content existence before rendering
- **Redirect Integration**: PayloadRedirects component handles missing content
- **User Experience**: Seamless error handling maintains site navigation

#### Search Pages
- **No Results Handling**: "No results found" instead of 404 for empty searches
- **Query Validation**: Empty or invalid searches show appropriate messaging
- **Recovery Options**: Search remains available for query refinement

### Error Page Design

#### User Experience Design
- **Minimal Interface**: Clean, uncluttered error page layout
- **Clear Messaging**: Direct "This page could not be found" communication
- **Action-Oriented**: Prominent "Go home" button for immediate recovery
- **Brand Consistency**: Maintains site design system and styling

#### Technical Implementation
- **Component Integration**: Uses site button and link components
- **Responsive Design**: Container-based layout adapts to all screen sizes
- **Accessibility**: Semantic HTML with proper heading hierarchy
- **Theme Support**: Inherits site light/dark theme capabilities

## Error Handling Features

### Centralized Redirect Management

#### CMS Configuration
- **Admin Interface**: Redirects managed through Payload admin panel
- **Flexible Rules**: Support for various redirect types and targets
- **Content References**: Redirects can target other CMS documents
- **URL Redirects**: Direct URL-to-URL redirect capability

#### Performance Optimization
- **Caching Strategy**: Redirect rules cached for fast lookup
- **SSR Integration**: Server-side redirect handling for optimal performance
- **Cache Invalidation**: Automatic updates when redirect rules change

### Consistent Error Experience

#### Layout Preservation
- **Site Navigation**: Header and footer remain available during errors
- **Theme Consistency**: Error pages inherit site theme settings
- **Search Access**: Site search remains functional on error pages
- **Brand Maintenance**: Error pages maintain visual brand consistency

#### Recovery Pathways
- **Homepage Return**: Clear path back to main site content
- **Navigation Access**: Site menu remains available for browsing
- **Search Availability**: Users can search for intended content
- **Content Discovery**: Access to main content sections maintained

## Error Prevention

### Content Management
- **Draft System**: Preview content before publication to avoid broken links
- **Redirect Configuration**: Set up redirects when moving or removing content
- **URL Validation**: Consistent slug generation prevents URL conflicts

### Development Patterns
- **Consistent Queries**: Standardized content fetching across page types
- **Error Boundaries**: Proper error handling in component architecture
- **Fallback Content**: Home page fallback prevents root route errors

## Related Documentation

- [Dynamic Pages](./dynamic-pages.md) - Primary page system with error handling
- [Pages Collection](../collections/pages.md) - Content structure and availability
- [SEO Implementation](../architecture/nextjs-frontend.md#seo) - Error page optimization
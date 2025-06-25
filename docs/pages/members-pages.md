# Members Pages

This document provides comprehensive documentation for the members section of the website, covering team member directory and individual profile pages.

## Page Structure Overview

The members section consists of two main page types:

- **Members Index** (`/members`) - Team member directory page
- **Individual Members** (`/members/[slug]`) - Individual member profile pages

## Members Index Page (`/members`)

### Purpose & Functionality

The members index serves as a team directory, displaying all team members in a clean, professional grid layout that showcases the organization's people.

### Data Sources

#### Content Query
- **Source**: Users collection via Payload API
- **Filter**: Only users with `role: 'member'`
- **Fields Retrieved**: name, email, role, title, avatar, slug
- **Limit**: 100 members with pagination disabled
- **Access**: Public access enabled for member display

#### Static Generation
- **Strategy**: force-static with 10-minute revalidation
- **Performance**: Pre-rendered at build time
- **Updates**: ISR (Incremental Static Regeneration) for team changes

### User Interactions

- **Member Navigation**: Click member cards to view full profiles
- **Visual Browsing**: Responsive grid layout (1-4 columns based on screen size)
- **Avatar Display**: Professional headshots with name initial fallbacks
- **Role Context**: Clear display of member titles and positions

### SEO Considerations

- **Page Title**: "Team Members | Site Name"
- **Meta Description**: Team directory description
- **Schema Markup**: Organization and Person structured data
- **Professional URLs**: Clean `/members` structure

## Individual Member Page (`/members/[slug]`)

### Purpose & Functionality

Dedicated profile pages showcasing individual team members with their biography, role information, and authored content contributions.

### Data Sources

#### Member Profile
- **Source**: Individual user document from Users collection
- **Validation**: Role verification (members only)
- **Fields**: name, title, bio, avatar, slug
- **Integration**: Links to authored posts and content

#### Authored Content
- **Source**: Posts collection filtered by author
- **Display**: First 6 posts with load-more functionality
- **Ordering**: Most recent posts first (publishedAt desc)
- **Progressive Loading**: Client-side pagination for additional posts

#### Static Generation
- **Strategy**: `generateStaticParams()` for all team members
- **Caching**: Efficient member profile queries
- **Revalidation**: Automatic when profile information changes

### User Interactions

- **Profile Viewing**: Clean display of member information and biography
- **Content Discovery**: Browse posts authored by the team member
- **Progressive Loading**: "Load more" button for additional authored content
- **Navigation**: Back link to team directory
- **Social Context**: Professional profile presentation

### SEO Considerations

- **Dynamic Metadata**: Member-specific titles and descriptions
- **Open Graph**: Professional profile optimization
- **Schema Markup**: Person structured data with role and organization
- **URL Structure**: Clean `/members/member-name` format

## Key Features

### Professional Profile System

#### Avatar Management
- **Image Support**: Upload professional headshots via Media collection
- **Fallback System**: Name initials when no avatar available
- **Responsive Display**: Optimized sizing across device types
- **Professional Presentation**: Clean, consistent styling

#### Role Integration
- **Title Display**: Job titles and positions clearly shown
- **Bio Support**: Textarea field for member biographies
- **Team Organization**: Role-based filtering and display
- **Professional Context**: Work-focused profile information

### Content Attribution

#### Authored Posts Integration
- **Author Relationships**: Direct links between members and their content
- **Content Discovery**: Easy access to member's published work
- **Progressive Loading**: Efficient pagination for prolific authors
- **Professional Portfolio**: Showcase of member contributions

#### Social Links Support
- **Professional Networks**: Support for LinkedIn, GitHub, and other platforms
- **Contact Information**: Professional contact details
- **External Presence**: Links to member's professional profiles

### User Experience Design

#### Responsive Grid Layout
- **Mobile Optimization**: Single column on small screens
- **Tablet Display**: 2-3 column grid for medium screens
- **Desktop Experience**: 4 column grid for large screens
- **Consistent Spacing**: Professional layout with proper whitespace

#### Professional Styling
- **Clean Design**: Minimal, professional aesthetic
- **Hover Effects**: Subtle interactions for better usability
- **Typography**: Clear, readable text hierarchy
- **Brand Consistency**: Aligned with overall site design

## Team Management Integration

### Role-Based Display

The members system integrates with Payload's user management:

- **Role Filtering**: Only displays users with 'member' role
- **Admin Exclusion**: Admin users not shown in public directory
- **Dynamic Updates**: Team changes reflected through ISR
- **Access Control**: Public viewing with authenticated editing

### Content Management

#### Profile Updates
- **CMS Integration**: Members managed through Payload admin
- **Field Validation**: Required and optional profile fields
- **Media Management**: Avatar upload and management
- **Real-time Updates**: Changes reflected with cache revalidation

#### Content Attribution
- **Automatic Linking**: Posts automatically linked to member authors
- **Portfolio Building**: Member profiles showcase their contributions
- **Professional Development**: Track member's published work over time

## Related Documentation

- [Users Collection](../collections/users.md) - User profiles and authentication
- [Posts Collection](../collections/posts.md) - Content authorship system
- [SEO Implementation](../architecture/nextjs-frontend.md#seo) - Search optimization
# Related Posts Component

The Related Posts component displays a grid of related post cards within post pages, providing readers with additional relevant content and improving site navigation.

## Component Purpose

The Related Posts component creates curated content recommendations by displaying related posts in an organized grid layout, encouraging continued engagement and content discovery.

## Component Structure

### Props Interface

#### Core Props
- **docs**: Array of Post objects to display as related content
- **className**: Optional CSS classes for component customization
- **introContent**: Optional rich text content displayed above the posts grid

### Content Integration

#### Post Relationship
- **Posts collection**: Displays posts from the Posts collection
- **Relationship filtering**: Excludes current post from related suggestions
- **Object validation**: Filters out string references to ensure proper post objects
- **Category display**: Shows post categories for better content context

#### Rich Text Introduction
- **Optional intro**: Introductory content can be displayed above the posts grid
- **Lexical editor**: Supports rich text formatting for introduction content
- **Flexible content**: Allows explanation or context for the related posts section

## Visual Layout

### Grid System
- **Responsive grid**: 1 column on mobile, 2 columns on medium screens and larger
- **Equal height**: Items stretch to maintain consistent card heights
- **Consistent spacing**: 16px gap on mobile, 32px gap on larger screens
- **Container management**: Uses large container for proper page alignment

### Card Integration
- **Post cards**: Utilizes site's Card component for consistent presentation
- **Category display**: Shows post categories for content classification
- **Relationship context**: Configured for "posts" collection relationship
- **Interactive elements**: Cards include links and hover states

## Usage Context

### Post Page Integration
- **Sidebar placement**: Typically appears at the bottom of post content
- **Conditional rendering**: Only displays when related posts are available
- **Content filtering**: Automatically filters related posts for valid objects
- **Grid positioning**: Integrates with subgrid layouts on larger screens

### Content Relationship
- **Manual curation**: Related posts selected through Posts collection interface
- **Editorial control**: Content editors choose specific related content
- **Category relevance**: Often based on shared categories or topics
- **Engagement optimization**: Designed to increase page views and site engagement

## Technical Features

### Performance Optimization
- **Type checking**: Validates post objects before rendering
- **Conditional rendering**: Only renders when posts are available
- **Efficient mapping**: Optimized iteration over post collections
- **Key management**: Proper React keys for list rendering

### Responsive Design
- **Mobile-first**: Single column layout for small screens
- **Breakpoint adaptation**: Two-column layout on medium screens and larger
- **Flexible spacing**: Responsive gap system for different screen sizes
- **Container constraints**: Proper width constraints for readability

## Integration Points

### Posts Collection
- **RelatedPosts field**: Multi-relationship field in Posts collection
- **Filter options**: Excludes current post from selection options
- **Sidebar placement**: Configured in admin interface sidebar
- **HasMany relationship**: Supports multiple related posts per post

### Card Component
- **Consistent styling**: Leverages site's Card component for uniform presentation
- **Category integration**: Displays post categories when showCategories is enabled
- **Link functionality**: Provides navigation to related post pages
- **Responsive behavior**: Cards adapt to different screen sizes

## Related Documentation

- [Posts Collection](../collections/posts.md) - Posts data structure and configuration
- [Card Component](../components/card.md) - Card component details
- [Archive Block](./archive-block.md) - Alternative post display method
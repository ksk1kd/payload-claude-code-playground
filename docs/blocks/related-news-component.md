# Related News Component

The Related News component displays a grid of related news cards within pages, providing readers with additional relevant news content and improving site navigation.

## Component Purpose

The Related News component creates curated news content recommendations by displaying related news items in an organized grid layout, encouraging continued engagement and news discovery.

## Component Structure

### Props Interface

#### Core Props
- **docs**: Array of News objects to display as related content
- **className**: Optional CSS classes for component customization
- **introContent**: Optional rich text content displayed above the news grid

### Content Integration

#### News Relationship
- **News collection**: Displays news items from the News collection
- **Relationship filtering**: Curated selection of relevant news content
- **Object validation**: Filters out string references to ensure proper news objects
- **Category display**: Shows news categories for better content context

#### Rich Text Introduction
- **Optional intro**: Introductory content can be displayed above the news grid
- **Lexical editor**: Supports rich text formatting for introduction content
- **Flexible content**: Allows explanation or context for the related news section

## Visual Layout

### Grid System
- **Responsive grid**: 1 column on mobile, 2 columns on medium screens and larger
- **Equal height**: Items stretch to maintain consistent card heights
- **Consistent spacing**: 16px gap on mobile, 32px gap on larger screens
- **Container management**: Uses large container for proper page alignment

### Card Integration
- **News cards**: Utilizes site's Card component for consistent presentation
- **Category display**: Shows news categories for content classification
- **Relationship context**: Configured for "news" collection relationship
- **Interactive elements**: Cards include links and hover states

## Usage Context

### Page Integration
- **Content sections**: Can be embedded in various page layouts
- **Conditional rendering**: Only displays when related news items are available
- **Content filtering**: Automatically filters news items for valid objects
- **Layout flexibility**: Adapts to different page layouts and grid systems

### Content Relationship
- **Manual curation**: Related news selected through content management interface
- **Editorial control**: Content editors choose specific related news content
- **Category relevance**: Often based on shared categories or topics
- **News engagement**: Designed to increase news consumption and site engagement

## Technical Features

### Performance Optimization
- **Type checking**: Validates news objects before rendering
- **Conditional rendering**: Only renders when news items are available
- **Efficient mapping**: Optimized iteration over news collections
- **Key management**: Proper React keys for list rendering

### Responsive Design
- **Mobile-first**: Single column layout for small screens
- **Breakpoint adaptation**: Two-column layout on medium screens and larger
- **Flexible spacing**: Responsive gap system for different screen sizes
- **Container constraints**: Proper width constraints for readability

## Integration Points

### News Collection
- **Related news fields**: Integration with News collection relationship fields
- **Content curation**: Manual selection of related news items
- **Category integration**: Leverages news categorization system
- **Multi-relationship**: Supports multiple related news items

### Card Component
- **Consistent styling**: Leverages site's Card component for uniform presentation
- **Category integration**: Displays news categories when showCategories is enabled
- **Link functionality**: Provides navigation to related news pages
- **Responsive behavior**: Cards adapt to different screen sizes

## Related Documentation

- [News Collection](../collections/news.md) - News data structure and configuration
- [Card Component](../components/card.md) - Card component details
- [Related Posts Component](./related-posts-component.md) - Similar component for posts
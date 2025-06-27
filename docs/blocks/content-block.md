# Content Block

The Content Block provides flexible column-based layouts for rich text content, enabling responsive multi-column designs with optional call-to-action links for each column.

## Block Purpose

The Content Block enables content editors to create sophisticated multi-column layouts with rich text content, providing flexible grid-based designs that adapt responsively across different screen sizes.

## Field Structure

### Block Configuration

#### Columns Array
- **Array field**: Collection of individual content columns
- **Collapsed admin**: Columns section starts collapsed for clean interface
- **Flexible quantity**: Add any number of columns as needed
- **Independent configuration**: Each column configured separately

### Column Fields

#### Column Size
- **Select field**: Defines column width within grid system
- **Default value**: One Third (4/12 grid columns)
- **Responsive behavior**: Adapts to screen size with mobile fallbacks

##### Size Options
- **One Third**: 4/12 columns on desktop, provides compact content areas
- **Half**: 6/12 columns on desktop, balanced two-column layouts
- **Two Thirds**: 8/12 columns on desktop, prominent content sections
- **Full**: 12/12 columns on desktop, spans entire container width

#### Rich Text Content
- **Lexical editor**: Full-featured rich text editing with advanced formatting
- **Heading support**: H2-H4 headings for content hierarchy
- **Toolbar features**: Fixed and inline toolbars for text styling
- **No label**: Clean admin interface without redundant labels

#### Link Integration
- **Enable Link**: Checkbox to activate link functionality for column
- **Conditional display**: Link field only appears when enabled
- **Call-to-action**: Converts column into actionable content section
- **Link options**: Support for internal pages, external URLs, and email links

## Responsive Grid System

### Desktop Layout (Large Screens)
- **12-column grid**: Fine-grained control over column positioning
- **Flexible widths**: Columns sized according to selected proportions
- **Gap spacing**: 16px horizontal and 8px vertical spacing between columns

### Tablet Layout (Medium Screens)
- **Adaptive sizing**: Non-full columns become half-width (2/4 columns)
- **Maintained proportions**: Preserves visual balance across medium screens
- **Consistent spacing**: Maintained gap system for clean presentation

### Mobile Layout (Small Screens)
- **Full-width stacking**: All columns become full-width (4/4 columns)
- **Vertical flow**: Columns stack vertically for optimal mobile reading
- **Touch-friendly**: Links and interactive elements optimized for mobile

## Content Features

### Rich Text Capabilities
- **Advanced formatting**: Bold, italic, lists, and other text formatting
- **Heading hierarchy**: Structured content with H2-H4 heading levels
- **No prose styling**: Content renders without default prose constraints
- **Custom styling**: Integrated with site's design system

### Link Functionality
- **Optional links**: Each column can optionally include a call-to-action link
- **Link variety**: Support for different link types and appearances
- **Conditional display**: Links only appear when explicitly enabled
- **Integrated design**: Links styled to match site's button system

## Related Documentation

- [Call to Action Block](./call-to-action-block.md) - Alternative action-focused layout
- [Link Field](../fields/link.md) - Link configuration options
- [Block System Overview](./overview.md) - General block documentation
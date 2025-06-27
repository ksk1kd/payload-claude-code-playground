# Media Block

The Media Block provides image and media display within pages, supporting uploaded media files with optional captions and flexible presentation options.

## Block Purpose

The Media Block enables content editors to embed media files into page layouts with professional presentation styling, caption support, and responsive display options.

## Field Structure

### Core Fields

#### Media Upload
- **Upload field**: Links to media files from the Media collection
- **Required field**: Ensures media block always contains media content
- **Media relationship**: Access to all uploaded media files and their metadata
- **File type support**: Images, videos, and other media formats supported

## Visual Features

### Media Presentation
- **Responsive display**: Media adapts to different screen sizes and containers
- **Rounded corners**: Modern styling with 0.8rem border radius
- **Border styling**: Subtle border using site's border color scheme
- **Optimized loading**: Leverages Next.js Image optimization for performance

### Caption Support
- **Rich text captions**: Captions support formatted text with RichText component
- **Conditional display**: Captions only appear when media includes caption data
- **Proper spacing**: 24px margin between media and caption content
- **Container control**: Caption container can be disabled for custom layouts

### Layout Options
- **Container gutters**: Optional container spacing for consistent page alignment
- **Flexible positioning**: Media can break out of standard container constraints
- **Custom styling**: Extensive props for custom styling and layout control
- **Responsive behavior**: Adapts to different screen sizes and contexts

## Advanced Features

### Static Image Support
- **Static images**: Support for imported static images alongside uploaded media
- **Performance optimization**: Leverages Next.js static image optimization
- **Fallback handling**: Graceful handling when media is not available

### Styling Customization
- **Custom classes**: Extensive className props for component customization
- **Image styling**: Specific styling options for image elements
- **Caption styling**: Dedicated styling control for caption presentation
- **Layout control**: Options to disable containers and modify spacing

### Component Props

#### Layout Control
- **enableGutter**: Controls container spacing (default: true)
- **disableInnerContainer**: Removes container wrapper from captions
- **breakout**: Allows media to break out of standard container constraints
- **className**: Custom CSS classes for overall component styling

#### Styling Options
- **imgClassName**: Custom CSS classes specifically for image elements
- **captionClassName**: Custom CSS classes for caption container
- **staticImage**: Support for static imported images
- **media**: Uploaded media resource from Media collection

## Integration Features

### Media Collection Integration
- **Upload relationship**: Direct connection to Media collection
- **Metadata access**: Access to media file metadata including captions
- **File optimization**: Automatic optimization through Payload's media handling
- **Alt text support**: Accessibility through media collection alt text fields

### Next.js Image Integration
- **Performance optimization**: Automatic image optimization and lazy loading
- **Responsive images**: Multiple image sizes for different screen resolutions
- **Format optimization**: Automatic WebP and AVIF format conversion when supported
- **Loading states**: Proper loading states and progressive enhancement

## Accessibility Features

### Screen Reader Support
- **Alt text**: Media alt text provided through Media collection
- **Semantic markup**: Proper HTML structure for assistive technologies
- **Caption association**: Captions properly associated with media content
- **Keyboard navigation**: Media elements accessible via keyboard navigation

### Performance Considerations
- **Lazy loading**: Images load only when needed to improve page performance
- **Responsive images**: Appropriate image sizes served based on device capability
- **Optimized formats**: Modern image formats used when browser supports them
- **Caching**: Proper caching headers for media files

## Related Documentation

- [Media Collection](../collections/media.md) - Media file management
- [Content Block](./content-block.md) - Alternative content presentation
- [Block System Overview](./overview.md) - General block documentation
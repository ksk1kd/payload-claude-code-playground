# Banner Block

The Banner Block creates styled notification banners within pages, providing a way to highlight important information with visual styling that matches the message context.

## Block Purpose

The Banner Block delivers contextual notifications and alerts within page layouts, allowing content editors to communicate important information through distinct visual styles that convey urgency or message type.

## Field Structure

### Core Fields

#### Style
- **Select field**: Visual styling that conveys message context
- **Options**: Info (default), Warning, Error, Success
- **Default value**: Info style for general notifications
- **Required field**: Ensures consistent visual communication

#### Content
- **Rich text editor**: Message content with full formatting options
- **Lexical editor**: Advanced text editing with toolbar features
- **Formatting options**: Fixed and inline toolbar for text styling
- **Required field**: Ensures banner contains meaningful content

## Visual Styling

### Style Variants

#### Info Banner
- **Background**: Card background with standard border
- **Usage**: General information and neutral notifications
- **Default option**: Most common banner type

#### Warning Banner
- **Background**: Warning color with 30% opacity
- **Border**: Warning color border
- **Usage**: Cautionary messages and important notices

#### Error Banner
- **Background**: Error color with 30% opacity  
- **Border**: Error color border
- **Usage**: Critical alerts and error notifications

#### Success Banner
- **Background**: Success color with 30% opacity
- **Border**: Success color border
- **Usage**: Positive confirmations and completion messages

## Related Documentation

- [Content Block](./content-block.md) - Alternative content presentation
- [Block System Overview](./overview.md) - General block documentation
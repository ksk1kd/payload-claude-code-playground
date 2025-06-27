# Archive Block

The Archive Block displays collections of posts within pages, supporting both automatic collection display and manual post selection.

## Block Purpose

The Archive Block provides dynamic content listings within page layouts, allowing content editors to showcase posts through automated filtering or manual curation.

## Field Structure

### Core Fields

#### Introduction Content
- **Rich text editor**: Optional introductory content above post listings
- **Content context**: Provides explanation or description for the archive
- **Formatting options**: Full Lexical editor with headings and toolbar features

#### Populate By
- **Collection mode**: Automatically pull posts from collection with filtering
- **Selection mode**: Manually select specific posts to display
- **Default**: Collection mode for automated content

### Collection Mode Fields

#### Relation To
- **Target collection**: Currently supports Posts collection only
- **Content source**: Defines which collection provides the archive content

#### Categories
- **Multi-relationship field**: Filter posts by selected categories
- **Optional filtering**: Leave empty to show all posts
- **Dynamic updates**: New posts in selected categories automatically appear

#### Limit
- **Number field**: Maximum posts to display
- **Default value**: 10 posts
- **Range control**: Controls archive size and page performance

### Selection Mode Fields

#### Selected Docs
- **Multi-relationship field**: Manually choose specific posts
- **Editorial control**: Complete control over displayed content
- **Custom ordering**: Posts display in selection order



## Related Documentation

- [Posts Collection](../collections/posts.md) - Source content for archive blocks
- [Categories Collection](../collections/categories.md) - Filtering system
- [Block System Overview](./overview.md) - General block documentation
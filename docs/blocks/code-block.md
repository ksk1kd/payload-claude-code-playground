# Code Block

The Code Block provides syntax-highlighted code display within pages, supporting multiple programming languages with line numbers and copy functionality for enhanced developer documentation.

## Block Purpose

The Code Block enables content editors to embed formatted code snippets with professional syntax highlighting, making it ideal for technical documentation, tutorials, and developer-focused content.

## Field Structure

### Core Fields

#### Language Selection
- **Select field**: Programming language for syntax highlighting
- **Default value**: TypeScript for modern development focus
- **Available options**: TypeScript, JavaScript, CSS
- **Syntax highlighting**: Determines color scheme and token recognition

#### Code Content
- **Code field**: Dedicated code editor with monospace font
- **Required field**: Ensures code block contains actual content
- **Multi-line support**: Full code snippet and file content support
- **Preserved formatting**: Maintains indentation and whitespace

## Visual Features

### Syntax Highlighting
- **Prism integration**: Professional syntax highlighting via prism-react-renderer
- **Dark theme**: VS Dark theme for optimal code readability
- **Token recognition**: Language-specific highlighting for keywords, strings, comments
- **Color consistency**: Consistent highlighting across all supported languages

### Code Presentation
- **Line numbers**: Auto-generated line numbers for easy reference
- **Monospace font**: Code-appropriate typography for alignment
- **Dark background**: High contrast background for code visibility
- **Bordered container**: Clean visual separation from surrounding content

### Interactive Elements
- **Copy button**: One-click code copying to clipboard
- **Copy feedback**: Visual confirmation when code is copied
- **Responsive design**: Horizontal scrolling for wide code blocks
- **Selection support**: Users can select and copy specific portions

## Technical Implementation

### Client-Side Rendering
- **Client component**: Code highlighting runs on client for performance
- **Progressive enhancement**: Base code visible even without JavaScript
- **Performance optimization**: Syntax highlighting only when needed

### Accessibility Features
- **Keyboard navigation**: Copy button accessible via keyboard
- **Screen reader support**: Proper semantic markup for code content
- **Visual indicators**: Clear copy status feedback for all users

## Supported Languages

### TypeScript
- **Default option**: Primary language for modern web development
- **Full TypeScript syntax**: Types, interfaces, generics highlighting
- **Import/export statements**: Module syntax recognition

### JavaScript
- **ES6+ support**: Modern JavaScript syntax highlighting
- **Framework compatibility**: React, Vue, and other framework syntax
- **Async/await patterns**: Modern asynchronous code support

### CSS
- **Style sheet support**: CSS property and value highlighting
- **Selector recognition**: Class, ID, and element selector highlighting
- **Modern CSS features**: Grid, Flexbox, and custom property support

## Related Documentation

- [Content Block](./content-block.md) - Alternative content presentation
- [Block System Overview](./overview.md) - General block documentation
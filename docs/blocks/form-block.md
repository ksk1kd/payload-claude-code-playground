# Form Block

The Form Block integrates with Payload's Form Builder plugin to embed dynamic forms within pages, supporting multiple field types, validation, and customizable submission handling.

## Block Purpose

The Form Block provides a comprehensive form integration system that allows content editors to embed pre-built forms into pages with optional introductory content and flexible submission handling.

## Field Structure

### Core Fields

#### Form Relationship
- **Relationship field**: Links to forms created via Form Builder plugin
- **Target collection**: Forms collection contains all available forms
- **Required field**: Ensures form block always has an associated form
- **Dynamic content**: Form fields and configuration loaded from selected form

#### Enable Intro Content
- **Checkbox field**: Toggles display of introductory content above form
- **Optional feature**: Allows forms to be embedded with or without context
- **Content control**: Determines whether additional explanation is needed

#### Intro Content
- **Rich text editor**: Optional content displayed above form fields
- **Conditional display**: Only appears when "Enable Intro" is checked
- **Lexical editor**: Full-featured editor with heading support (H1-H4)
- **Content context**: Provides explanation or instructions for form completion

## Form Integration

### Form Builder Plugin
- **Dynamic forms**: Forms created and managed through Payload admin interface
- **Field variety**: Support for multiple input types and validation rules
- **Reusable forms**: Same form can be embedded in multiple pages
- **Form management**: Centralized form configuration and submission handling

### Supported Field Types

#### Text Input Fields
- **Text**: Single-line text input for names, titles, and short responses
- **Email**: Email-specific input with validation and proper keyboard support
- **Number**: Numeric input with validation for quantities and values
- **Textarea**: Multi-line text input for longer messages and descriptions

#### Selection Fields
- **Select**: Dropdown selection from predefined options
- **Checkbox**: Boolean selection for agreements and preferences
- **Country**: Country selection with comprehensive country list
- **State**: State/province selection with location-specific options

#### Display Fields
- **Message**: Static text field for instructions or information within forms

## Submission Handling

### Form Submission Process
- **Client-side validation**: Real-time validation using React Hook Form
- **API endpoint**: Form data submitted to `/api/form-submissions`
- **Error handling**: Comprehensive error display with status codes
- **Loading states**: Visual feedback during submission process

### Confirmation Options
- **Message confirmation**: Display success message after submission
- **Redirect confirmation**: Navigate to specified page after submission
- **Rich text messages**: Formatted confirmation messages with styling
- **Flexible routing**: Support for internal and external redirect URLs

### Submission Features
- **Form state management**: Tracks loading, success, and error states
- **Progressive enhancement**: Works with JavaScript disabled
- **Delayed loading**: Loading indicator appears after 1 second delay
- **Data serialization**: Form data properly formatted for API submission

## Visual Presentation

### Form Container
- **Bordered design**: Clean container with rounded corners and border
- **Responsive padding**: Appropriate spacing for different screen sizes
- **Maximum width**: Constrained to 48rem for optimal readability
- **Centered layout**: Form container centered within page layout

### Form Fields
- **Consistent spacing**: 24px margin between form fields
- **Responsive design**: Fields adapt to different screen sizes
- **Validation display**: Error messages shown below relevant fields
- **Accessibility**: Proper labels and form associations

### Submission States
- **Loading indicator**: Clear loading message during submission
- **Success display**: Confirmation message or redirect after success
- **Error handling**: Detailed error messages with status codes
- **Form hiding**: Original form hidden after successful submission

## Integration Features

### React Hook Form
- **Form validation**: Client-side validation with error handling
- **State management**: Comprehensive form state tracking
- **Performance optimization**: Minimal re-renders during form interaction
- **Accessibility**: Built-in accessibility features and ARIA support

### Payload Integration
- **Dynamic field loading**: Form fields loaded from Payload configuration
- **Collection relationship**: Tight integration with Forms collection
- **Admin interface**: Form management through Payload admin panel
- **Type safety**: Full TypeScript support for form field types

## Related Documentation

- [Forms Collection](../collections/forms.md) - Form Builder configuration
- [Content Block](./content-block.md) - Alternative content presentation
- [Block System Overview](./overview.md) - General block documentation
# Jobs Collection

The Jobs collection manages job postings and recruitment content with rich text editing and SEO optimization. It provides a complete job posting system for organizational hiring needs.

## Collection Purpose

The Jobs collection provides comprehensive recruitment content management through:
- **Job Posting Management**: Structured job descriptions and requirements
- **Publication Workflow**: Draft, schedule, and publish job postings
- **SEO Optimization**: Built-in search optimization for job discovery
- **Content Organization**: Rich text formatting for detailed job descriptions

## Access Control

### Read Access
- **Published jobs**: Public access for job seekers
- **Draft jobs**: Authenticated users only
- **Preview URLs**: Accessible via preview tokens

### Write Access
- **Create/Update/Delete**: Requires authentication for content management

## Field Structure

### Core Fields

#### Title
- Primary identifier for the job posting
- Used as admin title and SEO title
- Should include position title and key details for clarity

#### Content Structure (Tabs)

The job content is organized into two main tabs:

### 1. Content Tab

#### Rich Text Content
**Comprehensive Job Description Editor** with formatting tools:

**Rich Text Features**:
- **Headings**: H1-H4 for structured job descriptions
- **Embedded Blocks**: Banner, Code, and MediaBlock integration
- **Editing Tools**: Fixed and inline editing interfaces
- **Content Dividers**: Horizontal rules for section organization
- **Standard Formatting**: Bold, italic, links, lists, and more

### 2. SEO Tab
Comprehensive SEO configuration:
- Meta title, description, and image
- Social sharing optimization for job posting visibility
- Search result preview

## Publishing & Versioning

### Publication Date
- **Automatic Timestamps**: Set when job posting goes live
- **Scheduling Control**: Date and time picker for planned releases
- **Accessible Interface**: Sidebar placement for easy editing access

### Version Control
- **Draft system**: Auto-save every 100ms
- **Scheduled publishing**: Future job posting dates
- **Version history**: Up to 50 versions per job posting
- **Live preview**: Real-time content preview

## Admin Interface Features

### Live Preview
- Real-time preview during editing
- URL generation: `/jobs/{slug}`
- Preview token support for draft postings

### Default Columns
Admin list view displays:
- **Title**: Job posting identifier
- **Slug**: URL-friendly identifier
- **Last updated timestamp**: Recent modification tracking

### Content Management
- **Rich text editor**: Advanced Lexical editor
- **Media integration**: Embedded content blocks
- **SEO optimization**: Built-in meta field management

## URL Structure & Frontend Integration

### URL Pattern
- Individual job posting pages: `/jobs/{slug}`
- Jobs listing page: `/jobs`

### Default Population
- **Optimized Queries**: Essential data loaded by default
- **Meta Information**: SEO and social sharing data included
- **Performance Focus**: Reduced database overhead for faster loading

## Block Integration

Jobs can embed specialized content blocks:

### Banner Block
- **Urgent hiring notices**
- **Application deadlines**
- **Special announcements**

### Code Block
- **Technical requirements**
- **Code samples for technical roles**
- **API documentation for platform roles**

### MediaBlock
- **Team photos**
- **Office environment**
- **Product demonstrations**
- **Company culture videos**

## SEO & Discovery Optimization

### Job Posting SEO
- **Title optimization**: Include position, location, company
- **Meta descriptions**: Compelling job summaries
- **Structured data**: Job posting schema markup
- **Keywords**: Industry-relevant terms

### Social Sharing
- **LinkedIn optimization**: Professional network sharing
- **Twitter cards**: Concise job highlights
- **Facebook sharing**: Company culture focus

### Search Engine Visibility
- **URL structure**: Clean, descriptive job URLs
- **Content structure**: Clear headings and organization
- **Meta tags**: Complete SEO field usage

## Content Relationships

### Direct Relationships
- **Media**: Company branding, team photos, and office imagery
- **Content Blocks**: Embedded specialized content for job descriptions
- **SEO Integration**: Meta images and social sharing optimization

### Integration Features
- **Search-Based Discovery**: Content discovery through search functionality
- **Independent Content**: Each job posting stands as standalone content
- **Rich Media**: Support for embedded images and visual content

## Performance Optimization

### Caching Strategy
- **ISR (Incremental Static Regeneration)**: Fast job listing loads
- **On-demand revalidation**: Updates when postings change
- **Static generation**: Pre-rendered job pages

### Content Delivery
- **Edge caching**: Global job posting availability
- **Optimized queries**: Minimal database impact
- **Fast search**: Efficient job discovery

## Content Workflow

### Job Posting Process
1. **Draft Creation**: HR creates draft job posting
2. **Content Development**: Rich text editing with job details
3. **Review Process**: Internal review and approval
4. **SEO Optimization**: Meta fields and search optimization
5. **Scheduling**: Set job posting live date
6. **Publishing**: Job goes live with cache revalidation
7. **Monitoring**: Track application metrics

### Lifecycle Management
- **Active postings**: Currently accepting applications
- **Draft postings**: In development or review
- **Scheduled postings**: Future job releases
- **Archived postings**: Closed positions for reference

## System Design

### Streamlined Structure
- **Organizational Focus**: Jobs represent company postings rather than individual content
- **Content-Centric**: Emphasis on detailed job descriptions and requirements
- **Simplified Relationships**: Minimal external dependencies for focused job management

## Related Documentation
- [Rich Text Features](../blocks/content.md) - Content editing
- [Media Collection](./media.md) - Image and file management
- [SEO Configuration](../architecture/nextjs-frontend.md#seo) - Search optimization
- [Block System](../blocks/overview.md) - Embedded content
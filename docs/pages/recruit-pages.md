# Recruit Pages

This document provides comprehensive documentation for the recruitment section of the website, covering job listings and individual job posting pages.

## Page Structure Overview

The recruitment section consists of two main page types:

- **Recruit Index** (`/recruit`) - Main job listings page
- **Individual Jobs** (`/recruit/[slug]`) - Detailed job posting pages

## Recruit Index Page (`/recruit`)

### Purpose & Functionality

The recruit index serves as the main entry point for job seekers, displaying all available job postings in a clean, professional format designed to encourage applications.

### Data Sources

#### Content Query
- **Source**: Jobs collection via Payload API
- **Fields Retrieved**: title, slug, meta
- **Limit**: 12 jobs per page
- **Order**: Most recent first (publishedAt desc)

#### Static Generation
- **Strategy**: force-static with 10-minute revalidation
- **Performance**: Pre-rendered at build time
- **Updates**: ISR (Incremental Static Regeneration) for content changes

### User Interactions

- **Job Navigation**: Click job titles to view full job descriptions
- **Page Navigation**: Use pagination controls for additional listings
- **Application Encouragement**: RecruitCTA component promotes applications
- **Range Context**: PageRange shows current view within total jobs

### SEO Considerations

- **Page Title**: "Payload Website Template Recruit"
- **Meta Description**: Automatically generated from page content
- **Structured Data**: Job posting schema markup
- **Clean URLs**: Professional `/recruit` structure

## Individual Job Page (`/recruit/[slug]`)

### Purpose & Functionality

Dedicated pages for reading complete job descriptions with detailed requirements, responsibilities, and application information.

### Data Sources

#### Job Content
- **Source**: Individual job document from Jobs collection
- **Fields**: title, content, publishedAt, slug, meta
- **Draft Support**: Live preview for draft job postings
- **Content Structure**: Rich text with embedded blocks

#### Static Generation
- **Strategy**: `generateStaticParams()` for all published jobs
- **Caching**: React cache for efficient slug-based queries
- **Revalidation**: Automatic when content changes

### User Interactions

- **Content Reading**: Scroll through detailed job descriptions
- **Rich Content**: Interactive embedded blocks and formatting
- **Application Focus**: RecruitCTA encourages immediate application
- **Professional Layout**: Clean, focused design for easy reading

### SEO Considerations

- **Dynamic Metadata**: Generated using `generateMeta()` utility
- **Open Graph**: Optimized for social sharing
- **Schema Markup**: JobPosting structured data
- **URL Structure**: Clean `/recruit/job-title` format

## Key Features

### Simplified Content Model

Unlike posts and news, job pages focus on essential recruitment information:

- **No Categories**: Streamlined without category complexity
- **No Authors**: Jobs represent company positions, not individual authorship
- **No Related Content**: Focused experience without distractions
- **Pure Content**: Emphasis on job description and requirements

### Recruitment-Focused UX

#### RecruitCTA Component
- **Consistent Presence**: Appears on both index and detail pages
- **Action-Oriented**: "Apply Now" button directing to application process
- **Professional Design**: Card-based layout with clear call-to-action

#### JobsArchive Display
- **Clean Layout**: Professional job listing format
- **Truncated Descriptions**: 2-line preview with hover effects
- **Empty State Handling**: User-friendly messaging when no jobs available
- **Responsive Design**: Optimized for all device types

### Performance Optimization

#### Efficient Data Fetching
- **Minimal Fields**: Only necessary data retrieved for fast loading
- **Optimized Queries**: Reduced payload for improved performance
- **Static Generation**: Pre-rendered pages for instant loading

#### Streamlined Navigation
- **Simple Structure**: Two-level navigation (index → detail)
- **Fast Transitions**: Smooth navigation between job listings
- **Professional Focus**: Clean, distraction-free browsing experience

## Content Management

### Job Posting Workflow

The recruitment pages support a streamlined content management process:

- **Draft System**: Preview job postings before publication
- **Rich Content**: Lexical editor with custom blocks for detailed descriptions
- **Publication Control**: Schedule job postings for specific release dates
- **SEO Optimization**: Built-in meta fields for search visibility

### Application Integration

- **CTA Consistency**: Unified application prompts across all pages
- **Professional Branding**: Consistent design language for employer branding
- **Conversion Focus**: Design optimized for application submissions

## Related Documentation

- [Jobs Collection](../collections/jobs.md) - Content structure and fields
- [SEO Implementation](../architecture/nextjs-frontend.md#seo) - Search optimization
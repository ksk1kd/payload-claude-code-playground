# Users Collection

The Users collection manages user accounts, authentication, and user profiles for the application. It serves as the central authentication system and provides author information for content collections.

## Collection Purpose

The Users collection serves as the central authentication and profile management system:
- **Authentication System**: Secure user login and account management
- **Profile Management**: User information and social media integration
- **Author Attribution**: Content authorship for posts and news
- **Privacy Protection**: Controlled data exposure with security measures

## Field Structure

### Authentication Fields (Built-in)

Payload automatically provides authentication fields:
- **Email**: Primary authentication identifier
- **Password**: Encrypted password storage
- **Login attempts**: Security tracking
- **Lock until**: Account security features

### Profile Fields

#### Name
- Display name for the user
- Used in author attributions across content
- Primary identifier in admin interface

#### Job Title
- Professional title or position information
- Optional field providing professional context
- Displayed in author profiles and attribution

#### Biography
- Short personal or professional description
- Used for author pages and detailed profiles
- Optional field for additional context

#### Avatar
- Profile picture or avatar image
- References Media collection for optimized image handling
- Used in author attributions and profile displays

#### Social Links
- Array of social media and website links
- Supports multiple platforms (GitHub, LinkedIn, Twitter, Website)
- Used for comprehensive author profile pages

#### User Role
- User permission level management system
- **Admin**: Full system access and user management capabilities
- **Member**: Content author access with publishing rights
- Sidebar field for easy permission management

## Access Control

### Strict Authentication
All operations require authentication for privacy protection:
- **Admin Access**: Full administrative privileges required
- **Create/Update/Delete**: Controlled user management operations
- **Read Access**: Protected user information access

### Privacy Protection
- **Private by default**: All user data protected
- **Controlled exposure**: Only safe data exposed via hooks
- **No public access**: Users not publicly readable

## Admin Interface Features

### Default Columns
Admin list view displays:
- **Name**: User display name
- **Email**: Primary authentication identifier
- **Role**: User permission level

### Profile Management
- **Avatar upload**: Visual profile representation
- **Social links**: Array field for multiple platforms
- **Role management**: Easy permission control

## User Roles & Permissions

### Admin Role
- **Full system access**: All collections and settings
- **User management**: Create, edit, delete users
- **Content management**: All content operations
- **System configuration**: Access to admin settings

### Member Role
- **Content creation**: Can create and edit content
- **Limited access**: Cannot manage other users
- **Author privileges**: Can be assigned as content author

## Content Relationships

### Direct Relationships
- **Posts**: Blog content attribution and authorship
- **News**: News article authors and collaboration
- **Media**: Avatar images through Media collection
- **Content blocks**: Rich content authorship

### Safe Data Exposure
Through automated processes, safe user data is made available:
- **Selective Information**: Only essential, non-sensitive data exposed
- **Automated Processing**: Safe data exposure handled automatically
- **Privacy Protection**: Sensitive information remains secure


## Authentication Features

### Built-in Security
- **Password encryption**: Secure password storage
- **Login attempt tracking**: Brute force protection
- **Account locking**: Security measures
- **Session management**: Secure session handling

### User Registration
- **Admin-only creation**: Users created by administrators
- **Email verification**: Email-based authentication
- **Role assignment**: Default member role

## Social Platform Integration

### Supported Platforms
- **GitHub**: Code portfolio and contributions
- **LinkedIn**: Professional networking
- **Twitter**: Social media presence
- **Website**: Personal or professional website

### Link Validation
- Link format validation
- Platform-specific formatting
- Frontend rendering optimization

## Profile Customization

### Avatar Management
- **Upload support**: Direct image upload
- **Media collection**: Integrated with media system
- **Size optimization**: Automatic image resizing
- **Fallback handling**: Default avatar support

### Bio and Description
- **Rich text support**: Formatted descriptions
- **Length considerations**: Optimized for display
- **SEO friendly**: Structured for search engines



## Related Documentation
- [Authentication & Access Control](../architecture/payload-cms.md#authentication)
- [Posts Collection](./posts.md) - Author relationships
- [News Collection](./news.md) - Author attribution
- [Media Collection](./media.md) - Avatar management
- [Member Pages](../pages/members-pages.md) - Profile pages
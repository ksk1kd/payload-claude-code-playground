import type { Access } from 'payload'

// Allow public access to read member users (role: 'member') with limited fields
export const membersPublic: Access = ({ req }) => {
  // Allow reading users with role 'member' for public member pages
  return {
    role: {
      equals: 'member',
    },
  }
}
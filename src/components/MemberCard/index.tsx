import { cn } from '@/utilities/ui'
import React from 'react'
import Link from 'next/link'

import type { User } from '@/payload-types'
import { Media } from '@/components/Media'

export type MemberData = Pick<User, 'name' | 'email' | 'role' | 'title' | 'avatar' | 'slug'>

export const MemberCard: React.FC<{
  className?: string
  member: MemberData
}> = (props) => {
  const { className, member } = props
  const { name, email, title, avatar, slug } = member

  const cardContent = (
    <>
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center mb-4 mx-auto">
        {avatar && typeof avatar !== 'string' ? (
          <Media 
            resource={avatar} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <span className="text-2xl font-semibold text-primary">
            {name ? name.charAt(0).toUpperCase() : '?'}
          </span>
        )}
      </div>

      {/* Member info */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-1">
          {name || 'Unnamed Member'}
        </h3>
        
        {title && (
          <p className="text-sm text-muted-foreground mb-2">
            {title}
          </p>
        )}
      </div>
    </>
  )

  const cardWrapper = (
    <div
      className={cn(
        'border border-border rounded-lg p-6 bg-card hover:shadow-md transition-all duration-200',
        slug ? 'hover:border-primary/50 cursor-pointer' : '',
        className,
      )}
    >
      {cardContent}
    </div>
  )

  if (slug) {
    return (
      <Link href={`/members/${slug}`} className="block">
        {cardWrapper}
      </Link>
    )
  }

  return cardWrapper
}
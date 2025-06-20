import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

import type { Job } from '@/payload-types'

export type JobListData = Pick<Job, 'slug' | 'meta' | 'title'>

export const JobListItem: React.FC<{
  className?: string
  doc: JobListData
}> = (props) => {
  const { className, doc } = props

  const { slug, meta, title } = doc || {}
  const { description } = meta || {}

  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/recruit/${slug}`

  return (
    <article
      className={cn(
        'border-b border-border pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0 group',
        className,
      )}
    >
      <Link href={href} className="block hover:cursor-pointer">
        <div className="flex flex-col gap-3">
          <div className="w-full">
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>

            {/* Description */}
            {description && (
              <p className="text-muted-foreground leading-relaxed" style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {sanitizedDescription}
              </p>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}
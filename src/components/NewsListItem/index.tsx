import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { News } from '@/payload-types'

import { formatDateTime } from '@/utilities/formatDateTime'

export type NewsListData = Pick<News, 'slug' | 'categories' | 'meta' | 'title' | 'publishedAt'>

export const NewsListItem: React.FC<{
  className?: string
  doc: NewsListData
  showCategories?: boolean
}> = (props) => {
  const { className, doc, showCategories } = props

  const { slug, categories, meta, title, publishedAt } = doc || {}
  const { description } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/news/${slug}`

  return (
    <article
      className={cn(
        'border-b border-border pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0 group',
        className,
      )}
    >
      <Link href={href} className="block hover:cursor-pointer">
        <div className="flex flex-col gap-3">
          {/* Content */}
          <div className="w-full">
            {/* Published Date */}
            {publishedAt && (
              <div className="text-sm text-muted-foreground mb-2">
                <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
              </div>
            )}

            {/* Categories */}
            {showCategories && hasCategories && (
              <div className="uppercase text-xs font-medium text-muted-foreground mb-2 tracking-wide">
                {categories?.map((category, index) => {
                  if (typeof category === 'object') {
                    const { title: titleFromCategory } = category
                    const categoryTitle = titleFromCategory || 'Untitled category'
                    const isLast = index === categories.length - 1

                    return (
                      <Fragment key={index}>
                        {categoryTitle}
                        {!isLast && <Fragment>, &nbsp;</Fragment>}
                      </Fragment>
                    )
                  }
                  return null
                })}
              </div>
            )}

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
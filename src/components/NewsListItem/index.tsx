import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { News } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatDateTime } from '@/utilities/formatDateTime'

export type NewsListData = Pick<News, 'slug' | 'categories' | 'meta' | 'title' | 'heroImage' | 'publishedAt'>

export const NewsListItem: React.FC<{
  className?: string
  doc: NewsListData
  showCategories?: boolean
}> = (props) => {
  const { className, doc, showCategories } = props

  const { slug, categories, meta, title, heroImage, publishedAt } = doc || {}
  const { description, image: metaImage } = meta || {}

  const displayImage = metaImage || heroImage
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
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* Image */}
        <div className="flex-shrink-0 w-full sm:w-48 h-48 sm:h-32 overflow-hidden rounded-lg bg-muted">
          {displayImage && typeof displayImage !== 'string' ? (
            <Media resource={displayImage} size="12rem" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              No image
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
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
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            <Link href={href} className="block hover:text-primary transition-colors">
              {title}
            </Link>
          </h3>

          {/* Description */}
          {description && (
            <p className="text-muted-foreground mb-3 leading-relaxed" style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {sanitizedDescription}
            </p>
          )}

          {/* Published Date */}
          {publishedAt && (
            <div className="text-sm text-muted-foreground">
              <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
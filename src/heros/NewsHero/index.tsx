import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { News } from '@/payload-types'

import { formatAuthors } from '@/utilities/formatAuthors'

export const NewsHero: React.FC<{
  news: News
}> = ({ news }) => {
  const { categories, publishedAt, title, populatedAuthors } = news

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <div className="pt-24 pb-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Categories */}
          {categories && categories.length > 0 && (
            <div className="uppercase text-sm font-medium text-muted-foreground mb-4 tracking-wide">
              {categories?.map((category, index) => {
                if (typeof category === 'object' && category !== null) {
                  const { title: categoryTitle } = category
                  const titleToUse = categoryTitle || 'Untitled category'
                  const isLast = index === categories.length - 1

                  return (
                    <React.Fragment key={index}>
                      {titleToUse}
                      {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                    </React.Fragment>
                  )
                }
                return null
              })}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-muted-foreground">
            {hasAuthors && (
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Author</p>
                <p>{formatAuthors(populatedAuthors)}</p>
              </div>
            )}
            {publishedAt && (
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Published</p>
                <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
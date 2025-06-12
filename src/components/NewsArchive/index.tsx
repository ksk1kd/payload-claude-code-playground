import { cn } from '@/utilities/ui'
import React from 'react'

import { NewsListItem, NewsListData } from '@/components/NewsListItem'

export type Props = {
  className?: string
  news: NewsListData[]
}

export const NewsArchive: React.FC<Props> = (props) => {
  const { className, news } = props

  return (
    <div className={cn('container', className)}>
      <div className="max-w-4xl mx-auto">
        {news && news.length > 0 ? (
          news.map((newsItem, index) => {
            if (typeof newsItem === 'object' && newsItem !== null) {
              return (
                <NewsListItem 
                  key={index} 
                  doc={newsItem} 
                  showCategories 
                />
              )
            }
            return null
          })
        ) : (
          <div className="text-center text-muted-foreground py-12">
            <p>No news articles found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'
import Link from 'next/link'

import type { Post, News } from '@/payload-types'

import { Media } from '@/components/Media'

export const PostHero: React.FC<{
  post: Post | News
}> = ({ post }) => {
  const { categories, publishedAt, title } = post
  const heroImage = 'heroImage' in post ? post.heroImage : undefined
  const populatedAuthors = 'populatedAuthors' in post ? post.populatedAuthors : undefined

  const hasAuthors = populatedAuthors && populatedAuthors.length > 0

  return (
    <div className="relative -mt-[10.4rem] flex items-end">
      <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white pb-8">
        <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
          <div className="uppercase text-sm mb-6">
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle, slug: categorySlug } = category

                const titleToUse = categoryTitle || 'Untitled category'
                const isLast = index === categories.length - 1
                const isPost = 'heroImage' in post // Check if it's a Post (has heroImage) vs News

                return (
                  <React.Fragment key={index}>
                    {isPost && categorySlug ? (
                      <Link 
                        href={`/posts/category/${categorySlug}`}
                        className="hover:underline hover:text-white/80 transition-colors"
                      >
                        {titleToUse}
                      </Link>
                    ) : (
                      titleToUse
                    )}
                    {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                  </React.Fragment>
                )
              }
              return null
            })}
          </div>

          <div className="">
            <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl">{title}</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-16">
            {hasAuthors && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm">Author</p>

                  <div className="flex flex-wrap gap-2">
                    {populatedAuthors && populatedAuthors.map((author, index) => {
                      if (typeof author === 'object' && author !== null) {
                        const name = 'name' in author ? author.name : undefined
                        const slug = 'slug' in author ? author.slug : undefined
                        const role = 'role' in author ? author.role : undefined
                        const isLast = index === populatedAuthors.length - 1
                        
                        // Only link to member detail page if they are a member and have a slug
                        if (role === 'member' && slug) {
                          return (
                            <React.Fragment key={author.id || index}>
                              <Link 
                                href={`/members/${slug}`}
                                className="hover:underline hover:text-white/80 transition-colors"
                              >
                                {name}
                              </Link>
                              {!isLast && <span>, </span>}
                            </React.Fragment>
                          )
                        } else {
                          // For admin users or users without slug, just show name
                          return (
                            <React.Fragment key={author.id || index}>
                              <span>{name}</span>
                              {!isLast && <span>, </span>}
                            </React.Fragment>
                          )
                        }
                      }
                      return null
                    })}
                  </div>
                </div>
              </div>
            )}
            {publishedAt && (
              <div className="flex flex-col gap-1">
                <p className="text-sm">Date Published</p>

                <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {heroImage && typeof heroImage !== 'string' && (
          <Media fill priority imgClassName="-z-10 object-cover" resource={heroImage} />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  )
}

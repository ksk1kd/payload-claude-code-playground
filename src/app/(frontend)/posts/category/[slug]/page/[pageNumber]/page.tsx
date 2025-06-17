import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { notFound } from 'next/navigation'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

type Args = {
  params: Promise<{
    slug: string
    pageNumber: string
  }>
}

export default async function CategoryPostsPage({ params: paramsPromise }: Args) {
  const { slug, pageNumber } = await paramsPromise
  const currentPage = parseInt(pageNumber)

  if (isNaN(currentPage) || currentPage < 1) {
    notFound()
  }

  const payload = await getPayload({ config: configPromise })

  // Get category by slug
  const categoryResult = await payload.find({
    collection: 'categories',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const category = categoryResult.docs[0]
  if (!category) {
    notFound()
  }

  // Get posts for this category
  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    page: currentPage,
    overrideAccess: false,
    where: {
      categories: {
        in: [category.id],
      },
    },
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      heroImage: true,
    },
  })

  if (currentPage > posts.totalPages) {
    notFound()
  }

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Posts in &quot;{category.title}&quot;</h1>
          <p className="text-muted-foreground">
            {posts.totalDocs} {posts.totalDocs === 1 ? 'post' : 'posts'} found
          </p>
        </div>
      </div>

      {posts.totalDocs > 0 && (
        <>
          <div className="container mb-8">
            <PageRange
              collection="posts"
              currentPage={posts.page}
              limit={12}
              totalDocs={posts.totalDocs}
            />
          </div>

          <CollectionArchive posts={posts.docs} />

          <div className="container">
            {posts.totalPages > 1 && posts.page && (
              <Pagination 
                page={posts.page} 
                totalPages={posts.totalPages} 
                basePath={`/posts/category/${slug}`}
              />
            )}
          </div>
        </>
      )}

      {posts.totalDocs === 0 && (
        <div className="container">
          <div className="text-center text-muted-foreground py-12">
            <p>No posts found in this category.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  return paramsPromise.then(async ({ slug, pageNumber }) => {
    const payload = await getPayload({ config: configPromise })
    
    const categoryResult = await payload.find({
      collection: 'categories',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    })

    const category = categoryResult.docs[0]
    
    return {
      title: category 
        ? `${category.title} Posts - Page ${pageNumber} | Payload Website Template`
        : 'Category Not Found | Payload Website Template',
    }
  })
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  
  const categories = await payload.find({
    collection: 'categories',
    limit: 1000,
    pagination: false,
    overrideAccess: false,
    select: {
      slug: true,
    },
  })

  const params = []
  
  // Generate pagination params for each category
  for (const category of categories.docs) {
    if (!category.slug) continue
    
    // Get post count for this category
    const posts = await payload.find({
      collection: 'posts',
      limit: 1,
      where: {
        categories: {
          in: [category.id],
        },
      },
      pagination: false,
      overrideAccess: false,
    })

    const totalPages = Math.ceil(posts.totalDocs / 12)
    
    // Generate pages 2 and beyond (page 1 is handled by the main route)
    for (let i = 2; i <= totalPages; i++) {
      params.push({
        slug: category.slug,
        pageNumber: i.toString(),
      })
    }
  }
  
  return params
}
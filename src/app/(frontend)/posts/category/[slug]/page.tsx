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
  }>
}

export default async function CategoryPosts({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
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
    page: 1,
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
  return paramsPromise.then(async ({ slug }) => {
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
        ? `${category.title} Posts | Payload Website Template`
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

  return categories.docs
    .filter((category) => category.slug)
    .map((category) => ({
      slug: category.slug,
    }))
}
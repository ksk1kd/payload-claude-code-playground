import type { Metadata } from 'next/types'

import { NewsArchive } from '@/components/NewsArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const news = await payload.find({
    collection: 'news',
    depth: 1,
    limit: 10,
    page: 1,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      publishedAt: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>News</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="news"
          currentPage={news.page}
          limit={10}
          totalDocs={news.totalDocs}
        />
      </div>

      <NewsArchive news={news.docs} />

      <div className="container">
        {news.totalPages > 1 && news.page && (
          <Pagination page={news.page} totalPages={news.totalPages} basePath="/news" />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template News`,
  }
}
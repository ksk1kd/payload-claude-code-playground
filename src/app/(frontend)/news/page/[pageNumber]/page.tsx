import type { Metadata } from 'next/types'

import { NewsArchive } from '@/components/NewsArchive'
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
    pageNumber: string
  }>
}

export default async function NewsPage({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise
  const currentPage = parseInt(pageNumber)

  if (isNaN(currentPage) || currentPage < 1) {
    notFound()
  }

  const payload = await getPayload({ config: configPromise })

  const news = await payload.find({
    collection: 'news',
    depth: 1,
    limit: 10,
    page: currentPage,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      publishedAt: true,
    },
  })

  if (currentPage > news.totalPages) {
    notFound()
  }

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

export function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  return paramsPromise.then(({ pageNumber }) => ({
    title: `News - Page ${pageNumber} | Payload Website Template`,
  }))
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  
  const news = await payload.find({
    collection: 'news',
    limit: 1,
    pagination: false,
    overrideAccess: false,
  })

  const totalPages = Math.ceil(news.totalDocs / 10)
  
  const pages = []
  for (let i = 2; i <= totalPages; i++) {
    pages.push({ pageNumber: i.toString() })
  }
  
  return pages
}
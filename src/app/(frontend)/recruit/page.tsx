import type { Metadata } from 'next/types'

import { JobsArchive } from '@/components/JobsArchive'
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

  const jobs = await payload.find({
    collection: 'jobs',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      meta: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient jobs={jobs.docs} />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Recruit</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="jobs"
          currentPage={jobs.page}
          limit={12}
          totalDocs={jobs.totalDocs}
        />
      </div>

      <JobsArchive jobs={jobs.docs} />

      <div className="container">
        {jobs.totalPages > 1 && jobs.page && (
          <Pagination page={jobs.page} totalPages={jobs.totalPages} basePath="/recruit" />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Recruit`,
  }
}
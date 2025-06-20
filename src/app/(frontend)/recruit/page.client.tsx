'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import React from 'react'

import type { Job } from '@/payload-types'

const PageClient: React.FC<{
  jobs: Job[]
}> = ({ jobs: initialJobs }) => {
  const { data } = useLivePreview({
    initialData: initialJobs,
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  })

  return <React.Fragment />
}

export default PageClient
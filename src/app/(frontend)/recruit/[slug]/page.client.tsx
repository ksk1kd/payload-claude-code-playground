'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import React from 'react'

import type { Job } from '@/payload-types'

const PageClient: React.FC<{
  job: Job
}> = ({ job: initialJob }) => {
  const { data } = useLivePreview({
    initialData: initialJob,
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  })

  return <React.Fragment />
}

export default PageClient
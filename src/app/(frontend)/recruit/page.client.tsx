'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import React from 'react'

import { JobListData } from '@/components/JobListItem'

const PageClient: React.FC<{
  jobs: JobListData[]
}> = ({ jobs: initialJobs }) => {
  const { data: _data } = useLivePreview({
    initialData: initialJobs,
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  })

  return <React.Fragment />
}

export default PageClient
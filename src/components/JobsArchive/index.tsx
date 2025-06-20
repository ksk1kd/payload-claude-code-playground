import { cn } from '@/utilities/ui'
import React from 'react'

import { JobListItem, JobListData } from '@/components/JobListItem'

export type Props = {
  className?: string
  jobs: JobListData[]
}

export const JobsArchive: React.FC<Props> = (props) => {
  const { className, jobs } = props

  return (
    <div className={cn('container', className)}>
      <div className="max-w-4xl mx-auto">
        {jobs && jobs.length > 0 ? (
          jobs.map((job, index) => {
            if (typeof job === 'object' && job !== null) {
              return (
                <JobListItem 
                  key={index} 
                  doc={job} 
                />
              )
            }
            return null
          })
        ) : (
          <div className="text-center text-muted-foreground py-12">
            <p>No job postings found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
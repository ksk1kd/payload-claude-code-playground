import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const RecruitCTA: React.FC<{
  className?: string
}> = ({ className }) => {
  return (
    <div className={`container ${className || ''}`}>
      <div className="bg-card rounded border-border border p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Team?</h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Take the next step in your career and become part of our innovative team.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-3">
            <Link href="/entry">
              Apply Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
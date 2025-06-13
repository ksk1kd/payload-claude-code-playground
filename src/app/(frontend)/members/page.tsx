import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { MemberCard } from '@/components/MemberCard'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function MembersPage() {
  const payload = await getPayload({ config: configPromise })

  const members = await payload.find({
    collection: 'users',
    where: {
      role: {
        equals: 'member',
      },
    },
    limit: 100,
    pagination: false,
    overrideAccess: true, // Override access control for public member display
    select: {
      name: true,
      email: true,
      role: true,
      title: true,
      avatar: true,
      slug: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Our Members</h1>
          <p className="text-muted-foreground">
            Meet our {members.totalDocs} {members.totalDocs === 1 ? 'member' : 'members'}
          </p>
        </div>
      </div>

      {members.totalDocs > 0 ? (
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {members.docs.map((member, index) => (
              <MemberCard key={member.id || index} member={member} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="text-center text-muted-foreground py-12">
            <p>No members found.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Our Members | Payload Website Template',
    description: 'Meet our team members and contributors.',
  }
}
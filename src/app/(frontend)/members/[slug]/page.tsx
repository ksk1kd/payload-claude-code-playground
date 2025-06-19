import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { notFound } from 'next/navigation'
import PageClient from './page.client'
import { Media } from '@/components/Media'
import Link from 'next/link'
import MemberPosts from './MemberPosts'
import { Post } from '@/payload-types'

export const dynamic = 'force-static'
export const revalidate = 600

type Args = {
  params: Promise<{
    slug: string
  }>
}

export default async function MemberDetail({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const memberResult = await payload.find({
    collection: 'users',
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          role: {
            equals: 'member',
          },
        },
      ],
    },
    limit: 1,
    overrideAccess: true,
    select: {
      name: true,
      title: true,
      bio: true,
      avatar: true,
      email: true,
      slug: true,
    },
  })

  const member = memberResult.docs[0]
  if (!member) {
    notFound()
  }

  // Get initial posts authored by this member (first 6)
  const memberPosts = await payload.find({
    collection: 'posts',
    where: {
      authors: {
        equals: member.id,
      },
      _status: {
        equals: 'published',
      },
    },
    limit: 6,
    sort: '-publishedAt',
    select: {
      title: true,
      slug: true,
      publishedAt: true,
      heroImage: true,
      categories: true,
      meta: true,
    },
  })


  return (
    <div className="pt-24 pb-24">
      <PageClient />
      
      {/* Back link */}
      <div className="container mb-8">
        <Link 
          href="/members" 
          className="text-muted-foreground hover:text-primary transition-colors text-sm"
        >
          ← Back to Members
        </Link>
      </div>

      {/* Member profile */}
      <div className="container mb-12">
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                {member.avatar && typeof member.avatar !== 'string' ? (
                  <Media 
                    resource={member.avatar} 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <span className="text-4xl font-semibold text-primary">
                    {member.name ? member.name.charAt(0).toUpperCase() : '?'}
                  </span>
                )}
              </div>
            </div>

            {/* Member info */}
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold mb-2">
                {member.name || 'Unnamed Member'}
              </h1>
              
              {member.title && (
                <p className="text-xl text-muted-foreground mb-4">
                  {member.title}
                </p>
              )}

              {member.bio && (
                <div className="prose prose-lg max-w-none mb-6">
                  <p>{member.bio}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Member's posts */}
      <MemberPosts 
        memberId={String(member.id)}
        memberName={member.name}
        initialPosts={memberPosts.docs as Post[]}
        totalPosts={memberPosts.totalDocs}
      />
    </div>
  )
}

export function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  return paramsPromise.then(async ({ slug }) => {
    const payload = await getPayload({ config: configPromise })
    
    const memberResult = await payload.find({
      collection: 'users',
      where: {
        and: [
          {
            slug: {
              equals: slug,
            },
          },
          {
            role: {
              equals: 'member',
            },
          },
        ],
      },
      limit: 1,
      overrideAccess: true,
      select: {
        name: true,
        title: true,
        bio: true,
      },
    })

    const member = memberResult.docs[0]
    
    return {
      title: member 
        ? `${member.name}${member.title ? ` - ${member.title}` : ''} | Payload Website Template`
        : 'Member Not Found | Payload Website Template',
      description: member?.bio || `Learn more about ${member?.name || 'this member'}.`,
    }
  })
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  
  const members = await payload.find({
    collection: 'users',
    where: {
      role: {
        equals: 'member',
      },
    },
    limit: 1000,
    pagination: false,
    overrideAccess: true,
    select: {
      slug: true,
    },
  })

  return members.docs
    .filter((member) => member.slug)
    .map((member) => ({
      slug: member.slug,
    }))
}
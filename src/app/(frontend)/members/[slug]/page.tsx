import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { notFound } from 'next/navigation'
import PageClient from './page.client'
import { Media } from '@/components/Media'
import { ExternalLink, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/Card'

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
      socialLinks: true,
      email: true,
      slug: true,
    },
  })

  const member = memberResult.docs[0]
  if (!member) {
    notFound()
  }

  // Get posts authored by this member
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
    limit: 20,
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

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github className="w-5 h-5" />
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />
      case 'twitter':
        return <Twitter className="w-5 h-5" />
      case 'website':
        return <ExternalLink className="w-5 h-5" />
      default:
        return <ExternalLink className="w-5 h-5" />
    }
  }

  const getSocialLabel = (platform: string) => {
    switch (platform) {
      case 'github':
        return 'GitHub'
      case 'linkedin':
        return 'LinkedIn'
      case 'twitter':
        return 'Twitter'
      case 'website':
        return 'Website'
      default:
        return 'Link'
    }
  }

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

              {/* Social links */}
              {member.socialLinks && member.socialLinks.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Connect</h3>
                  <div className="flex flex-wrap gap-3">
                    {member.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 border border-border rounded-md hover:bg-muted transition-colors"
                      >
                        {getSocialIcon(link.platform)}
                        <span className="text-sm">{getSocialLabel(link.platform)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Member's posts */}
      {memberPosts.totalDocs > 0 && (
        <>
          <div className="container mb-8">
            <h2 className="text-2xl font-bold">Posts by {member.name}</h2>
          </div>
          <div className="container">
            <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
              {memberPosts.docs.map((post, index) => (
                <div className="col-span-4" key={post.id || index}>
                  <Card className="h-full" doc={post} relationTo="posts" showCategories />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
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
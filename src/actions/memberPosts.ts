'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getMemberPosts(memberId: string, page: number = 1, limit: number = 6) {
  try {
    const payload = await getPayload({ config: configPromise })
    
    const memberPosts = await payload.find({
      collection: 'posts',
      where: {
        authors: {
          equals: memberId,
        },
        _status: {
          equals: 'published',
        },
      },
      limit,
      page,
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

    return {
      success: true,
      data: memberPosts,
    }
  } catch (error) {
    console.error('Error fetching member posts:', error)
    return {
      success: false,
      error: 'Failed to fetch member posts',
      data: null,
    }
  }
}
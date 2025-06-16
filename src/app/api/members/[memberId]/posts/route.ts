import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ memberId: string }> }
) {
  try {
    const { memberId } = await params
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '6')
    
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

    return NextResponse.json(memberPosts)
  } catch (error) {
    console.error('Error fetching member posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch member posts' },
      { status: 500 }
    )
  }
}
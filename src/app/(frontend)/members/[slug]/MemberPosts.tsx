'use client'

import React, { useState } from 'react'
import { Card } from '@/components/Card'
import { Button } from '@/components/ui/button'
import { Post } from '@/payload-types'
import { getMemberPosts } from '@/actions/memberPosts'

interface MemberPostsProps {
  memberId: string
  memberName: string | null
  initialPosts: Post[]
  totalPosts: number
}

const MemberPosts: React.FC<MemberPostsProps> = ({
  memberId,
  memberName,
  initialPosts,
  totalPosts,
}) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  
  const hasMore = posts.length < totalPosts

  const loadMorePosts = async () => {
    if (loading || !hasMore) return

    setLoading(true)
    try {
      const result = await getMemberPosts(memberId, page + 1, 6)
      if (result.success && result.data) {
        setPosts(prev => [...prev, ...result.data.docs as Post[]])
        setPage(prev => prev + 1)
      }
    } catch (error) {
      console.error('Failed to load more posts:', error)
    } finally {
      setLoading(false)
    }
  }

  if (totalPosts === 0) {
    return null
  }

  return (
    <>
      <div className="container mb-8">
        <h2 className="text-2xl font-bold">Posts by {memberName}</h2>
      </div>
      <div className="container">
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {posts.map((post, index) => (
            <div className="col-span-4" key={post.id || index}>
              <Card className="h-full" doc={post} relationTo="posts" showCategories />
            </div>
          ))}
        </div>
        
        {hasMore && (
          <div className="mt-8 text-center">
            <Button 
              onClick={loadMorePosts}
              disabled={loading}
              variant="outline"
              size="lg"
            >
              {loading ? 'Loading...' : 'Load more'}
            </Button>
          </div>
        )}
      </div>
    </>
  )
}

export default MemberPosts
'use client'
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

export const Pagination: React.FC<{
  className?: string
  page: number
  totalPages: number
  basePath?: string
}> = (props) => {
  const { className, page, totalPages, basePath = '/posts' } = props
  const hasNextPage = page < totalPages
  const hasPrevPage = page > 1

  const hasExtraPrevPages = page - 1 > 1
  const hasExtraNextPages = page + 1 < totalPages

  const getPageUrl = (pageNum: number) => {
    if (pageNum === 1) {
      return basePath
    }
    return `${basePath}/page/${pageNum}`
  }

  return (
    <div className={cn('my-12', className)}>
      <PaginationComponent>
        <PaginationContent>
          <PaginationItem>
            {hasPrevPage ? (
              <Link href={getPageUrl(page - 1)}>
                <PaginationPrevious />
              </Link>
            ) : (
              <PaginationPrevious disabled />
            )}
          </PaginationItem>

          {hasExtraPrevPages && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {hasPrevPage && (
            <PaginationItem>
              <Link href={getPageUrl(page - 1)}>
                <PaginationLink>
                  {page - 1}
                </PaginationLink>
              </Link>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink isActive>
              {page}
            </PaginationLink>
          </PaginationItem>

          {hasNextPage && (
            <PaginationItem>
              <Link href={getPageUrl(page + 1)}>
                <PaginationLink>
                  {page + 1}
                </PaginationLink>
              </Link>
            </PaginationItem>
          )}

          {hasExtraNextPages && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            {hasNextPage ? (
              <Link href={getPageUrl(page + 1)}>
                <PaginationNext />
              </Link>
            ) : (
              <PaginationNext disabled />
            )}
          </PaginationItem>
        </PaginationContent>
      </PaginationComponent>
    </div>
  )
}

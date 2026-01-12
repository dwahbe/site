'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function PortfolioPosts({ posts = [] }: { posts?: any[] }) {
  const [showPrimary, setShowPrimary] = useState(true)

  return (
    <div>
      <div className="flex flex-auto justify-between items-center mb-2">
        <h2 className="mb-4">Work I’m proud of</h2>

        {/* <button
          onClick={() => setShowPrimary(!showPrimary)}
          className="flex items-center px-4 py-3 text-white font-normal bg-[#ff4921] rounded-3xl hover:bg-[#ff4921]/80 transition-colors"
        >
          {showPrimary ? 'Show projects' : 'Hide projects'}
        </button> */}
      </div>
      {posts
        .sort((a, b) => {
          if (a.metadata.order < b.metadata.order) {
            return -1
          }
          return 1
        })
        .filter((post) => post.metadata.hidden !== 'true')
        .filter((post) =>
          showPrimary ? post.metadata.primary === 'true' : true,
        )
        .map((post) => (
          <Link
            key={post.slug}
            className="flex gap-4 md:gap-16 mb-6 bg-white/40 dark:bg-neutral-800 transition-shadow p-4 rounded-xl hover:shadow-[0_0_0_2px_var(--accent-color)]"
            style={{
              // @ts-expect-error custom properties
              '--accent-color': post.metadata.color,
            }}
            href={`/portfolio/${post.slug}`}
          >
            <div className="flex flex-col">
              <h3 className="text-balance text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
                {post.metadata.title}
              </h3>

              <p className="text-neutral-600 text-sm dark:text-neutral-400">
                {post.metadata.summary}
              </p>
            </div>
            {post.metadata.previewImage ? (
              <Image
                className="max-w-12 max-h-12 md:col-span-2 object-contain"
                src={
                  require(`app/portfolio/images/${post.metadata.previewImage}`)
                    .default
                }
                alt={post.metadata.title}
              />
            ) : null}
          </Link>
        ))}
    </div>
  )
}

import Link from 'next/link'
import { getPortfolioPosts } from 'app/portfolio/utils'

export function PortfolioPosts({
  showSummary = false,
}: {
  showSummary?: boolean
}) {
  let allPosts = getPortfolioPosts()

  return (
    <div>
      {allPosts
        .sort((a, b) => {
          if (a.metadata.order < b.metadata.order) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col gap-1 mb-6 bg-neutral-100 dark:bg-neutral-800 transition-shadow p-4 rounded-xl hover:shadow-[0_0_0_2px_var(--accent-color)]"
            style={{
              // @ts-expect-error custom properties
              '--accent-color': post.metadata.color,
            }}
            href={`/portfolio/${post.slug}`}
          >
            <h3 className="text-balance text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
              {post.metadata.title}
            </h3>
            <p className="text-neutral-600 text-sm dark:text-neutral-400">
              {post.metadata.summary}
            </p>
          </Link>
        ))}
    </div>
  )
}

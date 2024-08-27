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
        // .sort((a, b) => {
        //   if (
        //     new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
        //   ) {
        //     return -1
        //   }
        //   return 1
        // })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-6"
            href={`/portfolio/${post.slug}`}
          >
            <h2 className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
              {post.metadata.title}
            </h2>
            {showSummary ? (
              <p className="text-neutral-600 text-sm dark:text-neutral-400">
                {post.metadata.summary}
              </p>
            ) : null}
          </Link>
        ))}
    </div>
  )
}

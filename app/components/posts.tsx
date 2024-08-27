import Link from 'next/link'
import { getPortfolioPosts } from 'app/portfolio/utils'
import Image from 'next/image'

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
            <section className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <h3 className="text-balance text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
                {post.metadata.title}
              </h3>
              {post.metadata.previewImage ? (
                <Image
                  className=" max-w-10 max-h-10 md:col-span-2 object-contain"
                  src={
                    require(`app/portfolio/images/${post.metadata.previewImage}`)
                      .default
                  }
                  alt={post.metadata.title}
                />
              ) : null}
            </section>

            <p className="text-neutral-600 text-sm dark:text-neutral-400">
              {post.metadata.summary}
            </p>
          </Link>
        ))}
    </div>
  )
}

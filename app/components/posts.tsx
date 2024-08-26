import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <h2 className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
              {post.metadata.title}
            </h2>
            <p className="text-neutral-600 text-sm">{post.metadata.summary}</p>
            <p className="font-light text-sm text-neutral-400 dark:text-neutral-400 w-[100px] tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
          </Link>
        ))}
    </div>
  )
}

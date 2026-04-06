import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getWorkPosts } from 'app/portfolio/utils'
import { baseUrl } from 'app/sitemap'
import ArrowIcon from 'app/components/arrow'

export async function generateStaticParams() {
  let posts = getWorkPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// export const ImageComponent = (props) => {
//   return <Image {...props} />
// }

export async function generateMetadata({ params }) {
  const { slug } = await params
  let post = getWorkPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  let { title, summary: description } = post.metadata
  let ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    alternates: {
      canonical: `/portfolio/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${baseUrl}/portfolio/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }) {
  const { slug } = await params
  let post = getWorkPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <section
      style={{
        // @ts-expect-error custom properties
        '--accent-color': post.metadata.color,
      }}
    >
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
        <h1 className="title mr-auto text-4xl md:text-5xl">
          {post.metadata.title}
        </h1>
        {post.metadata.link ? (
          <a
            className={`flex items-center gap-2 rounded-full bg-[var(--accent-color)] px-4 py-2 ${
              post.slug === 'sunrise-movement'
                ? 'text-neutral-900'
                : 'text-white'
            } transition-shadow hover:shadow-[0_0_0_1px_white,0_0_0_3px_var(--accent-color)] dark:hover:shadow-[0_0_0_1px_black,0_0_0_3px_var(--accent-color)]`}
            href={post.metadata.link}
          >
            View site <ArrowIcon />
          </a>
        ) : null}
      </div>

      <div className="mb-8 mt-2 flex items-center justify-between text-sm"></div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}

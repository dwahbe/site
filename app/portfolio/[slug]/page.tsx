import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getPortfolioPosts } from 'app/portfolio/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getPortfolioPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getPortfolioPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,

    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
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

export default function Blog({ params }) {
  let post = getPortfolioPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <h1 className="title text-4xl">{post.metadata.title}</h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm"></div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}

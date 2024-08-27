import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getPortfolioPosts } from 'app/portfolio/utils'
import { baseUrl } from 'app/sitemap'
import ArrowIcon from 'app/components/arrow'
import Image from 'next/image'

export async function generateStaticParams() {
  let posts = getPortfolioPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// export const ImageComponent = (props) => {
//   return <Image {...props} />
// }

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
    <section
      style={{
        // @ts-expect-error custom properties
        '--accent-color': post.metadata.color,
      }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <h1 className="title text-4xl md:text-5xl mr-auto">
          {post.metadata.title}
        </h1>
        {post.metadata.link ? (
          <a
            className={`flex gap-2 items-center px-4 py-2 rounded-full bg-[var(--accent-color)] ${
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
      {post.metadata.image ? (
        <Image
          className="mt-20 max-w-64 md:col-span-2"
          src={require(`app/portfolio/images/${post.metadata.image}`).default}
          alt={post.metadata.title}
        />
      ) : null}
      <div className="flex justify-between items-center mt-2 mb-8 text-sm"></div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}

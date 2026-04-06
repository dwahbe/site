import Link from 'next/link'
import Image from 'next/image'

type CardMetadata = {
  title: string
  summary: string
  color: string
  link?: string
  date?: string
  heroImage?: string
  previewImage?: string
  heroBackground?: string
  gradientColors?: string
  hidden?: string
}

type CardPost = {
  metadata: CardMetadata
  slug: string
  content: string
}

function resolveImage(filename: string) {
  return filename.startsWith('/')
    ? filename
    : require(`app/portfolio/images/${filename}`).default
}

export function PortfolioPosts({
  posts = [],
  heading = "Work I'm proud of",
  linkExternal = false,
}: {
  posts?: CardPost[]
  heading?: string
  linkExternal?: boolean
}) {
  return (
    <div>
      <h2 className="mb-4">{heading}</h2>
      <CardGrid
        linkExternal={linkExternal}
        posts={[...posts]
          .sort((a, b) => {
            const dateA = a.metadata.date
              ? new Date(a.metadata.date).getTime()
              : 0
            const dateB = b.metadata.date
              ? new Date(b.metadata.date).getTime()
              : 0
            return dateB - dateA
          })
          .filter((post) => post.metadata.hidden !== 'true')}
      />
    </div>
  )
}

function ProjectCard({
  post,
  linkExternal = false,
  priority = false,
}: {
  post: CardPost
  linkExternal?: boolean
  priority?: boolean
}) {
  const hasGradient = !!post.metadata.gradientColors
  const href =
    linkExternal && post.metadata.link
      ? post.metadata.link
      : `/portfolio/${post.slug}`

  const heroImage = post.metadata.heroImage ? (
    <Image
      className="object-cover object-top w-full h-full"
      src={resolveImage(post.metadata.heroImage)}
      alt={post.metadata.title}
      fill
      sizes="(min-width: 768px) 50vw, 100vw"
      priority={priority}
    />
  ) : null

  return (
    <Link
      className={`flex flex-col bg-white/40 dark:bg-neutral-800 rounded-xl transition-all duration-200 ${
        hasGradient
          ? 'gradient-hover-border'
          : 'hover:shadow-[0_0_0_2px_var(--accent-color)]'
      }`}
      style={{
        // @ts-expect-error custom properties
        '--accent-color': post.metadata.color,
        ...(hasGradient && {
          '--hover-gradient': `linear-gradient(135deg, ${post.metadata.gradientColors})`,
        }),
      }}
      href={href}
      {...(linkExternal && post.metadata.link
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      <div
        className={`w-full aspect-[16/10] overflow-hidden rounded-t-xl ${
          post.metadata.heroBackground ? 'p-3' : 'relative'
        }`}
        style={{
          background: post.metadata.heroBackground
            ? post.metadata.color
            : `linear-gradient(135deg, ${post.metadata.color}22, ${post.metadata.color}44)`,
        }}
      >
        {heroImage ? (
          post.metadata.heroBackground ? (
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              {heroImage}
            </div>
          ) : (
            heroImage
          )
        ) : null}
        {post.metadata.previewImage && !post.metadata.heroImage ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              className="w-16 h-16 object-contain drop-shadow-md"
              src={resolveImage(post.metadata.previewImage)}
              alt={`${post.metadata.title} logo`}
              width={64}
              height={64}
            />
          </div>
        ) : null}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-baseline gap-2">
          <h3 className="text-balance text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
            {post.metadata.title}
          </h3>
          {post.metadata.date ? (
            <span className="text-sm text-neutral-500 dark:text-neutral-400 shrink-0">
              {new Date(post.metadata.date).getFullYear()}
            </span>
          ) : null}
        </div>
        <p className="text-neutral-600 text-sm dark:text-neutral-400 mt-1">
          {post.metadata.summary}
        </p>
      </div>
    </Link>
  )
}

function CardGrid({
  posts,
  linkExternal = false,
}: {
  posts: CardPost[]
  linkExternal?: boolean
}) {
  return (
    <>
      {/* Mobile: single column */}
      <div className="flex flex-col gap-6 md:hidden">
        {posts.map((post, i) => (
          <ProjectCard
            key={post.slug}
            post={post}
            linkExternal={linkExternal}
            priority={i < 4}
          />
        ))}
      </div>
      {/* Desktop: two staggered columns */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          {posts
            .filter((_, i) => i % 2 === 0)
            .map((post, i) => (
              <ProjectCard
                key={post.slug}
                post={post}
                linkExternal={linkExternal}
                priority={i < 2}
              />
            ))}
        </div>
        <div className="flex flex-col gap-6 mt-16">
          {posts
            .filter((_, i) => i % 2 === 1)
            .map((post, i) => (
              <ProjectCard
                key={post.slug}
                post={post}
                linkExternal={linkExternal}
                priority={i < 2}
              />
            ))}
        </div>
      </div>
    </>
  )
}

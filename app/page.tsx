import { getWorkPosts, getProjectPosts } from 'app/portfolio/utils'
import { PortfolioPosts } from 'app/components/posts'
import Image from 'next/image'
import Portrait from './profilephoto.jpg'
import Link from 'next/link'
import Badge from './components/badge'
import type { CSSProperties } from 'react'

export default function Page() {
  let workPosts = getWorkPosts()
    .filter((post) => post.metadata.hidden !== 'true')
    .sort((a, b) => a.metadata.order - b.metadata.order)
  let projectPosts = getProjectPosts()

  return (
    <section>
      <header className="grid gap-6 md:grid-cols-5 md:items-center xl:items-center">
        <div className="md:col-span-3">
          <h1 className="mb-2 text-6xl md:text-6xl">Dylan&nbsp;Wahbe</h1>
          <Badge />
          <p className="font-medium mt-2 mb-4">
            Product manager and climate organizer.
          </p>
          <p className="font-medium mb-4">
            Working at {''}
            <a
              href="https://www.campusclimatenetwork.org/"
              className="underline underline-offset-2 hover:text-[#1e4d18]/80 dark:hover:text-[#3E9B91]"
            >
              Campus&nbsp;Climate&nbsp;Network
            </a>
            , <br />
            building{' '}
            <a
              href="https://www.climateriver.org"
              className="underline underline-offset-2 hover:text-[#1e4d18]/80 dark:hover:text-[#3E9B91]"
            >
              Climate&nbsp;River
            </a>
            .
          </p>
          <p className="font-medium mb-6">Based in London, UK.</p>
        </div>
        {
          <Image
            className="max-w-56 md:max-w-56 rounded-2xl md:col-span-2 md:justify-self-end"
            src={Portrait}
            alt="Portrait of Dylan Wahbe"
            placeholder="blur"
          />
        }
      </header>
      <details className="group mt-8 mb-8 rounded-xl p-2 border border-[#3E9B91]/30 dark:border-[#3E9B91] border-spacing-1 open:bg-[#3E9B91]/40 dark:open:bg-[#3E9B91]/30 transition-colors grid">
        <summary className="font-sans font-medium group-open:text-dark rounded-xl transition-colors cursor-pointer pl-1 flex items-center gap-2 outline-offset-8 group-open:outline-dark overflow-clip">
          <svg
            className="text-[#3E9B91] dark:text-neutral-300 -rotate-45 group-open:rotate-0 transition-transform"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="1.414"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 32 32"
            preserveAspectRatio="xMidYMid meet"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path d="M11.121,9.707c-0.39,-0.391 -1.024,-0.391 -1.414,0c-0.391,0.39 -0.391,1.024 0,1.414l4.95,4.95l-4.95,4.95c-0.391,0.39 -0.391,1.023 0,1.414c0.39,0.39 1.024,0.39 1.414,0l4.95,-4.95l4.95,4.95c0.39,0.39 1.023,0.39 1.414,0c0.39,-0.391 0.39,-1.024 0,-1.414l-4.95,-4.95l4.95,-4.95c0.39,-0.39 0.39,-1.024 0,-1.414c-0.391,-0.391 -1.024,-0.391 -1.414,0l-4.95,4.95l-4.95,-4.95Z"></path>
          </svg>
          Full bio
        </summary>
        <div className="grid gap-6 md:gap-6 p-2 text-dark text-pretty font-mono-slabs weight-book">
          <p>
            I'm Dylan Wahbe (he/him), a product manager and climate organizer
            from Seattle. I got into politics in high school—joining protests,
            volunteering on congressional campaigns, and reading lots of
            political texts. At NYU, I studied Media, Culture, and
            Communications with a focus on political messaging, and co-founded
            the university's Sunrise Movement chapter. With my fellow
            organizers, we successfully campaigned for NYU to divest its $5+
            billion endowment from the fossil fuel industry.
          </p>
          <p>
            After graduating, I joined The Hack&nbsp;Foundation's fiscal
            sponsorship program, where I worked as a product manager and account
            manager, helping young organizers and founders launch nonprofits. I
            left The Hack&nbsp;Foundation in May 2025 to move to Mexico City,
            where I enrolled in a program at Universidad Nacional Autónoma de
            México (UNAM) for the latter half of 2025. In early 2026, I moved to
            London. I currently work at{' '}
            <a
              href="https://campusclimatenetwork.org"
              className="underline underline-offset-2 hover:text-[#1e4d18]/80 dark:hover:text-[#3E9B91]"
            >
              Campus Climate Network
            </a>{' '}
            and am building{' '}
            <a
              href="https://climateriver.org"
              className="underline underline-offset-2 hover:text-[#1e4d18]/80 dark:hover:text-[#3E9B91]"
            >
              Climate River
            </a>
            , a climate news aggregator. I care about creating tools that
            support movements and communities working toward justice.
          </p>
        </div>
      </details>
      <div className="mb-8">
        <h2 className="mb-4">Teams I've been a part of</h2>
        <div className="grid grid-cols-[1fr_auto] gap-x-4 border-y border-neutral-200 dark:border-neutral-700">
          {workPosts.map((work, i) => (
            <Link
              key={work.slug}
              href={`/portfolio/${work.slug}`}
              className={`col-span-full grid grid-cols-subgrid items-center py-4 transition-colors hover:text-[var(--team-color)] ${
                i < workPosts.length - 1
                  ? 'border-b border-neutral-200 dark:border-neutral-700'
                  : ''
              }`}
              style={{ '--team-color': work.metadata.color } as CSSProperties}
            >
              <span className="font-medium text-lg tracking-tight flex items-center gap-3">
                <Image
                  src={
                    require(`app/portfolio/images/${work.metadata.logo}`)
                      .default
                  }
                  alt={`${work.metadata.title} logo`}
                  className="size-8 rounded-md object-contain"
                  width={32}
                  height={32}
                />
                {work.metadata.title}
              </span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 tabular-nums text-right">
                {work.metadata.years}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <PortfolioPosts posts={projectPosts} heading="Projects" linkExternal />
      </div>
    </section>
  )
}

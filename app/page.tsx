import { getPortfolioPosts } from 'app/portfolio/utils'
import { PortfolioPosts } from 'app/components/posts'
import Image from 'next/image'
import Portrait from './profilephoto.jpg'
import ItsAllPlay from './itsallplay.png'
import Coffee from './coffee.jpeg'
import ArrowIcon from './components/arrow'
import Link from 'next/link'
import Badge from './components/badge'
import type { CSSProperties } from 'react'

export default function Page() {
  let allPosts = getPortfolioPosts()

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
            Key Advisor to&nbsp;
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
          {/* <p className="font-light">
            Previously with{' '}
            <a
              href="https://www.hackclub.com/hcb/"
              className="hover:text-[#1e4d18]/80 dark:hover:text-[#3E9B91] hover:underline"
            >
              Hack&nbsp;Club
            </a>
            ,{' '}
            <a
              href="https://www.sunrisemovement.org/"
              className="hover:text-[#1e4d18]/80 dark:hover:text-[#3E9B91] hover:underline"
            >
              Sunrise&nbsp;Movement
            </a>
            ,{' '}
            <Link
              href="/portfolio/251-visions"
              className="hover:text-[#1e4d18]/80 dark:hover:text-[#3E9B91] hover:underline"
            >
              251&nbsp;Visions
            </Link>
            .
          </p> */}
        </div>
        {
          <Image
            className="max-w-64 rounded-2xl md:col-span-2"
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
            I’m Dylan Wahbe (he/him), a climate organizer and product designer
            from Seattle. I got into politics in high school—joining protests,
            volunteering on congressional campaigns, and reading lots of Noam
            Chomsky. At NYU, I studied Media, Culture, and Communications with a
            focus on political messaging, and co-founded the university's
            Sunrise Movement chapter. With my fellow organizers, we successfully
            campaigned for NYU to divest its $5+ billion endowment from the
            fossil fuel industry.
          </p>
          <p>
            After graduating, I joined Hack&nbsp;Club’s fiscal sponsorship
            program, HCB, where I worked as a product designer and account
            manager, helping young organizers and founders launch nonprofits. I
            left Hack Club in May 2025 to move to Mexico City and enrolled in a
            program at Universidad Nacional Autónoma de México (UNAM). Since
            then, I have been building{' '}
            <a
              href="https://climateriver.org"
              className="underline underline-offset-2 hover:text-[#1e4d18]/80 dark:hover:text-[#3E9B91]"
            >
              Climate River
            </a>
            , a climate news aggregator. I care about creating tools that
            support movements and communities working toward climate justice.
          </p>
          {/* <Image
            src={Portrait}
            alt="Photo of Dylan at a protest"
            className="w-full rounded-lg"
          /> */}
        </div>
      </details>
      <div className="mb-8">
        <PortfolioPosts posts={allPosts} />
      </div>
      <div className="mb-8">
        <h2 className="mb-4">A few smaller, personal projects</h2>
        <a
          href="https://seattleatlas.org/map"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-start gap-4 md:gap-16 mb-6 bg-white/40 dark:bg-neutral-800 transition-shadow p-4 rounded-xl hover:shadow-[0_0_0_2px_#3E9B91]"
        >
          <div className="flex flex-col">
            <h3 className="text-balance text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
              Seattle Atlas
            </h3>
            <p className="text-neutral-600 text-sm dark:text-neutral-400">
              An interactive map of Seattle, highlighting zoning laws, bike
              infrastructure, and public transit.
            </p>
          </div>
          <ArrowIcon className="text-neutral-400 shrink-0" />
        </a>
        <a
          href="https://cozyjobtracker.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-start gap-4 md:gap-16 mb-6 bg-white/40 dark:bg-neutral-800 transition-shadow p-4 rounded-xl hover:shadow-[0_0_0_2px_#3E9B91]"
        >
          <div className="flex flex-col">
            <h3 className="text-balance text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
              Cozy Job Tracker
            </h3>
            <p className="text-neutral-600 text-sm dark:text-neutral-400">
              Free job tracker that automatically parses job postings, pulls out
              key information, and lets users build a custom job board with
              their friends.
            </p>
          </div>
          <ArrowIcon className="text-neutral-400 shrink-0" />
        </a>
      </div>
    </section>
  )
}

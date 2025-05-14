import { getPortfolioPosts } from 'app/portfolio/utils'
import { PortfolioPosts } from 'app/components/posts'
import Image from 'next/image'
import Portrait from './profilephoto.jpg'
import ItsAllPlay from './itsallplay.png'
import Coffee from './coffee.jpeg'
import ArrowIcon from './components/arrow'
import Link from 'next/link'

export default function Page() {
  let allPosts = getPortfolioPosts()

  return (
    <section>
      <header className="grid gap-6 md:grid-cols-5 md:items-center xl:items-center">
        <div className="md:col-span-3">
          <h1 className="mb-2 text-6xl md:text-6xl">Dylan&nbsp;Wahbe</h1>
          <p className="mb-6 max-w-min rounded-full border border-[#413F2A]/20 bg-[#E9F1FF] dark:border-[#E9F1FF] dark:bg-[#E9F1FF]/20 px-2 py-1 text-xs text-neutral-700 dark:text-white">
            he/him
          </p>
          <p className="font-medium mb-6">
            Climate organizer and product designer.
            <br />
            Key Advisor to&nbsp;
            <a
              href="https://www.campusclimatenetwork.org/"
              className="hover:text-[#1e4d18]/80 hover:underline"
            >
              Campus&nbsp;Climate&nbsp;Network
            </a>
            .
          </p>
          <p className="font-light">
            Previously with{' '}
            <a
              href="https://www.hackclub.com/hcb/"
              className="hover:text-[#1e4d18]/80 hover:underline"
            >
              Hack&nbsp;Club
            </a>
            ,{' '}
            <a
              href="https://www.sunrisemovement.org/"
              className="hover:text-[#1e4d18]/80 hover:underline"
            >
              Sunrise&nbsp;Movement
            </a>
            ,{' '}
            <Link
              href="/portfolio/251-visions"
              className="hover:text-[#1e4d18]/80 hover:underline"
            >
              251&nbsp;Visions
            </Link>
            .
          </p>
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
      <details className="group mt-8 mb-8 rounded-xl p-2 border border-neutral-300 dark:border-neutral-700 border-spacing-1 open:bg-[#E9F1FF] dark:open:bg-[#E9F1FF]/20 transition-colors grid">
        <summary className="font-sans font-medium group-open:text-dark rounded-xl transition-colors cursor-pointer pl-1 flex items-center gap-2 outline-offset-8 group-open:outline-dark overflow-clip">
          <svg
            className="text-neutral-600 dark:text-neutral-300 -rotate-45 group-open:rotate-0 transition-transform"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
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
        <div className="grid gap-6 md:gap-6 p-2">
          <p className="text-dark text-pretty font-mono-slabs weight-book">
            I'm Dylan Wahbe, a climate organizer and product designer from
            Seattle. I've always had an interest in politics and in high school
            began attending protests, volunteering on congressional races, and
            reading lots of Noam Chomsky. I attended NYU, studying Media,
            Culture, and Communications with a focus on political communcations.
            I also helped start the university chapter of the Sunrise Movement.
            With my fellow organizers, we succesfully campaigned NYU to divest
            their 5+ billion dollar endowment from the fossil fuel industry.
            After graduating, I worked at HCB, Hack Club's fiscal sponsorship
            program, as a product designer and account manager.
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

      {/* <section className="mb-16">
        <h2 className=" mb-6">A part of bigger things</h2>
        <div className="grid gap-6 xl:grid-cols-3 md:grid-cols-2">
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
            <h3 className="text-xl font-semibold mb-2">HCB's Newsletter</h3>
            <p>
              Helped launch the NYU chapter and led successful campaigns for
              climate justice, including NYU’s fossil fuel divestment.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
            <h3 className="text-xl font-semibold mb-2">HCB's Landing Page</h3>
            <p>
              Collaborated with a collective of artists and organizers to create
              impactful multimedia projects for social change.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
            <h3 className="text-xl font-semibold mb-2">Rolling Stone Op-Ed</h3>
            <p>
              Key advisor to a national network empowering students to organize
              for climate action on their campuses.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
            <h3 className="text-xl font-semibold mb-2">Rolling Stone Op-Ed</h3>
            <p>
              Key advisor to a national network empowering students to organize
              for climate action on their campuses.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
            <h3 className="text-xl font-semibold mb-2">Rolling Stone Op-Ed</h3>
            <p>
              Key advisor to a national network empowering students to organize
              for climate action on their campuses.
            </p>
          </div>
        </div>
      </section> */}

      {/* <h2 className="mb-6"> A few other projects</h2>
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <a
          className="flex flex-col overflow-hidden rounded-xl bg-neutral-100 transition-shadow hover:outline dark:bg-neutral-800"
          href="https://vimeo.com/909792421"
        >
          <Image
            className="max-h-40 object-cover"
            src={ItsAllPlay}
            alt="Its All Play Still"
          />
          <div className="flex items-center justify-between gap-2 p-4">
            <p className="font-medium tracking-tight">I scored a film</p>
            <ArrowIcon />
          </div>
        </a>
        <a
          className="flex flex-col overflow-hidden rounded-xl bg-neutral-100 transition-shadow hover:outline dark:bg-neutral-800"
          href="https://www.google.com/maps/dir//170E+E+2nd+St,+New+York,+NY+10009/@40.7227048,-74.0670797,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25912f1ae086b:0xd5af6ef1a49cb484!2m2!1d-73.9846921!2d40.7227162?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D"
        >
          <Image
            className="max-h-40 object-contain"
            src={Coffee}
            alt="Dylan as a barista"
          />
          <div className="flex items-center justify-between gap-2 p-4">
            <p className="font-medium tracking-tight">I was a barista</p>
            <ArrowIcon />
          </div>
        </a>
      </section> */}
    </section>
  )
}

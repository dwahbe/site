import { PortfolioPosts } from 'app/components/posts'
import Image from 'next/image'
import Portrait from './profilephoto.jpg'
import ItsAllPlay from './itsallplay.png'
import Coffee from './coffee.jpeg'
import ArrowIcon from './components/arrow'

export default function Page() {
  return (
    <section>
      <header className="grid gap-6 md:grid-cols-5 md:items-center xl:grid-cols-5 xl:items-center">
        <div className="md:col-span-3">
          <h1 className="mb-2 text-4xl md:text-5xl">Hi, I’m Dylan Wahbe</h1>
          <p className="mb-6 max-w-min rounded-full bg-[#ff4921]/20 px-2 py-1 text-xs text-[#ff4921]">
            he/him
          </p>
          <p className="">
            Currently working at Hack Club, designing tools to help the next
            generation of nonprofits have impact. Previously organizing with
            Sunrise NYU, building websites, and working as a barista. Always
            playing music and talking politics.
          </p>
        </div>
        <Image
          className="max-w-64 rounded-2xl md:col-span-2"
          src={Portrait}
          alt="Portrait of Dylan Wahbe"
          placeholder="blur"
        />
      </header>
      <h2 className="mb-6"> Work I'm proud of</h2>
      <div className="mb-8">
        <PortfolioPosts />
      </div>
      <h2 className="mb-6"> A few other projects</h2>
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
      </section>
    </section>
  )
}

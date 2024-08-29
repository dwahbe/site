import { PortfolioPosts } from 'app/components/posts'
import Image from 'next/image'
import Portrait from './profilephoto.jpg'
import ItsAllPlay from './itsallplay.png'
import Coffee from './coffee.jpeg'
import ArrowIcon from './components/arrow'

export default function Page() {
  return (
    <section>
      <header className="grid gap-6 md:grid-cols-5 md:items-center">
        <div className="md:col-span-3">
          <h1 className="mb-2 text-4xl md:text-5xl">Hi, I’m Dylan Wahbe</h1>
          <p className="mb-6 max-w-min rounded-full bg-[#ff4921]/20 px-2 py-1 text-xs text-[#ff4921]">
            he/him
          </p>
          <p className="">
            I graduated from NYU in 2023 with a degree in Media, Culture, and
            Communications. While at NYU, I helped start and lead Sunrise
            Movement NYU, which successfully pushed NYU to divest their 5+
            billion dollar endowment from the fossil fuel industry. In December
            of 2023, I joined Hack Club’s fiscal sponsorship team, working with
            climate and social justice nonprofits around the world.
          </p>
        </div>
        <Image
          className="max-w-64 rounded-2xl md:col-span-2"
          src={Portrait}
          alt="Portrait of Dylan Wahbe"
          placeholder="blur"
        />
      </header>
      <h2 className="mb-6"> Selected work</h2>
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
            <p className="font-bold">I scored a film</p>
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
            <p className="font-bold">I was a barista!</p>
            <ArrowIcon />
          </div>
        </a>
      </section>
    </section>
  )
}

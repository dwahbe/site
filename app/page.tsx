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
          <h1 className="mb-8 text-4xl md:text-5xl">Hi, I’m Dylan Wahbe</h1>
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
          className="rounded-2xl max-w-64 md:col-span-2"
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
      <section className="hover:outline grid gap-6 md:grid-cols-2 md:items-center">
        <a
          className="flex flex-col bg-neutral-100 dark:bg-neutral-800 transition-shadow overflow-hidden rounded-xl"
          href="https://vimeo.com/909792421"
        >
          <Image src={ItsAllPlay} alt="Its All Play Still" />
          <div className="p-4 flex items-center gap-2 justify-between ">
            <p className="font-bold">I scored a film</p>
            <ArrowIcon />
          </div>
        </a>
        <a className="flex flex-col bg-neutral-100 dark:bg-neutral-800 transition-shadow overflow-hidden rounded-xl">
          <Image
            className="object-contain max-h-40"
            src={Coffee}
            alt="Dylan as a barista"
          />
          <div className="p-4 flex items-center gap-2 justify-between ">
            <p className="font-bold">I was a barista!</p>
          </div>
        </a>
      </section>
    </section>
  )
}

import { PortfolioPosts } from 'app/components/posts'
import Image from 'next/image'
import Portrait from './profilephoto.jpg'

export default function Page() {
  return (
    <section>
      <header className="grid gap-6 md:grid-cols-5 md:items-center">
        <div className="md:col-span-3">
          <h1 className="mb-8 text-4xl md:text-5xl">Hi, I’m Dylan Wahbe</h1>
          <p className="">
            Dylan Wahbe is a recent graduate of New York University, where he
            helped start and lead Sunrise Movement NYU, which successfully
            pushed NYU to divest their 5+ billion dollar endowment from the
            fossil fuel industry. In December of 2023, he joined Hack Club as
            their Climate Partnerships Advisor, connecting climate justice
            organizations with HCB, Hack Club’s fiscal sponsorship program.
          </p>
        </div>
        <Image
          className="rounded-2xl max-w-64 md:col-span-2"
          src={Portrait}
          alt="Portrait of Dylan Wahbe"
          placeholder="blur"
        />
      </header>
      <h2 className="mb-1"> Selected Work</h2>
      <div className="my-8">
        <PortfolioPosts />
      </div>
    </section>
  )
}

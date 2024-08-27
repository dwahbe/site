import { PortfolioPosts } from 'app/components/posts'
import Image from 'next/image'
import Portrait from './profilephoto.jpg'

export default function Page() {
  return (
    <section>
      <Image
        className="rounded-2xl max-w-md"
        src={Portrait}
        alt="Portrait of Dylan Wahbe"
      />
      <h1 className="mb-8 text-4xl">Hi, I'm Dylan Wahbe</h1>
      <p className="mb-4">hello_world</p>
      <div className="my-8">
        <PortfolioPosts />
      </div>
    </section>
  )
}

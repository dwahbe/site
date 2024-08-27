import { PortfolioPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl">Hi, I'm Dylan Wahbe</h1>
      <p className="mb-4">hello_world</p>
      <div className="my-8">
        <PortfolioPosts />
      </div>
    </section>
  )
}

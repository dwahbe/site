import { PortfolioPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="text-4xl md:text-5xl mb-8">Portfolio</h1>
      <PortfolioPosts showSummary={true} />
    </section>
  )
}

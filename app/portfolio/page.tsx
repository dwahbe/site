import { getWorkPosts, getProjectPosts } from 'app/portfolio/utils'
import { PortfolioPosts } from 'app/components/posts'

export const metadata = {
  title: 'Portfolio',
  description: 'Explore my work and projects.',
}

export default function Page() {
  const workPosts = getWorkPosts()
  const projectPosts = getProjectPosts()

  return (
    <section>
      <h1 className="text-4xl md:text-5xl mb-8">Portfolio</h1>
      <PortfolioPosts posts={workPosts} heading="Work" />
      <div className="mt-8">
        <PortfolioPosts
          posts={projectPosts}
          heading="Projects"
          linkExternal
        />
      </div>
    </section>
  )
}

import { getPortfolioPosts } from 'app/portfolio/utils'

export const baseUrl = 'https://dylanwahbe.com'

export default async function sitemap() {
  let blogs = getPortfolioPosts().map((post) => ({
    url: `${baseUrl}/portfolio/${post.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  let routes = ['', '/portfolio'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}

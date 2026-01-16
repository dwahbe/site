import Link from 'next/link'

export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-4xl md:text-5xl">404 - Site not found</h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="inline-flex items-center rounded-xl border border-neutral-200 bg-white/60 px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-white dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-100 dark:hover:bg-neutral-900"
      >
        Back to home
      </Link>
    </section>
  )
}

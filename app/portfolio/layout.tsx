import Link from 'next/link'
import ArrowIcon from 'app/components/arrow'

export default function Layout({ children }) {
  return (
    <>
      <Link
        href="/"
        className="flex items-center gap-2 mb-3 text-neutral-400 hover:text-neutral-500 dark:text-neutral-500 dark:hover:text-neutral-400 transition-colors transition-transform md:hover:-translate-x-5"
      >
        <ArrowIcon className="rotate-[225deg]" /> Dylan Wahbe
      </Link>
      {children}
    </>
  )
}

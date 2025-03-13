import ArrowIcon from './arrow'
import ThemeSwitcher from './theme-switcher'

export default function Footer() {
  return (
    <footer className="mb-16 mt-12">
      <section className="flex flex-col justify-between gap-x-8 gap-y-4 md:flex-row md:items-center">
        {/* <ul className="font-sm flex flex-row flex-wrap gap-4 text-neutral-600 md:flex-row dark:text-neutral-300">
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/dylan-wahbe/"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">LinkedIn</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="/dylan_wahbe_resume.pdf"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">Resume</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/dwahbe/site"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">GitHub</p>
            </a>
          </li>
        </ul> */}
        <ThemeSwitcher />
      </section>
      {/* <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed
      </p> */}
    </footer>
  )
}

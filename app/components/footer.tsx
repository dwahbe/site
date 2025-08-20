import ArrowIcon from './arrow'
import ThemeSwitcher from './theme-switcher'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mb-16 mt-12">
      <section className="tracking-wide flex flex-col justify-between gap-x-8 gap-y-4 md:flex-row md:items-center">
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
        <div className="flex items-center gap-1">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Last updated August, 2025
          </p>
          <a
            href="https://github.com/dwahbe/site"
            title="GitHub"
            target="_blank"
            rel="me"
            className="p-2 hover:scale-110 transition-transform text-neutral-500"
          >
            <span className="sr-only">GitHub</span>
            <svg
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="1.414"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              preserveAspectRatio="xMidYMid meet"
              fill="currentColor"
              aria-hidden="true"
              width="32"
              height="32"
            >
              <path d="M18.837,27.966c8.342,-0.241 9.163,-1.997 9.163,-11.966c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,9.995 0.826,11.734 9.228,11.968c0.073,-0.091 0.1,-0.205 0.1,-0.321c0,-0.25 -0.01,-2.816 -0.015,-3.699c-3.037,0.639 -3.678,-1.419 -3.678,-1.419c-0.497,-1.222 -1.213,-1.548 -1.213,-1.548c-0.991,-0.656 0.075,-0.643 0.075,-0.643c1.096,0.075 1.673,1.091 1.673,1.091c0.974,1.617 2.556,1.15 3.178,0.879c0.099,-0.683 0.381,-1.15 0.693,-1.414c-2.425,-0.267 -4.974,-1.175 -4.974,-5.23c0,-1.155 0.426,-2.099 1.124,-2.839c-0.113,-0.268 -0.487,-1.344 0.107,-2.8c0,0 0.917,-0.285 3.003,1.084c0.871,-0.235 1.805,-0.352 2.734,-0.356c0.927,0.004 1.861,0.121 2.734,0.356c2.085,-1.369 3,-1.084 3,-1.084c0.596,1.456 0.221,2.532 0.108,2.8c0.7,0.74 1.123,1.684 1.123,2.839c0,4.065 -2.553,4.96 -4.986,5.221c0.392,0.327 0.741,0.973 0.741,1.96c0,0.946 -0.006,2.619 -0.01,3.728c-0.002,0.549 -0.003,0.959 -0.003,1.074c0,0.109 0.029,0.224 0.095,0.319Z"></path>
            </svg>
          </a>
        </div>
      </section>
    </footer>
  )
}

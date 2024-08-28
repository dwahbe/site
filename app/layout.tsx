import './global.css'
import type { Metadata } from 'next'
// import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { Instrument_Sans, Instrument_Serif } from 'next/font/google'
import Providers from './providers'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Dylan Wahbe',
    template: '%s | Dylan Wahbe',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

const sans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans',
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif',
  weight: '400',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'bg-white font-sans text-black dark:bg-neutral-900 dark:text-white',
        sans.variable,
        sans.className,
        serif.variable,
      )}
      suppressHydrationWarning
    >
      <body className="mx-4 mt-8 max-w-2xl antialiased lg:mx-auto">
        <Providers>
          <main className="mt-6 flex min-w-1 flex-auto flex-col px-2 md:mt-12 md:px-0">
            {/* <Navbar /> */}
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </Providers>
      </body>
    </html>
  )
}

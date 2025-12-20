import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Montserrat } from 'next/font/google'
import { site } from '@/lib/site'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s • ${site.name}`,
  },
  description: 'Official artiste website: music, videos, tours, press.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-dvh bg-zinc-950 text-white antialiased`}>
        <Header />
        <main className="min-h-[calc(100dvh-120px)]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

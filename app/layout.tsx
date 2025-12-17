import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jordan Bangoji',
  description: 'Official artiste website: music, videos, tours, press.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-dvh bg-zinc-950 text-white antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}

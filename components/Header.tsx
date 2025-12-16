'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from './Container'
import { site } from '@/lib/site'

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-6">
      <span
        className={[
          'absolute left-0 top-0 block h-0.5 w-6 bg-white transition-transform duration-200',
          open ? 'translate-y-2 rotate-45' : '',
        ].join(' ')}
      />
      <span
        className={[
          'absolute left-0 top-2 block h-0.5 w-6 bg-white transition-opacity duration-200',
          open ? 'opacity-0' : 'opacity-100',
        ].join(' ')}
      />
      <span
        className={[
          'absolute left-0 top-4 block h-0.5 w-6 bg-white transition-transform duration-200',
          open ? '-translate-y-2 -rotate-45' : '',
        ].join(' ')}
      />
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-semibold tracking-wide text-white">
            {site.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden gap-6 md:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-white/15 p-2 hover:bg-white/5 md:hidden"
          >
            <HamburgerIcon open={open} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {open ? (
          <div className="pb-4 md:hidden">
            <nav className="grid gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  )
}

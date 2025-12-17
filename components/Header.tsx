'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import Container from '@/components/Container'
import { site } from '@/lib/site'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const nav = useMemo(
    () => [
      { href: '/', label: 'Home' },
      { href: '/music', label: 'Music' },
      { href: '/videos', label: 'Videos' },
      { href: '/shows', label: 'Shows' },
      { href: '/tribe', label: 'Tribe' },
      // { href: '/press', label: 'Press' },
      { href: '/contact', label: 'Contact' },
    ],
    [],
  )

  // Close drawer on route change
  useEffect(() => setOpen(false), [pathname])

  // ESC to close + lock background scroll
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-wide text-white">
            {site.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            className="md:hidden"
          >
            <span className="block h-[2px] w-6 bg-white" />
            <span className="mt-1.5 block h-[2px] w-6 bg-white" />
            <span className="mt-1.5 block h-[2px] w-6 bg-white" />
          </button>
        </div>
      </Container>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={[
          'fixed inset-0 z-50 bg-black/60 transition-opacity duration-200',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      />

      {/* Drawer */}
      <aside
        className={[
          'fixed right-0 top-0 z-[60] h-dvh w-[86vw] max-w-sm bg-black',
          'border-l border-white/10',
          'transition-transform duration-200 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="text-sm font-semibold tracking-wide text-white">
            {site.name}
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-sm text-white/80 hover:text-white"
          >
            Close
          </button>
        </div>

        <div className="px-6 pb-10 pt-6">
          <nav className="grid gap-4 text-2xl">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-widest text-white/50">
              Social
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </header>
  )
}

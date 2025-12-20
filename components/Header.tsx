'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import Container from '@/components/Container'
import { site } from '@/lib/site'

function BurgerIcon({ open }: { open: boolean }) {
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
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const nav = useMemo(
    () => [
      { href: '/#music', label: 'Music' },
      { href: '/#videos', label: 'Videos' },
      { href: '/shows', label: 'Shows' },
      { href: '/tribe', label: 'Tribe' },
      { href: '/contact', label: 'Contact' },
      { href: '/press', label: 'Press' },
    ],
    []
  )

  useEffect(() => setOpen(false), [pathname])

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
    <header className="sticky top-0 z-50 bg-zinc-950/60 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-sm font-semibold tracking-wide text-white">
            {site.name}
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-white/15 p-2 hover:bg-white/5 md:hidden"
          >
            <BurgerIcon open={open} />
          </button>
        </div>
      </Container>

      {/* Mobile sheet */}
      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-0 right-0 top-0 border-b border-white/10 bg-zinc-950">
            <Container>
              <div className="flex items-center justify-between py-4">
                <span className="text-sm font-semibold tracking-wide text-white">{site.name}</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-white/15 p-2 hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <BurgerIcon open />
                </button>
              </div>

              <div className="pb-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-3 text-base text-white/85 hover:bg-white/5"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  )
}

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
  const nav = useMemo(() => site.nav, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-lg font-semibold tracking-wide text-white">
            {site.name}
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile button */}
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

      {/* Mobile overlay + dropdown (kept mounted so it can animate out) */}
      <div className="md:hidden">
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={[
            'fixed inset-0 z-[60] bg-black/70 transition-opacity duration-200',
            open ? 'opacity-100' : 'pointer-events-none opacity-0',
          ].join(' ')}
        />

        {/* Dropdown panel */}
        <div
          className={[
            'fixed left-0 right-0 top-[57px] z-[70]', // ~ header height; adjust if your header padding changes
            'px-4',
          ].join(' ')}
        >
          {/* Height animation using grid rows (0fr -> 1fr) */}
          <div
            className={[
              'grid overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 backdrop-blur',
              'transition-[grid-template-rows,opacity,transform] duration-200',
              open ? 'grid-rows-[1fr] opacity-100 translate-y-0' : 'grid-rows-[0fr] opacity-0 -translate-y-2 pointer-events-none',
            ].join(' ')}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="p-3">
                <nav className="grid gap-1">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-3 py-2.5 text-sm text-white/85 hover:bg-white/5"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

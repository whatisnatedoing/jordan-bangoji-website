'use client'

import { useEffect, useMemo, useState } from 'react'
import type { Video } from '@/data/videos'
import YouTubeEmbed from '@/components/YouTubeEmbed'

function ytThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

export default function VideoGrid({ items }: { items: Video[] }) {
  const grid = useMemo(() => items, [items])
  const [active, setActive] = useState<Video | null>(null)

  useEffect(() => {
    if (!active) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }

    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [active])

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {grid.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => setActive(v)}
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left hover:bg-white/10"
          >
            <div className="relative">
              {/* use img to avoid next/image remote domain config */}
              <img src={ytThumb(v.youtubeId)} alt="" className="h-44 w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs text-white/90">
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                Play
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm font-semibold text-white">{v.title}</p>
              <p className="mt-1 text-xs text-white/70">
                {v.kind ?? 'Video'}
                {v.year ? ` • ${v.year}` : ''}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      <button
        type="button"
        onClick={() => setActive(null)}
        className={[
          'fixed inset-0 z-[80] bg-black/70 p-4 transition-opacity duration-150',
          active ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        aria-label="Close video"
      >
        {active ? (
          <div
            className="mx-auto mt-12 w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-zinc-950"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">{active.title}</p>
                <p className="mt-0.5 text-xs text-white/60">
                  {active.kind ?? 'Video'}
                  {active.year ? ` • ${active.year}` : ''}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActive(null)}
                className="rounded-md border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:bg-white/5 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="p-3">
              <YouTubeEmbed videoId={active.youtubeId} title={active.title} />
            </div>
          </div>
        ) : null}
      </button>
    </>
  )
}

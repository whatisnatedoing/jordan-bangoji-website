'use client'

import { useEffect, useMemo, useState } from 'react'
import type { Video } from '@/data/videos'
import YouTubeEmbed from '@/components/YouTubeEmbed'

function ytThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

export default function VideoGrid({ items }: { items: Video[] }) {
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

  const grid = useMemo(() => items, [items])

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {grid.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => setActive(v)}
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              {/* use img to avoid next/image remote domain config */}
              <img
                src={ytThumb(v.youtubeId)}
                alt={v.title}
                className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 rounded-md bg-amber-300 px-2 py-1 text-xs font-semibold text-black">
                Play
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-white">{v.title}</p>
              <p className="mt-1 text-xs text-white/60">
                {v.kind ?? 'Video'}
                {v.year ? ` • ${v.year}` : ''}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      <div
        onClick={() => setActive(null)}
        className={[
          'fixed inset-0 z-[80] bg-black/70 p-4 transition-opacity duration-150',
          active ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        {active ? (
          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-auto mt-16 w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-zinc-950"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <p className="text-sm font-medium text-white">{active.title}</p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="text-sm text-white/70 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="p-3">
              <YouTubeEmbed videoId={active.youtubeId} title={active.title} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}

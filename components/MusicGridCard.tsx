import Image from 'next/image'
import type { Release } from '@/data/releases'

export default function MusicGridCard({ r }: { r: Release }) {
  const streamUrl =
    r.links.spotify ?? r.links.appleMusic ?? r.links.audiomack ?? r.links.youtube ?? '#'

  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="relative aspect-square w-full">
        <Image
          src={r.coverImage}
          alt={r.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
        />
      </div>

      <div className="p-4">
        <p className="text-sm font-medium text-white">{r.title}</p>
        <p className="mt-1 text-xs text-white/60">
          {r.type}
          {r.year ? ` • ${r.year}` : ''}
        </p>

        <div className="mt-4">
          <a
            href={streamUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-amber-300 px-3 py-2 text-xs font-semibold text-black hover:bg-amber-200"
          >
            Stream
          </a>
        </div>
      </div>
    </article>
  )
}

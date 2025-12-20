import Image from 'next/image'
import Link from 'next/link'
import type { Release } from '@/data/releases'

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-white/80">
      {children}
    </span>
  )
}

export default function LatestReleaseCard({ release }: { release: Release }) {
  const primary =
    release.links.spotify || release.links.appleMusic || release.links.audiomack || release.links.youtube || undefined

  return (
    <div className="pointer-events-auto w-full max-w-[420px] rounded-2xl border border-white/15 bg-black/35 p-3 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <Image src={release.coverImage} alt="" fill sizes="48px" className="object-cover" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[11px] uppercase tracking-widest text-white/70">Latest release</p>
            <Chip>New</Chip>
          </div>

          <p className="mt-1 truncate text-sm font-semibold text-white">{release.title}</p>
          <p className="mt-0.5 text-xs text-white/70">
            {release.type}
            {release.year ? ` • ${release.year}` : ''}
          </p>
        </div>

        {primary ? (
          <a
            href={primary}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-white/90"
          >
            Play
          </a>
        ) : (
          <Link
            href="/music"
            className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-white/90"
          >
            View
          </Link>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs">
        {release.links.spotify ? (
          <a
            href={release.links.spotify}
            target="_blank"
            rel="noreferrer"
            className="text-white/70 underline underline-offset-4 hover:text-white"
          >
            Spotify
          </a>
        ) : null}
        {release.links.appleMusic ? (
          <a
            href={release.links.appleMusic}
            target="_blank"
            rel="noreferrer"
            className="text-white/70 underline underline-offset-4 hover:text-white"
          >
            Apple Music
          </a>
        ) : null}
        {release.links.audiomack ? (
          <a
            href={release.links.audiomack}
            target="_blank"
            rel="noreferrer"
            className="text-white/70 underline underline-offset-4 hover:text-white"
          >
            Audiomack
          </a>
        ) : null}
        {release.links.youtube ? (
          <a
            href={release.links.youtube}
            target="_blank"
            rel="noreferrer"
            className="text-white/70 underline underline-offset-4 hover:text-white"
          >
            YouTube
          </a>
        ) : null}
      </div>
    </div>
  )
}

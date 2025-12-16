import type { Release } from '@/data/releases'

function ExternalLink({
  href,
  label,
}: {
  href?: string
  label: string
}) {
  if (!href) return null
  if (href.trim().length === 0) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-md border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:bg-white/5 hover:text-white"
    >
      {label}
    </a>
  )
}

export default function ReleaseCard({ release }: { release: Release }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{release.title}</h3>
          <p className="mt-1 text-sm text-white/70">
            {release.type}
            {release.year ? ` • ${release.year}` : ''}
          </p>
          {release.description ? (
            <p className="mt-3 text-sm text-white/70">{release.description}</p>
          ) : null}
        </div>

        {release.featured ? (
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
            Featured
          </span>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <ExternalLink href={release.links.youtube} label="YouTube" />
        <ExternalLink href={release.links.spotify} label="Spotify" />
        <ExternalLink href={release.links.appleMusic} label="Apple Music" />
        <ExternalLink href={release.links.audiomack} label="Audiomack" />
      </div>
    </article>
  )
}

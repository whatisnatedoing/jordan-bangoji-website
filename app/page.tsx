import Container from '@/components/Container'
import ShowCard from '@/components/ShowCard'
import SpotifyArtistEmbed from '@/components/SpotifyArtistEmbed'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import { releases } from '@/data/releases'
import { shows } from '@/data/shows'
import { site } from '@/lib/site'
import Link from 'next/link'

export default function HomePage() {
  const featured = releases.find((r) => r.featured) ?? releases[0]
  const topShows = shows.slice(0, 1) // show just the next event on Home

  return (
    <Container>
      {/* Hero + featured release + featured video */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-widest text-white/60">
            Official artiste website
          </p>

          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            {site.name}
          </h1>

          <p className="text-white/75">{site.description}</p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/music"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
            >
              Listen
            </Link>

            <Link
              href="/press"
              className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
            >
              Press / EPK
            </Link>
          </div>

          {featured ? (
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-widest text-white/60">
                Featured release
              </p>
              <p className="mt-2 text-lg font-semibold">{featured.title}</p>
              <p className="mt-1 text-sm text-white/70">
                {featured.type}
                {featured.year ? ` • ${featured.year}` : ''}
              </p>

              <Link
                href="/music"
                className="mt-4 inline-block text-sm text-white/80 underline underline-offset-4 hover:text-white"
              >
                See all releases
              </Link>
            </div>
          ) : null}
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/70">Featured video</p>
          <div className="mt-4">
            {featured?.youtubeVideoId ? (
              <YouTubeEmbed
                videoId={featured.youtubeVideoId}
                title={`${site.name} – ${featured.title}`}
              />
            ) : (
              <div className="aspect-video w-full rounded-lg bg-black/40" />
            )}
          </div>
        </div>
      </section>

      {/* Upcoming show + Spotify */}
      <section className="mt-16 grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-white/60">
            Upcoming show
          </p>

          {topShows.length ? (
            <ShowCard show={topShows[0]} />
          ) : (
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
              No shows announced yet. Check back soon.
            </div>
          )}

          <Link
            href="/shows"
            className="mt-4 inline-block text-sm text-white/80 underline underline-offset-4 hover:text-white"
          >
            View all shows
          </Link>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-widest text-white/60">
            Listen on Spotify
          </p>
          <p className="mt-2 text-sm text-white/70">
            Stream {site.name}’s music and follow his artist profile.
          </p>

          <div className="mt-4">
            <SpotifyArtistEmbed />
          </div>

          <Link
            href="/music"
            className="mt-4 inline-block text-sm text-white/80 underline underline-offset-4 hover:text-white"
          >
            Explore releases
          </Link>
        </div>
      </section>
    </Container>
  )
}

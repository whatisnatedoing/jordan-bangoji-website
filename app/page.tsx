import Container from '@/components/Container'
import HeroFloatingCollage from '@/components/HeroFloatingCollage'
import LatestReleaseCard from '@/components/LatestReleaseCard'
import SpotifyArtistEmbed from '@/components/SpotifyArtistEmbed'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import NowPlaying from '@/components/NowPlaying'

import { releases } from '@/data/releases'
import { shows } from '@/data/shows'
import { videos } from '@/data/videos'
import { site } from '@/lib/site'
import Link from 'next/link'

export default function HomePage() {
  const featuredRelease = releases.find((r) => r.featured) ?? releases[0]
  const featuredVideo = featuredRelease?.youtubeVideoId
    ? { youtubeId: featuredRelease.youtubeVideoId, title: featuredRelease.title }
    : videos[0]

  const nowPlayingTitles = releases.slice(0, 3).map((r) => r.title)

  return (
    <div className="bg-zinc-950 text-white">
      {/* HERO BACKDROP BLOCK */}
      <div className="relative overflow-hidden">
        <HeroFloatingCollage
          backgroundSrc="/images/hero/jordan-hero.jpg"
          floatingSrcs={[
            '/images/hero/jordan-hero-1.jpg',
            '/images/hero/jordan-hero-2.jpg',
            '/images/hero/jordan-hero-3.jpg',
          ]}
        />

        {/* GOLD OVERLAY (must be ABOVE floating tiles) */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_18%_22%,rgba(245,158,11,0.24),transparent_48%)]" />

        {/* Subtle grain overlay (optional, stays above gold) */}
        <div
          className="pointer-events-none absolute inset-0 z-30 opacity-[0.12] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%27120%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27120%27 height=%27120%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E")',
          }}
        />

        {/* HERO */}
        <section className="relative min-h-[100svh]">
          <Container>
            <div className="relative z-40 min-h-[100svh] pt-24">
              {/* Centered Latest Release card (mobile + desktop) */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-50 w-[min(92vw,420px)] -translate-x-1/2 -translate-y-1/2">
                <div className="pointer-events-auto">
                  <LatestReleaseCard release={featuredRelease} />
                </div>
              </div>

              {/* Bottom hero text */}
              <div className="flex min-h-[calc(100svh-6rem)] flex-col justify-end pb-12 md:pb-20">
                <div className="max-w-xl">
                  <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">{site.name}</h1>
                  <p className="mt-4 text-sm leading-6 text-white/80">{site.description}</p>

                  <NowPlaying titles={nowPlayingTitles} />

                  <div className="mt-7 flex flex-wrap gap-6 text-sm">
                    <Link
                      href="/#music"
                      className="font-semibold text-amber-300 underline underline-offset-4 hover:text-amber-200"
                    >
                      Listen
                    </Link>
                    <Link
                      href="/#videos"
                      className="font-semibold text-white/85 underline underline-offset-4 hover:text-white"
                    >
                      Videos
                    </Link>
                    <Link
                      href="/#shows"
                      className="font-semibold text-white/85 underline underline-offset-4 hover:text-white"
                    >
                      Shows
                    </Link>
                    <Link
                      href="/press"
                      className="font-semibold text-white/85 underline underline-offset-4 hover:text-white"
                    >
                      Press
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>

      {/* MUSIC */}
      <section id="music" className="py-12">
        <Container>
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="text-lg font-semibold tracking-wide">Music</h2>
            <Link href="/music" className="text-sm text-white/70 underline underline-offset-4 hover:text-white">
              View all
            </Link>
          </div>

          <div className="mt-5 divide-y divide-white/10">
            {releases.slice(0, 3).map((r) => (
              <div key={r.id} className="flex items-center justify-between gap-6 py-4">
                <div>
                  <p className="text-sm text-white">{r.title}</p>
                  <p className="mt-1 text-xs text-white/60">
                    {r.type}
                    {r.year ? ` • ${r.year}` : ''}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {r.links?.spotify ? (
                    <a
                      href={r.links.spotify}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
                    >
                      Stream
                    </a>
                  ) : null}
                  {r.links?.youtube ? (
                    <a
                      href={r.links.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
                    >
                      Video
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* VIDEOS */}
      <section id="videos" className="border-t border-white/10 py-12">
        <Container>
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="text-lg font-semibold tracking-wide">Videos</h2>
            <Link href="/videos" className="text-sm text-white/70 underline underline-offset-4 hover:text-white">
              View all
            </Link>
          </div>

          <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <YouTubeEmbed videoId={featuredVideo.youtubeId} title={`${site.name} — ${featuredVideo.title}`} />
            </div>

            <div className="divide-y divide-white/10">
              {videos.slice(0, 3).map((v) => (
                <div key={v.id} className="flex items-center justify-between gap-6 py-4">
                  <div>
                    <p className="text-sm text-white">{v.title}</p>
                    <p className="mt-1 text-xs text-white/60">
                      {v.kind ?? 'Video'}
                      {v.year ? ` • ${v.year}` : ''}
                    </p>
                  </div>

                  <a
                    href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
                  >
                    Watch
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SHOWS */}
      <section className="border-t border-white/10 py-12">
        <Container>
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="text-lg font-semibold tracking-wide">Shows</h2>
            <Link href="/shows" className="text-sm text-white/70 underline underline-offset-4 hover:text-white">
              View all
            </Link>
          </div>

          <div className="mt-5 divide-y divide-white/10">
            {shows.slice(0, 3).map((s) => (
              <div key={s.id} className="flex items-center justify-between gap-6 py-4">
                <div>
                  <p className="text-sm text-white">{s.title}</p>
                  <p className="mt-1 text-xs text-white/60">
                    {new Date(s.startISO).toLocaleDateString()}
                    {s.city ? ` • ${s.city}` : ''} {s.venueName ? ` • ${s.venueName}` : ''}
                  </p>
                </div>

                {s.ticketUrl ? (
                  <a
                    href={s.ticketUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-amber-300 underline underline-offset-4 hover:text-amber-200"
                  >
                    Tickets
                  </a>
                ) : null}
              </div>
            ))}

            {shows.length === 0 ? <p className="mt-4 text-sm text-white/70">No shows announced yet.</p> : null}
          </div>
        </Container>
      </section>

      {/* SPOTIFY */}
      <section className="border-t border-white/10 py-12">
        <Container>
          <h2 className="text-lg font-semibold tracking-wide">Spotify</h2>
          <div className="mt-4">
            <SpotifyArtistEmbed />
          </div>
        </Container>
      </section>
    </div>
  )
}

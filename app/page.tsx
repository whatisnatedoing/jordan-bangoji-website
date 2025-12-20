import Container from '@/components/Container'
import HeroFloatingCollage from '@/components/HeroFloatingCollage'
import LatestReleaseCard from '@/components/LatestReleaseCard'
import SpotifyArtistEmbed from '@/components/SpotifyArtistEmbed'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import { releases } from '@/data/releases'
import { shows } from '@/data/shows'
import { videos } from '@/data/videos'
import { site } from '@/lib/site'
import Link from 'next/link'
import NowPlaying from '@/components/NowPlaying'



export default function HomePage() {
  const featuredRelease = releases.find((r) => r.featured) ?? releases[0]
  const featuredVideo = featuredRelease?.youtubeVideoId
    ? { youtubeId: featuredRelease.youtubeVideoId, title: featuredRelease.title }
    : videos[0]

  const nowPlayingTitles = releases.slice(0, 3).map((r) => r.title)

  return (
    <div className="bg-zinc-950 text-white">
      {/* BACKDROP BLOCK (Hero + Music + Videos share background) */}
      <div className="relative overflow-hidden">
        <HeroFloatingCollage
          backgroundSrc="/images/hero/jordan-hero.jpg"
          floatingSrcs={[
            '/images/hero/jordan-hero-1.jpg',
            '/images/hero/jordan-hero-2.jpg',
            '/images/hero/jordan-hero-3.jpg',
          ]}
        />

        {/* Subtle grain overlay on top of hero BG (premium) */}
        <div
          className="pointer-events-none absolute inset-0 z-20 opacity-[0.12] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%27120%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27120%27 height=%27120%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E")',
          }}
        />

        {/* HERO */}
        <section className="relative min-h-[100svh]">
          <Container>
            <div className="relative z-40 min-h-[100svh] flex flex-col justify-end pb-12 md:pb-20 pt-24 md:pt-32">
              {/* Latest release card: right on desktop, above text on mobile */}
              <div className="w-full">
                <div className="hidden md:flex justify-end">
                  <LatestReleaseCard release={featuredRelease} />
                </div>
                <div className="md:hidden mb-6">
                  <LatestReleaseCard release={featuredRelease} />
                </div>
              </div>

              <div className="max-w-xl">
                <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{site.name}</h1>
                <p className="mt-4 text-sm leading-6 text-white/80">{site.description}</p>

                {/* Rotating micro-line */}
                <NowPlaying titles={nowPlayingTitles} />

                <div className="mt-7 flex flex-wrap gap-6 text-sm">
                  <a
                    href="/#music"
                    className="font-semibold text-amber-300 underline underline-offset-4 hover:text-amber-200"
                  >
                    Listen
                  </a>
                  <a href="/#videos" className="font-semibold text-white/85 underline underline-offset-4 hover:text-white">
                    Videos
                  </a>
                  <Link href="/shows" className="font-semibold text-white/85 underline underline-offset-4 hover:text-white">
                    Shows
                  </Link>
                  <Link href="/press" className="font-semibold text-white/85 underline underline-offset-4 hover:text-white">
                    Press
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* MUSIC */}
        <section id="music" className="relative z-40 scroll-mt-24 pt-6 pb-10">
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

        {/* VIDEOS (IMPORTANT: View all now goes to /videos) */}
        <section id="videos" className="relative z-40 scroll-mt-24 pt-6 pb-12">
          <Container>
            <div className="flex items-baseline justify-between gap-6">
              <h2 className="text-lg font-semibold tracking-wide">Videos</h2>
              <Link href="/videos" className="text-sm text-white/70 underline underline-offset-4 hover:text-white">
                View all
              </Link>
            </div>

            <div className="mt-5 grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <YouTubeEmbed videoId={featuredVideo.youtubeId} title={`${site.name} — ${featuredVideo.title}`} />
              </div>

              <div className="divide-y divide-white/10">
                {videos.slice(0, 3).map((v) => (
                  <div key={v.id} className="flex items-center justify-between gap-6 py-4">
                    <div>
                      <p className="text-sm text-white">{v.title}</p>
                      <p className="mt-1 text-xs text-white/60">{v.kind ?? 'Video'}</p>
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
      </div>

      {/* SHOWS */}
      <section className="py-12">
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
                    {s.city ? ` • ${s.city}` : ''}
                    {s.venueName ? ` • ${s.venueName}` : ''}
                  </p>
                </div>
              </div>
            ))}
            {shows.length === 0 ? <p className="mt-4 text-sm text-white/70">No shows announced yet.</p> : null}
          </div>
        </Container>
      </section>

      {/* SPOTIFY */}
      <section className="py-12">
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

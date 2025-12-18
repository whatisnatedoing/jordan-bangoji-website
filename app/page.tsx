import Container from '@/components/Container'
import HeroFloatingCollage from '@/components/HeroFloatingCollage'
import SpotifyArtistEmbed from '@/components/SpotifyArtistEmbed'
import YouTubeEmbed from '@/components/YouTubeEmbed'
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

  return (
    <div className="bg-zinc-950 text-white">
      {/* BACKDROP BLOCK (Hero + Music share same background) */}
      <div className="relative overflow-hidden">
        <HeroFloatingCollage
          backgroundSrc="/images/hero/jordan-hero.jpg"
          floatingSrcs={[
            '/images/hero/jordan-hero-1.jpg',
            '/images/hero/jordan-hero-2.jpg',
            '/images/hero/jordan-hero-3.jpg',
          ]}
        />

        {/* HERO */}
        <section className="relative min-h-[78svh] md:min-h-[100svh]">
          <Container>
            {/* Move hero text DOWN on both mobile + desktop */}
            <div className="min-h-[78svh] md:min-h-[100svh] pt-32 md:pt-44 flex items-end pb-14 md:pb-24">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-widest text-white/70">{site.tagline}</p>

                <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">{site.name}</h1>

                <p className="mt-4 text-sm leading-6 text-white/80">{site.description}</p>

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

        {/* MUSIC (still on backdrop) */}
        <section id="music" className="relative scroll-mt-24 pb-14">
          <Container>
            <div className="flex items-baseline justify-between gap-6">
              <h2 className="text-lg font-semibold tracking-wide">Music</h2>
              <Link href="/music" className="text-sm text-white/70 underline underline-offset-4 hover:text-white">
                View all
              </Link>
            </div>

            <div className="mt-6 divide-y divide-white/10">
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

        {/* Spacer so the fade has room before Videos starts */}
        <div className="relative h-10" />
      </div>

      {/* VIDEOS (starts after backdrop fade) */}
      <section id="videos" className="scroll-mt-24 border-t border-white/10 bg-zinc-950 py-14">
        <Container>
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="text-lg font-semibold tracking-wide">Videos</h2>
            <a
              href="https://www.youtube.com/c/JordanBangoji"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
            >
              View all
            </a>
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

      {/* SHOWS preview (optional) */}
      <section className="border-t border-white/10 py-14">
        <Container>
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="text-lg font-semibold tracking-wide">Shows</h2>
            <Link href="/shows" className="text-sm text-white/70 underline underline-offset-4 hover:text-white">
              View all
            </Link>
          </div>

          <div className="mt-6 divide-y divide-white/10">
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
                <div className="flex items-center gap-4">
                  {s.ticketUrl ? (
                    <a
                      href={s.ticketUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
                    >
                      Tickets
                    </a>
                  ) : null}
                  {s.mapUrl ? (
                    <a
                      href={s.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
                    >
                      Map
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
            {shows.length === 0 ? <p className="mt-4 text-sm text-white/70">No shows announced yet.</p> : null}
          </div>
        </Container>
      </section>

      {/* SPOTIFY */}
      <section className="border-t border-white/10 py-14">
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

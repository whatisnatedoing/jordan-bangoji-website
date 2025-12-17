import Container from '@/components/Container'
import SpotifyArtistEmbed from '@/components/SpotifyArtistEmbed'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import { releases } from '@/data/releases'
import { shows } from '@/data/shows'
import { videos } from '@/data/videos'
import { site } from '@/lib/site'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const featuredRelease = releases.find((r) => r.featured) ?? releases[0]
  const featuredVideo = featuredRelease?.youtubeVideoId
    ? { youtubeId: featuredRelease.youtubeVideoId, title: featuredRelease.title }
    : videos[0]

  return (
    <div>
      {/* HERO BACKDROP BLOCK (hero image ends before Videos) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/jordan-hero.jpg"
            alt="Jordan Bangoji"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(245,158,11,0.22),transparent_48%)]" />
        </div>

        <div className="relative">
          {/* navbar offset */}
          <div className="pt-16">
            {/* HERO */}
            <section className="min-h-[88vh]">
              <Container>
                <div className="pt-28 md:pt-40">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    {site.tagline}
                  </p>

                  <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                    {site.name}
                  </h1>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/75">
                    {site.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6 text-sm">
                    <Link
                      href="/music"
                      className="font-semibold text-amber-300 underline underline-offset-4 hover:text-amber-200"
                    >
                      Listen now
                    </Link>
                    <Link
                      href="/videos"
                      className="font-semibold text-white/80 underline underline-offset-4 hover:text-white"
                    >
                      Videos
                    </Link>
                    <Link
                      href="/shows"
                      className="font-semibold text-white/80 underline underline-offset-4 hover:text-white"
                    >
                      Shows
                    </Link>
                  </div>
                </div>
              </Container>
            </section>

            {/* MUSIC (summary) */}
            <section className="pb-14">
              <Container>
                <div className="flex items-baseline justify-between">
                  <h2 className="text-lg font-semibold uppercase tracking-widest text-white">
                    Music
                  </h2>
                  <Link
                    href="/music"
                    className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
                  >
                    View all
                  </Link>
                </div>

                <div className="mt-6 divide-y divide-white/10">
                  {releases.slice(0, 3).map((r) => (
                    <div key={r.id} className="flex items-center justify-between gap-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-white md:text-base">{r.title}</p>
                        <p className="mt-1 text-xs text-white/60">
                          {r.type}
                          {r.year ? ` • ${r.year}` : ''}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        {r.links.spotify ? (
                          <a
                            href={r.links.spotify}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-amber-300 underline underline-offset-4 hover:text-amber-200"
                          >
                            Stream
                          </a>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </Container>
            </section>
          </div>
        </div>
      </section>

      {/* VIDEOS (summary) */}
      <section className="bg-zinc-950 py-14">
        <Container>
          <div className="flex items-baseline justify-between">
            <h2 className="text-lg font-semibold uppercase tracking-widest text-white">
              Videos
            </h2>
            <Link
              href="/videos"
              className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-start">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <YouTubeEmbed
                videoId={featuredVideo.youtubeId}
                title={`${site.name} – ${featuredVideo.title}`}
              />
            </div>

            <div className="divide-y divide-white/10">
              {videos.slice(0, 3).map((v) => (
                <div key={v.id} className="flex items-center justify-between gap-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-white md:text-base">{v.title}</p>
                    <p className="mt-1 text-xs text-white/60">{v.kind ?? 'Video'}</p>
                  </div>

                  <a
                    href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-amber-300 underline underline-offset-4 hover:text-amber-200"
                  >
                    Watch
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SHOWS (summary) */}
      <section className="bg-zinc-950 py-14">
        <Container>
          <div className="flex items-baseline justify-between">
            <h2 className="text-lg font-semibold uppercase tracking-widest text-white">
              Shows
            </h2>
            <Link
              href="/shows"
              className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 divide-y divide-white/10">
            {shows.slice(0, 3).map((s) => (
              <div key={s.id} className="flex items-center justify-between gap-6 py-4">
                <div>
                  <p className="text-sm font-medium text-white md:text-base">{s.title}</p>
                  <p className="mt-1 text-xs text-white/60">
                    {s.dateISO}
                    {s.city ? ` • ${s.city}` : ''}
                    {s.venueName ? ` • ${s.venueName}` : ''}
                  </p>
                </div>

                {s.ticketUrl ? (
                  <a
                    href={s.ticketUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-amber-300 underline underline-offset-4 hover:text-amber-200"
                  >
                    Tickets
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SPOTIFY + FOOTER */}
      <section className="bg-zinc-950 py-14">
        <Container>
          <h2 className="text-lg font-semibold uppercase tracking-widest text-white">
            Spotify
          </h2>
          <div className="mt-4">
            <SpotifyArtistEmbed />
          </div>

          <footer className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">
            Built by Danbury.
          </footer>

        </Container>
      </section>
    </div>
  )
}

import Container from '@/components/Container'
import { videos } from '@/data/videos'
import VideoGrid from '@/components/VideoGrid'

export default function VideosPage() {
  return (
    <div className="bg-zinc-950 pt-16">
      <Container>
        <header className="py-12">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Videos
          </h1>
          <p className="mt-3 max-w-xl text-sm text-white/70">
            Watch videos and performances.
          </p>
        </header>

        <section className="pb-14">
          <VideoGrid items={videos} />
        </section>
      </Container>
    </div>
  )
}

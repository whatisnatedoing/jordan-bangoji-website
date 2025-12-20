import Container from '@/components/Container'
import { videos } from '@/data/videos'
import VideoGrid from '@/components/VideoGrid'

export default function VideosPage() {
  return (
    <div className="bg-zinc-950 text-white">
      <Container>
        <div className="py-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold">Videos</h1>
              <p className="mt-2 text-sm text-white/70">Music videos, live performances, and highlights.</p>
            </div>

            <a
              href="https://www.youtube.com/c/JordanBangoji"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
            >
              Visit YouTube channel
            </a>
          </div>

          <div className="mt-8">
            <VideoGrid items={videos} />
          </div>
        </div>
      </Container>
    </div>
  )
}

import type { Metadata } from 'next'
import Container from '@/components/Container'
import ReleaseCard from '@/components/ReleaseCard'
import { releases } from '@/data/releases'

export const metadata: Metadata = {
  title: 'Music',
  description: 'Releases, streaming links, and videos by Jordan Bangoji.',
}

export default function MusicPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Music</h1>
      <p className="mt-2 text-white/70">
        Releases and quick links to streaming platforms.
      </p>

      <div className="mt-8 grid gap-4">
        {releases.map((r) => (
          <ReleaseCard key={r.id} release={r} />
        ))}
      </div>
    </Container>
  )
}

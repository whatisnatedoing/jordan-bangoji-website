import type { Metadata } from 'next'
import Container from '@/components/Container'
import ShowCard from '@/components/ShowCard'
import { shows } from '@/data/shows'

export const metadata: Metadata = {
  title: 'Shows',
  description: 'Upcoming and past events.',
}

export default function ShowsPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Shows</h1>
      <p className="mt-2 text-white/70">Upcoming events and appearances.</p>

      <div className="mt-8 grid gap-4">
        {shows.map((s) => (
          <ShowCard key={s.id} show={s} />
        ))}
      </div>
    </Container>
  )
}

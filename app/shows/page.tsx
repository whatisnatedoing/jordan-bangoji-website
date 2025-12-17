import Container from '@/components/Container'
import { shows } from '@/data/shows'
import ShowCard from '@/components/ShowCard'

export default function ShowsPage() {
  return (
    <div className="bg-zinc-950 pt-16">
      <Container>
        <header className="py-12">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Shows
          </h1>
          <p className="mt-3 max-w-xl text-sm text-white/70">
            Upcoming events, tickets, and venue details.
          </p>
        </header>

        <div className="grid gap-4 pb-14">
          {shows.map((s) => (
            <ShowCard key={s.id} show={s} />
          ))}
        </div>
      </Container>
    </div>
  )
}

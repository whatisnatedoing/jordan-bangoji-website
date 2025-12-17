import Container from '@/components/Container'
import { site } from '@/lib/site'

export default function TribePage() {
  return (
    <div className="bg-zinc-950 pt-16">
      <Container>
        <header className="py-12">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {site.tribeName}
          </h1>
          <p className="mt-3 max-w-xl text-sm text-white/70">
            Community page (placeholder): announcements, exclusive content, and updates.
          </p>
        </header>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          Add your Tribe content here: signup link, WhatsApp/Telegram link, newsletter, or fan perks.
        </div>
      </Container>
    </div>
  )
}

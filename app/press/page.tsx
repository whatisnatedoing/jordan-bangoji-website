import type { Metadata } from 'next'
import Container from '@/components/Container'
import SocialLinks from '@/components/SocialLinks'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Press / EPK',
  description: 'Electronic press kit (EPK), photos, videos, and booking details.',
}

const epk = {
  oneLiner:
    'Jordan Bangoji (“Miracle Child”) is a Nigerian singer-songwriter known publicly for Nigerian Idol Season 7 (Top 12, 2022).',
  booking: {
    email: 'booking@yourdomain.com', // placeholder
    phone: '+234 XXX XXX XXXX', // placeholder (replace with real)
    note: 'Replace booking details with official management contact.',
  },
  assets: {
    pressPhotosZipUrl: '', // optional (Google Drive/Dropbox link)
    logoPngUrl: '', // optional
  },
  featuredVideoId: 'CNE_PdsxckQ', // Soyayya (already used elsewhere)
  quickFacts: [
    'Top 12 contestant, Nigerian Idol Season 7 (2022).',
    `Fanbase: ${site.tribeName}.`,
  ],
} as const

export default function PressPage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Press / EPK</h1>
      <p className="mt-2 text-white/70">{epk.oneLiner}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-widest text-white/60">
            Quick facts
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
            {epk.quickFacts.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Booking
            </p>
            <p className="mt-2 text-sm text-white/70">{epk.booking.note}</p>

            <div className="mt-3 grid gap-2 text-sm">
              <p className="text-white/80">Email: {epk.booking.email}</p>
              <p className="text-white/80">Phone/WhatsApp: {epk.booking.phone}</p>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Follow / streaming
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Download assets (optional)
            </p>
            <p className="mt-2 text-sm text-white/70">
              Add press photos + logos when available.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-widest text-white/60">
            Featured video
          </p>
          <div className="mt-4">
            <YouTubeEmbed
              videoId={epk.featuredVideoId}
              title={`${site.name} featured video`}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

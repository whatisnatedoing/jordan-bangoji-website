import type { Metadata } from 'next'
import Container from '@/components/Container'
import SocialLinks from '@/components/SocialLinks'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'Biography, story, and background of Jordan Bangoji.',
}

const about = {
  stageName: 'Miracle Child',
  shortBio:
    'Jordan Bangoji (also known as “Miracle Child”) is a Nigerian singer-songwriter and performer, known publicly as a Top 12 contestant on Nigerian Idol Season 7 (2022).',
  longBio:
    'Placeholder long bio: ',
  quickFacts: [
    { label: 'Based in', value: 'Kaduna, Nigeria.' },
    { label: 'Known for', value: 'Nigerian Idol Season 7 (Top 12, 2022).' },
    { label: 'Tagline', value: site.tagline },
    { label: 'Fanbase', value: site.tribeName },
  ],
  highlights: [
    'Top 12 contestant on Nigerian Idol Season 7 (2022).',
    'University student (ABU Zaria is referenced in public profiles/articles).',
    'Music releases include “Soyayya” and “ART & LOVE (EP)” (expand list later).',
  ],
} as const

export default function AboutPage() {
  return (
    <Container>
      <div className="grid gap-10 md:grid-cols-3 md:items-start">
        <section className="md:col-span-2">
          <h1 className="text-3xl font-semibold">About {site.name}</h1>

          <p className="mt-4 text-white/80">{about.shortBio}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {about.quickFacts.map((f) => (
              <div
                key={f.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-xs uppercase tracking-widest text-white/60">
                  {f.label}
                </p>
                <p className="mt-2 text-sm text-white/80">{f.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Full bio
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">{about.longBio}</p>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Highlights
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
              {about.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </section>

        <aside className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-widest text-white/60">
            Follow
          </p>
          <div className="mt-4">
            <SocialLinks />
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Artist name
            </p>
            <p className="mt-2 text-sm text-white/70">
              {site.name} • {about.stageName}
            </p>
          </div>
        </aside>
      </div>
    </Container>
  )
}

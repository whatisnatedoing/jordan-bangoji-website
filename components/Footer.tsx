import Container from './Container'
import { site } from '@/lib/site'
import SocialLinks from '@/components/SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10">
      <Container>
        <div className="flex flex-col items-center text-center gap-4 py-10 text-sm text-white/70">
          <p className="text-white/80">{site.tagline}</p>

          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-white/60">Follow</p>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>

          <p className="text-white/70">
            {year} {site.name}. Tribe {site.tribeName}.
          </p>

          <p className="text-xs text-white/50">Built by Danbury.</p>
        </div>
      </Container>
    </footer>
  )
}

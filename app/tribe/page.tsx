import Container from '@/components/Container'
import { site } from '@/lib/site'

const tribeSignup = {
  embedUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSdba6hmS5cLDYxm6uGLJYrcY2-JNws8GLG-CJefsSxdoDkWhg/viewform?pli=1',
  openUrl: 'https://forms.gle/YOUR_SHORT_LINK_HERE',
}

export default function TribePage() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">{site.tribeName}</h1>
      <p className="mt-2 text-white/70">
        Join the community for updates, drops, and events.
      </p>

      <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-white/80">Signup form</p>

          <a
            href={tribeSignup.openUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:bg-white/5 hover:text-white"
          >
            Open form
          </a>
        </div>

        <div className="mt-4 aspect-[3/4] w-full overflow-hidden rounded-lg bg-black/30">
          <iframe
            title={`${site.tribeName} signup`}
            src={tribeSignup.embedUrl}
            className="h-full w-full"
            loading="lazy"
          />
        </div>

        <p className="mt-3 text-xs text-white/60">
          Replace the placeholder embedUrl with your real Google Form embed link.
        </p>
      </div>
    </Container>
  )
}

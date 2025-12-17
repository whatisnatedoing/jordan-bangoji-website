import Container from '@/components/Container'
import { site } from '@/lib/site'
import ContactForm from './ContactForm'

export default function ContactPage() {
  const subject = encodeURIComponent('Booking / Enquiries')
  const mailto = `mailto:${site.contactEmail}?subject=${subject}`

  return (
    <div className="bg-zinc-950 pt-16">
      <Container>
        <header className="py-12">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Contact
          </h1>
          <p className="mt-3 max-w-xl text-sm text-white/70">
            For bookings, features, press, and general enquiries.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={mailto}
              className="inline-flex items-center justify-center rounded-md bg-amber-300 px-4 py-2 text-xs font-semibold text-black hover:bg-amber-200"
            >
              Email booking
            </a>

            <a
              href={`mailto:${site.contactEmail}`}
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 hover:text-white"
            >
              Copy email
            </a>
          </div>
        </header>

        <section className="pb-14">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <ContactForm />
          </div>
        </section>
      </Container>
    </div>
  )
}

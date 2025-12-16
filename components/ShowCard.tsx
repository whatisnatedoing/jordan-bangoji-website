import type { Show } from '@/data/shows'

function formatDate(dateISO: string) {
  const d = new Date(dateISO)
  if (Number.isNaN(d.getTime())) return dateISO
  return new Intl.DateTimeFormat('en-NG', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(d)
}

export default function ShowCard({ show }: { show: Show }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">{show.title}</h3>
        <p className="text-sm text-white/70">
          {formatDate(show.dateISO)}
          {show.time ? ` • ${show.time}` : ''}
          {show.city ? ` • ${show.city}` : ''}
        </p>

        {show.venueName ? (
          <p className="mt-2 text-sm text-white/70">
            Venue: <span className="text-white/85">{show.venueName}</span>
          </p>
        ) : null}

        {show.venueAddress ? (
          <p className="text-sm text-white/60">{show.venueAddress}</p>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {show.ticketUrl ? (
            <a
              href={show.ticketUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-black hover:bg-white/90"
            >
              Get tickets
            </a>
          ) : null}

          {show.rsvpUrl ? (
            <a
              href={show.rsvpUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:bg-white/5 hover:text-white"
            >
              RSVP
            </a>
          ) : null}

          {show.mapUrl ? (
            <a
              href={show.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:bg-white/5 hover:text-white"
            >
              View map
            </a>
          ) : null}
        </div>

        {show.price || show.ageRestriction || show.dressCode ? (
          <div className="mt-4 grid gap-1 text-xs text-white/60">
            {show.price ? <p>Price: {show.price}</p> : null}
            {show.ageRestriction ? <p>Age: {show.ageRestriction}</p> : null}
            {show.dressCode ? <p>Dress code: {show.dressCode}</p> : null}
          </div>
        ) : null}

        {show.lineup?.length ? (
          <div className="mt-4">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Lineup
            </p>
            <p className="mt-2 text-sm text-white/70">{show.lineup.join(' • ')}</p>
          </div>
        ) : null}

        {show.contact?.phoneOrWhatsapp || show.contact?.email ? (
          <div className="mt-4 border-t border-white/10 pt-4 text-sm text-white/70">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Contact
            </p>
            {show.contact?.phoneOrWhatsapp ? (
              <p className="mt-2">WhatsApp/Phone: {show.contact.phoneOrWhatsapp}</p>
            ) : null}
            {show.contact?.email ? <p>Email: {show.contact.email}</p> : null}
          </div>
        ) : null}

        {show.notes ? <p className="mt-4 text-sm text-white/60">{show.notes}</p> : null}
      </div>
    </article>
  )
}

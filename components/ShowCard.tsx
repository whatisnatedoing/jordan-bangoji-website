import type { Show } from '@/data/shows'

function toGCalDate(iso: string) {
  // Google accepts YYYYMMDDTHHMMSSZ or without Z; simplest is stripping separators.
  // If you pass offset ISO, it will still work for placeholders; refine later if needed.
  return iso.replace(/[-:]/g, '').replace('.000', '')
}

function googleCalendarLink(show: Show) {
  const base = 'https://www.google.com/calendar/render?action=TEMPLATE'
  const text = `&text=${encodeURIComponent(show.title)}`
  const start = toGCalDate(show.startISO)
  const end = show.endISO ? toGCalDate(show.endISO) : start
  const dates = `&dates=${encodeURIComponent(`${start}/${end}`)}`
  const location = `&location=${encodeURIComponent(
    [show.venueName, show.venueAddress, show.city].filter(Boolean).join(', ')
  )}`
  const details = `&details=${encodeURIComponent(show.notes ?? '')}`
  return `${base}${text}${dates}${details}${location}`
}

export default function ShowCard({ show }: { show: Show }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-white md:text-lg">
            {show.title}
          </h3>

          <p className="mt-2 text-sm text-white/70">
            <span className="font-medium text-white/85">{show.venueName}</span>
            {show.venueAddress ? ` • ${show.venueAddress}` : ''}
            {show.city ? ` • ${show.city}` : ''}
          </p>

          <div className="mt-2 text-xs text-white/60">
            <time dateTime={show.startISO}>{show.startISO}</time>
            {show.endISO ? (
              <>
                {' '}
                – <time dateTime={show.endISO}>{show.endISO}</time>
              </>
            ) : null}
          </div>

          <div className="mt-4 grid gap-1 text-xs text-white/60">
            {show.status ? <p>Status: {show.status}</p> : null}
            {show.price ? <p>Price: {show.price}</p> : null}
            {show.ageLimit ? <p>Age: {show.ageLimit}</p> : null}
          </div>

          {show.lineup?.length ? (
            <div className="mt-4">
              <p className="text-xs uppercase tracking-widest text-white/50">
                Lineup
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-white/70">
                {show.lineup.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {show.notes ? (
            <p className="mt-4 text-sm text-white/70">{show.notes}</p>
          ) : null}
        </div>

        <div className="flex shrink-0 flex-wrap gap-3 md:flex-col md:items-end">
          {show.ticketUrl ? (
            <a
              href={show.ticketUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-amber-300 px-4 py-2 text-xs font-semibold text-black hover:bg-amber-200"
            >
              Tickets
            </a>
          ) : null}

          <a
            href={googleCalendarLink(show)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 hover:text-white"
          >
            Add to calendar
          </a>

          {show.mapUrl ? (
            <a
              href={show.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/70 underline underline-offset-4 hover:text-white"
            >
              Open map
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

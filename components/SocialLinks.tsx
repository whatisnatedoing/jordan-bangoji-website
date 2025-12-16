import { site } from '@/lib/site'

export default function SocialLinks({
  variant = 'chips',
}: {
  variant?: 'chips' | 'list'
}) {
  if (variant === 'list') {
    return (
      <ul className="grid gap-2">
        {site.socials.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/80 underline underline-offset-4 hover:text-white"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="flex flex-wrap gap-2">
      {site.socials.map((s) => (
        <a
          key={s.href}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:bg-white/5 hover:text-white"
        >
          {s.label}
        </a>
      ))}
    </div>
  )
}

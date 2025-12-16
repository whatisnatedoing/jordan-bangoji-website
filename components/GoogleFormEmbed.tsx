export default function GoogleFormEmbed({
  embedUrl,
  title = 'Signup form',
}: {
  embedUrl: string
  title?: string
}) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <iframe
        title={title}
        src={embedUrl}
        className="h-[900px] w-full"
        loading="lazy"
      />
    </div>
  )
}

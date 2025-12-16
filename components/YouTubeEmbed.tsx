export default function YouTubeEmbed({
  videoId,
  title = 'YouTube video',
}: {
  videoId: string
  title?: string
}) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg bg-black/40">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}

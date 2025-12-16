const SPOTIFY_ARTIST_EMBED_URL =
  'https://open.spotify.com/embed/artist/702zIZlmgDwWKAqWW4WX5d?utm_source=generator'

export default function SpotifyArtistEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
      <iframe
        src={SPOTIFY_ARTIST_EMBED_URL}
        title="Jordan Bangoji on Spotify"
        width="100%"
        height="352"
        frameBorder="0"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </div>
  )
}

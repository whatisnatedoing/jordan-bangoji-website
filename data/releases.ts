export type Release = {
  id: string
  title: string
  type: 'Single' | 'EP' | 'Album' | 'Feature'
  year?: string
  coverImage: string // /images/covers/...
  featured?: boolean
  youtubeVideoId?: string
  links: {
    spotify?: string
    appleMusic?: string
    audiomack?: string
    youtube?: string
  }
}

export const releases: Release[] = [
  {
    id: 'soyayya',
    title: 'Soyayya',
    type: 'Single',
    year: '2025',
    featured: true,
    youtubeVideoId: 'CNE_PdsxckQ',
    coverImage: '/images/covers/soyayya.jpg', // add later or point to placeholder
    links: {
      spotify: 'https://open.spotify.com/track/PLACEHOLDER',
      youtube: 'https://www.youtube.com/watch?v=CNE_PdsxckQ',
    },
  },

  // More placeholders (add as many as you want)
  ...Array.from({ length: 15 }).map((_, i) => ({
    id: `release-${i + 1}`,
    title: `Release Title ${i + 1} (Placeholder)`,
    type: (i % 3 === 0 ? 'Single' : i % 3 === 1 ? 'EP' : 'Album') as const,
    year: '2024',
    coverImage: '/images/covers/placeholder.jpg',
    links: {
      spotify: 'https://open.spotify.com/artist/702zIZlmgDwWKAqWW4WX5d',
    },
  })),
]

export type Release = {
  id: string
  title: string
  type: 'Single' | 'EP' | 'Album' | 'Feature'
  year?: string
  coverImage: string // /images/covers/...
  description?: string
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
    featured: false,
    youtubeVideoId: 'CNE_PdsxckQ',
    coverImage: '/images/covers/soyayya.jpg',
    description: 'A soulful single (placeholder).',
    links: {
      spotify: 'https://open.spotify.com/track/PLACEHOLDER',
      youtube: 'https://www.youtube.com/watch?v=CNE_PdsxckQ',
    },
  },
  {
    id: 'if_i',
    title: 'If I',
    type: 'Single',
    year: '2025',
    featured: true,
    youtubeVideoId: 'pbKdLfQf72c',
    coverImage: '/images/covers/if_i.jpg',
    description: 'A soulful single (placeholder).',
    links: {
      spotify: 'https://open.spotify.com/track/5XvPukPtl9hm0VhH4Afvnz?si=3329ae1092894d02',
      youtube: 'https://www.youtube.com/watch?v=pbKdLfQf72c',
    },
  },
  {
    id: 'no_transactional_love',
    title: 'No Transactional Love',
    type: 'Single',
    year: '2025',
    featured: false,
    youtubeVideoId: 'pbKdLfQf72c',
    coverImage: '/images/covers/no_transactional_love.jpg',
    description: 'A soulful single (placeholder).',
    links: {
      spotify: 'https://open.spotify.com/album/4DleAeGR7zOCZmgUmXSmB8?si=Xy--11cxRjSAfPt6cMoIDg',
      youtube: 'https://www.youtube.com/watch?v=NdFGequozBg',
    },
  },

  // Placeholders
  ...Array.from({ length: 15 }).map((_, i) => ({
    id: `release-${i + 1}`,
    title: `Release Title ${i + 1} (Placeholder)`,
    type: (i % 3 === 0 ? 'Single' : i % 3 === 1 ? 'EP' : 'Album') as Release['type'],
    year: '2024',
    coverImage: '/images/covers/placeholder.jpg',
    links: {
      spotify: 'https://open.spotify.com/artist/702zIZlmgDwWKAqWW4WX5d',
    },
  })),
]

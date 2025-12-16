export type ReleasePlatformLinks = {
  spotify?: string
  appleMusic?: string
  audiomack?: string
  youtube?: string
}

export type Release = {
  id: string
  title: string
  type: 'Single' | 'EP' | 'Album'
  year?: number
  description?: string
  youtubeVideoId?: string
  links: ReleasePlatformLinks
  featured?: boolean
}

export const releases: Release[] = [
  {
    id: 'soyayya',
    title: 'Soyayya',
    type: 'Single',
    year: 2025,
    description: 'Northern love song (placeholder copy).',
    youtubeVideoId: 'CNE_PdsxckQ',
    links: {
      spotify:
        'https://open.spotify.com/track/11M7WcIxVxcSatwKLLPp8r?si=cdc2cdf53a8f4499',
      appleMusic: '',
      audiomack: '',
      youtube: 'https://www.youtube.com/watch?v=CNE_PdsxckQ',
    },
    featured: true,
  },
  {
    id: 'art-and-love-ep',
    title: 'ART & LOVE',
    type: 'EP',
    year: 2022,
    description: 'EP (placeholder copy).',
    links: {
      spotify:
        'https://open.spotify.com/album/62nD5YTltKcw6IK3plzXWt?si=6XZBFtAKT3etynChooGjsA',
      appleMusic: '',
      audiomack: '',
      youtube: '',
    },
  },
  {
    id: 'if-i',
    title: 'IF I',
    type: 'Album',
    year: 2025,
    description: 'Project (placeholder copy).',
    links: {
      spotify:
        'https://open.spotify.com/album/0CzeJeROyBn1gFPOWmo4wh?si=zC8VmuNtQD2xpvtPt4rmJQ',
      appleMusic: '',
      audiomack: '',
      youtube: '',
    },
  },
]

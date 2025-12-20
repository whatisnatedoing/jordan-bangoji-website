export type Video = {
  id: string
  title: string
  youtubeId: string
  kind?: string
  year?: string
}

export const videos: Video[] = [
  { id: 'soyayya', title: 'Soyayya', youtubeId: 'CNE_PdsxckQ', kind: 'Official Video', year: '2025' },
  { id: 'if_i', title: 'If I', youtubeId: 'pbKdLfQf72c', kind: 'Audio', year: '2025' },
  { id: 'no_transactional_love', title: 'No Transactional Love', youtubeId: 'NdFGequozBg', kind: 'Audio', year: '2025' },

  // Placeholders (swap IDs/titles later)
  ...Array.from({ length: 18 }).map((_, i) => ({
    id: `video-${i + 1}`,
    title: `Video Title ${i + 1} (Placeholder)`,
    youtubeId: 'dQw4w9WgXcQ',
    kind: i % 2 === 0 ? 'Visualizer (Placeholder)' : 'Live (Placeholder)',
    year: '2024',
  })),
]

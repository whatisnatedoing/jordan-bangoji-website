export type Video = {
  id: string
  title: string
  youtubeId: string
  kind?: string
  year?: string
}

export const videos: Video[] = [
  { id: 'soyayya', title: 'Soyayya', youtubeId: 'CNE_PdsxckQ', kind: 'Official Video', year: '2025' },

  // Placeholders (swap IDs/titles later)
  ...Array.from({ length: 18 }).map((_, i) => ({
    id: `video-${i + 1}`,
    title: `Video Title ${i + 1} (Placeholder)`,
    youtubeId: 'dQw4w9WgXcQ',
    kind: i % 2 === 0 ? 'Visualizer (Placeholder)' : 'Live (Placeholder)',
    year: '2024',
  })),
]

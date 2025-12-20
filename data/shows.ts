export type Show = {
  id: string
  title: string
  startISO: string // e.g. 2026-01-10T19:00:00+01:00
  endISO?: string
  city: string
  venueName: string
  venueAddress?: string
  ticketUrl?: string
  status?: 'Available' | 'Sold out' | 'Announced'
  price?: string
  ageLimit?: string
  lineup?: string[]
  notes?: string
  mapUrl?: string
}

export const shows: Show[] = [
  {
    id: 'show-1',
    title: 'Live in Lagos (Placeholder)',
    startISO: '2026-01-10T19:00:00+01:00',
    endISO: '2026-01-10T22:00:00+01:00',
    city: 'Lagos, NG',
    venueName: 'Landmark (Placeholder)',
    venueAddress: 'Water Corporation Dr, Victoria Island, Lagos',
    status: 'Available',
    price: '₦10,000+',
    ageLimit: '18+',
    lineup: ['Jordan Bangoji', 'Guest (TBA)'],
    notes: 'Doors 6:00 PM (Placeholder).',
    ticketUrl: '#',
    mapUrl: 'https://maps.google.com/?q=Landmark+Lagos',
  },
  {
    id: 'show-2',
    title: 'Live in Abuja (Placeholder)',
    startISO: '2026-02-02T19:00:00+01:00',
    endISO: '2026-02-02T22:00:00+01:00',
    city: 'Abuja, NG',
    venueName: 'Transcorp Hall (Placeholder)',
    venueAddress: 'Transcorp Hilton, Abuja',
    status: 'Announced',
    price: 'TBA',
    ageLimit: 'All ages',
    lineup: ['Jordan Bangoji'],
    notes: 'More details soon.',
    ticketUrl: '#',
    mapUrl: 'https://maps.google.com/?q=Transcorp+Hilton+Abuja',
  },
  {
    id: 'show-3',
    title: 'Live in London (Placeholder)',
    startISO: '2026-03-18T19:30:00Z',
    endISO: '2026-03-18T22:30:00Z',
    city: 'London, UK',
    venueName: 'O2 Academy (Placeholder)',
    venueAddress: 'London, UK',
    status: 'Available',
    price: '£20+',
    ageLimit: '16+',
    lineup: ['Jordan Bangoji'],
    notes: 'Support act TBA.',
    ticketUrl: '#',
    mapUrl: 'https://maps.google.com/?q=O2+Academy+London',
  },
]

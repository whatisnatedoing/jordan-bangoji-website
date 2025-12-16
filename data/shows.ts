export type Show = {
  id: string
  title: string

  dateISO: string // "2025-12-21"
  time?: string // "7:00 PM"
  doors?: string // "6:00 PM"

  city?: string
  state?: string
  country?: string

  venueName?: string
  venueAddress?: string

  ticketUrl?: string
  rsvpUrl?: string
  mapUrl?: string

  price?: string
  ageRestriction?: string
  dressCode?: string

  lineup?: string[]
  notes?: string
  contact?: {
    name?: string
    phoneOrWhatsapp?: string
    email?: string
  }
}

export const shows: Show[] = [
  {
    id: 'exclusive-experience-2025-12-21',
    title: 'Exclusive Experience with Jordan (Placeholder Title)',

    // Real date from your instruction / public promo mentions:
    dateISO: '2025-12-21', // 21st December

    // Placeholders (replace later)
    time: '7:00 PM',
    doors: '6:00 PM',

    city: 'Kaduna (placeholder)',
    state: 'Kaduna State (placeholder)',
    country: 'Nigeria',

    venueName: 'Venue Name (placeholder)',
    venueAddress: 'Full address + landmark (placeholder)',

    ticketUrl: 'https://ticket-link-placeholder.example',
    rsvpUrl: 'https://rsvp-link-placeholder.example',
    mapUrl: 'https://maps-link-placeholder.example',

    price: '₦10,000 (placeholder)',
    ageRestriction: '18+ (placeholder)',
    dressCode: 'Smart casual (placeholder)',

    lineup: ['Jordan Bangoji', 'Guest act (placeholder)', 'DJ (placeholder)'],
    notes:
      'Limited seats available (placeholder). Gates close at (placeholder).',
    contact: {
      name: 'Management (placeholder)',
      phoneOrWhatsapp: '+234 XXX XXX XXXX',
      email: 'booking@yourdomain.com',
    },
  },
]

'use client'

import { useEffect, useState } from 'react'

export default function NowPlaying({ titles }: { titles: string[] }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (!titles.length) return
    const t = setInterval(() => setIdx((v) => (v + 1) % titles.length), 2500)
    return () => clearInterval(t)
  }, [titles])

  if (!titles.length) return null

  return (
    <p className="mt-5 text-xs text-white/70">
      Now playing: <span className="text-white/85">{titles[idx]}</span>
    </p>
  )
}

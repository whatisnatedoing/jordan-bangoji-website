'use client'

import Image from 'next/image'

type Props = {
  backgroundSrc: string
  floatingSrcs: string[] // 3 images
}

export default function HeroFloatingCollage({ backgroundSrc, floatingSrcs }: Props) {
  const floats = floatingSrcs.slice(0, 3)

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={backgroundSrc}
        alt="Jordan hero image"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />

      {/* Subtle GOLD wash (reduced intensity + angled) */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/12 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(245,158,11,0.14),transparent_55%)]" />

      {/* Floating tiles */}
      <div className="pointer-events-none absolute inset-0">
        {floats[0] ? (
          <div className="absolute right-[5vw] top-[18svh] w-[44vw] max-w-[230px] animate-float1 md:right-[6vw] md:top-[14vh] md:w-[260px]">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/10 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
              <div className="relative aspect-[3/4]">
                <Image src={floats[0]} alt="" fill sizes="260px" className="object-cover object-top" />
              </div>
            </div>
          </div>
        ) : null}

        {floats[1] ? (
          <div className="absolute left-[5vw] top-[34svh] w-[38vw] max-w-[200px] animate-float2 md:left-[10vw] md:top-[28vh] md:w-[230px]">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/10 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
              <div className="relative aspect-[4/5]">
                <Image src={floats[1]} alt="" fill sizes="230px" className="object-cover object-top" />
              </div>
            </div>
          </div>
        ) : null}

        {/* Hide 3rd tile on small screens */}
        {floats[2] ? (
          <div className="hidden md:block absolute right-[18vw] top-[52vh] w-[200px] animate-float3">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/10 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
              <div className="relative aspect-square">
                <Image src={floats[2]} alt="" fill sizes="200px" className="object-cover object-top" />
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Readability: keep top cleaner; darken lower half for text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/55" />
      <div className="absolute inset-x-0 bottom-0 top-[50svh] bg-gradient-to-b from-transparent via-black/35 to-black/90" />

      {/* Fade out before Videos when backdrop extends down */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-b from-transparent via-black/50 to-zinc-950" />
    </div>
  )
}

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
      {/* BACKGROUND (behind everything) */}
      <div className="absolute inset-0 z-0">
        {/* soft cover blur so “contain” never shows empty sides */}
        <Image
          src={backgroundSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top scale-110 blur-[6px] opacity-35"
        />

        {/* full image on mobile; cover on md+ */}
        <Image
          src={backgroundSrc}
          alt="Jordan hero image"
          fill
          priority
          sizes="100vw"
          className="object-contain object-top md:object-cover md:object-top"
        />
      </div>

      {/* FLOATING TILES */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* Pushed down on mobile so it doesn't sit on the face */}
        {floats[0] ? (
          <div className="absolute right-[6vw] top-[40svh] w-[36vw] max-w-[210px] animate-float1 md:right-[6vw] md:top-[18vh] md:w-[260px]">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/10 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
              <div className="relative aspect-[3/4]">
                <Image src={floats[0]} alt="" fill sizes="260px" className="object-cover object-top" />
              </div>
            </div>
          </div>
        ) : null}

        {floats[1] ? (
          <div className="absolute left-[6vw] top-[56svh] w-[32vw] max-w-[190px] animate-float2 md:left-[10vw] md:top-[32vh] md:w-[230px]">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/10 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
              <div className="relative aspect-[4/5]">
                <Image src={floats[1]} alt="" fill sizes="230px" className="object-cover object-top" />
              </div>
            </div>
          </div>
        ) : null}

        {/* hide 3rd tile on mobile */}
        {floats[2] ? (
          <div className="hidden md:block absolute right-[18vw] top-[56vh] w-[200px] animate-float3">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/10 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
              <div className="relative aspect-square">
                <Image src={floats[2]} alt="" fill sizes="200px" className="object-cover object-top" />
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* GOLD overlay (on top of tiles, still behind content) */}
      <div className="absolute inset-0 z-20 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent" />
      <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_15%_0%,rgba(245,158,11,0.12),transparent_55%)]" />

      {/* DARK overlays (behind content) */}
      <div className="absolute inset-0 z-30 bg-gradient-to-b from-black/5 via-black/10 to-black/55" />
      <div className="absolute inset-x-0 bottom-0 top-[56svh] z-30 bg-gradient-to-b from-transparent via-black/35 to-black/90" />
      <div className="absolute inset-x-0 bottom-0 z-30 h-[55%] bg-gradient-to-b from-transparent via-black/45 to-zinc-950" />
    </div>
  )
}

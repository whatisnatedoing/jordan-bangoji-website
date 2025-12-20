'use client'

import Image from 'next/image'

type Props = {
  backgroundSrc: string
  floatingSrcs: string[] // expects up to 3 images
}

export default function HeroFloatingCollage({ backgroundSrc, floatingSrcs }: Props) {
  const floats = floatingSrcs.slice(0, 3)

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Background */}
      <Image
        src={backgroundSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />

      {/* Base dark wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-zinc-950" />

      {/* Floating tiles (kept in the TOP band so they never sit behind the centered LatestReleaseCard) */}
      <div className="absolute inset-0">
        {/* Top-left */}
        {floats[0] ? (
          <div className="absolute left-[4%] top-[10%] hidden md:block">
            <div className="relative h-[160px] w-[130px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl animate-float1">
              <Image src={floats[0]} alt="" fill sizes="160px" className="object-cover" />
            </div>
          </div>
        ) : null}

        {/* Top-right */}
        {floats[1] ? (
          <div className="absolute right-[4%] top-[12%] hidden md:block">
            <div className="relative h-[190px] w-[150px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl animate-float2">
              <Image src={floats[1]} alt="" fill sizes="190px" className="object-cover" />
            </div>
          </div>
        ) : null}

        {/* Top-center (only show on large screens to avoid crowding mobile + avoid center-card overlap) */}
        {floats[2] ? (
          <div className="absolute left-1/2 top-[6%] hidden lg:block -translate-x-1/2">
            <div className="relative h-[150px] w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl animate-float3">
              <Image src={floats[2]} alt="" fill sizes="220px" className="object-cover" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

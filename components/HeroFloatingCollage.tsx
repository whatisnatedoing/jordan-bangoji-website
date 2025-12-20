'use client'

import Image from 'next/image'

type Props = {
  backgroundSrc: string
  floatingSrcs: string[] // expects 3 images
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

      {/* Base dark wash (keeps text readable) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-zinc-950" />

      {/* Floating tiles (kept near edges so they don’t “sit” on the centered release card) */}
      <div className="absolute inset-0">
        {floats[0] ? (
          <div className="absolute left-[4%] top-[18%] hidden md:block">
            <div className="relative h-[180px] w-[140px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl animate-float1">
              <Image src={floats[0]} alt="" fill sizes="180px" className="object-cover" />
            </div>
          </div>
        ) : null}

        {floats[1] ? (
          <div className="absolute right-[4%] top-[16%] hidden md:block">
            <div className="relative h-[220px] w-[170px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl animate-float2">
              <Image src={floats[1]} alt="" fill sizes="220px" className="object-cover" />
            </div>
          </div>
        ) : null}

        {floats[2] ? (
          <div className="absolute right-[10%] bottom-[10%] hidden lg:block">
            <div className="relative h-[170px] w-[140px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl animate-float3">
              <Image src={floats[2]} alt="" fill sizes="170px" className="object-cover" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

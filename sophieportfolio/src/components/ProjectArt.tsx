import type { ProjectArtVariant } from '../data/projects'

function SensigoArt({ ink }: { ink: string }) {
  const dots = []
  for (let x = 0; x < 7; x++) {
    for (let y = 0; y < 5; y++) {
      dots.push(
        <circle key={`${x}-${y}`} cx={30 + x * 55} cy={35 + y * 58} r={2.2} fill={ink} opacity={0.3} />,
      )
    }
  }
  return (
    <svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      {dots}
      <circle cx="300" cy="95" r="50" fill="none" stroke={ink} strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="300" cy="95" r="26" fill="none" stroke={ink} strokeOpacity="0.35" strokeWidth="1.5" />
      <circle cx="300" cy="95" r="7" fill={ink} opacity="0.9" />
    </svg>
  )
}

function GlowTapArt({ ink }: { ink: string }) {
  return (
    <svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      {[150, 108, 68, 30].map((r, i) => (
        <circle
          key={r}
          cx="230"
          cy="150"
          r={r}
          fill="none"
          stroke={ink}
          strokeOpacity={0.12 + i * 0.09}
          strokeWidth="2"
        />
      ))}
      <circle cx="230" cy="150" r="8" fill={ink} />
    </svg>
  )
}

function CityArt({ ink }: { ink: string }) {
  return (
    <svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <circle cx="130" cy="115" r="95" fill={ink} opacity="0.14" />
      <circle cx="265" cy="185" r="72" fill={ink} opacity="0.12" />
      <circle cx="240" cy="90" r="42" fill={ink} opacity="0.2" />
    </svg>
  )
}

function TrailArt({ ink }: { ink: string }) {
  return (
    <svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <path
        d="M20 245 C 100 165, 145 265, 220 185 S 345 60, 380 90"
        fill="none"
        stroke={ink}
        strokeOpacity="0.55"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="20" cy="245" r="5" fill={ink} />
      <circle cx="380" cy="90" r="5" fill={ink} />
    </svg>
  )
}

function ArusArt({ ink }: { ink: string }) {
  return (
    <svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <circle cx="335" cy="55" r="22" fill={ink} opacity="0.18" />
      <circle cx="335" cy="55" r="22" fill="none" stroke={ink} strokeOpacity="0.5" strokeWidth="1.5" />
      {[100, 155, 210, 265].map((y, i) => (
        <path
          key={y}
          d={`M-10 ${y} C 60 ${y - 26}, 100 ${y + 26}, 170 ${y} S 280 ${y - 26}, 340 ${y} S 400 ${y + 12}, 410 ${y}`}
          fill="none"
          stroke={ink}
          strokeOpacity={0.14 + i * 0.09}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}

const ARTS: Record<ProjectArtVariant, (props: { ink: string }) => React.JSX.Element> = {
  sensigo: SensigoArt,
  glowtap: GlowTapArt,
  city: CityArt,
  trail: TrailArt,
  arus: ArusArt,
}

export function ProjectArt({
  variant,
  ink,
}: {
  variant: ProjectArtVariant
  ink: 'light' | 'dark'
}) {
  const Art = ARTS[variant]
  return <Art ink={ink === 'light' ? '#ffffff' : '#1c1418'} />
}

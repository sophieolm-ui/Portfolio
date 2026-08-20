export function PortraitPlaceholder({ label = 'S.M.' }: { label?: string }) {
  const dots = []
  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
      dots.push(
        <circle
          key={`${x}-${y}`}
          cx={30 + x * 48}
          cy={30 + y * 48}
          r={1.4}
          fill="var(--ink-soft)"
          opacity={0.25}
        />,
      )
    }
  }

  const bracket = 26

  return (
    <svg viewBox="0 0 300 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      {dots}
      {/* corner brackets */}
      <path d={`M20,${20 + bracket} L20,20 L${20 + bracket},20`} fill="none" stroke="var(--ink-soft)" strokeWidth="1" />
      <path d={`M${280 - bracket},20 L280,20 L280,${20 + bracket}`} fill="none" stroke="var(--ink-soft)" strokeWidth="1" />
      <path d={`M20,${280 - bracket} L20,280 L${20 + bracket},280`} fill="none" stroke="var(--ink-soft)" strokeWidth="1" />
      <path d={`M${280 - bracket},280 L280,280 L280,${280 - bracket}`} fill="none" stroke="var(--ink-soft)" strokeWidth="1" />
      {/* crosshair */}
      <line x1="150" y1="130" x2="150" y2="170" stroke="var(--ink)" strokeWidth="1" opacity="0.6" />
      <line x1="130" y1="150" x2="170" y2="150" stroke="var(--ink)" strokeWidth="1" opacity="0.6" />
      <circle cx="150" cy="150" r="24" fill="none" stroke="var(--ink)" strokeWidth="1" opacity="0.4" />
      <text
        x="150"
        y="205"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="12"
        letterSpacing="2"
        fill="var(--ink-soft)"
      >
        {label}
      </text>
    </svg>
  )
}

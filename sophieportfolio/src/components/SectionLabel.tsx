export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-label">
      <span className="section-label__number">{number}</span>
      <span className="section-label__line" aria-hidden="true" />
      <span className="section-label__text">{label}</span>
    </div>
  )
}

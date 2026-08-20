import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function StatCounter({
  target,
  suffix = '',
  label,
}: {
  target: number
  suffix?: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(prefersReducedMotion() ? target : 0)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const duration = 900
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div className="about-stat" ref={ref}>
      <dt>
        {value}
        {suffix}
      </dt>
      <dd>{label}</dd>
    </div>
  )
}

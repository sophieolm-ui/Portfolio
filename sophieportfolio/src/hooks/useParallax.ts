import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from './usePrefersReducedMotion'

export function useParallax<T extends HTMLElement>(speed = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    let ticking = false

    const update = () => {
      ticking = false
      const rect = el.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const elementCenter = rect.top + rect.height / 2
      const offset = (viewportCenter - elementCenter) * speed
      el.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [speed])

  return ref
}

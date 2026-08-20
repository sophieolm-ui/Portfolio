import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const WORDS = ['human.', 'delightful.', 'intuitive.', 'accessible.']

export function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion() || WORDS.length < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length)
    }, 2200)
    return () => window.clearInterval(id)
  }, [])

  return (
    <span key={index} className="rotating-word" aria-live="polite">
      {WORDS[index]}
    </span>
  )
}

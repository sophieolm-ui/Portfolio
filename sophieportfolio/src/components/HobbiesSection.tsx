import { useEffect, useState } from 'react'
import { hobbies, type Hobby } from '../data/hobbies'
import { useReveal } from '../hooks/useReveal'

// Deterministic shuffle so the grid reads as mixed rather than grouped by
// category, but stays stable between renders instead of reshuffling.
function seededShuffle<T>(items: T[], seed: number): T[] {
  let s = seed
  const rand = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff
    return s / 0x7fffffff
  }
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

const shuffledHobbies = seededShuffle(hobbies, 20240613)

export function HobbiesSection() {
  const ref = useReveal<HTMLDivElement>()
  const [active, setActive] = useState<Hobby | null>(null)

  useEffect(() => {
    if (!active) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])

  return (
    <section className="hobbies-section">
      <div className="container reveal" ref={ref}>
        <h2>Beyond the screen</h2>
        <p className="hobbies-intro">A few things I love outside of design and research.</p>

        {shuffledHobbies.length === 0 ? (
          <div className="hobbies-grid">
            <div className="hobby-card hobby-card--ghost">
              <span className="hobby-card__ghost-note">Photos coming soon</span>
            </div>
          </div>
        ) : (
          <div className="hobbies-grid">
            {shuffledHobbies.map((hobby) => (
              <button
                type="button"
                key={hobby.name}
                className="hobby-card"
                style={{ background: hobby.color, '--card-accent': hobby.color } as React.CSSProperties}
                onClick={() => setActive(hobby)}
              >
                {hobby.image && <img src={hobby.image} alt={hobby.name} />}
                <span className="hobby-card__tag">{hobby.category}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {active && (
        <div className="hobby-lightbox" onClick={() => setActive(null)}>
          <button type="button" className="hobby-lightbox__close" aria-label="Close" onClick={() => setActive(null)}>
            ✕
          </button>
          <figure className="hobby-lightbox__frame" onClick={(e) => e.stopPropagation()}>
            {active.image && <img src={active.image} alt={active.name} />}
            <figcaption>
              <span className="hobby-lightbox__tag">{active.category}</span>
              <span className="hobby-lightbox__name">{active.name}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}

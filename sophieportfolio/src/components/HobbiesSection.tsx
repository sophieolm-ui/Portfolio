import { useState } from 'react'
import { hobbies, hobbyCategories, type Hobby } from '../data/hobbies'
import { useReveal } from '../hooks/useReveal'

const GHOST_COLORS = ['#7a2f3d', '#22405f', '#6f9a4c', '#3e7c9c']

export function HobbiesSection() {
  const ref = useReveal<HTMLDivElement>()
  const [active, setActive] = useState<string>('All')

  const visible: Hobby[] = active === 'All' ? hobbies : hobbies.filter((h) => h.category === active)

  return (
    <section className="hobbies-section">
      <div className="container reveal" ref={ref}>
        <h2>Beyond the screen</h2>
        <p className="hobbies-intro">A few things I love outside of design and research.</p>

        {hobbies.length > 0 && (
          <div className="filter-bar">
            <button
              type="button"
              className={`filter-button${active === 'All' ? ' filter-button--active' : ''}`}
              onClick={() => setActive('All')}
            >
              All
            </button>
            {hobbyCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-button${active === category ? ' filter-button--active' : ''}`}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {hobbies.length === 0 ? (
          <div className="hobbies-grid">
            {hobbyCategories.map((category, i) => (
              <div
                key={category}
                className="hobby-card hobby-card--ghost"
                style={{ borderColor: GHOST_COLORS[i % GHOST_COLORS.length] }}
              >
                <span>{category}</span>
                <span className="hobby-card__ghost-note">Photos coming soon</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="hobbies-grid">
            {visible.map((hobby) => (
              <div
                key={hobby.name}
                className="hobby-card"
                style={{ background: hobby.color, '--card-accent': hobby.color } as React.CSSProperties}
              >
                {hobby.image && <img src={hobby.image} alt={hobby.name} />}
                <p className="hobby-card__name">{hobby.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

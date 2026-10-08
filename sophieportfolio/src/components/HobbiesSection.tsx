import { hobbies, hobbyCategories } from '../data/hobbies'
import { useReveal } from '../hooks/useReveal'

const GHOST_COLORS = ['#7a2f3d', '#22405f', '#6f9a4c', '#3e7c9c']

export function HobbiesSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="hobbies-section">
      <div className="container reveal" ref={ref}>
        <h2>Beyond the screen</h2>
        <p className="hobbies-intro">A few things I love outside of design and research.</p>

        {hobbyCategories.map((category, i) => {
          const items = hobbies.filter((h) => h.category === category)
          return (
            <div className="hobby-category" key={category}>
              <h3 className="hobby-category__title">{category}</h3>
              {items.length === 0 ? (
                <div className="hobbies-grid">
                  <div className="hobby-card hobby-card--ghost" style={{ borderColor: GHOST_COLORS[i % GHOST_COLORS.length] }}>
                    <span className="hobby-card__ghost-note">Photos coming soon</span>
                  </div>
                </div>
              ) : (
                <div className="hobbies-grid">
                  {items.map((hobby) => (
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
          )
        })}
      </div>
    </section>
  )
}

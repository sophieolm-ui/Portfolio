import { hobbies } from '../data/hobbies'
import { useReveal } from '../hooks/useReveal'

export function HobbiesSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="hobbies-section">
      <div className="container reveal" ref={ref}>
        <h2>Beyond the screen</h2>
        <p className="hobbies-intro">A few things I love outside of design and research.</p>

        {hobbies.length === 0 ? (
          <div className="hobbies-grid">
            <div className="hobby-card hobby-card--ghost">
              <span className="hobby-card__ghost-note">Photos coming soon</span>
            </div>
          </div>
        ) : (
          <div className="hobbies-grid">
            {hobbies.map((hobby) => (
              <div
                key={hobby.name}
                className="hobby-card"
                style={{ background: hobby.color, '--card-accent': hobby.color } as React.CSSProperties}
              >
                {hobby.image && <img src={hobby.image} alt={hobby.name} />}
                <span className="hobby-card__tag">{hobby.category}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

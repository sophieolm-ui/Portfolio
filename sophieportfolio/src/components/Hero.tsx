import { RotatingWord } from './RotatingWord'
import { PortraitPlaceholder } from './PortraitPlaceholder'
import { useParallax } from '../hooks/useParallax'
import { portraitImage } from '../data/site'

export function Hero() {
  const parallaxRef = useParallax<HTMLDivElement>(0.12)

  return (
    <section className="hero-split">
      <div className="hero-split__media">
        <div className="hero-split__media-inner" ref={parallaxRef}>
          {portraitImage ? (
            <img src={portraitImage} alt="Sophie Messer" className="hero-split__img" />
          ) : (
            <PortraitPlaceholder />
          )}
        </div>
      </div>
      <div className="hero-split__content">
        <p className="hero-split__eyebrow">Product Designer · Researcher · Manager</p>
        <h1 className="hero-split__quote">
          Making technology
          <br />
          feel <RotatingWord />
        </h1>
        <p className="hero-split__sub">
          I design and research products at the intersection of engineering
          and psychology — figuring out how to make technology work for the
          people who need it most.
        </p>
        <div className="hero-split__actions">
          <a href="#work" className="btn-pill">
            See my work
          </a>
          <a href="#about" className="btn-outline">
            About me
          </a>
        </div>
      </div>
    </section>
  )
}

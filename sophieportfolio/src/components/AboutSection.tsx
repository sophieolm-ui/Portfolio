import { useReveal } from '../hooks/useReveal'
import { StatCounter } from './StatCounter'
import { portraitImage } from '../data/site'

export function AboutSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="about-section">
      <div className="container reveal" ref={ref}>
        <div className="about-hero">
          <div className="about-hero__blob about-hero__blob--1" aria-hidden="true" />
          <div className="about-hero__blob about-hero__blob--2" aria-hidden="true" />
          <div className="about-hero__blob about-hero__blob--3" aria-hidden="true" />
          {portraitImage && (
            <span className="about-avatar-ring">
              <img src={portraitImage} alt="Sophie Messer" />
            </span>
          )}
          <div>
            <p className="about-eyebrow">Hey, I'm</p>
            <h1 className="about-title">Sophie Messer</h1>
          </div>
        </div>
        <div className="about-copy">
          <p>
            Growing up I was always very interested in technology and how it
            works. My father would spend hours explaining how different
            pieces of technology work and how they can be programmed to do
            different things.
          </p>
          <p>
            I've also always wanted to help others — through the years I've
            made myself more familiar with technology while discovering my
            passion for psychology. There are many ways technology can be
            improved to maximize the number of people who can access it,
            both through engineering and psychology.
          </p>
          <dl className="about-stats">
            <StatCounter target={3} suffix="+" label="Applications" />
            <StatCounter target={3} suffix="+" label="Years in product design" />
          </dl>
        </div>
      </div>
    </section>
  )
}

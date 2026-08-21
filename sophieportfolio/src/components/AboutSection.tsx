import { useReveal } from '../hooks/useReveal'
import { StatCounter } from './StatCounter'
import { SectionLabel } from './SectionLabel'
import { portraitImage } from '../data/site'

export function AboutSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="about-section">
      <div className="container reveal" ref={ref}>
        <SectionLabel number="02" label="About" />
        <div className="about-copy">
          <div className="about-heading-row">
            {portraitImage && <img src={portraitImage} alt="Sophie Messer" className="about-avatar" />}
            <h2>About me</h2>
          </div>
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

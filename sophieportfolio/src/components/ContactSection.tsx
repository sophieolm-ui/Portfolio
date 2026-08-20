import { useReveal } from '../hooks/useReveal'
import { SectionLabel } from './SectionLabel'

export function ContactSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <>
      <section className="contact-section">
        <div className="container reveal" ref={ref}>
          <SectionLabel number="04" label="Contact" />
          <h2>Let's build something people actually want to use.</h2>
          <p>Open to product design and research roles — reach out anytime.</p>
          <a href="mailto:sophie@example.com" className="btn-pill">
            Say hello
          </a>
        </div>
      </section>
      <footer className="site-footer container">
        <span>© {new Date().getFullYear()} Sophie Messer</span>
        <a href="mailto:sophie@example.com">sophie@example.com</a>
      </footer>
    </>
  )
}

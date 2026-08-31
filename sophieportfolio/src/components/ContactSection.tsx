import { useReveal } from '../hooks/useReveal'
import { SectionLabel } from './SectionLabel'

export function ContactSection() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <>
      <section className="contact-section">
        <div className="container reveal" ref={ref}>
          <SectionLabel number="03" label="Contact" />
          <h2>Let's build something people actually want to use.</h2>
          <p>Open to product design and research roles — reach out anytime.</p>
          <a href="mailto:sophieolm@gmail.com" className="btn-pill">
            Say hello
          </a>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <span>© {new Date().getFullYear()} Sophie Messer</span>
          <a href="mailto:sophieolm@gmail.com">sophieolm@gmail.com</a>
        </div>
      </footer>
    </>
  )
}

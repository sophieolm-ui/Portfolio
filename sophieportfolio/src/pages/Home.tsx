import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { SkillsSection } from '../components/SkillsSection'
import { ContactSection } from '../components/ContactSection'

export function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ProjectsGrid />
      <SkillsSection />
      <ContactSection />
    </>
  )
}

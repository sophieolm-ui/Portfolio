import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionLabel } from './SectionLabel'
import { useReveal } from '../hooks/useReveal'

export function ProjectsGrid() {
  const headingRef = useReveal<HTMLDivElement>()

  return (
    <section id="work" className="work-section">
      <div className="container">
        <div className="reveal" ref={headingRef}>
          <SectionLabel number="01" label="Projects" />
          <div className="section-heading">
            <h2>Selected Projects</h2>
          </div>
        </div>
      </div>
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </section>
  )
}

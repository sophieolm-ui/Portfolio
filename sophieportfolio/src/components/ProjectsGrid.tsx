import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SimpleProjectCard } from './SimpleProjectCard'
import { SectionLabel } from './SectionLabel'
import { useReveal } from '../hooks/useReveal'

export function ProjectsGrid({
  heading = 'Selected Projects',
  variant = 'hero',
}: {
  heading?: string
  variant?: 'hero' | 'simple'
}) {
  const headingRef = useReveal<HTMLDivElement>()

  return (
    <section id="work" className="work-section">
      <div className="container">
        <div className="reveal" ref={headingRef}>
          <SectionLabel number="01" label="Projects" />
          <div className="section-heading">
            <h2>{heading}</h2>
          </div>
        </div>
      </div>
      {variant === 'simple' ? (
        <div className="container">
          <div className="simple-card-grid">
            {projects.map((project) => (
              <SimpleProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      ) : (
        projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))
      )}
    </section>
  )
}

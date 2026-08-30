import { useState } from 'react'
import { projects, type ProjectCategory } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SimpleProjectCard } from './SimpleProjectCard'
import { SectionLabel } from './SectionLabel'
import { useReveal } from '../hooks/useReveal'

const CATEGORIES: ProjectCategory[] = ['Design', 'UX', 'AI', 'Research']

export function ProjectsGrid({
  heading = 'Selected Projects',
  variant = 'hero',
}: {
  heading?: string
  variant?: 'hero' | 'simple'
}) {
  const headingRef = useReveal<HTMLDivElement>()
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All')

  const homeVisible = projects.filter((p) => !p.hideFromHome)
  const visibleProjects =
    variant === 'simple'
      ? activeFilter === 'All'
        ? projects
        : projects.filter((p) => p.categories.includes(activeFilter))
      : homeVisible

  return (
    <section id="work" className="work-section">
      <div className="container">
        <div className="reveal" ref={headingRef}>
          <SectionLabel number="01" label="Projects" />
          <div className="section-heading">
            <h2>{heading}</h2>
          </div>
        </div>
        {variant === 'simple' && (
          <div className="filter-bar">
            {(['All', ...CATEGORIES] as const).map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-button${activeFilter === category ? ' filter-button--active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
      {variant === 'simple' ? (
        <div className="container">
          <div className="simple-card-grid">
            {visibleProjects.map((project) => (
              <SimpleProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      ) : (
        visibleProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))
      )}
    </section>
  )
}

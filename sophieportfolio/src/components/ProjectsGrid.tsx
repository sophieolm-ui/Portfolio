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
  const [activeFilters, setActiveFilters] = useState<ProjectCategory[]>([])

  const toggleFilter = (category: ProjectCategory) => {
    setActiveFilters((current) =>
      current.includes(category) ? current.filter((c) => c !== category) : [...current, category],
    )
  }

  const homeVisible = projects.filter((p) => !p.hideFromHome)
  const visibleProjects =
    variant === 'simple'
      ? activeFilters.length === 0
        ? projects
        : projects.filter((p) => p.categories.some((c) => activeFilters.includes(c)))
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
            <button
              type="button"
              className={`filter-button${activeFilters.length === 0 ? ' filter-button--active' : ''}`}
              onClick={() => setActiveFilters([])}
            >
              All
            </button>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-button${activeFilters.includes(category) ? ' filter-button--active' : ''}`}
                onClick={() => toggleFilter(category)}
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

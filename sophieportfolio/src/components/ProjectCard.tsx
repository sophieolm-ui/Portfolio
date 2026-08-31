import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ProjectArt } from './ProjectArt'
import { useReveal } from '../hooks/useReveal'
import { useParallax } from '../hooks/useParallax'

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const revealRef = useReveal<HTMLDivElement>()
  const parallaxRef = useParallax<HTMLDivElement>(0.12)
  const sideSign = index % 2 === 0 ? 1 : -1
  const leadRef = useParallax<HTMLDivElement>(0.65 * sideSign, 'x')
  const trailRef = useParallax<HTMLDivElement>(-0.65 * sideSign, 'x')

  return (
    <div className="project-panel reveal" ref={revealRef}>
      <span className="project-panel__index">{String(index + 1).padStart(2, '0')}</span>
      <div
        className="project-panel__media"
        style={{ background: project.cardBg }}
        ref={parallaxRef}
      >
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="project-panel__img"
            style={{ objectPosition: project.imagePosition ?? 'center' }}
          />
        ) : (
          <ProjectArt variant={project.art} ink={project.artInk} />
        )}
      </div>
      <div className="project-panel__scrim" aria-hidden="true" />
      <div className="project-panel__content">
        <div className="project-panel__lead" ref={leadRef}>
          <p className="project-panel__meta">
            {project.year} / {project.tag}
          </p>
          <h3 className="project-panel__name">{project.name}</h3>
        </div>
        <div className="project-panel__trail" ref={trailRef}>
          <Link to={`/projects/${project.slug}`} className="project-panel__link">
            View project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3.5 8h9m0 0-3.5-3.5M12.5 8 9 11.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

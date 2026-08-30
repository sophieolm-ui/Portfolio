import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ProjectArt } from './ProjectArt'
import { useReveal } from '../hooks/useReveal'

export function SimpleProjectCard({ project }: { project: Project }) {
  const revealRef = useReveal<HTMLAnchorElement>()

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="simple-card reveal"
      ref={revealRef}
      style={{ '--card-accent': project.cardBg } as React.CSSProperties}
    >
      <div className="simple-card__media" style={{ background: project.cardBg }}>
        {project.cardImage ?? project.image ? (
          <img
            src={project.cardImage ?? project.image}
            alt=""
            className="simple-card__img"
            style={{ objectPosition: project.cardImagePosition ?? project.imagePosition ?? 'center' }}
          />
        ) : (
          <ProjectArt variant={project.art} ink={project.artInk} />
        )}
      </div>
      <div className="simple-card__body">
        <p className="simple-card__meta">
          {project.year} / {project.tag}
        </p>
        <h3 className="simple-card__name">{project.name}</h3>
      </div>
    </Link>
  )
}

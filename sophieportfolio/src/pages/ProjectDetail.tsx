import { Link, useParams } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { ProjectArt } from '../components/ProjectArt'
import { projects } from '../data/projects'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <>
        <Nav />
        <div className="container project-detail">
          <Link to="/" className="project-detail__back">
            ← Back to projects
          </Link>
          <p>Project not found.</p>
        </div>
      </>
    )
  }

  return (
    <>
      <Nav />
      <div className="container project-detail">
        <Link to="/" className="project-detail__back">
          ← Back to projects
        </Link>
        <div
          className="project-detail__hero"
          style={{ background: project.cardBg }}
        >
          {project.image ? (
            <img src={project.image} alt="" className="project-detail__img" />
          ) : (
            <ProjectArt variant={project.art} ink={project.artInk} />
          )}
        </div>
        <p className="project-detail__eyebrow">{project.tag}</p>
        <h1>{project.name}</h1>
        <div className="project-detail__placeholder">{project.summary}</div>
      </div>
    </>
  )
}

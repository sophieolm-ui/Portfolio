import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { ProjectArt } from '../components/ProjectArt'
import { projects } from '../data/projects'
import { projectStories } from '../data/projectStories'

interface ActiveImage {
  src: string
  alt: string
  caption?: string
}

export function ProjectStory() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)
  const story = slug ? projectStories[slug] : undefined
  const [activeImage, setActiveImage] = useState<ActiveImage | null>(null)

  useEffect(() => {
    if (!activeImage) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeImage])

  if (!project || !story) {
    return (
      <>
        <Nav />
        <div className="container project-detail">
          <Link to="/projects" className="project-detail__back">
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
      <div className="container project-detail__back-wrap">
        <Link to="/projects" className="project-detail__back">
          ← Back to projects
        </Link>
      </div>
      <div className="project-detail__hero" style={{ background: project.cardBg }}>
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="project-detail__img"
            style={{ objectPosition: project.imagePosition ?? 'center' }}
          />
        ) : (
          <ProjectArt variant={project.art} ink={project.artInk} />
        )}
      </div>
      <div className="container project-detail">
        <p className="project-detail__eyebrow">{project.tag}</p>
        <h1>{project.name}</h1>

        <div
          className="project-story"
          style={{ '--case-accent': story.accent ?? project.cardBg } as React.CSSProperties}
        >
          <p className="project-story__tagline">{story.tagline}</p>
          <p className="project-story__intro">{story.intro}</p>

          {story.stats.length > 0 && (
            <div className="project-story__stats">
              {story.stats.map((stat) => (
                <div className="project-story__stat" key={stat.label}>
                  <span className="project-story__stat-value">{stat.value}</span>
                  <span className="project-story__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          {story.sections.map((section, i) => (
            <div className={`project-story__section${section.image ? ' project-story__section--with-image' : ''}`} key={i}>
              <div className="project-story__section-text">
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
              {section.image && (
                <figure className="project-story__figure">
                  <button
                    type="button"
                    className="case-study__figure-btn"
                    onClick={() =>
                      setActiveImage({
                        src: section.image!,
                        alt: section.imageAlt ?? '',
                        caption: section.imageCaption,
                      })
                    }
                  >
                    <img src={section.image} alt={section.imageAlt ?? ''} />
                  </button>
                  {section.imageCaption && <figcaption>{section.imageCaption}</figcaption>}
                </figure>
              )}
            </div>
          ))}

          {story.palette && story.palette.length > 0 && (
            <div className="project-story__palette">
              {story.palette.map((color) => (
                <div className="project-story__swatch" key={color.hex} style={{ background: `#${color.hex}` }} />
              ))}
            </div>
          )}

          <Link to={`/projects/${slug}/full`} className="project-story__cta">
            <span>Read the full case study</span>
            <span className="project-story__cta-arrow">→</span>
          </Link>
        </div>
      </div>

      {activeImage && (
        <div className="case-study-lightbox" onClick={() => setActiveImage(null)}>
          <button
            type="button"
            className="case-study-lightbox__close"
            aria-label="Close"
            onClick={() => setActiveImage(null)}
          >
            ✕
          </button>
          <figure className="case-study-lightbox__frame" onClick={(e) => e.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.alt} />
            {(activeImage.caption || activeImage.alt) && (
              <figcaption>{activeImage.caption ?? activeImage.alt}</figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  )
}

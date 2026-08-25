import { Link, useParams } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { ProjectArt } from '../components/ProjectArt'
import { projects } from '../data/projects'
import { caseStudies } from '../data/caseStudies'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)
  const caseStudy = slug ? caseStudies[slug] : undefined

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
        <p className="project-detail__eyebrow">{project.tag}</p>
        <h1>{project.name}</h1>

        {caseStudy ? (
          <div className="case-study">
            <p className="case-study__tagline">{caseStudy.tagline}</p>
            <p className="case-study__intro">{caseStudy.intro}</p>

            {caseStudy.sections.map((section, i) => (
              <div className="case-study__section" key={i}>
                {section.heading && <h2>{section.heading}</h2>}

                {section.facts && (
                  <dl className="case-study__facts">
                    {section.facts.map((fact) => (
                      <div className="case-study__fact" key={fact.label}>
                        <dt>{fact.label}</dt>
                        <dd>{fact.text}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {section.paragraphs?.map((paragraph, j) => <p key={j}>{paragraph}</p>)}

                {section.table && (
                  <div className="case-study__table-wrap">
                    <table className="case-study__table">
                      <thead>
                        <tr>
                          <th scope="col" />
                          {section.table.columns.map((col) => (
                            <th scope="col" key={col}>
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.label}>
                            <th scope="row">{row.label}</th>
                            {row.values.map((value, v) => (
                              <td key={v}>{value}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.cards && (
                  <div className="case-study__cards">
                    {section.cards.map((card) => (
                      <div className="case-study__card" key={card.title}>
                        <h3>{card.title}</h3>
                        {card.subtitle && <p className="case-study__card-subtitle">{card.subtitle}</p>}
                        <dl className="case-study__facts">
                          {card.facts.map((fact) => (
                            <div className="case-study__fact" key={fact.label}>
                              <dt>{fact.label}</dt>
                              <dd>{fact.text}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>
                )}

                {section.palette && (
                  <div className="case-study__palette">
                    {section.palette.map((group) => (
                      <div className="case-study__palette-group" key={group.label}>
                        <p className="case-study__palette-label">{group.label}</p>
                        <div className="case-study__swatches">
                          {group.colors.map((color) => (
                            <div className="case-study__swatch" key={color.hex}>
                              <div
                                className="case-study__swatch-color"
                                style={{ background: `#${color.hex}` }}
                              />
                              <p className="case-study__swatch-name">{color.name}</p>
                              <p className="case-study__swatch-hex">#{color.hex}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.insights && (
                  <div className="case-study__insights">
                    {section.insights.title && <p className="case-study__insights-title">{section.insights.title}</p>}
                    <ul>
                      {section.insights.items.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.links && (
                  <ul className="case-study__links">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} target="_blank" rel="noreferrer">
                          {link.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="project-detail__placeholder">{project.summary}</div>
        )}
      </div>
    </>
  )
}

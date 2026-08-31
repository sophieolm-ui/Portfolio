import { useState } from 'react'
import { skillCategories } from '../data/skills'
import { SectionLabel } from './SectionLabel'
import { useReveal } from '../hooks/useReveal'
import { useDraggableChip } from '../hooks/useDraggableChip'

const allSkills = skillCategories.flatMap((c) => c.skills)

// fixed scatter layout so chips don't overlap on load
const positions = [
  { top: '8%', left: '6%' }, { top: '6%', left: '42%' }, { top: '10%', left: '68%' },
  { top: '38%', left: '16%' }, { top: '30%', left: '50%' }, { top: '50%', left: '3%' },
  { top: '56%', left: '34%' }, { top: '40%', left: '68%' }, { top: '74%', left: '10%' },
  { top: '78%', left: '44%' }, { top: '66%', left: '66%' }, { top: '84%', left: '26%' },
  { top: '18%', left: '30%' }, { top: '60%', left: '16%' }, { top: '24%', left: '3%' },
  { top: '86%', left: '2%' },
]

function PlaygroundChip({ skill, position }: { skill: (typeof allSkills)[number]; position: { top: string; left: string } }) {
  const drag = useDraggableChip<HTMLDivElement>()
  return (
    <div
      className="skills-chip"
      ref={drag.ref}
      style={{ top: position.top, left: position.left }}
      onPointerDown={drag.onPointerDown}
      onPointerMove={drag.onPointerMove}
      onPointerUp={drag.onPointerUp}
      onPointerCancel={drag.onPointerCancel}
    >
      <span className="skills-chip__icon" style={{ color: skill.color }}>
        {skill.short}
      </span>
      <span className="skills-chip__name">{skill.name}</span>
    </div>
  )
}

export function SkillsSection() {
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const ref = useReveal<HTMLDivElement>()
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="reveal" ref={ref}>
          <SectionLabel number="02" label="Skills" />
          <div className="skills-header">
            <div>
              <h2 className="skills-heading">Things I design with.</h2>
              <p className="skills-sub">
                A focused toolkit for research, prototyping, and shipping
                products people actually want to use.
              </p>
            </div>
            <span className="skills-header__meta">My toolkit</span>
          </div>

          <div className="skills-tabs" role="tablist">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={cat.id === activeId}
                className={`skills-tab${cat.id === activeId ? ' is-active' : ''}`}
                onClick={() => setActiveId(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="skills-body">
            <div className="skills-list">
              <div className="skills-list__meta">
                <span className="skills-list__label">Expertise</span>
                <span className="skills-list__count">{active.skills.length.toString().padStart(2, '0')} skills</span>
              </div>
              <h3 className="skills-list__title">{active.label}</h3>
              <div className="skills-grid">
                {active.skills.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <div className="skill-card__top">
                      <span className="skill-card__icon" style={{ color: skill.color }}>
                        {skill.short}
                      </span>
                      <div>
                        <p className="skill-card__name">{skill.name}</p>
                        <p className="skill-card__tag">{skill.tag}</p>
                      </div>
                    </div>
                    <p className="skill-card__desc">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-playground">
              <div className="skills-playground__header">
                <div>
                  <span className="skills-playground__title">Skill playground</span>
                  <span className="skills-playground__subtitle">Interactive toolkit</span>
                </div>
                <span className="skills-playground__hint">Drag the icons</span>
              </div>
              <div className="skills-playground__canvas">
                <span className="skills-playground__watermark" aria-hidden="true">
                  STACK
                </span>
                {allSkills.map((skill, i) => (
                  <PlaygroundChip key={skill.name} skill={skill} position={positions[i % positions.length]} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export interface Skill {
  name: string
  tag: string
  description: string
  color: string
  short: string
}

export interface SkillCategory {
  id: string
  label: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'design',
    label: 'Design',
    skills: [
      { name: 'Figma', tag: 'Design tool', description: 'Interface & prototyping design', color: '#a259ff', short: 'Fg' },
      { name: 'Sketch', tag: 'Design tool', description: 'UI design & component systems', color: '#f7b500', short: 'Sk' },
      { name: 'Framer', tag: 'Prototyping', description: 'Interactive, code-backed prototypes', color: '#0055ff', short: 'Fr' },
      { name: 'Illustrator', tag: 'Visual design', description: 'Iconography & brand assets', color: '#ff9a00', short: 'Ai' },
    ],
  },
  {
    id: 'research',
    label: 'Research',
    skills: [
      { name: 'User Interviews', tag: 'Research method', description: 'Qualitative insight gathering', color: '#4f8a3a', short: 'Int' },
      { name: 'Usability Testing', tag: 'Research method', description: 'Task-based evaluation', color: '#3e7c9c', short: 'UT' },
      { name: 'Surveys', tag: 'Research method', description: 'Quantitative feedback at scale', color: '#f2617e', short: 'Sv' },
      { name: 'A/B Testing', tag: 'Research method', description: 'Comparative experiments', color: '#6f6d70', short: 'AB' },
    ],
  },
  {
    id: 'management',
    label: 'Management',
    skills: [
      { name: 'Roadmapping', tag: 'Strategy', description: 'Prioritization & planning', color: '#4f8a3a', short: 'Rd' },
      { name: 'Jira', tag: 'Project tool', description: 'Sprint & ticket tracking', color: '#0052cc', short: 'Ji' },
      { name: 'Stakeholder Comms', tag: 'Leadership', description: 'Cross-functional alignment', color: '#f2617e', short: 'Sh' },
      { name: 'OKRs', tag: 'Strategy', description: 'Goal-setting & measurement', color: '#3e7c9c', short: 'OK' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Miro', tag: 'Collaboration', description: 'Workshops & journey mapping', color: '#ffd02f', short: 'Mi' },
      { name: 'Notion', tag: 'Docs & planning', description: 'Specs, wikis & roadmaps', color: '#f5f4f2', short: 'No' },
      { name: 'Slack', tag: 'Collaboration', description: 'Team communication', color: '#e01e5a', short: 'Sl' },
      { name: 'GitHub', tag: 'Handoff', description: 'Design-to-dev collaboration', color: '#f5f4f2', short: 'Gh' },
    ],
  },
]

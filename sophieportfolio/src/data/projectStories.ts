export interface ProjectStoryStat {
  value: string
  label: string
}

export interface ProjectStorySection {
  heading?: string
  paragraphs: string[]
}

export interface ProjectStoryPaletteColor {
  name: string
  hex: string
}

export interface ProjectStory {
  tagline: string
  intro: string
  stats: ProjectStoryStat[]
  sections: ProjectStorySection[]
  palette?: ProjectStoryPaletteColor[]
}

// Short, narrative version of a case study, for projects whose full write-up
// is long. Keyed by project slug — only projects listed here get the
// short-story-first page; everything else still opens straight to the full
// case study.
export const projectStories: Record<string, ProjectStory> = {
  'city-hungarian-culture-festival': {
    tagline: 'A visual identity and app for a three-day Hungarian culture festival',
    intro:
      'For a 10-week course project, I designed a full visual identity and app for an imagined festival on the University of Washington campus — one that brings Hungarian food, music, dance, and craft to people who already love it, and to people who have never encountered it before.',
    stats: [
      { value: '10', label: 'Week project' },
      { value: '3', label: 'Festivals researched' },
      { value: '3', label: 'Personas built' },
    ],
    sections: [
      {
        heading: 'The idea',
        paragraphs: [
          'Most Hungarian culture festivals run for one day and wrap up by early evening — great for families, less so for anyone who wants a night out. I designed a three-day festival that keeps performances, food, and craft running into the evening, so it works for a 9-year-old with her mom and a 20-year-old with her friends alike.',
        ],
      },
      {
        heading: 'Finding the gap',
        paragraphs: [
          'I compared three real Hungarian festivals around the world — in Tokyo, Virginia, and Florida — and built three personas around who they actually serve: a child, a mother reconnecting with her roots, and a college student curious about a culture that isn’t her own. The festival I designed sits in the overlap: free to attend, easy to reach, with hands-on workshops for kids and a lineup that holds up after dark.',
        ],
      },
      {
        heading: 'A visual identity, start to finish',
        paragraphs: [
          'The identity centers on a paper airplane mark paired with a curled script wordmark — a nod to travel and discovery — carried through a tetradic palette of red, green, light blue, and purple that nods to the Hungarian flag while staying playful and accessible (7:1 contrast on the red, 5.99:1 on the green). From there it extends into a festival poster, wayfinding signage, and a full campus map.',
        ],
      },
      {
        heading: 'The app',
        paragraphs: [
          'The companion app focuses on one flow: browsing and buying festival merch. An opening animation connects the wordmark to the nav icon, a critique that pushed the design toward more cohesion between screens. Usability feedback also trimmed the merch grid from three items a row to two, after early testers found it overwhelming.',
        ],
      },
    ],
    palette: [
      { name: 'Red', hex: 'A6151A' },
      { name: 'Green', hex: '146A4F' },
      { name: 'Yellow', hex: 'FCCC5D' },
      { name: 'Blue', hex: '416098' },
    ],
  },
}

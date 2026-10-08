export interface ProjectStoryStat {
  value: string
  label: string
}

export interface ProjectStorySection {
  heading?: string
  paragraphs: string[]
  image?: string
  imageAlt?: string
  imageCaption?: string
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
  /** Overrides the project's card color as the accent for stats/CTA, when the
   * case study has its own established brand color (e.g. GlowTap's mauve). */
  accent?: string
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

  glowtap: {
    tagline: '"See your water, save your water"',
    accent: '#8c6e86',
    intro:
      'GlowTap is a faucet attachment that glows green, yellow, or red to cue people to turn off the water sooner — a hands-on exploration of behavior change through physical prototyping, built across four iterations and three rounds of user testing.',
    stats: [
      { value: '4', label: 'Prototype iterations' },
      { value: '3', label: 'User testing rounds' },
      { value: '30+', label: 'Showcase viewers' },
    ],
    sections: [
      {
        heading: 'The concept',
        paragraphs: [
          'Inspired by UN SDG 6 (Clean Water and Sanitation), GlowTap clips onto a bathroom faucet and uses smiley-face light cues — green for safe, yellow for a warning, red for turn it off now — to nudge people toward shorter handwashing and face-washing habits, without lecturing them about it.',
        ],
      },
      {
        heading: 'Shape, then signal',
        paragraphs: [
          'Cardboard mockups settled the physical question first: a circular form beat a hexagonal one for comfort and how "unified" it looked with the sink. Laser-cut light shapes settled the signal — testers read smiley faces faster and more reliably than plus/minus icons or hand symbols, and one tester flagged that the faces also worked better for colorblindness.',
        ],
        image: '/images/projects/glowtap/laser-cut-shapes.png',
        imageCaption: 'Seven laser-cut light shapes tested for clarity and tone.',
      },
      {
        heading: 'Solving the fit',
        paragraphs: [
          'Early 3D-printed shells kept slipping off the faucet. The fix wasn’t a tighter diameter — it was texture: a "dot" grip pattern held firm even with water running, while a "diagonal" pattern tested the same week slid right off.',
        ],
        image: '/images/projects/glowtap/3d-print-final.png',
        imageCaption: 'The final 3D-printed shell, with its "dot" grip texture and light chamber.',
      },
      {
        heading: 'Wizard of Oz, real reactions',
        paragraphs: [
          'For the highest-fidelity test, a teammate hid under the sink manually triggering the lights through a soldered circuit while a participant washed their hands with no prior explanation. They stopped the water the moment it turned red — unprompted — and called the colors "something we grew up accustomed to."',
        ],
        image: '/images/projects/glowtap/wizard-of-oz.png',
        imageCaption: 'Green, yellow, and red light cues during the Wizard of Oz test.',
      },
      {
        heading: 'Showcase',
        paragraphs: [
          'The final demo went in front of 30+ students, two design professors, and visiting professionals. The feedback: the solution felt intuitive and non-obtrusive, and the branding itself made people want one — alongside open questions about sensing real flow rate and designing for low-vision users.',
        ],
      },
    ],
    palette: [
      { name: 'Green', hex: '4f8a3a' },
      { name: 'Yellow', hex: 'f0c33a' },
      { name: 'Red', hex: 'c0392b' },
    ],
  },
}

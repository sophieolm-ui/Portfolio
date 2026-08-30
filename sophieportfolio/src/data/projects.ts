export type ProjectArtVariant = 'sensigo' | 'glowtap' | 'city' | 'trail' | 'arus' | 'foreflight' | 'london'

export type ProjectCategory = 'Design' | 'UX' | 'AI' | 'Research'

export interface Project {
  slug: string
  name: string
  year: string
  tag: string
  summary: string
  cardBg: string
  art: ProjectArtVariant
  artInk: 'light' | 'dark'
  /** Path under public/, e.g. '/images/projects/sensigo-hero.jpg'. Once set, this
   * replaces the abstract placeholder art on both the work panel and detail page. */
  image?: string
  /** CSS object-position for `image`, e.g. 'center bottom'. Defaults to 'center'. */
  imagePosition?: string
  /** CSS object-position used only on the compact grid card (/projects). Falls back to imagePosition, then 'center'. */
  cardImagePosition?: string
  /** Path under public/ used on the home panel and the compact grid card, but not the detail hero. Falls back to `image`. */
  cardImage?: string
  /** If true, this project is skipped on the home page's "Selected Projects" panel, but still shows on /projects. */
  hideFromHome?: boolean
  /** Used by the filter bar on /projects. */
  categories: ProjectCategory[]
}

// Placeholder data carried over from the existing site structure.
// Swap summaries / add case-study content once it's ready.
export const projects: Project[] = [
  {
    slug: 'sensigo',
    name: 'Sensigo',
    year: '2025',
    tag: 'Mobile · Product design',
    summary: 'Case study coming soon.',
    cardBg: '#2b2138',
    art: 'sensigo',
    artInk: 'light',
    image: '/images/projects/sensigo-cover.png',
    imagePosition: 'left bottom',
    categories: ['Design', 'UX', 'AI'],
  },
  {
    slug: 'foreflight-social',
    name: 'ForeFlight Social',
    year: '2026',
    tag: 'Mobile · UX research',
    summary: 'Case study coming soon.',
    cardBg: '#22405f',
    art: 'foreflight',
    artInk: 'light',
    image: '/images/projects/foreflight-cover.png',
    cardImagePosition: '35% center',
    categories: ['UX', 'Research'],
  },
  {
    slug: 'glowtap',
    name: 'GlowTap',
    year: '2025',
    tag: 'Hardware · Product design',
    summary: 'Case study coming soon.',
    cardBg: '#3e7c9c',
    art: 'glowtap',
    image: '/images/projects/glowtap-cover.png',
    cardImage: '/images/projects/glowtap-card.png',
    cardImagePosition: 'left center',
    artInk: 'light',
    categories: ['Design'],
  },
  {
    slug: 'city-hungarian-culture-festival',
    name: 'City — Hungarian Culture Festival',
    year: '2025',
    tag: 'Brand · Event design',
    summary: 'Case study coming soon.',
    cardBg: '#f6c7d2',
    art: 'city',
    artInk: 'dark',
    image: '/images/projects/city-cover.png',
    categories: ['Design'],
  },
  {
    slug: 'trail-flow',
    name: 'Trail Flow',
    year: '2024',
    tag: 'Mobile · UX research',
    summary: 'Case study coming soon.',
    cardBg: '#6f9a4c',
    art: 'trail',
    artInk: 'light',
    image: '/images/projects/trailflow-cover.png',
    cardImagePosition: '24% center',
    categories: ['UX', 'Research'],
  },
  {
    slug: 'arus',
    name: 'ARUS',
    year: '2026',
    tag: 'Sustainability · Systems design',
    summary: 'Case study coming soon.',
    cardBg: '#1d5c66',
    art: 'arus',
    artInk: 'light',
    image: '/images/projects/arus-banner.png',
    cardImagePosition: '20% center',
    categories: ['Design', 'Research'],
  },
  {
    slug: 'london-study-abroad',
    name: 'London Study Abroad',
    year: '2026',
    tag: 'Experiential · Conceptual design',
    summary: 'Designing through trial and error with UW and the University of the Arts London.',
    cardBg: '#7a2f3d',
    art: 'london',
    artInk: 'light',
    cardImage: '/images/projects/london-cover.jpg',
    hideFromHome: true,
    categories: ['Design', 'Research'],
  },
]

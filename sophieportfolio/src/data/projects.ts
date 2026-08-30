export type ProjectArtVariant = 'sensigo' | 'glowtap' | 'city' | 'trail' | 'arus' | 'foreflight'

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
  },
  {
    slug: 'glowtap',
    name: 'GlowTap',
    year: '2025',
    tag: 'Hardware · Product design',
    summary: 'Case study coming soon.',
    cardBg: '#3e7c9c',
    art: 'glowtap',
    artInk: 'light',
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
  },
]

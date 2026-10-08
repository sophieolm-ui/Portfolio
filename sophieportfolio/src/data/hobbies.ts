export interface Hobby {
  name: string
  category: string
  color: string
  image?: string
}

// Add real hobbies here once photos are ready — the gallery below and its
// category filter build themselves automatically from this list.
export const hobbyCategories = ['Photography']

export const hobbies: Hobby[] = [
  { name: 'London', category: 'Photography', color: '#3e5c3a', image: '/images/hobbies/photo-london.jpg' },
  { name: 'Countryside', category: 'Photography', color: '#6f9a4c', image: '/images/hobbies/photo-countryside.jpg' },
  { name: 'Coastline', category: 'Photography', color: '#3e7c9c', image: '/images/hobbies/photo-coastline.jpg' },
  { name: 'Prague', category: 'Photography', color: '#a65a3c', image: '/images/hobbies/photo-prague.jpg' },
  { name: 'Hanoi', category: 'Photography', color: '#4f8a3a', image: '/images/hobbies/photo-hanoi.jpg' },
]

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
  { name: 'New York', category: 'Photography', color: '#2f3b4a', image: '/images/hobbies/photo-nyc.jpg' },
  { name: 'Autumn', category: 'Photography', color: '#8a5a2f', image: '/images/hobbies/photo-autumn.jpg' },
  { name: 'Yellowstone', category: 'Photography', color: '#c9752f', image: '/images/hobbies/photo-yellowstone.jpg' },
]

export interface Hobby {
  name: string
  category: string
  color: string
  image?: string
}

// Add real hobbies here once photos are ready — the gallery below and its
// category filter build themselves automatically from this list.
export const hobbyCategories = ['Photography', 'Baking', 'Jewelry']

export const hobbies: Hobby[] = [
  { name: 'London', category: 'Photography', color: '#3e5c3a', image: '/images/hobbies/photo-london.jpg' },
  { name: 'Countryside', category: 'Photography', color: '#6f9a4c', image: '/images/hobbies/photo-countryside.jpg' },
  { name: 'Coastline', category: 'Photography', color: '#3e7c9c', image: '/images/hobbies/photo-coastline.jpg' },
  { name: 'Prague', category: 'Photography', color: '#a65a3c', image: '/images/hobbies/photo-prague.jpg' },
  { name: 'Hanoi', category: 'Photography', color: '#4f8a3a', image: '/images/hobbies/photo-hanoi.jpg' },
  { name: 'New York', category: 'Photography', color: '#2f3b4a', image: '/images/hobbies/photo-nyc.jpg' },
  { name: 'Autumn', category: 'Photography', color: '#8a5a2f', image: '/images/hobbies/photo-autumn.jpg' },
  { name: 'Yellowstone', category: 'Photography', color: '#c9752f', image: '/images/hobbies/photo-yellowstone.jpg' },
  { name: 'Adriatic Coast', category: 'Photography', color: '#2f6f8f', image: '/images/hobbies/photo-adriatic.jpg' },
  { name: 'Vineyard', category: 'Photography', color: '#5a7a3a', image: '/images/hobbies/photo-vineyard.jpg' },
  { name: 'Natural History Museum', category: 'Photography', color: '#4a5c3e', image: '/images/hobbies/photo-nhm.jpg' },
  { name: 'Hanoi Cafe', category: 'Photography', color: '#3f6b3f', image: '/images/hobbies/photo-hanoi-cafe.jpg' },
  { name: 'Split', category: 'Photography', color: '#3e6b8f', image: '/images/hobbies/photo-split.jpg' },
  { name: 'Amphitheater', category: 'Photography', color: '#8a7355', image: '/images/hobbies/photo-amphitheater.jpg' },
  { name: 'Tulips', category: 'Photography', color: '#d9a62f', image: '/images/hobbies/photo-tulips.jpg' },
  { name: 'Ferns', category: 'Photography', color: '#6a8a2f', image: '/images/hobbies/photo-ferns.jpg' },
  { name: 'Cherry Blossoms', category: 'Photography', color: '#2f5c8f', image: '/images/hobbies/photo-cherry-blossoms.jpg' },
  { name: 'Beachy Head', category: 'Photography', color: '#3e8fa6', image: '/images/hobbies/photo-beachy-head.jpg' },
  { name: 'Golden Gate', category: 'Photography', color: '#6f6f6f', image: '/images/hobbies/photo-golden-gate.jpg' },
  { name: 'Pacific Coast', category: 'Photography', color: '#3e5c5c', image: '/images/hobbies/photo-pacific-coast.jpg' },
  { name: 'Bunny Cake', category: 'Baking', color: '#d98fae', image: '/images/hobbies/baking-bunny.jpg' },
  { name: 'Raspberry Mille-Feuille', category: 'Baking', color: '#6b3f36', image: '/images/hobbies/baking-raspberry.jpg' },
  { name: 'One Year Cake', category: 'Baking', color: '#b6c96a', image: '/images/hobbies/baking-1year.jpg' },
  { name: 'Twentieth Birthday Cake', category: 'Baking', color: '#e8dfc8', image: '/images/hobbies/baking-20.jpg' },
  { name: 'Twenty-First Birthday Cake', category: 'Baking', color: '#c7cf7a', image: '/images/hobbies/baking-21.jpg' },
  { name: 'Green Flower Earrings', category: 'Jewelry', color: '#4f8a3a', image: '/images/hobbies/jewelry-green-earrings.jpg' },
  { name: 'Daisy Earrings', category: 'Jewelry', color: '#e8c94a', image: '/images/hobbies/jewelry-daisy-earrings.jpg' },
  { name: 'Market Table', category: 'Jewelry', color: '#8a6fae', image: '/images/hobbies/jewelry-market-table.jpg' },
]

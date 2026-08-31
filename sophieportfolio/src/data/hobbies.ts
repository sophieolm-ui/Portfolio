export interface Hobby {
  name: string
  category: string
  color: string
  image?: string
}

// Add real hobbies here once photos are ready — the gallery below and its
// category filter build themselves automatically from this list.
export const hobbyCategories = ['Creative', 'Outdoors', 'Food', 'Music']

export const hobbies: Hobby[] = []

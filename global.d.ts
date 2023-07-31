import type { Collection, Member, Course, Quote, Product } from 'models'

declare global {
  function confetti(): () => (value: string, opts?: unknown) => void

  type AppDatabase = {
    teamMembers: Member[]
    collections: Collection[]
    courses: Course[]
    products: Product[]
    quotes: Quote[]
  }
}

export {}

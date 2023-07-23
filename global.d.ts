declare global {
  function confetti(): () => (value: string, opts?: unknown) => void

  type TeamMember = {
    id: string
    name: string
  }

  type Collection = {
    id: string
    slug: string
    name: string
  }

  type Course = {
    id: string
    slug: string
    name: string
  }

  type Product = {
    id: string
    slug: string
    name: string
  }

  type Service = {
    id: string
    slug: string
    name: string
  }

  type AppDatabase = {
    teamMembers: TeamMember[]
    collections: Collection[]
    courses: Course[]
    products: Product[]
  }
}

export {}

import { object, optional, string, type Output } from 'valibot'

export const CollectionSchema = object({
  id: string(),
  name: string(),
  description: string(),
  createdAt: optional(string()),
  updatedAt: optional(string()),
})

export const CollectionItemSchema = object({
  id: string(),
  title: string(),
  slug: string(),
  excerpt: string(),
  content: string(),
  url: string(),
  description: string(),
  createdAt: optional(string()),
  updatedAt: optional(string()),
})

export type Collection = Output<typeof CollectionSchema>
export type CollectionItem = Output<typeof CollectionItemSchema>

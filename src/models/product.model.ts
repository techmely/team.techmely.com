import { object, optional, string, type Output } from 'valibot'

export const ProductSchema = object({
  id: string(),
  title: string(),
  slug: string(),
  content: string(),
  thumbnail: string(),
  createdAt: optional(string()),
  updatedAt: optional(string()),
})

export type Product = Output<typeof ProductSchema>

import { object, optional, string, type Output } from 'valibot'

export const TagSchema = object({
  id: string(),
  name: string(),
  slug: string(),
  description: string(),
  createdAt: optional(string()),
  updatedAt: optional(string()),
})

export type Tag = Output<typeof TagSchema>

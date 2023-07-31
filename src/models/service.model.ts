import { number, object, string, type Output, optional } from 'valibot'

export const ServiceSchema = object({
  id: number(),
  title: string(),
  description: string(),
  countInterested: number(),
  createdAt: optional(string()),
  updatedAt: optional(string()),
})

export type Service = Output<typeof ServiceSchema>

import { object, string, optional, type Output } from 'valibot'

export const CourseSchema = object({
  id: string(),
  title: string(),
  slug: string(),
  description: string(),
  createdAt: optional(string()),
  updatedAt: optional(string()),
})

export type Course = Output<typeof CourseSchema>

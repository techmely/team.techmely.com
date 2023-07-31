import { object, optional, string, type Output } from 'valibot'

export const QuoteSchema = object({
  id: string(),
  content: string(),
  createdAt: optional(string()),
  updatedAt: optional(string()),
})

export type Quote = Output<typeof QuoteSchema>

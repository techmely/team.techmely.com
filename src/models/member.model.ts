import {
  email,
  minLength,
  object,
  string,
  type Output,
  url,
  number,
  minValue,
  optional,
} from 'valibot'

export const MemberSchema = object({
  id: number(),
  name: string([minLength(10)]),
  username: string([minLength(10)]),
  email: string([email()]),
  avatarUrl: string([url()]),
  // The page layout for the member's profile page.
  layout: string(),
  order: number([minValue(1)]),
  createdAt: optional(string()),
  updatedAt: optional(string()),
})

export type Member = Output<typeof MemberSchema>

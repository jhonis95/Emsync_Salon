import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const createUserPropsValidator = vine.compile(
  vine.object({
    fullname: vine.string(),
    email: vine.string(),
    password: vine.string(),
  })
)
export type TcreatUserInputs = Infer<typeof createUserPropsValidator>

import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const createUserPropsValidator = vine.create({
  fullname: vine.string(),
  email: vine.string(),
  //password tem que ter pelo menos 1 numero, 1 letra maiuscula e 1 caractere especial
  password: vine
    .string()
    .maxLength(32)
    .minLength(8)
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/),
})
/**
 * 
const emailOrPhone = vine.group([
  vine.group.if((data) => 'email' in data, {
    email: vine.string().email()
  }),
  vine.group.if((data) => 'phone' in data, {
    phone: vine.string().mobile()
  }),
])
 */

export const loginUserVilidatorSchema = {
  email: vine.string().email(),
  password: vine
    .string()
    .maxLength(32)
    .minLength(8)
}

export type TcreatUserInputs = Infer<typeof createUserPropsValidator>

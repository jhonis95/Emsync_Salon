import vine from '@vinejs/vine'

export const createUserPropsValiadator = vine.compile(
    vine.object({
        fullname:vine.string(),
        email: vine.string(),
        password: vine.string()
    })
)
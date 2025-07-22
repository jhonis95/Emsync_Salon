import vine from '@vinejs/vine'

export const createTenantPropsValidator = vine.compile(
    vine.object({
        company_name:vine.string()
    })
)
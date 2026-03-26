import vine from '@vinejs/vine'
import app from '@adonisjs/core/services/app'
import { Collection } from '@adonisjs/content'
import { loaders } from '@adonisjs/content/loaders'

// Define a schema
const portalHomePageSchema = {
    headerText: vine.object({
        title: vine.string(),
        subtitle: vine.string()
    }),
    quickActionCards: vine.array(vine.object({
            title: vine.string(),
            text: vine.string(),
            icon: vine.object({
                name: vine.string(),
                width: vine.number(),
                height: vine.number(),
                color: vine.string()
            }),
            buttonText: vine.string(),
            link: vine.string()
        })
    )
}

export const portalHomePageCollection = new Collection({
    schema: vine.object(portalHomePageSchema),
    loader: loaders.jsonLoader(app.makePath('content/portal/homePageData.json')),
    cache: true,
})


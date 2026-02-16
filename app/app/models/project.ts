import { DateTime } from 'luxon'
import { BaseModel, column, computed, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import ProjectTranslation from './project_translation.js'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare slug: string

  @column()
  declare images: string | null

  @column()
  declare url: string | null

  @column()
  declare isPublished: boolean

  @column()
  declare order: number

  @column()
  declare category: 'work' | 'side-project'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => ProjectTranslation)
  declare translations: HasMany<typeof ProjectTranslation>

  @computed({ serializeAs: 'imageList' })
  get imageList(): string[] {
    if (!this.images) return []
    return this.images.split(',').filter((img) => img.trim())
  }

  @computed({ serializeAs: 'firstImage' })
  get firstImage(): string | null {
    return this.imageList[0] || null
  }
}

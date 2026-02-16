import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'projects'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('images').nullable()
    })

    // Copy existing image data to images column
    this.defer(async (db) => {
      const projects = await db.from('projects').select('id', 'image')
      for (const project of projects) {
        if (project.image) {
          await db.from('projects').where('id', project.id).update({ images: project.image })
        }
      }
    })

    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('image')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('image').nullable()
    })

    this.defer(async (db) => {
      const projects = await db.from('projects').select('id', 'images')
      for (const project of projects) {
        if (project.images) {
          const firstImage = project.images.split(',')[0]
          await db.from('projects').where('id', project.id).update({ image: firstImage })
        }
      }
    })

    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('images')
    })
  }
}

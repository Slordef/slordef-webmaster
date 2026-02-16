import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'project_translations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('project_id').unsigned().references('id').inTable('projects').onDelete('CASCADE')
      table.enum('locale', ['en', 'fr']).notNullable()
      table.string('title').notNullable()
      table.text('description').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.unique(['project_id', 'locale'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
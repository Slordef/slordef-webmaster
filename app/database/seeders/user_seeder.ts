import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.firstOrCreate(
      { email: 'admin@slordef-webmaster.ch' },
      {
        fullName: 'Admin',
        email: 'a@a.com',
        password: 'a',
      }
    )
  }
}

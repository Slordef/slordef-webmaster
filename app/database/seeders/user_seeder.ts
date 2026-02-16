import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import env from '#start/env'

export default class extends BaseSeeder {
  async run() {
    const email = env.get('ADMIN_EMAIL')
    const password = env.get('ADMIN_PASSWORD')

    if (!email || !password) {
      console.log('ADMIN_EMAIL and ADMIN_PASSWORD not set, skipping admin user creation')
      return
    }

    await User.firstOrCreate(
      { email },
      {
        fullName: 'Admin',
        email,
        password,
      }
    )
  }
}

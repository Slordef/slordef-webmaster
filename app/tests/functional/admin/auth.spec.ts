import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import User from '#models/user'

test.group('Admin auth', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())

  test('redirects guests to the login page', async ({ client }) => {
    const response = await client.get('/admin').redirects(0)

    response.assertStatus(302)
    response.assertHeader('location', '/admin/login')
  })

  test('logs in with valid credentials', async ({ client }) => {
    await User.create({ email: 'admin@example.com', password: 'secret' })

    const response = await client
      .post('/admin/login')
      .form({ email: 'admin@example.com', password: 'secret' })
      .withCsrfToken()
      .redirects(0)

    response.assertStatus(302)
    response.assertHeader('location', '/admin')
  })

  test('rejects invalid credentials', async ({ client }) => {
    await User.create({ email: 'admin@example.com', password: 'secret' })

    const response = await client
      .post('/admin/login')
      .form({ email: 'admin@example.com', password: 'wrong' })
      .withCsrfToken()
      .redirects(0)

    response.assertStatus(302)
    response.assertFlashMessage('error', 'Invalid credentials')
  })

  test('shows the dashboard to a logged in user', async ({ client }) => {
    const user = await User.create({ email: 'admin@example.com', password: 'secret' })

    const response = await client.get('/admin').loginAs(user).withInertia()

    response.assertStatus(200)
    response.assertInertiaComponent('admin/Dashboard')
  })

  test('logs out', async ({ client }) => {
    const user = await User.create({ email: 'admin@example.com', password: 'secret' })

    const response = await client.post('/admin/logout').loginAs(user).withCsrfToken().redirects(0)

    response.assertStatus(302)
    response.assertHeader('location', '/admin/login')
  })
})

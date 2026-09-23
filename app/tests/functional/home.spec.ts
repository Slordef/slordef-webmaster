import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import Project from '#models/project'

test.group('Home', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())

  test('lists only published projects in order', async ({ client, assert }) => {
    await Project.createMany([
      { slug: 'second', isPublished: true, order: 2, category: 'work' },
      { slug: 'hidden', isPublished: false, order: 0, category: 'work' },
      { slug: 'first', isPublished: true, order: 1, category: 'side-project' },
    ])

    const response = await client.get('/').withInertia()

    response.assertStatus(200)
    response.assertInertiaComponent('Home')
    assert.deepEqual(
      response.inertiaProps.projects.map((project: Project) => project.slug),
      ['first', 'second']
    )
  })

  test('stores the chosen locale in session', async ({ client }) => {
    const response = await client
      .post('/locale')
      .form({ locale: 'fr' })
      .withCsrfToken()
      .redirects(0)

    response.assertStatus(302)
    response.assertSession('locale', 'fr')
  })

  test('ignores an unsupported locale', async ({ client }) => {
    const response = await client
      .post('/locale')
      .form({ locale: 'de' })
      .withCsrfToken()
      .redirects(0)

    response.assertStatus(302)
    response.assertSessionMissing('locale')
  })
})

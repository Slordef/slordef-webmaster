import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import Project from '#models/project'
import User from '#models/user'

test.group('Admin projects', (group) => {
  let user: User

  group.each.setup(async () => {
    const rollback = await testUtils.db().withGlobalTransaction()
    user = await User.create({ email: 'admin@example.com', password: 'secret' })
    return rollback
  })

  test('lists projects', async ({ client, assert }) => {
    await Project.create({ slug: 'draft', isPublished: false, order: 1, category: 'work' })

    const response = await client.get('/admin/projects').loginAs(user).withInertia()

    response.assertStatus(200)
    response.assertInertiaComponent('admin/Projects')
    assert.lengthOf(response.inertiaProps.projects, 1)
  })

  test('creates a project with its translations', async ({ client, assert }) => {
    const response = await client
      .post('/admin/projects')
      .loginAs(user)
      .withCsrfToken()
      .redirects(0)
      .json({
        slug: 'new-project',
        url: 'https://example.com',
        isPublished: true,
        order: 3,
        category: 'work',
        translations: {
          en: { title: 'New project', description: '<p>EN</p>' },
          fr: { title: 'Nouveau projet', description: '<p>FR</p>' },
        },
      })

    response.assertStatus(302)
    response.assertHeader('location', '/admin/projects')

    const project = await Project.query()
      .where('slug', 'new-project')
      .preload('translations')
      .firstOrFail()
    assert.isTrue(project.isPublished)
    assert.sameMembers(
      project.translations.map((translation) => translation.title),
      ['New project', 'Nouveau projet']
    )
  })

  test('updates a project and its translations', async ({ client, assert }) => {
    const project = await Project.create({
      slug: 'old',
      isPublished: false,
      order: 1,
      category: 'work',
    })
    await project.related('translations').create({ locale: 'en', title: 'Old' })

    const response = await client
      .post(`/admin/projects/${project.id}`)
      .loginAs(user)
      .withCsrfToken()
      .redirects(0)
      .json({
        slug: 'renamed',
        isPublished: true,
        translations: {
          en: { title: 'Renamed' },
          fr: { title: 'Renommé' },
        },
      })

    response.assertStatus(302)

    await project.refresh()
    await project.load('translations')
    assert.equal(project.slug, 'renamed')
    assert.isTrue(project.isPublished)
    assert.sameMembers(
      project.translations.map((translation) => translation.title),
      ['Renamed', 'Renommé']
    )
  })

  test('deletes a project', async ({ client, assert }) => {
    const project = await Project.create({
      slug: 'to-delete',
      isPublished: false,
      order: 1,
      category: 'work',
    })

    const response = await client
      .delete(`/admin/projects/${project.id}`)
      .loginAs(user)
      .withCsrfToken()
      .redirects(0)

    response.assertStatus(302)
    assert.isNull(await Project.find(project.id))
  })

  test('is not reachable by guests', async ({ client }) => {
    const response = await client.get('/admin/projects').redirects(0)

    response.assertStatus(302)
    response.assertHeader('location', '/admin/login')
  })
})

import { test } from '@japa/runner'
import Project from '#models/project'

test.group('Project model', () => {
  test('splits images into a list', ({ assert }) => {
    const project = new Project()
    project.images = '/a.webp,/b.webp,'

    assert.deepEqual(project.imageList, ['/a.webp', '/b.webp'])
    assert.equal(project.firstImage, '/a.webp')
  })

  test('returns an empty list without images', ({ assert }) => {
    const project = new Project()
    project.images = null

    assert.deepEqual(project.imageList, [])
    assert.isNull(project.firstImage)
  })
})

import type { HttpContext } from '@adonisjs/core/http'
import Project from '#models/project'
import app from '@adonisjs/core/services/app'
import { cuid } from '@adonisjs/core/helpers'
import * as fs from 'node:fs'
import sharp from 'sharp'

const MAX_WIDTH = 600 // 300px display * 2 for retina
const QUALITY = 80

export default class ProjectsController {
  async index({ inertia }: HttpContext) {
    const projects = await Project.query().preload('translations').orderBy('order', 'asc')

    return inertia.render('admin/Projects', { projects })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('admin/ProjectForm', { project: null })
  }

  private async processImage(file: { tmpPath?: string }): Promise<string> {
    const uploadsDir = app.publicPath('uploads')
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true })
    }

    const fileName = `${cuid()}.webp`
    const outputPath = `${uploadsDir}/${fileName}`

    await sharp(file.tmpPath)
      .resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath)

    return `/uploads/${fileName}`
  }

  private deleteImage(imagePath: string | null) {
    if (imagePath) {
      const fullPath = app.publicPath(imagePath.replace(/^\//, ''))
      if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath)
      }
    }
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['slug', 'url', 'isPublished', 'order', 'category'])
    const translations = request.input('translations', {})

    const imageFiles = request.files('images', {
      size: '10mb',
      extnames: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
    })

    const imagePaths: string[] = []

    for (const imageFile of imageFiles) {
      if (imageFile.tmpPath) {
        const path = await this.processImage(imageFile)
        imagePaths.push(path)
      }
    }

    const project = await Project.create({
      ...data,
      images: imagePaths.length > 0 ? imagePaths.join(',') : null,
    })

    if (translations.en) {
      await project.related('translations').create({
        locale: 'en',
        title: translations.en.title,
        description: translations.en.description,
      })
    }

    if (translations.fr) {
      await project.related('translations').create({
        locale: 'fr',
        title: translations.fr.title,
        description: translations.fr.description,
      })
    }

    return response.redirect().toRoute('admin.projects.index')
  }

  async edit({ params, inertia }: HttpContext) {
    const project = await Project.query()
      .where('id', params.id)
      .preload('translations')
      .firstOrFail()

    return inertia.render('admin/ProjectForm', { project })
  }

  async update({ params, request, response }: HttpContext) {
    const project = await Project.findOrFail(params.id)
    const data = request.only(['slug', 'url', 'isPublished', 'order', 'category'])
    const translations = request.input('translations', {})
    const existingImages = request.input('existingImages', '')
    const removeAllImages = request.input('removeAllImages', false)

    const imageFiles = request.files('images', {
      size: '10mb',
      extnames: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
    })

    let images: string | null | undefined = undefined

    if (removeAllImages) {
      // Delete all existing images
      for (const img of project.imageList) {
        this.deleteImage(img)
      }
      images = null
    } else {
      // Keep existing images that weren't removed
      const keptImages = existingImages
        ? existingImages.split(',').filter((img: string) => img.trim())
        : []

      // Delete removed images
      for (const img of project.imageList) {
        if (!keptImages.includes(img)) {
          this.deleteImage(img)
        }
      }

      // Add new images
      const newPaths: string[] = []
      for (const imageFile of imageFiles) {
        if (imageFile.tmpPath) {
          const path = await this.processImage(imageFile)
          newPaths.push(path)
        }
      }

      const allImages = [...keptImages, ...newPaths]
      images = allImages.length > 0 ? allImages.join(',') : null
    }

    await project
      .merge({
        ...data,
        ...(images !== undefined ? { images } : {}),
      })
      .save()

    for (const locale of ['en', 'fr'] as const) {
      if (translations[locale]) {
        await project.related('translations').updateOrCreate(
          { locale },
          {
            title: translations[locale].title,
            description: translations[locale].description,
          }
        )
      }
    }

    return response.redirect().toRoute('admin.projects.index')
  }

  async destroy({ params, response }: HttpContext) {
    const project = await Project.findOrFail(params.id)

    for (const img of project.imageList) {
      this.deleteImage(img)
    }

    await project.delete()

    return response.redirect().toRoute('admin.projects.index')
  }
}

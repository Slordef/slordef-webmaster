<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3'
import { computed, ref } from 'vue'
import TiptapEditor from '../../components/TiptapEditor.vue'

interface ProjectTranslation {
  id: number
  locale: 'en' | 'fr'
  title: string
  description: string | null
}

interface Project {
  id: number
  slug: string
  images: string | null
  imageList: string[]
  url: string | null
  isPublished: boolean
  order: number
  category: 'work' | 'side-project'
  translations: ProjectTranslation[]
}

const props = defineProps<{
  project: Project | null
}>()

const isEditing = computed(() => !!props.project)
const processing = ref(false)

const getTranslation = (locale: 'en' | 'fr') => {
  return props.project?.translations.find((t) => t.locale === locale)
}

const form = ref({
  slug: props.project?.slug || '',
  url: props.project?.url || '',
  isPublished: props.project?.isPublished || false,
  order: props.project?.order || 0,
  category: props.project?.category || 'work',
  translations: {
    en: {
      title: getTranslation('en')?.title || '',
      description: getTranslation('en')?.description || '',
    },
    fr: {
      title: getTranslation('fr')?.title || '',
      description: getTranslation('fr')?.description || '',
    },
  },
})

const existingImages = ref<string[]>(props.project?.imageList || [])
const newImageFiles = ref<File[]>([])
const newImagePreviews = ref<string[]>([])

const handleImagesChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files

  if (files) {
    for (const file of files) {
      newImageFiles.value.push(file)
      newImagePreviews.value.push(URL.createObjectURL(file))
    }
  }
  target.value = ''
}

const removeExistingImage = (index: number) => {
  existingImages.value.splice(index, 1)
}

const removeNewImage = (index: number) => {
  newImageFiles.value.splice(index, 1)
  newImagePreviews.value.splice(index, 1)
}

const submit = () => {
  processing.value = true

  const formData = new FormData()
  formData.append('slug', form.value.slug)
  formData.append('url', form.value.url || '')
  formData.append('isPublished', form.value.isPublished ? 'true' : 'false')
  formData.append('order', form.value.order.toString())
  formData.append('category', form.value.category)
  formData.append('translations[en][title]', form.value.translations.en.title)
  formData.append('translations[en][description]', form.value.translations.en.description || '')
  formData.append('translations[fr][title]', form.value.translations.fr.title)
  formData.append('translations[fr][description]', form.value.translations.fr.description || '')

  // Existing images to keep
  formData.append('existingImages', existingImages.value.join(','))

  // New images
  for (const file of newImageFiles.value) {
    formData.append('images', file)
  }

  if (isEditing.value) {
    formData.append('_method', 'PUT')
    router.post(`/admin/projects/${props.project!.id}`, formData, {
      onFinish: () => {
        processing.value = false
      },
    })
  } else {
    router.post('/admin/projects', formData, {
      onFinish: () => {
        processing.value = false
      },
    })
  }
}
</script>

<template>
  <Head :title="isEditing ? 'Edit Project' : 'Create Project'" />

  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <span class="text-xl font-bold">Admin</span>
            <div class="ml-10 flex items-center space-x-4">
              <Link href="/admin" class="text-gray-700 hover:text-gray-900">Dashboard</Link>
              <Link href="/admin/projects" class="text-gray-900 font-semibold">Projects</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 class="text-2xl font-bold mb-6">{{ isEditing ? 'Edit Project' : 'Create Project' }}</h1>

      <form @submit.prevent="submit" class="bg-white shadow rounded-lg p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Slug</label>
            <input
              v-model="form.slug"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">URL</label>
            <input
              v-model="form.url"
              type="url"
              class="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Images</label>
            <div class="flex flex-wrap gap-4 mb-4">
              <div
                v-for="(img, index) in existingImages"
                :key="`existing-${index}`"
                class="relative"
              >
                <img :src="img" alt="Existing" class="w-32 h-32 object-cover rounded-md" />
                <button
                  type="button"
                  @click="removeExistingImage(index)"
                  class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                >
                  &times;
                </button>
              </div>
              <div
                v-for="(preview, index) in newImagePreviews"
                :key="`new-${index}`"
                class="relative"
              >
                <img :src="preview" alt="New" class="w-32 h-32 object-cover rounded-md border-2 border-green-400" />
                <button
                  type="button"
                  @click="removeNewImage(index)"
                  class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                >
                  &times;
                </button>
              </div>
            </div>
            <div>
              <input
                type="file"
                accept="image/jpeg,image/png,image/gif,image/webp"
                multiple
                @change="handleImagesChange"
                class="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <p class="mt-1 text-sm text-gray-500">JPG, PNG, GIF, WebP. Max 10MB each. Multiple files allowed.</p>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select v-model="form.category" class="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="work">Work</option>
              <option value="side-project">Side Project</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Order</label>
            <input
              v-model.number="form.order"
              type="number"
              class="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div class="flex items-center">
            <input
              id="isPublished"
              v-model="form.isPublished"
              type="checkbox"
              class="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label for="isPublished" class="ml-2 text-sm text-gray-700">Published</label>
          </div>
        </div>

        <hr class="my-6" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- English -->
          <div>
            <h3 class="text-lg font-semibold mb-4">English</h3>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                v-model="form.translations.en.title"
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <TiptapEditor
                v-model="form.translations.en.description"
                placeholder="Write description in English..."
              />
            </div>
          </div>

          <!-- French -->
          <div>
            <h3 class="text-lg font-semibold mb-4">French</h3>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Titre</label>
              <input
                v-model="form.translations.fr.title"
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <TiptapEditor
                v-model="form.translations.fr.description"
                placeholder="Écrivez la description en français..."
              />
            </div>
          </div>
        </div>

        <div class="mt-6 flex justify-end gap-4">
          <Link href="/admin/projects" class="px-4 py-2 text-gray-700 hover:text-gray-900">
            Cancel
          </Link>
          <button
            type="submit"
            :disabled="processing"
            class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {{ isEditing ? 'Update' : 'Create' }}
          </button>
        </div>
      </form>
    </main>
  </div>
</template>

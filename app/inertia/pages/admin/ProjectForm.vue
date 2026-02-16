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

  const url = isEditing.value ? `/admin/projects/${props.project!.id}` : '/admin/projects'

  router.post(url, formData, {
    forceFormData: true,
    onFinish: () => {
      processing.value = false
    },
  })
}
</script>

<template>
  <Head :title="isEditing ? 'Edit Project' : 'Create Project'" />

  <div class="admin-container">
    <nav class="admin-nav">
      <div class="nav-content">
        <div class="nav-left">
          <span class="nav-brand">Admin</span>
          <div class="nav-links">
            <Link href="/admin" class="nav-link">Dashboard</Link>
            <Link href="/admin/projects" class="nav-link active">Projects</Link>
          </div>
        </div>
      </div>
    </nav>

    <main class="admin-main">
      <h1 class="page-title">{{ isEditing ? 'Edit Project' : 'Create Project' }}</h1>

      <form @submit.prevent="submit" class="form-card">
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Slug</label>
            <input v-model="form.slug" type="text" class="form-input" required />
          </div>

          <div class="form-group">
            <label class="form-label">URL</label>
            <input v-model="form.url" type="url" class="form-input" />
          </div>

          <div class="form-group full-width">
            <label class="form-label">Images</label>
            <div class="images-grid">
              <div v-for="(img, index) in existingImages" :key="`existing-${index}`" class="image-item">
                <img :src="img" alt="Existing" class="image-preview" />
                <button type="button" @click="removeExistingImage(index)" class="image-remove">&times;</button>
              </div>
              <div v-for="(preview, index) in newImagePreviews" :key="`new-${index}`" class="image-item new">
                <img :src="preview" alt="New" class="image-preview" />
                <button type="button" @click="removeNewImage(index)" class="image-remove">&times;</button>
              </div>
            </div>
            <div class="file-input-wrapper">
              <input
                type="file"
                accept="image/jpeg,image/png,image/gif,image/webp"
                multiple
                @change="handleImagesChange"
                class="form-input"
              />
              <p class="form-hint">JPG, PNG, GIF, WebP. Max 10MB each. Multiple files allowed.</p>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Category</label>
            <select v-model="form.category" class="form-input">
              <option value="work">Work</option>
              <option value="side-project">Side Project</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Order</label>
            <input v-model.number="form.order" type="number" class="form-input" />
          </div>

          <div class="form-group checkbox-group">
            <input id="isPublished" v-model="form.isPublished" type="checkbox" class="form-checkbox" />
            <label for="isPublished" class="checkbox-label">Published</label>
          </div>
        </div>

        <hr class="form-divider" />

        <div class="translations-grid">
          <div class="translation-section">
            <h3 class="section-title">English</h3>
            <div class="form-group">
              <label class="form-label">Title</label>
              <input v-model="form.translations.en.title" type="text" class="form-input" required />
            </div>
            <div class="form-group">
              <label class="form-label">Description</label>
              <TiptapEditor v-model="form.translations.en.description" placeholder="Write description in English..." />
            </div>
          </div>

          <div class="translation-section">
            <h3 class="section-title">French</h3>
            <div class="form-group">
              <label class="form-label">Titre</label>
              <input v-model="form.translations.fr.title" type="text" class="form-input" required />
            </div>
            <div class="form-group">
              <label class="form-label">Description</label>
              <TiptapEditor
                v-model="form.translations.fr.description"
                placeholder="Écrivez la description en français..."
              />
            </div>
          </div>
        </div>

        <div class="form-actions">
          <Link href="/admin/projects" class="btn-cancel">Cancel</Link>
          <button type="submit" :disabled="processing" class="btn-submit">
            {{ isEditing ? 'Update' : 'Create' }}
          </button>
        </div>
      </form>
    </main>
  </div>
</template>

<style scoped>
.admin-container {
  min-height: 100vh;
  background: #f3f4f6;
}

.admin-nav {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.nav-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-brand {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111;
}

.nav-links {
  display: flex;
  gap: 16px;
}

.nav-link {
  color: #4b5563;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s;
}

.nav-link:hover {
  color: #111;
  background: #f3f4f6;
}

.nav-link.active {
  color: #111;
  font-weight: 600;
}

.admin-main {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 24px;
}

.form-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: span 2;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 6px;
}

.form-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #2563eb;
}

.form-hint {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 6px;
}

.images-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}

.image-item {
  position: relative;
}

.image-item.new .image-preview {
  border: 2px solid #22c55e;
}

.image-preview {
  width: 128px;
  height: 128px;
  object-fit: cover;
  border-radius: 6px;
}

.image-remove {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  background: #dc2626;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  line-height: 1;
  transition: background 0.2s;
}

.image-remove:hover {
  background: #b91c1c;
}

.checkbox-group {
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.form-checkbox {
  width: 16px;
  height: 16px;
  accent-color: #2563eb;
}

.checkbox-label {
  font-size: 0.875rem;
  color: #374151;
}

.form-divider {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 24px 0;
}

.translations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 16px;
}

.translation-section .form-group {
  margin-bottom: 16px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 24px;
}

.btn-cancel {
  padding: 10px 16px;
  color: #4b5563;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s;
}

.btn-cancel:hover {
  color: #111;
  background: #f3f4f6;
}

.btn-submit {
  padding: 10px 20px;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-submit:hover {
  background: #1d4ed8;
}

.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .form-grid,
  .translations-grid {
    grid-template-columns: 1fr;
  }

  .form-group.full-width {
    grid-column: span 1;
  }
}
</style>

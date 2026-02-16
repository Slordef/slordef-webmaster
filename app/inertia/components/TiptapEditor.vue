<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import { watch } from 'vue'

const props = defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        class: 'text-blue-500 underline',
      },
    }),
    Placeholder.configure({
      placeholder: props.placeholder || 'Write something...',
    }),
  ],
  editorProps: {
    attributes: {
      class: 'prose prose-sm max-w-none focus:outline-none min-h-[150px] p-3',
    },
  },
  onUpdate: () => {
    emit('update:modelValue', editor.value?.getHTML() || '')
  },
})

watch(
  () => props.modelValue,
  (value) => {
    const isSame = editor.value?.getHTML() === value
    if (!isSame) {
      editor.value?.commands.setContent(value, false)
    }
  }
)

const setLink = () => {
  const previousUrl = editor.value?.getAttributes('link').href
  const url = window.prompt('URL', previousUrl)

  if (url === null) return

  if (url === '') {
    editor.value?.chain().focus().extendMarkRange('link').unsetLink().run()
    return
  }

  editor.value?.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
}
</script>

<template>
  <div class="tiptap-editor border border-gray-300 rounded-md overflow-hidden">
    <div v-if="editor" class="toolbar flex flex-wrap gap-1 p-2 bg-gray-50 border-b border-gray-300">
      <button
        type="button"
        @click="editor.chain().focus().toggleBold().run()"
        :class="['toolbar-btn', { active: editor.isActive('bold') }]"
        title="Bold"
      >
        <strong>B</strong>
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleItalic().run()"
        :class="['toolbar-btn', { active: editor.isActive('italic') }]"
        title="Italic"
      >
        <em>I</em>
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleStrike().run()"
        :class="['toolbar-btn', { active: editor.isActive('strike') }]"
        title="Strikethrough"
      >
        <s>S</s>
      </button>

      <span class="divider"></span>

      <button
        type="button"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="['toolbar-btn', { active: editor.isActive('heading', { level: 2 }) }]"
        title="Heading 2"
      >
        H2
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="['toolbar-btn', { active: editor.isActive('heading', { level: 3 }) }]"
        title="Heading 3"
      >
        H3
      </button>

      <span class="divider"></span>

      <button
        type="button"
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="['toolbar-btn', { active: editor.isActive('bulletList') }]"
        title="Bullet List"
      >
        &bull;
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="['toolbar-btn', { active: editor.isActive('orderedList') }]"
        title="Ordered List"
      >
        1.
      </button>

      <span class="divider"></span>

      <button
        type="button"
        @click="setLink"
        :class="['toolbar-btn', { active: editor.isActive('link') }]"
        title="Link"
      >
        Link
      </button>
      <button
        v-if="editor.isActive('link')"
        type="button"
        @click="editor.chain().focus().unsetLink().run()"
        class="toolbar-btn"
        title="Remove Link"
      >
        Unlink
      </button>

      <span class="divider"></span>

      <button
        type="button"
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="['toolbar-btn', { active: editor.isActive('blockquote') }]"
        title="Quote"
      >
        &ldquo;
      </button>
      <button
        type="button"
        @click="editor.chain().focus().setHorizontalRule().run()"
        class="toolbar-btn"
        title="Horizontal Rule"
      >
        &mdash;
      </button>
    </div>

    <EditorContent :editor="editor" />
  </div>
</template>

<style scoped>
.toolbar-btn {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: white;
  border: 1px solid #d1d5db;
  cursor: pointer;
  font-size: 0.875rem;
  min-width: 2rem;
  text-align: center;
}

.toolbar-btn:hover {
  background: #f3f4f6;
}

.toolbar-btn.active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.divider {
  width: 1px;
  background: #d1d5db;
  margin: 0 0.25rem;
}

:deep(.tiptap) {
  outline: none;
}

:deep(.tiptap p.is-editor-empty:first-child::before) {
  content: attr(data-placeholder);
  float: left;
  color: #9ca3af;
  pointer-events: none;
  height: 0;
}

:deep(.tiptap h2) {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.5rem 0;
}

:deep(.tiptap h3) {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.5rem 0;
}

:deep(.tiptap ul),
:deep(.tiptap ol) {
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}

:deep(.tiptap blockquote) {
  border-left: 3px solid #d1d5db;
  padding-left: 1rem;
  margin: 0.5rem 0;
  color: #6b7280;
}

:deep(.tiptap hr) {
  border: none;
  border-top: 1px solid #d1d5db;
  margin: 1rem 0;
}

:deep(.tiptap a) {
  color: #3b82f6;
  text-decoration: underline;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title?: string
}>()

const collapsed = ref(false)

function minimize() {
  collapsed.value = true
}

function close() {
  collapsed.value = true
}

function restore() {
  collapsed.value = false
}

function toggle() {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <div class="t-window" :class="{ 'is-collapsed': collapsed }">
    <div class="t-titlebar" @click="toggle">
      <span class="t-title">{{ title }}</span>
      <span class="t-dots" @click.stop>
        <button class="t-dot min" type="button" aria-label="Minimize" @click="minimize"></button>
        <button class="t-dot max" type="button" aria-label="Maximize" @click="restore"></button>
        <button class="t-dot close" type="button" aria-label="Close" @click="close"></button>
      </span>
    </div>
    <div class="t-collapse">
      <div class="t-collapse-inner">
        <slot />
      </div>
    </div>
  </div>
</template>

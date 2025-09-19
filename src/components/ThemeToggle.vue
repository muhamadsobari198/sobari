<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isDark = ref(false)

function applyTheme(dark: boolean) {
  const root = document.documentElement
  if (dark) root.classList.add('dark')
  else root.classList.remove('dark')
}

function toggle() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme(isDark.value)
}

onMounted(() => {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark') isDark.value = true
  else if (stored === 'light') isDark.value = false
  else isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(isDark.value)
})
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50 hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
    aria-label="Toggle theme"
    @click="toggle"
  >
    <span v-if="!isDark" class="i-heroicons-moon-20-solid h-4 w-4"></span>
    <span v-else class="i-heroicons-sun-20-solid h-4 w-4"></span>
    <span>{{ isDark ? 'Dark' : 'Light' }}</span>
  </button>
</template>

<style scoped>
/* Use emoji icons to avoid extra deps */
.i-heroicons-moon-20-solid::before { content: '🌙'; display: inline-block; }
.i-heroicons-sun-20-solid::before { content: '☀️'; display: inline-block; }
</style>

<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <header class="sticky top-0 z-40 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-950/70">
    <div class="container flex h-16 items-center justify-between">
      <a href="#" class="flex items-center gap-2 text-lg font-bold tracking-tight">
        <span class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">M</span>
        <span>Muhamad Sobari</span>
      </a>
      <nav class="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex dark:text-neutral-300">
        <a href="#home" class="hover:text-neutral-900 dark:hover:text-white">Home</a>
        <a href="#about" class="hover:text-neutral-900 dark:hover:text-white">About</a>
      </nav>
      <div class="flex items-center gap-3">
        <ThemeToggle />
        <a
          href="https://www.linkedin.com/in/muhamadsobari198"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden rounded-full border border-neutral-300 px-3 py-1.5 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900 md:inline-block"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Features from './components/Features.vue'
import Experience from './components/Experience.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
    <Header />
    <main>
      <Hero />
      <About />
      <Features />
      <Experience />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>

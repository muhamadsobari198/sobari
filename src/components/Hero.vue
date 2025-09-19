<script setup lang="ts"></script>

<template>
  <section id="home" data-reveal class="relative overflow-hidden bg-white py-20 dark:bg-neutral-950">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_120%_-10%,rgba(17,17,17,0.06),transparent)] dark:bg-[radial-gradient(40rem_40rem_at_120%_-10%,rgba(255,255,255,0.06),transparent)]"></div>
    </div>
    <div class="container grid items-center gap-10 md:grid-cols-2">
      <div class="space-y-6">
        <span class="inline-flex items-center rounded-full border border-dashed border-neutral-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">Fullstack Developer</span>
        <h1 class="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl dark:text-white">Hello, I'm Muhamad Sobari.</h1>
        <div class="space-y-2 text-neutral-600 dark:text-neutral-300">
          <p>I'm a Fullstack Developer living in Bogor, Indonesia.</p>
          <p>Keen interest in exploring new technology advancements.</p>
          <p>Committed to continuous learning and personal growth in the dynamic world of technology.</p>
        </div>
        <div class="flex flex-wrap items-center gap-3 relative">
          <a
            href="https://www.linkedin.com/in/muhamadsobari198"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-cta"
          >
            <span>Follow me on LinkedIn</span>
            <span class="arrow">→</span>
          </a>
          <div class="inline-flex flex-wrap items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <span>I can help you with:</span>
            <ul class="flex flex-wrap items-center gap-2">
              <li class="rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-800">Laravel</li>
              <li class="rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-800">React.js</li>
              <li class="rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-800">Vue.js</li>
              <li class="rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-800">Express.js</li>
              <li class="rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-800">etc</li>
            </ul>
          </div>
          <div class="accent-float" aria-hidden="true"></div>
        </div>
      </div>
      <div class="relative mx-auto w-full max-w-xs md:max-w-sm">
        <div class="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 card-tilt">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fffc164ca2642470aa11fc54c5b289a6f%2F6445a884a78046d9874ac5daa1e66458?format=webp&width=800"
            alt="Profile photo"
            class="block h-auto w-full rounded-xl object-cover"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
</template>

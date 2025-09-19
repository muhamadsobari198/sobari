<script setup lang="ts">
interface Post {
  title: string
  date: string
  excerpt: string
  url: string
}

const posts: Post[] = [
  {
    title: 'How to Auto Deploy APK to Firebase with One Click (EN)',
    date: 'Mar 11th, 2025',
    excerpt:
      'Step-by-step guide to setting up auto deploy APK to Firebase using Bash, Zsh, and Fish Script.',
    url: '/en/posts',
  },
  {
    title: 'Tutorial Sending Emails in Laravel with CID Images',
    date: 'Feb 10th, 2024',
    excerpt:
      "In this tutorial, we'll learn how to send emails in Laravel with static images using CID.",
    url: '/en/posts',
  },
  {
    title: 'How to Set Up Auto Screenshot Daily on Xubuntu (EN)',
    date: 'Jan 21th, 2024',
    excerpt: 'Step-by-step guide to set up daily auto screenshots on Xubuntu.',
    url: '/en/posts',
  },
]
</script>

<template>
  <section id="posts" class="bg-white py-20 dark:bg-neutral-950">
    <div class="container">
      <div class="mx-auto max-w-2xl text-center">
        <span class="inline-flex items-center rounded-full border border-dashed border-neutral-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">My Writings</span>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">Thoughts on code and life</h2>
        <p class="mt-3 text-neutral-600 dark:text-neutral-300">Besides programming, I also enjoy writing about life and technology. Here are some of my recent articles.</p>
      </div>

      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="post in posts"
          :key="post.title"
          class="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div class="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <time>{{ post.date }}</time>
          </div>
          <h3 class="mt-3 text-lg font-semibold text-neutral-900 group-hover:text-black dark:text-white dark:group-hover:text-white">
            <a :href="post.url" class="line-clamp-2">{{ post.title }}</a>
          </h3>
          <p class="mt-3 line-clamp-3 text-sm text-neutral-600 dark:text-neutral-300">{{ post.excerpt }}</p>
          <a :href="post.url" class="mt-4 inline-flex items-center text-sm font-semibold text-neutral-900 underline underline-offset-4 dark:text-white">Read more</a>
        </article>
      </div>

      <div class="mt-10 flex justify-center">
        <a href="/en/posts" class="rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900">View all my articles</a>
      </div>
    </div>
  </section>
</template>

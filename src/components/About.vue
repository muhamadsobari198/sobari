<script setup lang="ts"></script>

<template>
  <section id="about" data-reveal class="bg-white py-20 dark:bg-neutral-950">
    <div class="container">
      <div class="grid gap-10 md:grid-cols-3 items-start">
        <div class="md:col-span-1">
          <h2 class="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">About</h2>
          <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-300">Concise, human-first summary that tells what I build and why it matters.</p>

          <div class="mt-6 space-y-3">
            <p class="text-neutral-700 dark:text-neutral-300">I'm a Fullstack Developer based in Bogor, Indonesia. I design and ship production web applications and APIs with an emphasis on performance, maintainability and UX.</p>

            <div class="flex flex-wrap gap-3 mt-2">
              <div class="inline-flex items-center gap-3 rounded-lg bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-brand-700 to-brand-900 text-white">7+</span>
                <div class="text-left">
                  <div class="text-xs text-neutral-500">Years</div>
                  <div class="text-sm font-semibold">Experience</div>
                </div>
              </div>

              <div class="inline-flex items-center gap-3 rounded-lg bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-cyan-400 text-white">★</span>
                <div class="text-left">
                  <div class="text-xs text-neutral-500">Projects</div>
                  <div class="text-sm font-semibold">Delivered</div>
                </div>
              </div>

              <div class="inline-flex items-center gap-3 rounded-lg bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">∞</span>
                <div class="text-left">
                  <div class="text-xs text-neutral-500">Focus</div>
                  <div class="text-sm font-semibold">Fullstack Delivery</div>
                </div>
              </div>
            </div>

            <div class="mt-4 flex items-center gap-3">
              <a href="https://drive.google.com/file/d/1t1Xirrmmy9yggreWPCybXqo_7_w-dbng/view" target="_blank" rel="noopener" class="btn-cta">See my work <span class="arrow">→</span></a>
              <a href="https://drive.usercontent.google.com/u/2/uc?id=1t1Xirrmmy9yggreWPCybXqo_7_w-dbng&export=download" target="_blank" rel="noopener" class="rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100">Download CV</a>
            </div>
          </div>
        </div>

        <div class="md:col-span-2 space-y-6">
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div class="rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm card-tilt dark:border-neutral-800 dark:bg-neutral-900">
              <h4 class="text-sm font-semibold text-neutral-900 dark:text-white">Core & Backend</h4>
              <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Go, Laravel, Lumen, Express.js, Node, API design, authentication, background jobs.</p>
              <div class="mt-3 h-2 w-full rounded-full bg-neutral-100 dark:bg-neutral-800">
                <div class="h-2 rounded-full bg-emerald-500" style="width:85%"></div>
              </div>
            </div>

            <div class="rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm card-tilt dark:border-neutral-800 dark:bg-neutral-900">
              <h4 class="text-sm font-semibold text-neutral-900 dark:text-white">Frontend & UX</h4>
              <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">React.js, Vue.js, Angular, React Native, accessibility and performance-driven UI.</p>
              <div class="mt-3 h-2 w-full rounded-full bg-neutral-100 dark:bg-neutral-800">
                <div class="h-2 rounded-full bg-indigo-500" style="width:90%"></div>
              </div>
            </div>

            <div class="rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm card-tilt dark:border-neutral-800 dark:bg-neutral-900">
              <h4 class="text-sm font-semibold text-neutral-900 dark:text-white">Design Systems</h4>
              <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">TailwindCSS, Material UI, component libraries, theming and tokens.</p>
              <div class="mt-3 h-2 w-full rounded-full bg-neutral-100 dark:bg-neutral-800">
                <div class="h-2 rounded-full bg-pink-500" style="width:78%"></div>
              </div>
            </div>

            <div class="rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm card-tilt dark:border-neutral-800 dark:bg-neutral-900">
              <h4 class="text-sm font-semibold text-neutral-900 dark:text-white">Data & Storage</h4>
              <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">MySQL, PostgreSQL, MongoDB, Redis, and migrations, backups and scaling.</p>
              <div class="mt-3 h-2 w-full rounded-full bg-neutral-100 dark:bg-neutral-800">
                <div class="h-2 rounded-full bg-amber-500" style="width:82%"></div>
              </div>
            </div>

            <div class="rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm card-tilt dark:border-neutral-800 dark:bg-neutral-900">
              <h4 class="text-sm font-semibold text-neutral-900 dark:text-white">DevOps & Tooling</h4>
              <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Docker, Linux, CI/CD, testing and monitoring to ship safely.</p>
              <div class="mt-3 h-2 w-full rounded-full bg-neutral-100 dark:bg-neutral-800">
                <div class="h-2 rounded-full bg-emerald-600" style="width:74%"></div>
              </div>
            </div>

            <div class="rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm card-tilt dark:border-neutral-800 dark:bg-neutral-900">
              <h4 class="text-sm font-semibold text-neutral-900 dark:text-white">Legacy & Integration</h4>
              <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Integrations with legacy systems (SOAP), payment gateways and migration work.</p>
              <div class="mt-3 h-2 w-full rounded-full bg-neutral-100 dark:bg-neutral-800">
                <div class="h-2 rounded-full bg-sky-500" style="width:68%"></div>
              </div>
            </div>
          </div>

          <div class="mt-4 rounded-xl border border-dashed border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-900">
            <h4 class="text-sm font-semibold text-neutral-900 dark:text-white">Readable summary</h4>
            <p class="mt-1 text-sm text-neutral-700 dark:text-neutral-300">I focus on building reliable systems and delightful user experiences — from API design to polished interfaces. I enjoy mentoring, code reviews, and improving team workflows.</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

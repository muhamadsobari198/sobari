import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

// global reveal animation using IntersectionObserver
if (typeof window !== 'undefined') {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active')
          entry.target.classList.add('reveal-visible')
        }
      }
    },
    { threshold: 0.12 }
  )

  // attach to elements with data-reveal attribute
  function observe() {
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('reveal')
      observer.observe(el)
    })
  }

  // run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observe)
  } else {
    observe()
  }
}

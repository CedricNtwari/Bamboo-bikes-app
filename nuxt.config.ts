import { defineNuxtConfig } from 'nuxt3'

// // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  script: true,
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/index.scss";',
        },
      },
    },
  },
})

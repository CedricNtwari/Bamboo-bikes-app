import { defineNuxtConfig } from 'nuxt3'

// // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

//   buildModules: ['@nuxtjs/style-resources'],

//   styleResources: {
//    // your settings here
//    scss: ['./styles/*.scss']
//   }
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/styles/index.scss";',
            },
        },
    },
}
})


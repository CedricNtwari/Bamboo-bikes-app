import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
   // your settings here
   sass: [],
      scss: [
          './styles/breakpoints.scss',
          './styles/colours.scss',
          './styles/fonts.scss',
          './styles/units.scss'
      ],
   less: [],
   stylus: []
  }
})

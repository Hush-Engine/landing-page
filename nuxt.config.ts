// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/content'],
  content: {
    markdown: {
    },
    highlight: {
      theme: 'github-light',
      preload: ['cpp', 'csharp', 'json', 'python']
    }
  },
  googleFonts: {
    families: {
      Poppins: true,
    },
    download: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/styles/main.scss'],
  app: {
    head: {
     title: 'Traditional Chinese Checker',
     meta: [
      { name: 'description', content: 'Traditional Chinese Checker' }
     ],
     link: [
      { rel: 'icon', type: 'image/png', sizes: '24x24', href: '/favicon-24.png'}
     ]
    }
  }
})
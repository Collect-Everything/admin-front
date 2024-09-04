// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Collecteverything - Admin',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  ssr: false,

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  modules: ['@pinia/nuxt'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/vue-fontawesome',
    ],
  },

  runtimeConfig: {
    public: {
      API_GATEWAY_URL: process.env.API_GATEWAY_URL,
    },
  },

  compatibilityDate: '2024-09-04',
})
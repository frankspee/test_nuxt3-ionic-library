// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@ionic/core/css/core.css',
    '@ionic/core/css/normalize.css',
    '@ionic/core/css/structure.css',
    '@ionic/core/css/typography.css',
    '@ionic/core/css/ionic.bundle.css',
    '@/theme/variables.css',
  ],
  devtools: { 
    enabled: true
  },
  ssr: false,
  typescript: {
    shim: false,
  },
})

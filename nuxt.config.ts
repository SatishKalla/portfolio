// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  alias: {
    'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.js'
  },
  css: ['balm-ui/dist/balm-ui.css'],
  ssr: false,
})

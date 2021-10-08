import tailwindConfig from './tailwind.config'

export default {
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'select-none',
    },
    title: '𝙎 𝙀 𝙏 𝙀 𝙏 𝙍 𝙀 𝙎',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, height=device-height, user-scalable=no, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '#000073',
      },

      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: '𝙎 𝙀 𝙏 𝙀 𝙏 𝙍 𝙀 𝙎' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '#000073',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://setetr.es/share.png',
      },
      { hid: 'og:url', property: 'og:url', content: 'https://setetr.es' },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '𝙎 𝙀 𝙏 𝙀 𝙏 𝙍 𝙀 𝙎',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: '#000073',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://setetr.es/share.png',
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.svg' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Anton&family=DM+Serif+Text&display=swap',
      },
    ],
  },
  loading: {
    color: '#000000',
    failedColor: '#000000',
    throttle: 0,
  },
  css: ['@/assets/css/application.css'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {},
  tailwindcss: {
    exposeConfig: true,
  },
}

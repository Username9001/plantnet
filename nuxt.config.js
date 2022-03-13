export default {
  target: "static",
  // Server Configuration
  server: {
    host: "0.0.0.0",
    port: 4040,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "plant-monitor",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "@/plugins/composition-api",
    { src: "~/plugins/vuex-persist", ssr: false },
    { src: "~/plugins/getApollo.server.js", ssr: false },
    { src: "~/plugins/persistedState.client.js", ssr: false },
    // { src: '~/plugins/composition-api.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "@nuxtjs/fontawesome",
      {
        component: "fa",
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: [
              "faTree",
              "faLemon",
              "faCarrot",
              "faCannabis",
              "faCertificate",
            ],
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["faCanadianMapleLeaf"],
          },
        ],
      },
    ],
    // "@nuxt/typescript-build",
    // "@nuxtjs/composition-api/module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "bootstrap-vue/nuxt",
    "@nuxtjs/apollo",
    "@nuxtjs/proxy",
  ],
  // Apollo
  apollo: {
    clientConfigs: {
      default: 
      {
        httpEndpoint: "http://192.168.1.25:9009/graphql",
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },
  proxy: {
    "/api/": {
      target: "http://143.176.135.108:8000/api/",
      pathRewrite: { "^/api/": "" },
      changeOrigin: true,
    },
    "/plantnet/": {
      target: "https://my-api.plantnet.org/v2/",
      pathRewrite: { "^/plantnet/": "" },
      changeOrigin: true,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
  },
}

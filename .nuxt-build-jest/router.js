import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'// eslint-disable-line no-unused-vars
import scrollBehavior from './router.scrollBehavior.js'

const _8d332b70 = () => interopDefault(import('../pages/builder/index.vue' /* webpackChunkName: "pages/builder/index" */))
const _031270b6 = () => interopDefault(import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */))
const _6804fe76 = () => interopDefault(import('../pages/gardenmanager/index.vue' /* webpackChunkName: "pages/gardenmanager/index" */))
const _22edd62a = () => interopDefault(import('../pages/plantedex/index.vue' /* webpackChunkName: "pages/plantedex/index" */))
const _634aacf1 = () => interopDefault(import('../pages/plants/index.vue' /* webpackChunkName: "pages/plants/index" */))
const _231dc61f = () => interopDefault(import('../pages/guilds/index.vue' /* webpackChunkName: "pages/guilds/index" */))
const _59d3b707 = () => interopDefault(import('../pages/upload.vue' /* webpackChunkName: "pages/upload" */))
const _b3b91f42 = () => interopDefault(import('../pages/gardenmanager/creator.vue' /* webpackChunkName: "pages/gardenmanager/creator" */))
const _684f487f = () => interopDefault(import('../pages/guilds/create.vue' /* webpackChunkName: "pages/guilds/create" */))
const _17ec6f4d = () => interopDefault(import('../pages/categories/_id.vue' /* webpackChunkName: "pages/categories/_id" */))
const _ba5d90ce = () => interopDefault(import('../pages/plants/_id.vue' /* webpackChunkName: "pages/plants/_id" */))
const _15567772 = () => interopDefault(import('../pages/guilds/_id.vue' /* webpackChunkName: "pages/guilds/_id" */))
const _5b6f015e = () => interopDefault(import('../pages/species/_id.vue' /* webpackChunkName: "pages/species/_id" */))
const _cd46a488 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,
  /* eslint-disable array-bracket-spacing, quotes, quote-props, object-curly-spacing, key-spacing */
  routes: [{
    path: "/builder",
    component: _8d332b70,
    name: "builder"
  }, {
    path: "/categories",
    component: _031270b6,
    name: "categories"
  }, {
    path: "/gardenmanager",
    component: _6804fe76,
    name: "gardenmanager"
  }, {
    path: "/plantedex",
    component: _22edd62a,
    name: "plantedex"
  }, {
    path: "/plants",
    component: _634aacf1,
    name: "plants"
  }, {
    path: "/guilds",
    component: _231dc61f,
    name: "guilds"
  }, {
    path: "/upload",
    component: _59d3b707,
    name: "upload"
  }, {
    path: "/gardenmanager/creator",
    component: _b3b91f42,
    name: "gardenmanager-creator"
  }, {
    path: "/guilds/create",
    component: _684f487f,
    name: "guilds-create"
  }, {
    path: "/categories/:id",
    component: _17ec6f4d,
    name: "categories-id"
  }, {
    path: "/plants/:id",
    component: _ba5d90ce,
    name: "plants-id"
  }, {
    path: "/guilds/:id",
    component: _15567772,
    name: "guilds-id"
  }, {
    path: "/species/:id?",
    component: _5b6f015e,
    name: "species-id"
  }, {
    path: "/",
    component: _cd46a488,
    name: "index"
  }],
  /* eslint-enable array-bracket-spacing, quotes, quote-props, object-curly-spacing, key-spacing */

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

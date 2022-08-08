import { createLocalVue, shallowMount, RouterLinkStub } from "@vue/test-utils"

import { BButton, BFormGroup, BAlert } from "bootstrap-vue"
// import { NuxtLink } from "nuxt"

import Hero from "@/components/Hero.vue"
import PageNotFound from "@/components/PageNotFound.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use("bootstrap-vue")
localVue.use("nuxt")

describe("Hero Test", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(Hero, {
      stubs: {
        "b-alert": BAlert,
        "b-form-group": BFormGroup,
        "b-btn": BButton,
        NuxtLink: RouterLinkStub,
      },
      localVue,
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

describe("PageNotFound", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(PageNotFound)
    expect(wrapper.vm).toBeTruthy()
  })
})

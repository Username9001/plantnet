import { createLocalVue, shallowMount } from "@vue/test-utils"

import { BButton, BContainer, BFormGroup, BFormFile } from "bootstrap-vue"
// import { NuxtLink } from "nuxt"

// Components
import PlantedexSearchImage from "@/components/plantedex/search/image.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use("bootstrap-vue")
localVue.use("nuxt")

describe("Search Input Image Test", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(PlantedexSearchImage, {
      localVue,
      stubs: {
        "b-container": BContainer,
        "b-form-group": BFormGroup,
        "b-form-file": BFormFile,
        "b-btn": BButton,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

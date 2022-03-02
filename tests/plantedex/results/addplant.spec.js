import { createLocalVue, shallowMount } from "@vue/test-utils"

import { BFormInput, BFormCheckbox, BButton } from "bootstrap-vue"

// Components
import PlantedexResultsAddPlant from "@/components/plantedex/results/addPlant.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use("bootstrap-vue")
localVue.use("nuxt")
localVue.use("graphql-tag")

describe("Search Result Image Card Test", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(PlantedexResultsAddPlant, {
      localVue,
      stubs: {
        "b-form-input": BFormInput,
        "b-form-checkbox": BFormCheckbox,
        "b-btn": BButton,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

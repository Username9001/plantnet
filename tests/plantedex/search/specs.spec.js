import { createLocalVue, shallowMount } from "@vue/test-utils"

import {
  BButton,
  BContainer,
  BCollapse,
  BRow,
  BCol,
  BFormCheckbox,
  BFormCheckboxGroup,
  BFormGroup,
  BFormInput,
  BAlert,
  BToggle,
} from "bootstrap-vue"
// import { NuxtLink } from "nuxt"

// Components
import PlantedexSearchSpecs from "@/components/plantedex/search/specs.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use("bootstrap-vue")
localVue.use("nuxt")

describe("Search Input Image Test", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(PlantedexSearchSpecs, {
      localVue,
      stubs: {
        "b-container": BContainer,
        "b-row": BRow,
        "b-col": BCol,
        "b-form-group": BFormGroup,
        "b-form-input": BFormInput,
        "b-form-checkbox": BFormCheckbox,
        "b-form-checkbox-group": BFormCheckboxGroup,
        "b-btn": BButton,
        "b-alert": BAlert,
        "b-collapse": BCollapse,
      },
      directives: {
        BToggle,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

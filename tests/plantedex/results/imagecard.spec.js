import { createLocalVue, shallowMount } from "@vue/test-utils"

import { BRow, BCol } from "bootstrap-vue"

// Components
import PlantedexResultsImageCard from "@/components/plantedex/results/imageCard.vue"
import PlantedexResultsResultCard from "@/components/plantedex/results/resultCard.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use("bootstrap-vue")
localVue.use("nuxt")

// child component
localVue.use(PlantedexResultsResultCard)

describe("Search Result Image Card Test", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(PlantedexResultsImageCard, {
      localVue,
      stubs: {
        "b-row": BRow,
        "b-col": BCol,
      },
      propsData: {
        species: {
          scientificNameWithoutAuthor: "test",
        },
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

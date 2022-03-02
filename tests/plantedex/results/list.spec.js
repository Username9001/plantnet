import { createLocalVue, shallowMount } from "@vue/test-utils"

import { BContainer, BPagination } from "bootstrap-vue"

// Components
import PlantedexResultsList from "@/components/plantedex/results/list.vue"
import PlantedexResultsImageCard from "@/components/plantedex/results/imageCard.vue"
import PlantedexResultsSpecsCard from "@/components/plantedex/results/specsCard.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use("bootstrap-vue")
localVue.use("nuxt")

// child component
localVue.use(PlantedexResultsImageCard)
localVue.use(PlantedexResultsSpecsCard)

describe("Search Result Image Card Test", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(PlantedexResultsList, {
      localVue,
      stubs: {
        "b-container": BContainer,
        "b-pagination": BPagination,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

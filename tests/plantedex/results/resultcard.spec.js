import { createLocalVue, shallowMount, RouterLinkStub } from "@vue/test-utils"

import { BAlert, BCard, BRow, BCol } from "bootstrap-vue"

// Components
import PlantedexResultsResultCard from "@/components/plantedex/results/resultCard.vue"
import PlantedexResultsAddPlant from "@/components/plantedex/results/addPlant.vue"
import SpeciesCardSmall from "@/components/species/CardSmall.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use("bootstrap-vue")
localVue.use("nuxt")

// child component
localVue.use(PlantedexResultsAddPlant)
localVue.use(SpeciesCardSmall)

describe("Search Result Image Card Test", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(PlantedexResultsResultCard, {
      localVue,
      stubs: {
        "b-alert": BAlert,
        "b-card": BCard,
        "b-row": BRow,
        "b-col": BCol,
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

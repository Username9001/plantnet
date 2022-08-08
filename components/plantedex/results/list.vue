<template>
  <b-container v-if="speciesComplexSpecs">
    <div v-if="method == 'image'">
      <h3>Possible matches: {{ plantnet.length }}</h3>
      <PlantedexResultsImageCard
        v-for="option in plantnet"
        :key="option.score"
        :result="option"
      />
    </div>
    <div v-if="method == 'specs' && specsLoaded">
      <h3>Possible matches: {{ speciesComplexSpecs.paginatorInfo.total }}</h3>
      <b-pagination
        v-if="speciesComplexSpecs.paginatorInfo.lastPage > 1"
        v-model="currentPage"
        :total-rows="speciesComplexSpecs.paginatorInfo.total"
        :per-page="speciesComplexSpecs.paginatorInfo.perPage"
        align="center"
        first-number
        last-number
      ></b-pagination>
      <PlantedexResultsSpecsCard
        v-for="option in speciesComplexSpecs.data"
        :key="option.slug"
        :result="option"
      />
      <b-pagination
        v-if="speciesComplexSpecs.paginatorInfo.lastPage > 1"
        v-model="currentPage"
        :total-rows="speciesComplexSpecs.paginatorInfo.total"
        :per-page="speciesComplexSpecs.paginatorInfo.perPage"
        align="center"
        first-number
        last-number
      ></b-pagination>
    </div>
  </b-container>
</template>

<script>
import speciesComplexSpecs from "~/apollo/queries/species/speciesComplexSpecs.gql"

export default {
  props: ["method", "page"],
  data() {
    return {
      plantnet: [],
      specsList: {},
      specsLoaded: false,
      currentPage: 0,
      perPage: 10,
    }
  },
  apollo: {
    speciesComplexSpecs: {
      query: speciesComplexSpecs,
      variables() {
        return {
          slug: this.specsList.slug ?? undefined,
          common_english: this.specsList.common_english ?? undefined,
          soil_pref: this.specsList.soil_pref ?? undefined,
          shade_pref: this.specsList.shade_pref ?? undefined,
          moisture_pref: this.specsList.moisture_pref ?? undefined,
          ph_pref: this.specsList.ph_pref ?? undefined,
          garden_layers: this.specsList.garden_layers ?? undefined,
          other_uses: this.specsList.other_uses ?? undefined,
          hardyness: this.specsList.hardyness ?? undefined,
          // pagination
          page: this.currentPage,
          first: 20,
        }
      },
    },
  },
  mounted() {},
  created() {
    this.$parent.$on("plantnetList", (data) => {
      this.plantnet = data
      // Log the value
      console.log("from image search:", this.plantnet)
      // Render results
      this.specsLoaded = true
    })
    this.$parent.$on("specsList", (data) => {
      // clear data
      // this.specsList = null
      this.specsLoaded = false
      // reset page
      this.currentPage = 1
      // set new data
      this.specsList = data
      // Log the value
      console.log("from spec search:", this.specsList)
      // Render results
      this.specsLoaded = true
    })
  },
}
</script>

<style></style>

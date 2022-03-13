<template>
    <b-container v-if="speciesComplexSpecs && isLoaded">
      <h2>Pick a few parameters:</h2>
      <b-form>
        <b-form-group>
          <b-form-select       
            id="checkbox-1"
            v-model="selected_layer"
            :options="garden_layers"
          ></b-form-select>
        </b-form-group>
      </b-form>
      <h2>Combination Suggestions: {{ speciesComplexSpecs.paginatorInfo.total }}</h2>
      <b-row>
          <b-col cols="3" v-for="specy in speciesComplexSpecs.data" :key="specy.gbif_id">
            <nuxt-link :to="`/species/${specy.slug}`">
              <SpeciesCardSmall :specy="specy" />
            </nuxt-link>
          </b-col>
      </b-row>
      <b-pagination
        v-if="speciesComplexSpecs.paginatorInfo.lastPage > 1"
        v-model="currentPageSuggestions"
        :total-rows="speciesComplexSpecs.paginatorInfo.total"
        :per-page="speciesComplexSpecs.paginatorInfo.perPage"
        align="center"
        first-number
        last-number
      ></b-pagination>
      <small class="pg-descriptor">Go to page:</small>
      <b-form-input
        v-if="speciesComplexSpecs.paginatorInfo.lastPage > 1"
        v-model="currentPageSuggestions"
        :placeholder="String(currentPageSuggestions)"
        class="page-selector"
        type="number"
        min="1"
        trim
        lazy
        :max="speciesComplexSpecs.paginatorInfo.lastPage"
      >
      </b-form-input>
    </b-container>
</template>

<script>
import speciesComplexSpecs from "~/apollo/queries/species/speciesComplexSpecs.gql"

export default {
  props: ["meta"],
  data() {
    return {
      perPage: 4,
      currentPageSuggestions: 1,
      isLoaded: false,
      // params
      garden_layers: ['CANOPY','SUB_CANOPY','SHRUB','CLIMBER', 'HERBACEOUS','GROUND_COVER'],
      selected_layer: [],
    }
  },
  apollo: {
    speciesComplexSpecs: {
      query: speciesComplexSpecs,
      variables() {
        return {
          // pagination
            first: this.perPage,
            page: parseInt(this.currentPageSuggestions),
          // combination metrics
            shade_pref: this.meta.shade_pref,
            soil_pref: this.meta.soil_pref,
            moisture_pref: this.meta.moisture_pref,
            ph_pref: this.meta.ph_pref,
            hardyness: this.meta.hardyness,
            garden_layers: this.selected_layer,
        }
      },
    },
  },
  watch: {
    currentPageSuggestions: function () {
      this.$store.commit("updateSuggestionsPage", this.currentPageSuggestions)
    },
  },
  mounted() {
    this.currentPageSuggestions = this.$store.state.suggestionsPage
    this.isLoaded = true
  },
}
</script>

<style>

</style>
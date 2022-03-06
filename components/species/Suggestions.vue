<template>
    <b-container v-if="speciesComplexSpecs">
        <h2>Combination Suggestions: {{ speciesComplexSpecs.paginatorInfo.total }}</h2>
        <b-row>
            <b-col v-for="specy in speciesComplexSpecs.data" :key="specy.gbif_id">
                <SpeciesCardSmall :specy="specy" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import speciesComplexSpecs from "~/apollo/queries/species/speciesComplexSpecs.gql"

export default {
  props: ["meta"],
  apollo: {
    speciesComplexSpecs: {
      query: speciesComplexSpecs,
      variables() {
        return {
            first: 30,
            page: 1,
            // slug: this.meta.slug,
            shade_pref: this.meta.shade_pref,
            soil_pref: this.meta.soil_pref,
            moisture_pref: this.meta.moisture_pref,
            ph_pref: this.meta.ph_pref,
            acid: this.meta.acid,
            alkaline: this.meta.alkaline,
            hardyness: this.meta.hardyness,
        }
      },
    },
  },
}
</script>

<style>

</style>
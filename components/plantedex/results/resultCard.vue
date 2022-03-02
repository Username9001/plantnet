<template>
  <div class="mb-4">
    <b-card>
      <b-row v-if="speciesByGbif">
        <b-col>
          <nuxt-link :to="`/species/${speciesByGbif.slug}`">
            <SpeciesCardSmall :specy="speciesByGbif" />
          </nuxt-link>
          <PlantedexResultsAddPlant :result="speciesByGbif" />
        </b-col>
        <b-col>
          <small
            ><strong>Common names</strong>:
            {{ speciesByGbif.common_english }}</small
          >
          <br />
          <small><strong>Shade</strong>: {{ speciesByGbif.shade_pref }}</small>
          <br />
          <small><strong>Soil</strong>: {{ speciesByGbif.soil_pref }}</small>
          <br />
          <small><strong>Acidity</strong>: {{ speciesByGbif.ph_pref }}</small>
          <br />
          <small
            ><strong>Moisture</strong>: {{ speciesByGbif.moisture_pref }}</small
          >
          <br />
          <small
            ><strong>Moisture</strong>: {{ speciesByGbif.moisture_pref }}</small
          >
          <br />
          <small><strong>Taxonomy</strong>:</small>
          <ul class="no-dots">
            <li>
              <!-- <small>Kingdom: {{ speciesByGbif.taxons.taxon_kingdom }}</small> -->
            </li>
            <li>
              <!-- <small>Phylum: {{ speciesByGbif.taxons.taxon_phylum }}</small> -->
            </li>
            <li>
              <!-- <small>Class: {{ speciesByGbif.taxons.taxon_class }}</small> -->
            </li>
            <li>
              <!-- <small>Order: {{ speciesByGbif.taxons.taxon_order }}</small> -->
            </li>
            <li>
              <!-- <small>Family: {{ speciesByGbif.taxons.taxon_family }}</small> -->
            </li>
            <li>
              <!-- <small>Genus: {{ speciesByGbif.taxons.taxon_genus }}</small> -->
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-card>

    <div v-if="!speciesByGbif">
      <b-alert class="text-center not-found" variant="danger" show>
        <small>GBIF ID not found in permaflorae database</small>
        <strong>GBIF ID: {{ gbif_id }}</strong>
      </b-alert>
    </div>
  </div>
</template>

<script>
import speciesByGbif from "~/apollo/queries/species/speciesByGbif.gql"
import global from "~/mixins.js/wikiImgs.js"

export default {
  mixins: [global],
  props: ["gbif_id"],
  apollo: {
    speciesByGbif: {
      query: speciesByGbif,
      variables() {
        return {
          gbif_id: this.gbif_id,
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.result-img {
  width: 100%;
  max-height: 320px;
  object-fit: cover;
}
.no-img {
  opacity: 0.4;
}
a {
  color: white;
}
.not-found {
  display: block;
  text-align: center;
  margin: auto;
}
</style>
>

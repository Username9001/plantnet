<template>
  <b-container v-if="speciesByLatinName" class="speciesByLatinName-container">
    <b-row>
      <SpeciesBlocksHeader
        v-if="speciesByLatinName"
        :meta="speciesByLatinName"
      />
      <SpeciesBlocksWikiGallery
        v-if="speciesByLatinName.latin_name"
        :meta="speciesByLatinName"
      />
    </b-row>
    <hr />
    <h4>Sources:</h4>
    <b-tabs>
      <!-- SELF -->
      <b-tab title="GardenGuildBuilder">
        <SpeciesSourcesGGB :specy="speciesByLatinName" />
      </b-tab>
      <b-tab title="Permaflorae">
        <SpeciesSourcesPermaflorae
          v-if="speciesByLatinName"
          :specy="speciesByLatinName"
          :book_list="speciesByLatinName.book_list"
        />
      </b-tab>
      <b-tab title="Wikipedia">
        <SpeciesSourcesWikipedia :specy="speciesByLatinName" />
      </b-tab>
      <!-- GBIF -->
      <b-tab title="GBIF">
        <br />
        <b-alert show>Locations as logged in the GBIF database</b-alert>
        <b-row>
          <b-col
            v-for="location in speciesByLatinName.gbif_locations"
            :key="location.sourceTaxonKey"
            class="smalltext"
            cols="12"
            md="6"
            lg="3"
          >
            <b-card>
              <p v-if="location.country">country: {{ location.country }}</p>
              <p v-if="location.locality">locality: {{ location.locality }}</p>
              status: {{ location.status }}
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
import speciesByLatinName from "~/apollo/queries/species/speciesByLatinName.gql"

export default {
  props: ["meta"],
  data() {
    return {
      nameQuery: "",
      wikiImg: "",
      speciesByLatinName: {},
    }
  },
  mounted() {
    console.log("CAPITALS:", this.meta)
  },
  apollo: {
    speciesByLatinName: {
      query: speciesByLatinName,
      variables() {
        return {
          slug: this.meta.latin_name.toLowerCase(),
        }
      },
    },
  },
}
</script>

<style lang="scss">
.speciesByLatinName-container {
  background: transparent;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border-radius: 0 !important;
  border: none !important;
}
.image {
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  overflow: hidden;
}
.img-gallery {
  padding: 0 24px;
  img {
    height: 240px;
    object-fit: cover;
    overflow: hidden;
    margin: 6px 0;
  }
}
.wiki-gallery {
  max-height: 252px;
  overflow-y: scroll;
  width: 100%;
}
.wiki-embed {
  width: 100%;
  min-height: 60vh;
  height: 100%;
}
.location-icon {
  max-width: 60px;
  max-height: 60px;
}
.booleans-list {
  text-align: right;
  list-style-type: none;
}
.nav-item a {
  color: white;
}
.nav-tabs {
  color: white;
  font-weight: 700;
}
</style>

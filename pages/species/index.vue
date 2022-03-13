<template>
  <b-container v-if="species && isLoaded">
    <h1>Plant Species</h1>
    <b-alert show>Description of permaflorae database</b-alert>
    <nuxt-link to="plantedex"><b-btn>Go To species lookup</b-btn></nuxt-link>
    <hr />
    <b-row>
      <b-col
        v-for="specy in species.data"
        :key="specy.id"
        cols="12"
        md="4"
        lg="2"
      >
        <nuxt-link :to="`/species/${specy.slug}`">
          <b-card>
            <SpeciesCardSmall :specy="specy" />
          </b-card>
        </nuxt-link>
      </b-col>
    </b-row>
    <hr />
    <b-pagination
      v-if="species.paginatorInfo.lastPage > 1"
      v-model="currentPageSpecies"
      :total-rows="species.paginatorInfo.total"
      :per-page="species.paginatorInfo.perPage"
      align="center"
      first-number
      last-number
    ></b-pagination>
    <small class="pg-descriptor">Go to page:</small>
    <b-form-input
      v-if="species.paginatorInfo.lastPage > 1"
      v-model="currentPageSpecies"
      :placeholder="String(currentPageSpecies)"
      class="page-selector"
      type="number"
      min="1"
      trim
      lazy
      :max="species.paginatorInfo.lastPage"
    >
    </b-form-input>
  </b-container>
</template>

<script>
import fetchSpecies from "~/apollo/queries/species/fetchSpecies.gql"

export default {
  data() {
    return {
      perPage: 36,
      currentPageSpecies: 1,
      isLoaded: false,
    }
  },
  apollo: {
    species: {
      query: fetchSpecies,
      variables() {
        return {
          first: this.perPage,
          page: parseInt(this.currentPageSpecies),
        }
      },
    },
  },
  watch: {
    currentPageSpecies: function () {
      this.$store.commit("updateSpeciesPage", this.currentPageSpecies)
    },
  },
  mounted() {
    this.currentPageSpecies = this.$store.state.speciesPage
    this.isLoaded = true
  },
}
</script>

<style scoped>
.card {
  margin-bottom: 24px;
}
.card-body {
  padding: 0.25em;
}
.pg-descriptor {
  display: block;
  margin: auto;
  text-align: center;
}
</style>

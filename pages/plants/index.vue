<template>
  <b-container v-if="plants && isLoaded">
    <div>
      <h1>All your plants</h1>
      <b-alert show>Description of this page</b-alert>
      <!-- <nuxt-link to="/plants/create"><b-btn>Create Plant</b-btn></nuxt-link> -->
      <hr />
      <b-row>
        <b-col
          v-for="plant in plants.data"
          :key="plant.id"
          cols="12"
          md="12"
          lg="3"
        >
          <PlantsCardSmall :plant="plant" />
        </b-col>
      </b-row>
      <hr />
      <b-pagination
        v-if="plants.paginatorInfo.lastPage > 1"
        v-model="currentPagePlants"
        :total-rows="plants.paginatorInfo.total"
        :per-page="plants.paginatorInfo.perPage"
        align="center"
        first-number
        last-number
      ></b-pagination>
    </div>
  </b-container>
</template>

<script>
import fetchPlants from "~/apollo/queries/plants/fetchPlants.gql"

export default {
  data() {
    return {
      perPage: 8,
      currentPagePlants: 1,
      isLoaded: false,
    }
  },
  apollo: {
    plants: {
      query: fetchPlants,
      variables() {
        return {
          first: this.perPage,
          page: parseInt(this.currentPagePlants),
        }
      },
    },
  },
  watch: {
    currentPagePlants: function () {
      this.$store.commit("updatePlantsPage", this.currentPagePlants)
    },
  },
  mounted() {
    this.currentPagePlants = this.$store.state.plantsPage
    this.isLoaded = true
  },
}
</script>

<style scoped></style>

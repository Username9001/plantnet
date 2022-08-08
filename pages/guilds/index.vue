<template>
  <b-container v-if="guilds && isLoaded">
    <b-row>
      <b-col cols="12">
        <h1>Guilds</h1>
        <b-alert show
          >Description of guilds are and what their function is</b-alert
        >
        <nuxt-link to="/guilds/create"><b-btn>Create Guild</b-btn></nuxt-link>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col cols="12">
        <GuildsCard
          v-for="guild in guilds.data"
          :key="guild.id"
          :guild="guild"
        />
      </b-col>
    </b-row>
    <hr />
    <b-form-group>
      <b-pagination
        v-if="guilds.paginatorInfo.lastPage > 1"
        v-model="currentPageGuilds"
        :total-rows="guilds.paginatorInfo.total"
        :per-page="guilds.paginatorInfo.perPage"
        align="center"
        first-number
        last-number
      ></b-pagination>
    </b-form-group>
  </b-container>
</template>

<script>
import fetchGuilds from "~/apollo/queries/guilds/fetchGuilds.gql"

export default {
  data() {
    return {
      perPage: 6,
      currentPageGuilds: 1,
      isLoaded: false,
    }
  },
  apollo: {
    guilds: {
      query: fetchGuilds,
      variables() {
        return {
          first: this.perPage,
          page: parseInt(this.currentPageGuilds),
        }
      },
    },
  },
  watch: {
    currentPageGuilds: function () {
      this.$store.commit("updateGuildsPage", this.currentPageGuilds)
    },
  },
  mounted() {
    this.currentPageGuilds = this.$store.state.guildsPage
    this.isLoaded = true
  },
}
</script>

<style></style>

<template>
  <b-form-group>
    <h1>GGB</h1>
    <i><h3>Cutting edge garden planning webapp</h3></i>
    <p class="information-block">
      Browse through the different species in our database and combine your own
      <strong @mouseover="showDismissibleAlert = true">guilds*</strong> of
      plants.
    </p>
    <b-alert v-model="showDismissibleAlert" class="test" dismissible
      >A guild is a combination of different plants that synergize and make
      optimal use of soil space. Usually a guild is build around a keystone
      specy, one that functions as a starting point for selecting other species
      to plant around it.
    </b-alert>
    <nuxt-link to="/plantedex">
      <b-btn> Browse species</b-btn>
    </nuxt-link>
  </b-form-group>
</template>

<script>
export default {
  data() {
    return {
      showDismissibleAlert: false,
    }
  },
}
</script>

<style></style>

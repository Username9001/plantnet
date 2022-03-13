<template>
  <b-card v-if="plant" class="plants-card-small">
    <nuxt-link :to="`/plants/${plant.id}`">
      <h5 class="plant-name">{{ plant.name }}</h5>
      <SpeciesCardSmall :specy="plant.specy" />
    </nuxt-link>
  </b-card>
</template>

<script>
export default {
  props: ["plant"],
}
</script>

<style scoped>
.card-body {
  padding: 0.5em;
}
.plants-card-small {
  margin-bottom: 24px;
}
.plant-name {
  height: 2.5em;
  margin-bottom: 0;
}
</style>

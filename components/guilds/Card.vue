<template>
  <div>
    <nuxt-link :to="`/guilds/${guild.id}`"
      ><h2>{{ guild.name }}</h2>
      <p>{{ guild.description }}</p>
    </nuxt-link>
    <b-btn v-b-toggle="'guild_plants_' + guild.id">Show Plants</b-btn>
    <b-collapse :id="`guild_plants_${guild.id}`">
      <b-row>
        <b-col
          v-for="plant in guild.plants"
          :key="plant.id"
          cols="12"
          md="12"
          lg="3"
        >
          <PlantsCardSmall :plant="plant"
        /></b-col>
      </b-row>
    </b-collapse>
  </div>
</template>

<script>
export default {
  props: ["guild"],
}
</script>

<style scoped>
h2 {
  font-weight: 700;
  font-style: italic;
}
</style>

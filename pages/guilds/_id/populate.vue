<template>
  <b-container v-if="guildById">
    <b-row v-if="!hasKeystone">
      <h1>Start with a Keystone Plant</h1>
      <!-- PLANTEDEX -->
      <PlantedexComplete />
      <!-- PLANTEDEX END -->
    </b-row>
    <!-- State of polyculture -->
    <b-row v-if="hasKeystone">
      <h2>Complement the keystone</h2>
      <!-- Define guild parameters to use in species search -->
      <GuildsInput />
      <!-- PLANTEDEX -->
      <PlantedexComplete :keystone="keystone.specy" />
      <!-- PLANTEDEX END -->
      <b-col cols="12" md="4">
        <h1>Keystone Plant</h1>
        <PlantsCardSmall :plant="keystone" />
      </b-col>
      <b-col cols="8">
        <h1>Other Plants</h1>
        <b-row>
          <b-col
            v-for="plant in other_plants.slice(0, 5)"
            :key="plant.id"
            cols="12" md="4"
          >
            <PlantsCardSmall :plant="plant" />
          </b-col>
        </b-row>
        <hr />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import guildById from "~/apollo/queries/guilds/fetchGuild.gql"

export default {
  data() {
    return {
      hasKeystone: false,
      keystone: {},
      other_plants: [],
    }
  },
  apollo: {
    guildById: {
      query: guildById,
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
    },
  },
  mounted() {
    if (
      this.guildById.plants.forEach((plant) => {
        if (plant.keystone == true) {
          this.hasKeystone = true
          this.keystone = plant
        } else {
          this.other_plants.push(plant)
        }
      })
    ) {
      console.log(this.hasKeystone)
    }
  },
}
</script>

<style></style>

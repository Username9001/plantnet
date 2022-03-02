<template>
  <!-- TODO -->
  <!-- Create reusable collapsable in common -->
  <b-container v-if="guildById">
    <h2>{{ guildById.name }}</h2>
    <p>{{ guildById.description }}</p>
    <hr />
    <b-row>
      <!-- Keystone plant -->
      <b-col v-if="keystone.length > 0" cols="12">
        <h3>Keystone Plant</h3>
        <b-row>
          <b-col v-for="plant in keystone" :key="plant.id">
            <PlantsCardSmall :plant="plant" />
          </b-col>
        </b-row>
      </b-col>
      <!-- All Plants in Guild -->
      <b-col cols="12">
        <h3>Plants in this Guild: {{ guildById.plants.length }}</h3>
        <b-btn v-b-toggle.all_plants>Show All Plants</b-btn>
        <b-collapse id="all_plants">
          <b-row>
            <b-col
              v-for="plant in guildById.plants"
              :key="plant.id"
              cols="12"
              md="6"
              lg="3"
            >
              <PlantsCardSmall :plant="plant" />
            </b-col>
          </b-row>
        </b-collapse>
      </b-col>
      <!-- Layers -->
      <!-- Canopy Layers -->
      <b-col v-if="canopy.length > 0" cols="12">
        <h3>Canopy: {{ canopy.length }}</h3>
        <b-btn v-b-toggle.canopy_plants>Show Canopy Plants</b-btn>
        <b-collapse id="canopy_plants">
          <!-- Canopy -->
          <b-row>
            <b-col
              v-for="plant in canopy"
              :key="plant.id"
              cols="12"
              md="6"
              lg="3"
            >
              <PlantsCardSmall :plant="plant" />
            </b-col>
          </b-row>
        </b-collapse>
      </b-col>
      <b-col v-if="subCanopy.length > 0" cols="12">
        <h3>Sub-canopy: {{ subCanopy.length }}</h3>
        <b-btn v-b-toggle.sub_canopy_plants>Show Sub-canopy Plants</b-btn>
        <b-collapse id="sub_canopy_plants">
          <!-- Sub-canopy -->
          <b-row>
            <b-col
              v-for="plant in subCanopy"
              :key="plant.id"
              cols="12"
              md="6"
              lg="3"
            >
              <PlantsCardSmall :plant="plant" />
            </b-col>
          </b-row>
        </b-collapse>
      </b-col>
      <b-col v-if="shrubs.length > 0" cols="12">
        <h3>Shrubs: {{ shrubs.length }}</h3>
        <b-btn v-b-toggle.shrub_plants>Show Shrub Plants</b-btn>
        <b-collapse id="shrub_plants">
          <!-- Shrubs -->
          <b-row>
            <b-col
              v-for="plant in shrubs"
              :key="plant.id"
              cols="12"
              md="6"
              lg="3"
            >
              <PlantsCardSmall :plant="plant" />
            </b-col>
          </b-row>
        </b-collapse>
      </b-col>
      <!-- End of Canopy Layers -->
      <!-- Mid Layer -->
      <b-col v-if="herbaceous.length > 0" cols="12">
        <h3>Herbaceous: {{ herbaceous.length }}</h3>
        <b-btn v-b-toggle.herbaceous_plants>Show Herbaceous Plants</b-btn>
        <b-collapse id="herbaceous_plants">
          <!-- Herbaceous -->
          <b-row>
            <b-col
              v-for="plant in herbaceous"
              :key="plant.id"
              cols="12"
              md="6"
              lg="3"
            >
              <PlantsCardSmall :plant="plant" />
            </b-col>
          </b-row>
        </b-collapse>
      </b-col>
      <b-col v-if="groundCover.length > 0" cols="12">
        <h3>Ground Cover: {{ groundCover.length }}</h3>
        <b-btn v-b-toggle.ground_cover_plants>Show Ground Cover Plants</b-btn>
        <b-collapse id="ground_cover_plants">
          <!-- Ground Cover -->
          <b-row>
            <b-col
              v-for="plant in groundCover"
              :key="plant.id"
              cols="12"
              md="6"
              lg="3"
            >
              <PlantsCardSmall :plant="plant" />
            </b-col>
          </b-row>
        </b-collapse>
      </b-col>
    </b-row>
    <!-- End of Mid Layers -->
    <!-- Water Layer -->
    <b-row>
      <b-col v-if="waterPlants.length > 0" cols="12">
        <h3>Water Plants: {{ waterPlants.length }}</h3>
        <b-btn v-b-toggle.water_plants>Show Water Plants</b-btn>
        <b-collapse id="water_plants">
          <!-- Water Plants -->
          <b-row>
            <b-col
              v-for="plant in waterPlants"
              :key="plant.id"
              cols="12"
              md="6"
              lg="3"
            >
              <PlantsCardSmall :plant="plant" />
            </b-col>
          </b-row>
        </b-collapse>
      </b-col>
      <b-col v-if="bogPlants.length > 0" cols="12">
        <h3>Bog Plants: {{ bogPlants.length }}</h3>
        <b-btn v-b-toggle.bog_plants>Show Bog Plants</b-btn>
        <b-collapse id="bog_plants">
          <!-- Bog Plants -->
          <b-row>
            <b-col
              v-for="plant in bogPlants"
              :key="plant.id"
              cols="12"
              md="6"
              lg="3"
            >
              <PlantsCardSmall :plant="plant" />
            </b-col>
          </b-row>
        </b-collapse>
      </b-col>
    </b-row>
    <!-- End of Water Layers -->
    <hr />
    <!-- Undefined Layers -->
    <b-row>
      <b-col v-if="undefinedPlants.length > 0" cols="12">
        <h3>Plants With Undefined Layers: {{ undefinedPlants.length }}</h3>
        <b-btn v-b-toggle.undefined_plants>Show Undefined Plants</b-btn>
        <b-collapse id="undefined_plants">
          <!-- Herbaceous -->
          <b-row>
            <b-col
              v-for="plant in undefinedPlants"
              :key="plant.id"
              cols="12"
              md="6"
              lg="3"
            >
              <PlantsCardSmall :plant="plant" />
            </b-col>
          </b-row>
        </b-collapse>
      </b-col>
    </b-row>
    <hr />
    <h2>Guild Parameters:</h2>
    <ul class="no-dots">
      <li>Location: {{ guildById.location }}</li>
      <li>Shade Amount: {{ guildById.shade }} (full/semi/none)</li>
      <li>
        Soil Structure: {{ guildById.soil_structure }} (light/medium/heavy)
      </li>
      <li>PH: {{ guildById.soil_ph }} (acid/neutral/base)</li>
    </ul>
    <hr />
    <!-- PLANTEDEX -->
    <h3>Look for plants to add:</h3>
    <PlantedexComplete />
    <!-- <PlantedexSearchSpecs :method="'specs'" :guild_specs="guildById" />
    <PlantedexResultsList :method="'specs'" :guild_specs="guildById" /> -->
  </b-container>
</template>

<script>
import guildById from "~/apollo/queries/guilds/fetchGuild.gql"

export default {
  data() {
    return {
      PerPage: 6,
      // currentPage: 1,
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
  computed: {
    keystone() {
      return this.guildById.plants.filter((plant) => plant.keystone)
    },
    canopy() {
      return this.guildById.plants.filter((plant) =>
        plant.specy.garden_layers.includes("CANOPY")
      )
    },
    subCanopy() {
      return this.guildById.plants.filter((plant) =>
        plant.specy.garden_layers.includes("SUB_CANOPY")
      )
    },
    shrubs() {
      return this.guildById.plants.filter((plant) =>
        plant.specy.garden_layers.includes("SHRUB")
      )
    },
    herbaceous() {
      return this.guildById.plants.filter((plant) =>
        plant.specy.garden_layers.includes("HERBACEOUS")
      )
    },
    groundCover() {
      return this.guildById.plants.filter((plant) =>
        plant.specy.garden_layers.includes("GROUND_COVER")
      )
    },
    climbers() {
      return this.guildById.plants.filter((plant) =>
        plant.specy.garden_layers.includes("CLIMBER")
      )
    },
    waterPlants() {
      return this.guildById.plants.filter((plant) =>
        plant.specy.garden_layers.includes("WATER_PLANT")
      )
    },
    bogPlants() {
      return this.guildById.plants.filter((plant) =>
        plant.specy.garden_layers.includes("BOG_PLANT")
      )
    },
    undefinedPlants() {
      return this.guildById.plants.filter(
        (plant) => plant.specy.garden_layers.length == 0
      )
    },
  },
  mounted() {
    this.isLoaded = true
    // this.guildById = this.$store.getters.getGuildById(this.$route.params.id)
    console.log(this.guildById)
  },
}
</script>

<style scoped>
.wiki-img {
  height: 240px;
  width: 120px;
  object-fit: cover;
}
.plant-name {
  min-height: 48px;
}
</style>

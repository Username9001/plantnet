<template>
  <div>
    <b-container v-if="isLoaded">
      plant name
      <b-form-input
        v-model="name"
        type="text"
        placeholder="plant name"
      ></b-form-input>
      plant description
      <b-form-input
        v-model="description"
        type="text"
        placeholder="plant description"
      ></b-form-input>
      Guild
      <b-form-select>
        <b-form-select-option v-for="guild in guilds" :key="guild.id">
          {{ guild.name }}
        </b-form-select-option>
      </b-form-select>
      Specy
      <PlantedexComplete />
      <b-btn @click.prevent="addPlant()">Add Plant</b-btn>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex"
import addPlant from "~/apollo/mutations/plants/createPlant.gql"

export default {
  data() {
    return {
      name: "",
      description: "",
      selected_specy: null,
      selected_guild: null,
      isLoaded: null,
    }
  },
  computed: {
    ...mapState(["plants", "guilds"]),
  },
  mounted() {
    this.isLoaded = true
  },
  methods: {
    addPlant() {
      try {
        this.$apollo.mutate({
          mutation: addPlant,
          variables: {
            name: this.name,
            description: this.description,
            specy: this.selected_specy,
            guild: this.selected_guild,
          },
        })
      } catch (e) {
        console.log(e)
      }
      console.log("Plant Added!")
      // refresh the state
      // this.$store.dispatch("fetchPlants")
      this.$router.push("/plants/")
    },
  },
}
</script>

<style></style>

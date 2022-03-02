<template>
  <b-container>
    <b-form-group v-if="isLoaded">
      <b-alert show
        >To create a <strong>guild</strong>, first fill in these fields. A
        <strong>name</strong> to describe the guild/guild/plant collection. A
        <strong>description</strong> to go into more detail. And some additional
        parameters describing the <strong>soil</strong> and the amount of
        <strong>light</strong> the area is receiving.
      </b-alert>
      <b-form-group>
        guild name
        <b-form-input
          v-model="name"
          type="text"
          placeholder="guild name"
        ></b-form-input>
        guild description
        <b-form-input
          v-model="description"
          type="text"
          placeholder="guild description"
        ></b-form-input>
        guild location
        <b-form-input
          v-model="location"
          type="text"
          placeholder="guild location"
        ></b-form-input>
        guild soil structure (L/M/H)
        <b-form-input
          v-model="soil_structure"
          type="text"
          placeholder="guild soil_structure"
        ></b-form-input>
        guild soil ph (A/N/B)
        <b-form-input
          v-model="soil_ph"
          type="text"
          placeholder="guild soil_ph"
        ></b-form-input>
        guild shade amount (F/S/N)
        <b-form-input
          v-model="shade"
          type="text"
          placeholder="guild shade"
        ></b-form-input>
      </b-form-group>
      <!-- End of Guild specific params form -->
      <b-btn @click.prevent="addGuild()">Add Guild</b-btn>
    </b-form-group>
  </b-container>
</template>

<script>
import addGuild from "~/apollo/mutations/guilds/createGuild.gql"
import countGuilds from "~/apollo/queries/guilds/countGuilds.gql"

export default {
  data() {
    return {
      name: "",
      description: "",
      location: "",
      soil_structure: "",
      soil_ph: "",
      shade: "",
      isLoaded: null,
    }
  },
  mounted() {
    this.isLoaded = true
  },
  apollo: {
    countGuilds: {
      query: countGuilds,
    },
  },
  methods: {
    async addGuild() {
      try {
        this.$apollo.mutate({
          mutation: addGuild,
          variables: {
            name: this.name,
            description: this.description,
            location: this.location,
            soil_structure: this.soil_structure,
            soil_ph: this.soil_ph,
            shade: this.shade,
          },
        })
      } catch (e) {
        console.log(e)
      }
      // count guilds
      await this.$apollo.queries.countGuilds.refetch()
      console.log("Guild Added!", this.countGuilds.length)
      this.$router.push(`/guilds/${this.countGuilds.length}/populate`)
    },
  },
}
</script>

<style></style>

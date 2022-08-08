<template>
  <div>
    <small>Enter a (custom) name</small>
    <b-form-input v-model="name" type="text"></b-form-input>
    <b-form-checkbox v-model="keystone">Keystone species?</b-form-checkbox>
    <b-btn @click.prevent="addPlant()">Add Plant</b-btn>
  </div>
</template>

<script>
import addPlant from "~/apollo/mutations/plants/createPlant.gql"

export default {
  props: ["result"],
  data() {
    return {
      name: "",
      keystone: false,
    }
  },
  methods: {
    addPlant() {
      if (this.name == "") {
        this.name = this.result.latin_name
      }
      try {
        this.$apollo.mutate({
          mutation: addPlant,
          variables: {
            name: this.name,
            specy_id: parseInt(this.result.id),
            guild_id: parseInt(this.$route.params.id),
            keystone: this.keystone,
          },
        })
      } catch (e) {
        console.log(e)
      }
      console.log("Plant Added!")
      if (this.keystone == true) {
        location.reload()
      }
      // refresh the state
      // this.$store.dispatch("fetchPlants")
    },
  },
}
</script>

<style></style>

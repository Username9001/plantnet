<template>
  <b-card v-if="isLoaded">
    <b-tabs>
      <b-tab title="Image Search">
        <PlantedexSearchImage :keystone="keystone" />
        <PlantedexResultsList :method="'image'" />
      </b-tab>
      <b-tab title="Specs Search">
        <PlantedexSearchSpecs :keystone="keystone" />
        <PlantedexResultsList :method="'specs'" />
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import global from "~/mixins.js/plantedex/global.js"

export default {
  mixins: [global],
  props: ["keystone"],
  data() {
    return {
      method: "",
      result: false,
      isLoaded: false,
    }
  },
  mounted() {
    this.isLoaded = true
  },
  methods: {
    onMethodSelect(e) {
      this.method = e
      console.log("received:", e)
    },
    updatePlantnet(e) {
      console.log(e)
    },
  },
}
</script>

<style></style>

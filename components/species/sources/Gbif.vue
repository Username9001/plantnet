<template>
  <div>
    <b-container v-if="gbif">
      <h1>GBIF || ID: {{ gbif }}</h1>
      <b-btn v-if="!meta" @click.prevent="getGbif(gbif)"
        >Get GBIF information</b-btn
      >
      <b-row v-if="meta">
        <b-col>
          <h6>Phylum: {{ meta.phylum }}</h6>
          <h6>Class: {{ meta.class }}</h6>
          <h6>Order: {{ meta.order }}</h6>
          <h6>Family: {{ meta.family }}</h6>
          <h6>Genus: {{ meta.genus }}</h6>
          <h6>Species: {{ meta.species }}</h6>
        </b-col>
        <b-col>
          <h6>parent: {{ meta.parent }}</h6>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["gbif"],
  data() {
    return {
      meta: null,
      showGbif: false,
    }
  },
  methods: {
    async getGbif(input) {
      console.log("Gbif:", input)
      // create query
      var link = "https://api.gbif.org/v1/species/" + input
      let { data } = await this.$axios.get(link, {
        headers: {
          "Content-type": "multipart/from-data",
        },
      })
      console.log("GBIF result:", data)
      // set the result
      this.meta = data
    },
  },
}
</script>

<style></style>

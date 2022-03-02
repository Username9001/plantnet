<template>
  <b-row v-if="result">
    <b-col cols="12">
      <PlantedexResultsResultCard :gbif_id="gbif_id" />
      <h2>PlantNet Information</h2>
      <h5>Identification Accuracy: {{ Math.round(result.score * 100) }}%</h5>
      <hr />
    </b-col>
  </b-row>
</template>

<script>
import global from "~/mixins.js/wikiImgs.js"

export default {
  mixins: [global],
  props: ["result"],
  data() {
    return {
      isLoaded: false,
      query: "",
      // speciesComplexSpecs: [],
      wikiImg: "",
      gbif_id: null,
    }
  },
  mounted() {
    if (this.result) {
      this.query = this.result.species.scientificNameWithoutAuthor
      this.isLoaded = true
      this.getWikiImg(this.query)
      this.getGbifId(this.result.species.scientificNameWithoutAuthor)
      // this.getMoreWiki(this.query);
    }
  },
  methods: {
    async getGbifId(name) {
      var lowercase_name = name.toLowerCase()
      var link =
        "https://api.gbif.org/v1/species/match?kingdom=Plantae&name=" +
        lowercase_name
      let { data } = await this.$axios.get(link, {
        headers: {
          "Content-type": " multipart/from-data",
        },
      })
      console.log("GBIF ID:", data["speciesKey"])
      this.gbif_id = data["speciesKey"]
    },
  },
}
</script>

<style lang="scss" scoped>
.result-img {
  width: 100%;
  max-height: 320px;
  object-fit: cover;
}
.no-img {
  opacity: 0.4;
}
a {
  color: white;
}
</style>
>

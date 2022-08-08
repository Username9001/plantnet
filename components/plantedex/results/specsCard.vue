<template>
  <b-row>
    <b-col cols="12">
      <div v-if="result">
        <PlantedexResultsResultCard :gbif_id="result.gbif_id" />
      </div>
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
      specy: {},
    }
  },
  mounted() {
    if (this.result) {
      this.query = this.result.id
      console.log("ID that arrived on specsCard:", this.query)
      this.getWikiImg(this.result.latin_name)
    }
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
</style>
>

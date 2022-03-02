<template>
  <b-col cols="12" md="6">
    <b-row class="img-gallery wiki-gallery">
      <b-col v-for="img in imgList" :key="img" cols="12">
        <img :src="img" alt="" class="image" />
      </b-col>
    </b-row>
    <span>&copy;Wikimedia</span>
  </b-col>
</template>

<script>
import global from "~/mixins.js/wikiImgs.js"

export default {
  mixins: [global],
  props: ["meta"],
  data() {
    return {
      imgList: [],
    }
  },
  mounted() {
    this.getMoreWiki(this.meta.latin_name)
  },
}
</script>

<style></style>

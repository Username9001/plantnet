<template>
  <b-container>
    <SpeciesComplete v-if="isLoaded" :meta="speciesByLatinName" />
    <CommonLoading v-if="!isLoaded" />
  </b-container>
</template>

<script>
import speciesByLatinName from "~/apollo/queries/species/speciesByLatinName.gql"

export default {
  data() {
    return {
      speciesByLatinName: {},
      isLoaded: false,
    }
  },
  apollo: {
    speciesByLatinName: {
      query: speciesByLatinName,
      variables() {
        return {
          slug: String(this.$route.params.slug),
        }
      },
    },
  },
  async mounted() {
    console.log(this.$route.params.slug)
    await this.$apollo.queries.speciesByLatinName.refetch()
    console.log("Async Mounted:", this.speciesByLatinName.latin_name)
    this.isLoaded = true
  },
}
</script>

<style lang="scss">
.image {
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  overflow: hidden;
}
.img-gallery {
  padding: 0 24px;
  img {
    height: 240px;
    object-fit: cover;
    overflow: hidden;
    margin: 6px 0;
  }
}
.wiki-gallery {
  max-height: 252px;
  overflow-y: scroll;
  width: 100%;
}
.location-icon {
  max-width: 60px;
  max-height: 60px;
}
.booleans-list {
  text-align: right;
  list-style-type: none;
}
.plant-suggestions {
  max-height: 520px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>

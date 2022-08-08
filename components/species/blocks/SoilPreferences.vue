<template>
  <b-col cols="8">
    <h4>Plant soil preferences:</h4>
    <b-row v-if="meta">
      <!-- {{ locationByLatinName }} -->
      <b-col v-if="meta.includes('LIGHT_SOIL')">
        <!-- <img
          :src="require('@/assets/images/icons/woodland.png')"
          class="location-icon"
        /> -->
        <br />
        <strong>Light Soil</strong>
      </b-col>
      <b-col v-if="meta.includes('MEDIUM_SOIL')">
        <!-- <img
          :src="require('@/assets/images/icons/other.png')"
          class="location-icon"
        /> -->
        <br />
        <strong>Medium Soil</strong>
      </b-col>
      <b-col v-if="meta.includes('HEAVY_SOIL')">
        <!-- <img
          :src="require('@/assets/images/icons/cultivated_beds.png')"
          class="location-icon"
        /> -->
        <br />
        <strong>Heavy Soil</strong>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  props: ["meta"],
}
</script>

<style></style>

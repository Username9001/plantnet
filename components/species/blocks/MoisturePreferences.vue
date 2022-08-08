<template>
  <b-col cols="8">
    <h4>Plant soil moisture preferences:</h4>
    <b-row v-if="meta">
      <!-- {{ locationByLatinName }} -->
      <b-col v-if="meta.includes('DRY_SOIL')">
        <!-- <img
          :src="require('@/assets/images/icons/woodland.png')"
          class="location-icon"
        /> -->
        <br />
        <strong>Dry Soil</strong>
      </b-col>
      <b-col v-if="meta.includes('MOIST_SOIL')">
        <!-- <img
          :src="require('@/assets/images/icons/other.png')"
          class="location-icon"
        /> -->
        <br />
        <strong>Moist Soil</strong>
      </b-col>
      <b-col v-if="meta.includes('WET_SOIL')">
        <!-- <img
          :src="require('@/assets/images/icons/cultivated_beds.png')"
          class="location-icon"
        /> -->
        <br />
        <strong>Wet Soil</strong>
      </b-col>
      <b-col v-if="meta.includes('WATERY_SOIL')">
        <!-- <img
          :src="require('@/assets/images/icons/cultivated_beds.png')"
          class="location-icon"
        /> -->
        <br />
        <strong>Watery Soil</strong>
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

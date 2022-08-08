<template>
  <b-col cols="8">
    <h4>Plant soil ph preferences:</h4>
    <b-row v-if="meta">
      <!-- {{ locationByLatinName }} -->
      <b-col v-if="meta.includes('ACID')">
        <!-- <img
          :src="require('@/assets/images/icons/woodland.png')"
          class="location-icon"
        /> -->
        <br />
        <strong>Acid</strong>
      </b-col>
      <b-col v-if="meta.includes('NEUTRAL')">
        <!-- <img
          :src="require('@/assets/images/icons/other.png')"
          class="location-icon"
        /> -->
        <br />
        <strong>Neutral</strong>
      </b-col>
      <b-col v-if="meta.includes('BASE')">
        <!-- <img
          :src="require('@/assets/images/icons/cultivated_beds.png')"
          class="location-icon"
        /> -->
        <br />
        <strong>Base</strong>
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

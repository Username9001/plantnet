<template>
  <b-col cols="8">
    <h4>Plant shade preferences:</h4>
    <b-row v-if="meta">
      <b-col v-if="meta.includes('NO_SHADE')">
        <!-- <img
          :src="require('@/assets/images/icons/woodland.png')"
          class="location-icon"
        /> -->
        <br />
        <strong>No Shade</strong>
      </b-col>
      <b-col v-if="meta.includes('SEMI_SHADE')">
        <!-- <img
          :src="require('@/assets/images/icons/other.png')"
          class="location-icon"
        /> -->
        <br />
        <strong>Semi Shade</strong>
      </b-col>
      <b-col v-if="meta.includes('FULL_SHADE')">
        <!-- <img
          :src="require('@/assets/images/icons/cultivated_beds.png')"
          class="location-icon"
        /> -->
        <br />
        <strong>Full Shade</strong>
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

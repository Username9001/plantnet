<template>
  <b-col cols="12">
    <h4>Plant shade locations:</h4>
    <b-row v-if="meta">
      <!-- {{ locationByLatinName }} -->
      <b-col v-if="meta.includes('SUNNY_EDGE')" cols="12" md="12" lg="3">
        <img
          :src="require('@/assets/images/icons/woodland.png')"
          class="location-icon"
        />
        <br />
        <strong>Sunny Edge</strong>
      </b-col>
      <b-col v-if="meta.includes('DAPPLED_SHADE')" cols="12" md="12" lg="3">
        <img
          :src="require('@/assets/images/icons/other.png')"
          class="location-icon"
        />
        <br />
        <strong>Dappled Shade</strong>
      </b-col>
      <b-col v-if="meta.includes('SHADY_EDGE')" cols="12" md="12" lg="3">
        <img
          :src="require('@/assets/images/icons/cultivated_beds.png')"
          class="location-icon"
        />
        <br />
        <strong>Shady Edge</strong>
      </b-col>
      <b-col v-if="meta.includes('DEEP_SHADE')" cols="12" md="12" lg="3">
        <img
          :src="require('@/assets/images/icons/cultivated_beds.png')"
          class="location-icon"
        />
        <br />
        <strong>Deep Shade</strong>
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

<template>
  <b-col v-if="meta" cols="8">
    <h4>Potential Garden Layers:</h4>
    <b-row v-if="meta">
      <div v-for="item in layer_list" :key="item.id">
        <b-col v-if="meta.includes(item.data)">
          <!-- <img
            :src="require('@/assets/images/icons/' + item.image + '.png')"
            class="location-icon"
          /> -->
          <strong>{{ item.data }}</strong>
        </b-col>
      </div>
    </b-row>
  </b-col>
</template>

<script>
export default {
  props: ["meta"],
  data() {
    return {
      layer_list: [
        { id: 1, data: "CANOPY", image: "woodland" },
        { id: 2, data: "SUB_CANOPY", image: "other" },
        { id: 3, data: "SHRUB", image: "cultivated_beds" },
        { id: 4, data: "HERBACEOUS", image: "meadow" },
        { id: 5, data: "GROUND_COVER", image: "hedge" },
        { id: 6, data: "CLIMBER", image: "hedge" },
        { id: 7, data: "WATER_PLANT", image: "pond" },
        { id: 8, data: "BOG_PLANT", image: "bog_garden" },
      ],
    }
  },
}
</script>

<style></style>

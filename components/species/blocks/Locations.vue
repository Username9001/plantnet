<template>
  <b-col cols="8">
    <h4>Common Garden Locations:</h4>
    <b-row v-if="meta">
      <div v-for="item in location_list" :key="item.id">
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
      location_list: [
        { id: 1, data: "WOODLAND", image: "woodland" },
        { id: 2, data: "OTHER_HABITATS", image: "other" },
        { id: 3, data: "CULTIVATED_BEDS", image: "cultivated_beds" },
        { id: 4, data: "MEADOW", image: "meadow" },
        { id: 5, data: "HEDGE", image: "hedge" },
        { id: 6, data: "HEDGEROW", image: "hedge" },
        { id: 7, data: "POND", image: "pond" },
        { id: 8, data: "BOG_GARDEN", image: "bog_garden" },
        { id: 9, data: "WALL", image: "walls" },
      ],
    }
  },
}
</script>

<style></style>

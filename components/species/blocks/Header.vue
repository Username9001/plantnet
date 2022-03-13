<template>
  <b-col cols="12" md="6">
    <small>Scientific Name:</small>
    <h4>{{ meta.latin_name }}</h4>
    <small>Common Name(s):</small>
    <ul class="no-dots">
      <li v-for="name in meta.common_english" :key="name">
        {{ name }}
      </li>
    </ul>
    <h4>Hardiness zone: {{ meta.hardyness }}</h4>
    <small>Family: </small>
    <h4 v-if="meta.taxons">
      {{ meta.taxons.taxon_family }}
    </h4>
    <small>Native region: </small>
    <h4 v-if="meta.descriptions">
      {{ meta.descriptions.region }}
    </h4>
  </b-col>
</template>

<script>
export default {
  props: ["meta"],
}
</script>

<style></style>

<template>
  <b-row v-if="meta">
    <ul>
      <h5>Care:</h5>
      <li><b>Cold Hardiness</b>: {{ meta.hardyness }} (as per USDA Zones)</li>
      <li>
        <b>Water Requirements</b>: {{ meta.moisture_pref }} (Dry Soil, Moist
        Soil, Wet or Boggy Soil, Water Plants)
      </li>
      <li>
        <b>Shade Requirements</b>: {{ meta.shade_pref }} (Full, Semi, None)
      </li>
      <li><b>Well Drained</b>: {{ meta.well_drained }} (Yes/No)</li>
    </ul>
    <b-col cols="12">
      <ul class="no-dot">
        <li>
          ph | <strong>{{ meta.ph }}</strong>
        </li>
        <li>
          Growth Rate | <strong>{{ meta.growth_rate }}</strong>
        </li>
        <li>
          Pollinators | <strong>{{ meta.pollinators }}</strong>
        </li>
        <li>
          Habit | <strong>{{ meta.habit }}</strong>
        </li>
        <li>
          Flower Type | <strong>{{ meta.flower_type }}</strong>
        </li>
        <li>
          Type | <strong>{{ meta.deciduous_evergreen }}</strong>
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ["meta"],
}
</script>

<style></style>

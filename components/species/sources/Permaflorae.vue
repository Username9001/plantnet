<template>
  <div>
    <br />
    <b-alert show
      >Information from the permaflorae database as used on pfaf.org</b-alert
    >
    <!-- SOIL -->
    <h3>Soil Preferences</h3>
    <b-row>
      <b-col cols="4">
        <SpeciesBlocksSoilPreferences :meta="specy.soil_pref" />
      </b-col>
      <b-col cols="4">
        <SpeciesBlocksMoisturePreferences :meta="specy.moisture_pref" />
      </b-col>
      <b-col cols="4">
        <SpeciesBlocksPhPreferences :meta="specy.ph_pref" />
      </b-col>
    </b-row>
    <h3>Common locations</h3>
    <b-row>
      <!-- TODO -->
      <!-- Find a more minimalist way of doing these blocks -->
      <b-col cols="4">
        <SpeciesBlocksLocations :meta="specy.garden_locations" />
      </b-col>
      <b-col cols="4">
        <SpeciesBlocksLayers :meta="specy.garden_layers" />
      </b-col>
      <b-col cols="4">
        <SpeciesBlocksShadePreferences :meta="specy.shade_pref" />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <b-row>
          <SpeciesBlocksGeneral :meta="specy.features" />
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div v-if="specy.descriptions">
          <h5>Cultivation Details:</h5>
          <p class="smalltext">{{ specy.descriptions.cultivation_details }}</p>
          <h5>Medicinal Details:</h5>
          <p class="smalltext">{{ specy.descriptions.medicinal }}</p>
          <h5>Edible Uses:</h5>
          <p class="smalltext">{{ specy.descriptions.edible_uses }}</p>
          <h5>Propagation:</h5>
          <p class="smalltext">{{ specy.descriptions.propagation }}</p>
          <h5>Known Hazards:</h5>
          <p class="smalltext">{{ specy.descriptions.medicinal }}</p>
          <h5>Other Notes:</h5>
          <p class="smalltext">{{ specy.descriptions.uses_notes }}</p>
          <b-row>
            <b-col>
              <h5>References:</h5>
              <b-row>
                <b-col
                  v-for="book in book_list"
                  :key="book.id"
                  cols="12"
                  md="6"
                  lg="3"
                >
                  <strong>{{ book.id }}</strong
                  ><i> "{{ book.title }}" - {{ book.author }}</i>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ["specy", "book_list"],
}
</script>

<style></style>

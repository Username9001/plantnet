<template>
  <b-container>
    <b-row v-if="isLoaded">
      <b-col cols="12">
        <!-- Search Params -->
        <b-row>
          <!-- Text Input -->
          <b-col cols="12" md="6">
            <!-- Common Name -->
            <b-form-group
              description="The common name of the plant"
              class="text-input"
            >
              <b-form-input
                v-model="common_english"
                lazy
                trim
                type="text"
                placeholder="name"
                @keyup.enter="sendParameters()"
              >
              </b-form-input>
            </b-form-group>
            <!-- Scientific Name -->
            <b-form-group
              description="The scientific name of the plant"
              class="text-input"
            >
              <b-form-input
                v-model="slug"
                type="text"
                lazy
                trim
                placeholder="name"
                @keyup.enter="sendParameters()"
              >
              </b-form-input>
            </b-form-group>
            <hr />
            <!-- Regions -->
            <b-alert show variant="danger">
              <strong>Warning:</strong> The following parameters are currently
              insufficiently populated within the database to give a wholesome
              representation of their respective plants. For example: trees
              might not have a canopy layer assigned to them yet. Or a plant
              might be native to an area but not yet have the corresponding
              parameter.
            </b-alert>
            <b-btn v-b-toggle.regions-collapse>Regions</b-btn>
            <b-collapse id="regions-collapse">
              <!-- Britain -->
              <b-form-group description="British region">
                <b-form-checkbox-group v-model="regions_britain_selected">
                  <b-form-checkbox
                    v-for="value in regions_britain"
                    :key="value"
                    :value="value"
                  >
                    {{ value }}
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <hr />
              <!-- Europe -->
              <b-form-group description="European region">
                <b-form-checkbox-group v-model="regions_europe_selected">
                  <b-form-checkbox
                    v-for="value in regions_europe"
                    :key="value"
                    :value="value"
                  >
                    {{ value }}
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <hr />
              <!-- Mediterranean -->
              <b-form-group description="Mediterranean region">
                <b-form-checkbox-group v-model="regions_mediterranean_selected">
                  <b-form-checkbox
                    v-for="value in regions_mediterranean"
                    :key="value"
                    :value="value"
                  >
                    {{ value }}
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <hr />
              <!-- West Asia -->
              <b-form-group description="West Asian region">
                <b-form-checkbox-group v-model="regions_w_asia_selected">
                  <b-form-checkbox
                    v-for="value in regions_w_asia"
                    :key="value"
                    :value="value"
                  >
                    {{ value }}
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <hr />
              <!-- East Asia -->
              <b-form-group description="East Asian region">
                <b-form-checkbox-group v-model="regions_e_asia_selected">
                  <b-form-checkbox
                    v-for="value in regions_e_asia"
                    :key="value"
                    :value="value"
                  >
                    {{ value }}
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <!-- North America -->
              <b-form-group description="North American region">
                <b-form-checkbox-group v-model="regions_n_america_selected">
                  <b-form-checkbox
                    v-for="value in regions_n_america"
                    :key="value"
                    :value="value"
                  >
                    {{ value }}
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <!-- South America -->
              <b-form-group description="South American region">
                <b-form-checkbox-group v-model="regions_s_america_selected">
                  <b-form-checkbox
                    v-for="value in regions_s_america"
                    :key="value"
                    :value="value"
                  >
                    {{ value }}
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <hr />
              <!-- African -->
              <b-form-group description="African region">
                <b-form-checkbox-group v-model="regions_africa_selected">
                  <b-form-checkbox
                    v-for="value in regions_africa"
                    :key="value"
                    :value="value"
                  >
                    {{ value }}
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <hr />
              <!-- Australasia -->
              <b-form-group description="Australasian region">
                <b-form-checkbox-group v-model="regions_australasia_selected">
                  <b-form-checkbox
                    v-for="value in regions_australasia"
                    :key="value"
                    :value="value"
                  >
                    {{ value }}
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <hr />

              <!-- Other -->
              <b-form-group description="Other regions">
                <b-form-checkbox-group v-model="regions_other_selected">
                  <b-form-checkbox
                    v-for="value in regions_other"
                    :key="value"
                    :value="value"
                  >
                    {{ value }}
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <hr />
            </b-collapse>
          </b-col>
          <!-- End of Regions -->
          <!-- Niches -->
          <b-col cols="12" md="6">
            <b-form-group>
              <b-btn v-b-toggle.niches-collapse>Niches within Guild</b-btn>
              <b-collapse id="niches-collapse">
                <b-form-group
                  description="Niches the plant can fill within a polyculture"
                >
                  <b-form-checkbox-group v-model="other_uses">
                    <b-form-checkbox
                      v-for="value in plant_niches"
                      :key="value"
                      :value="value"
                    >
                      {{ value }}
                    </b-form-checkbox></b-form-checkbox-group
                  >
                </b-form-group>
              </b-collapse>
              <hr />
              <b-btn v-b-toggle.soil-shade-collapse>Soil/Shade</b-btn>
              <b-collapse id="soil-shade-collapse">
                <!-- Soil Preferences -->
                <b-form-group description="The soil preferences of the plant">
                  <b-form-checkbox-group v-model="soil_pref">
                    <b-form-checkbox
                      v-for="value in soil_prefs"
                      :key="value"
                      :value="value"
                    >
                      {{ value }}
                    </b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
                <hr />
                <!-- Shade Preferences -->
                <b-form-group description="The shade preferences of the plant">
                  <b-form-checkbox-group v-model="shade_pref">
                    <b-form-checkbox
                      v-for="value in shade_prefs"
                      :key="value"
                      :value="value"
                    >
                      {{ value }}
                    </b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
                <hr />
                <!-- Moisture Preferences -->
                <b-form-group
                  description="The moisture preferences of the plant"
                >
                  <b-form-checkbox-group v-model="moisture_pref">
                    <b-form-checkbox
                      v-for="value in moisture_prefs"
                      :key="value"
                      :value="value"
                    >
                      {{ value }}
                    </b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
                <hr />
                <!-- Acidity Preferences -->
                <b-form-group
                  description="The soil acidity preferences of the plant"
                >
                  <b-form-checkbox-group v-model="ph_pref">
                    <b-form-checkbox
                      v-for="value in ph_prefs"
                      :key="value"
                      :value="value"
                    >
                      {{ value }}
                    </b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
                <hr />
              </b-collapse>
              <b-btn v-b-toggle.layers-collapse>Layers</b-btn>
              <b-collapse id="layers-collapse">
                <!-- Garden Layers -->
                <b-form-group
                  description="Garden layers the plant can belong to"
                >
                  <b-form-checkbox-group v-model="garden_layers">
                    <b-form-checkbox
                      v-for="value in garden_layers_list"
                      :key="value"
                      :value="value"
                    >
                      {{ value }}
                    </b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
              </b-collapse>
            </b-form-group>
          </b-col>
        </b-row>
        <hr />
        <!-- End Search Params -->
        <!-- SEARCH BUTTON -->
        <b-form-group>
          <b-btn ref="button" @click.prevent="sendParameters()">Search</b-btn>
          <b-btn ref="button" @click.prevent="resetSearch()">Reset</b-btn>
        </b-form-group>
        <!-- <b-btn ref="button" @click.prevent="nextPage()">Next Page</b-btn> -->
        <!-- loading indicator -->
        <CommonLoading v-if="loading" />
      </b-col>
      <b-col v-if="keystone" cols="12" md="4" lg="2">
        <!-- <h4>Keystone Params:</h4>
        <h5>Layers: {{ keystone.garden_layers }}</h5>
        <h5>Soil pref: {{ keystone.soil_pref }}</h5>
        <h5>Shade pref: {{ keystone.shade_pref }}</h5>
        <h5>Moisture pref: {{ keystone.moisture_pref }}</h5>
        <h5>Ph pref: {{ keystone.ph_pref }}</h5>
        <h5>Uses: {{ keystone.other_uses }}</h5> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex"

export default {
  props: ["keystone"],
  data() {
    return {
      // query values
      latin_name: null,
      slug: undefined,
      common_english: undefined,
      soil_pref: undefined,
      shade_pref: undefined,
      moisture_pref: undefined,
      ph_pref: undefined,
      garden_layers: undefined,
      other_uses: undefined,
      selected_region: undefined,
      region_details: undefined,
      regions_britain_selected: undefined,
      regions_europe_selected: undefined,
      regions_mediterranean_selected: undefined,
      regions_w_asia_selected: undefined,
      regions_e_asia_selected: undefined,
      regions_n_america_selected: undefined,
      regions_s_america_selected: undefined,
      regions_africa_selected: undefined,
      regions_australasia_selected: undefined,
      regions_other_selected: undefined,
      // regions
      regions_britain: ["0", "1", "I", "N"],
      regions_europe: ["", "0", "1", "C", "N", "E", "S", "W"],
      regions_mediterranean: ["0", "1"],
      regions_w_asia: ["0", "1"],
      regions_e_asia: [
        "0",
        "1",
        "C",
        "B",
        "H",
        "J",
        "M",
        "S",
        "I",
        "K",
        "R",
        "Ch",
        "T",
      ],
      regions_n_america: ["0", "1", "C", "N", "E", "S", "W"],
      regions_s_america: ["0", "1", "A", "U", "C", "Ch", "N", "P", "S", "W"],
      regions_africa: ["0", "1", "N", "E", "S"],
      regions_australasia: ["0", "1", "A", "N"],
      regions_other: ["0", "1", "None", "T"],
      // display values
      soil_prefs: ["LIGHT_SOIL", "MEDIUM_SOIL", "HEAVY_SOIL"],
      shade_prefs: ["NO_SHADE", "SEMI_SHADE", "FULL_SHADE"],
      moisture_prefs: ["DRY_SOIL", "MOIST_SOIL", "WET_SOIL", "WATERY_SOIL"],
      ph_prefs: ["ACID", "NEUTRAL", "BASE"],
      garden_layers_list: [
        "CANOPY",
        "SUB_CANOPY",
        "SHRUB",
        "HERBACEOUS",
        "CLIMBER",
        "GROUND_COVER",
        "WATER_PLANT",
        "BOG_PLANT",
      ],
      plant_niches: [
        "COMPOST",
        "GREEN_MANURE",
        "FERTILIZER",
        "LIQUID_FEED",
        "POTASH",
        "MULCH",
        "PIONEER",
        "PLANT_SUPPORT",
        "SHELTERBELT",
        "SOIL_CONDITIONER",
        "SOIL_RECLAMATION",
        "SOIL_STABILIZATION",
        "REPELLENT",
        "LITMUS",
        "POLLUTION",
        "WEATHER_PROTECTION",
        "FUNGICIDE",
        "HERBICIDE",
        "INSECTICIDE",
        "PARASITICIDE",
      ],
      isLoaded: false,
      // loading animation
      loading: false,
      // Pagination
      page: 1,
      perPage: 20,
    }
  },
  computed: {
    ...mapState(["plots"]),
  },
  mounted() {
    this.isLoaded = true
    if (this.keystone) {
      console.log(this.keystone)
      // set parameters in relation to keystone params
    }
  },
  methods: {
    sendParameters() {
      this.loading = true
      this.$parent.$emit("specsList", {
        slug: this.slug,
        common_english: this.common_english,
        soil_pref: this.soil_pref,
        shade_pref: this.shade_pref,
        moisture_pref: this.moisture_pref,
        ph_pref: this.ph_pref,
        garden_layers: this.garden_layers,
        other_uses: this.other_uses,
        regions_britain: this.regions_britain_selected,
        regions_europe: this.regions_europe_selected,
        regions_mediterranean: this.regions_mediterranean_selected,
        regions_w_asia: this.regions_w_asia_selected,
        regions_e_asia: this.regions_e_asia_selected,
        regions_n_america: this.regions_n_america_selected,
        regions_s_america: this.regions_s_america_selected,
        regions_africa: this.regions_africa_selected,
        regions_australasia: this.regions_australasia_selected,
        regions_other: this.regions_other_selected,
      })
      // RESET THE QUERY
      // this.resetSearch()
      this.loading = false
    },
    async resetSearch() {
      this.slug = undefined
      this.common_english = undefined
      this.soil_pref = undefined
      this.shade_pref = undefined
      this.moisture_pref = undefined
      this.ph_pref = undefined
      this.garden_layers = undefined
      this.other_uses = undefined
      this.regions_britain_selected = undefined
      this.regions_europe_selected = undefined
      this.regions_mediterranean_selected = undefined
      this.regions_w_asia_selected = undefined
      this.regions_e_asia_selected = undefined
      this.regions_n_america_selected = undefined
      this.regions_s_america_selected = undefined
      this.regions_africa_selected = undefined
      this.regions_australasia_selected = undefined
      this.regions_other_selected = undefined
    },
  },
}
</script>

<style>
.form-group:first-of-type {
  margin-top: 20px;
}
.loading-block {
  width: 100%;
}
</style>

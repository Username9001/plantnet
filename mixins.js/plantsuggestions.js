import { mapGetters, mapState } from "vuex"

export default {
  data() {
    return {
      suggestions: {},
    }
  },
  computed: {
    ...mapGetters(["getPlantById", "getSpecyById"]),
    ...mapState(["plants", "species"]),
  },
  methods: {
    checkCompanions(specy, filters) {
      // FILTER: create a few suggestions for the plant companions
      this.suggestions = this.species.filter(
        (companion) =>
          // filter out self
          companion.id !== specy.id &&
          // filter on plants with the same preferences
          companion.soil_pref == specy.soil_pref &&
          companion.shade_pref == specy.shade_pref &&
          companion.moisture_pref == specy.moisture_pref &&
          // && companion.hardyness <= specy.hardyness
          companion.well_drained == specy.well_drained &&
          companion.drought == specy.drought &&
          companion.heavy_clay == specy.heavy_clay &&
          companion.acid == specy.acid &&
          companion.alkaline == specy.alkaline &&
          companion.saline == specy.saline &&
          companion.meadow == specy.meadow &&
          companion.woodland == specy.woodland &&
          companion.hardyness == filters.hardyness
      )
      console.log("Werkt deze log?", this.suggestions)
    },
  },
}

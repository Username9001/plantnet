<template>
  <b-container>
    <!-- IMAGE INPUT -->
    <b-form-group>
      <b-form-file
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        class="input-box"
        @change="onFileChanged"
      ></b-form-file>
    </b-form-group>
    <!-- PLANTNET LOOKUP -->
    <b-form-group v-if="showButton">
      <b-btn @click.prevent="permafQuery()">Search By Leaf</b-btn>
    </b-form-group>

    <!-- {{ this.plantnet }} -->
    <!-- SEND QUERY TO PERMAFLORAE WITH PLANTNET RESULTS -->
  </b-container>
</template>

<script>
import global from "~/mixins.js/wikiImgs.js"

export default {
  mixins: [global],
  props: ["method"],
  data() {
    return {
      // image file
      file: [],
      // plantnet responses
      plantnet: [],
      // hidden button for query
      showButton: false,
      // test variables
      retrieved_name: "",
      species: [],
      results: {},
    }
  },
  methods: {
    onFileChanged(event) {
      // hide search button
      this.showButton = false
      // set the file to a local var
      this.file = event.target.files[0]
      // query plantnet
      this.plantnetQuery(this.file)
      // reset file
      // this.file = [];
    },
    async plantnetQuery() {
      let formData = new FormData()
      formData.append("organs", "leaf")
      formData.append("images", this.file)
      // Check if file is there
      console.log("The file form contains the following: ", formData)
      await this.$axios
        .post(
          // TODO: HIDE API KEY
          "/plantnet/identify/all?api-key=2b10pur7FnSNz6fOEBwrFJYxu",
          formData,
          {
            headers: { "Content-type": "multipart/form-data" },
          }
        )
        .then((response) => {
          console.log("SUCCESS with identifying picture!!!")
          // log the response
          console.log("Response:", response)
          // set local array to the response
          this.plantnet = response.data.results
          //set uploaded image as standard image
          this.image = this.file
          // let the button appear
          this.showButton = true
        })
        .catch(function (error) {
          console.log("FAILURE with identifying picture!!!", error)
        })
    },
    callPermaf(results) {
      this.results = results
      console.log("RESULTS:", results)
    },
    permafQuery() {
      console.log("Plantnet returned: ", this.plantnet)
      // console.log("SEND THIS:", this.plantnet);
      this.$parent.$emit("plantnetList", this.plantnet)
      this.$parent.$emit("usedFile", this.file)
    },
  },
}
</script>

<style>
.input-box label {
  color: white;
  background-color: transparent !important;
  background: url("https://plantmonitor.ams3.digitaloceanspaces.com/uploads/background.jpg") !important;
  /* height: 240px; */
  /* width: 240px; */
  border: none;
}
</style>

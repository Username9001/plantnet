<template>
  <!--HEADER IMAGE-->
  <b-container v-if="plantById">
    <!-- <div class="image-container"> -->
    <!-- <div v-if="hasImages" class="hero-container">
          <img
            :src="`https://plantmonitor.ams3.digitaloceanspaces.com/uploads/${plantById.files[0].filename}`"
            alt=""
            class="image"
          />
        </div> -->
    <!-- <br /> -->
    <!--GALLERY-->
    <!-- <b-row v-if="hasImages" class="img-gallery">
          <b-col
            v-for="file in plantById.files"
            :key="file.id"
            cols="12"
            md="4"
            lg="2"
          >
            <img
              :src="`https://plantmonitor.ams3.digitaloceanspaces.com/uploads/${file.filename}`"
              alt=""
              class="image"
            />
          </b-col>
        </b-row> -->
    <!-- <br />
        <b-form-file
          v-model="imageFile"
          :state="Boolean(imageFile)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
          @change="onFileChanged"
        ></b-form-file>
        <b-btn @click="sendFilename()">Add Image</b-btn>
      </div> -->
    <b-row>
      <b-col>
        <b-row>
          <!--LOCAL DESCRIPTION-->
          <b-col cols="6">
            <!--TITLE-->
            <h4>Custom Name: {{ plantById.name }}</h4>
            <h4 v-if="plantById.guild">Guild: {{ plantById.guild.name }}</h4>
            <h5 v-if="plantById.description">
              Description: {{ plantById.description }}
            </h5>
          </b-col>
          <b-col cols="6">
            <!-- <b-btn @click="editLocal()">Edit Local Info</b-btn> -->
            <div v-if="editing">
              <PlantsEdit />
            </div>
            <hr />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <div class="plant-id-container">
      <b-row class="meta">
        <b-col cols="12">
          <SpeciesComplete v-if="plantById.specy" :meta="plantById.specy" />
        </b-col>
      </b-row>
    </div>
  </b-container>
  <div v-else-if="!plantById && isLoading" class="container padding">
    <PageNotFound />
  </div>
</template>

<script>
import plantById from "~/apollo/queries/plants/fetchPlant.gql"

import wikiImgs from "~/mixins.js/wikiImgs.js"

export default {
  mixins: [wikiImgs],
  data() {
    return {
      isLoading: false,
      name: this.$route.params.name,
      editing: false,
      search: "test",
      hasImages: false,
      wikiImg: "",
      imageFile: undefined,
    }
  },
  apollo: {
    plantById: {
      query: plantById,
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
    },
  },
  methods: {
    editLocal() {
      this.editing = !this.editing
    },
    onFileChanged(event) {
      this.imageFile = event.target.files[0]
      console.log(event, this.imageFile)
    },
    async submitFile() {
      if (this.imageFile) {
        let formData = new FormData()
        formData.append("file", this.imageFile)
        formData.append("plant_id", this.$route.params.id)
        console.log(this.imageFile.lastModified)
        await this.$axios
          .post("/api/upload", formData, {
            headers: {
              "Content-type": "multipart/form-data",
            },
          })
          .then(function () {
            console.log("SUCCESS!!")
            // send filename to database
            return
          })
          .catch(function (e) {
            console.log("FAILURE!!", e)
          })
      }
      return
    },
    // WORKING ON THIS
    async sendFilename() {
      await this.submitFile()
      console.log("Filename sent to db")
      await this.updateStore()
      // location.reload();
      console.log("Currently available files:", this.plantById.files)
    },
    // END WORKING ON
    onSetResult(result) {
      this.meta = result
      // get wiki Img
      console.log(result.latin_name)
      this.getWikiImg(result)
      console.log("hiero", this.wikiImg)
      console.log("emitted meta:", this.meta)
    },
  },
}
</script>

<style lang="scss" scoped>
.col-2 {
  padding: 0 5px;
}
.title {
  margin: 0 24px;
}
span {
  font-size: 14px;
  font-style: italic;
  opacity: 0.5;
}
.container {
  margin: 48px auto;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 0;
}
.image {
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  overflow: hidden;
}
.modal-image {
  width: 100%;
  height: 100%;
}
.img-gallery {
  padding: 0 24px;
  img {
    height: 240px;
    object-fit: cover;
    overflow: hidden;
    margin: 6px 0;
  }
}
.wiki-gallery {
  max-height: 480px;
  overflow-y: scroll;
  width: 100%;
}
.title,
.subtitle {
  font-weight: 700;
}
.meta {
  padding: 24px;
}
.meta-description {
  border-bottom: 1px solid lightgrey;
  margin-bottom: 24px;
}
@media (min-width: 768px) {
  .meta-description {
    border-bottom: none;
    margin-bottom: 0;
    border-right: 1px solid lightgrey;
  }
}
.no-dot {
  list-style-type: none;
}
.smalltext {
  font-size: 12px;
}
.plant-suggestions {
  max-height: 620px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>

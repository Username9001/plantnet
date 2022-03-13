<template>
  <div>
    <b-form-file
      v-model="file"
      name="selectedFile"
      :state="Boolean(file)"
      placeholder="choose file..."
      drop-placeholder="drop file..."
      @change="onFileChanged"
    ></b-form-file>
    <p>{{ file ? file.name : "" }}</p>
    <img
      v-if="newPlant.featuredImage"
      class="img-thumbnail img-fluid"
      :src="`~/assets/images/uploads/${newPlant.featuredImage}`"
    />
    <b-btn @click="submitFile">Upload!</b-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: undefined,
      newPlant: {
        name: "",
        featuredImage: "",
      },
    }
  },
  apollo: {},
  methods: {
    onFileChanged(event) {
      this.file = event.target.files[0]
      console.log(event)
    },
    onUpload({ target: { files = [] } }) {
      // See if the file is there
      console.log(this.file)
      try {
        console.log(this.file)
        this.$apollo.mutate({
          mutation: uploadGql,
          variables: {
            file: this.file,
            name: this.file.name,
          },
          context: {
            hasUpload: true,
          },
        })
        console.log("mutation done")
        this.newPlant.featuredImage = this.file.name
      } catch (e) {
        console.error(e)
      }
      // Send the file to the server
    },
    async submitFile() {
      let formData = new FormData()
      formData.append("file", this.file)
      console.log(this.file.lastModified)
      await this.$axios
        .post("http://143.176.135.108:8000/api/upload", formData, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        })
        .then(function () {
          console.log("SUCCESS!!")
        })
        .catch(function () {
          console.log("FAILURE!!")
        })
    },
  },
}
</script>

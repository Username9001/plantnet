<template>
  <div>
    {{ parsed_url }}
    test
    <br />
    <b-alert show>Wikipedia page for the species</b-alert>
    <iframe
      :src="`https://identify.plantnet.org/nl/useful/species/${parsed_name}${specy.author}/data`"
      class="wiki-embed"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
    props: ["specy"],
    computed: {
        // change name to fit plantnet url
        parsed_name: function () {
              return this.parsed_name = this.specy.latin_name.replace(' ', '%20').concat('%20');
        },
        parsed_author: function () {
            this.parsed_author = this.specy.author.replace(' ', '%20');
            return this.parsed_author;
        },
        parsed_url: function () {
            return this.parsed_url = this.parsed_name + this.parsed_author;
        }
    }
}
</script>

<style></style>

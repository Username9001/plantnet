<template>
  <div>
    <br />
    <b-alert show>Wikipedia page for the species</b-alert>
    <iframe
      :src="`https://en.wikipedia.org/wiki/${specy.latin_name}`"
      class="wiki-embed"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ["specy"],
}
</script>

<style></style>

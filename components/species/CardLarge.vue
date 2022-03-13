<template>
  <b-container>
    <b-row>
      <b-col cols="12" md="6">
        <img
          src="https://plantmonitor.ams3.digitaloceanspaces.com/uploads/background.jpg"
          alt=""
        />
        <h2>Scientific Name</h2>
        <h2>Common Name</h2>
      </b-col>
      <b-col cols="12" md="6">
        <ul class="no-dots">
          <h3>Parameters</h3>
          <li>Some param</li>
          <li>Some param</li>
          <li>Some param</li>
          <li>Some param</li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ["specy"],
}
</script>

<style></style>

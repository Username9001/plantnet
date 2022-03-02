<template>
  <b-navbar toggleable="lg" type="dark" variant="">
    <nuxt-link class="navbar-brand" to="/">Plant Monitor</nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/guilds" right class="nav-link"> Guilds </b-nav-item>
        <b-nav-item to="/plants" right class="nav-link"> Plants </b-nav-item>
        <b-nav-item to="/species" right class="nav-link"> Species </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  background: rgb(29, 29, 29, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 93, 135, 0.17);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}
.navbar-brand {
  color: #e6e6e6;
}
.padding {
  padding: 1.5rem;
  background-color: black;
}
.nav-left {
  margin-left: auto;
}
.nav-link {
  color: #e6e6e6 !important;
}
</style>

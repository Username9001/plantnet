<template>
  <div v-if="meta">
    <h6><b>Habit:</b> {{ meta.habit }}</h6>
  </div>
</template>

<script>
export default {
  props: {
    meta: {},
  },
}
</script>

<style></style>

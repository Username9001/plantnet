<template>
  <div v-if="specy" class="species-card-small">
    <div class="img-container">
      <img class="card-image" :src="specy.wiki_img" alt="" />
      <h5 class="species-name">
        <b>{{ specy.latin_name }}</b>
        <br />
        <i>{{ specy.common_english[0] }}</i>
      </h5>
      <div class="species-layers">
        <h6
          v-for="layer in specy.garden_layers"
          :key="layer"
          class="layer-title"
        >
          <small
            ><i>{{ layer }}</i></small
          >
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["specy"],
}
</script>

<style lang="scss" scoped>
.img-container {
  position: relative;
  height: 240px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .species-name {
    position: absolute;
    width: 100%;
    margin: 0;
    padding: 2px 4px;
    bottom: 0;
    left: 0;
    background: linear-gradient(transparent, #000);
  }
  .species-layers {
    position: relative;
    text-align: right;
    width: 100%;
    margin-top: -240px;
    padding: 0 6px;
    background: linear-gradient(#000, transparent);
    .layer-title {
      margin: 0;
    }
  }
}
</style>

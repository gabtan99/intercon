<template>
  <div class="testimony-card">
    <div class="img-container">
      <img :src="this.image.src" />
    </div>
    <p class="content font-avenir-oblique font-16">"{{ this.message }}"</p>
    <p class="author font-avenir-book font-16">- {{ this.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
    };
  },
  props: ["image", "message", "name"],
};
</script>

<style scoped>
img {
  display: flex;
  border-radius: 50%;
  box-shadow: 0px 5px 5px #76767629;
  object-fit: cover;
  width: 130px;
  height: 130px;
  margin: 5px auto;
  margin-top: 20px;
}

.img-container {
  padding-top: 20px;
}

.testimony-card {
  box-shadow: 0px 5px 10px #76767629;
  margin: auto;
  border-radius: 20px;
  width: 270px;
}

.content {
  margin: 30px;
  padding-bottom: 10px;
  color: var(--blue-branding-dark);
  height: 19rem;
  overflow: scroll;
}

.author {
  padding: 0px 30px;
  color: var(--blue-branding-dark);
  text-align: right;
  padding-bottom: 25px;
}
</style>

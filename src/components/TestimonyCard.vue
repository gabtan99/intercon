<template>
  <div class="testimony-card">
    <div class="img-container">
      <img :src="this.image.src" />
      <p class="author font-gilroy-bold font-16">{{ this.name }}</p>
    </div>
    <p class="content font-avenir-oblique font-16">"{{ this.message }}"</p>
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
  width: 50px;
  height: 50px;
}

.img-container {
  display: flex;
  align-items: center;

  padding: 10px;
}

.testimony-card {
  box-shadow: 0px 3px 6px #76767629;
  border-radius: 5px;
  padding: 20px;
  width: 270px;
  margin: 10px;
}

.content {
  padding: 10px;
  padding-top: 6px;
  color: var(--blue-branding-dark);
  height: 14rem;
  overflow: scroll;
}

.author {
  margin: 0px 20px;
}
</style>

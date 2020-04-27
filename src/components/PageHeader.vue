<template>
  <div class="image-container">
    <h1 class="font-avenir-heavy font-42 page-title">{{ page_name }}</h1>
    <img :src="image" alt="header" class="img-style" />
  </div>
</template>

<script>
export default {
  props: ['page_name', 'image'],
}
</script>

<style scoped>
.image-container {
  position: relative;
}

.page-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.img-style {
  object-fit: cover;
  width: 100%;
  height: 500px;
}

@media only screen and (max-width: 767px) {
  .img-style {
    object-position: 80% 100%;
  }
}
</style>

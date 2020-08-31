<template>
  <div class="testimony-card">
    <div class="img-container">
      <img :src="this.image" alt="testimonypic" />
      <p class="author font-gilroy-bold font-16">{{ this.name }}</p>
    </div>
    <p class="content font-avenir-oblique font-16">"{{ this.message }}"</p>
  </div>
</template>

<script>
export default {
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
  margin: auto;
  margin-bottom: 10px;
  transition: all 0.2s ease-in-out;
}

.testimony-card:hover {
  transform: scale(1.02);
}

.content {
  padding: 10px;
  color: var(--blue-branding-dark);
  height: 20rem;
  width: 100%;
  overflow: scroll;
  margin-bottom: 0px;
}

::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: #ff0000;
}

.author {
  margin: 0px 20px;
}
</style>

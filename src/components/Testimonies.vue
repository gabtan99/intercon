<template>
  <div class="main">
    <h1 class="header font-gilroy-bold font-36">What Our Clients Say</h1>
    <div class="card-container">
      <ClientOnly>
        <testimony-carousel :testimonies="this.testimonies" />
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import TestimonyCarousel from "./TestimonyCarousel";

export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
      items: [{}, {}, {}, {}, {}],
    };
  },
  components: {
    TestimonyCarousel,
  },
  props: ["testimonies"],
};
</script>

<style scoped>
.main {
  padding: 3% 13%;
}

.header {
  color: var(--blue-branding-dark);
  margin-bottom: 30px;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  .main {
    padding: 10%;
  }
}

@media only screen and (min-width: 1280px) {
  .card-container {
    margin: 0px 100px;
  }
}
</style>

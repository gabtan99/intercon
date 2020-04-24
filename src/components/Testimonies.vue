<template>
  <div class="main">
    <h1 class="header font-gilroy-bold font-36">What Our Clients Say</h1>
    <div class="card-container">
      <carousel
        :autoplay="true"
        :autoplayTimeout="20000"
        :perPageCustom="[[360, 1], [768, 2], [1024, 3]]"
      >
        <slide v-for="item in items" v-bind:key="item.id">
          <Testimony-card />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import TestimonyCard from "@/components/TestimonyCard";

export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
      items: [{}, {}, {}, {}, {}],
    };
  },
  components: {
    TestimonyCard,
    Carousel: () =>
      import("vue-carousel")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then((m) => m.Slide)
        .catch(),
  },
};
</script>

<style scoped>
.main {
  padding: 7% 10%;
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

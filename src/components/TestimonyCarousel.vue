<template>
  <carousel
    :autoplay="true"
    :autoplayTimeout="20000"
    :perPageCustom="[[360, 1], [768, 2], [1024, 3]]"
  >
    <slide v-for="item in items" v-bind:key="item.id">
      <Testimony-card />
    </slide>
  </carousel>
</template>

<script>
import TestimonyCard from "./TestimonyCard";

export default {
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
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

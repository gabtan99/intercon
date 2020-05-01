<template>
  <carousel
    :autoplay="true"
    :autoplayTimeout="20000"
    :perPageCustom="[[360, 1], [768, 2], [1180, 3]]"
  >
    <slide v-for="item in testimonies" v-bind:key="item.id">
      <Testimony-card
        :image="item.node.image"
        :message="item.node.message"
        :name="item.node.name"
      />
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
  props: ["testimonies"],
};
</script>

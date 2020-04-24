<template>
  <div class="main">
    <h1 class="header font-gilroy-bold font-36">What Our Clients Say</h1>
    <div class="container">
      <carousel>
        <slide>
          <Testimony-card />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import TestimonyCard from "@/components/TestimonyCard";

export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
    };
  },
  components: {
    TestimonyCard,
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7%;
}

.header {
  color: var(--blue-branding-dark);
}
</style>

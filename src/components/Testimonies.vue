<template>
  <div class="main">
    <h1 class="header font-gilroy-bold font-36">
      {{ testimoniesConfig.testimony_section_title }}
    </h1>
    <div v-if="this.testimonies.length > 0" class="card-container">
      <ClientOnly>
        <testimony-carousel :testimonies="this.testimonies" />
      </ClientOnly>
    </div>
    <ComingSoon v-else />
  </div>
</template>

<script>
import TestimonyCarousel from "./TestimonyCarousel";
import ComingSoon from "./ComingSoon";

export default {
  data() {
    return {
      items: [{}, {}, {}, {}, {}],
    };
  },
  components: {
    TestimonyCarousel,
    ComingSoon,
  },
  props: ["testimonies", "testimoniesConfig"],
};
</script>

<style scoped>
.main {
  padding: 3% 13%;
  background-color: #fcfcfc;
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

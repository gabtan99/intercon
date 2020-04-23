<template>
  <Layout>
    <div class="main-container">
      <TargetCard
        v-for="(item, index) in targets"
        :key="index"
        :target="{ item }"
      />
    </div>
  </Layout>
</template>

<script>
import TargetCard from '@/components/TargetCard'

export default {
  data() {
    return {
      targets: require('../../data/targets.json'),
    }
  },
  components: {
    TargetCard,
  },
}
</script>

<style scoped>
.main-container {
  display: block;
  column-count: 3;
  column-gap: 13px;
  column-fill: balance;
  margin: 0 auto;
  width: 78%;
  padding: 50px 90px;
}

@media only screen and (max-width: 767px) {
  .main-container {
    /* display: block; */
    column-count: 1;
    column-gap: 1em;
    margin: 0 auto;
    padding: 50px;
    width: 100%;
  }
}
</style>

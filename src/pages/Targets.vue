<template>
  <Layout>
    <div class="main-container">
      <TargetCard
        v-for="item in $page.targets.edges"
        :key="item.node.id"
        :target="item.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Target {
	targets: allTargets {
    edges {
      node {
        id
        target_name
        target_description
        background_color
        target_icon
        target_services {
          service_name
          service_url
          service_image
          service_description
        }
      }
    }
  }
}
</page-query>

<script>
import TargetCard from '@/components/TargetCard'

export default {
  components: {
    TargetCard,
  },
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
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

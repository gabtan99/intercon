<template>
  <Layout>
    <div class="description">
      <h1 class="heading font-gilroy-bold font-36">Target Groups</h1>
      <p class="font-avenir-light font-16 subheading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
    </div>
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
import TargetCard from "@/components/TargetCard";

export default {
  components: {
    TargetCard,
  },
};
</script>

<style scoped>
.heading {
  color: var(--blue-branding-dark);
  margin: 10px 0px;
}

.subheading {
  text-align: center;
}

.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: auto;
}

.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 50px 20px;
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

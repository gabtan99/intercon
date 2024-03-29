<template>
  <Layout class="gray-bg">
    {{ setAutoModal() }}

    <PageHeader
      :page_name="$page.pageConfig.page_name"
      :image="$page.pageConfig.header_image"
    />

    <div class="main-container">
      <div class="header-text" style="">
        <h1 class="font-gilroy-bold font-36">
          {{ $page.pageConfig.description_title }}
        </h1>
        <p class="font-avenir-light font-18 subheading">
          {{ $page.pageConfig.page_description }}
        </p>
      </div>

      <div class="cards-container">
        <TargetCard
          v-for="item in $page.targets.edges"
          :key="item.node.id"
          :target="item.node"
          :selectedTarget="selectedTarget"
        />
      </div>
    </div>
    <NewsletterModal currPage="TARGETS" />
  </Layout>
</template>

<page-query>
query {
  pageConfig: pages (path: "/data/targets-page/"){
    page_name
    header_image
    description_title
    page_description
  },
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
          service_description
        }
      }
    }
  }
}
</page-query>

<script>
import TargetCard from "@/components/TargetCard";
import PageHeader from "@/components/PageHeader";
import NewsletterModal from "@/components/NewsletterModal";
import { Pager } from "gridsome";

export default {
  metaInfo: {
    title: "Targets | Intercon Regenerative Center",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "At Intercon Regenerative Center, we seek to enhance health and address issues by identifying  primary causes of illness and disease, through in-depth one-on-one consultations and specialized tests/ diagnostics. We aim to develop personalized treatment protocols to optimize health, prevent and halt progression of disease and repair damaged organs. ",
      },
      {
        key: "og:title",
        name: "og:title",
        content: "Targets | Intercon Regenerative Center",
      },
      {
        key: "og:site_name",
        name: "og:site_name",
        content: "Intercon Regenerative Center",
      },
      {
        key: "og:image",
        name: "og:image",
        content: require("@/assets/img/target-header.png"),
      },
      {
        name: "og:description",
        name: "og:description",
        content:
          "At Intercon Regenerative Center, we seek to enhance health and address issues by identifying  primary causes of illness and disease, through in-depth one-on-one consultations and specialized tests/ diagnostics. We aim to develop personalized treatment protocols to optimize health, prevent and halt progression of disease and repair damaged organs. ",
      },
    ],
  },
  data() {
    return {
      selectedTarget: "",
      pageConfig: {},
    };
  },
  components: {
    TargetCard,
    PageHeader,
    NewsletterModal,
    Pager,
  },
  methods: {
    setAutoModal: function() {
      if (this.$route.params)
        this.selectedTarget = this.$route.query.selectedTarget;
    },
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
  max-width: 70%;
  margin: auto;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 100px;
}

.cards-container {
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  max-width: 80%;
  padding: 30px;
}

.header-text {
  display: block;
  text-align: center;
  width: 70%;
  padding-top: 50px;
  margin: 0 auto;
}

@media only screen and (max-width: 1000px) {
  .main-container {
    padding: 20px 0px 30px;
    width: 100%;
  }

  .header-text {
    display: block;
    text-align: center;
    width: 90%;
  }

  .cards-container {
    max-width: 95%;
    padding: 0px;
  }
}
</style>

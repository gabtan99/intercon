<template>
  <Layout>
    {{ setAutoModal() }}

    <!-- <PageHeader
      page_name="Functional Health and Wellness Coaching"
      image="../uploads/colon-hydrotherapy.png"
    /> -->

    <div class="main-container">
      This is the data
    </div>
    <NewsletterModal currPage="FUNCTIONALCOACHING" />
  </Layout>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import NewsletterModal from "@/components/NewsletterModal";

export default {
  metaInfo: {
    title:
      "Functional Health and Wellness Coaching | Intercon Regenerative Center",
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
        content:
          "Functional Health and Wellness Coaching | Intercon Regenerative Center",
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
    PageHeader,
    NewsletterModal,
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
.main-container {
  display: flex;
  justify-content: center;
}
</style>

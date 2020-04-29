<template>
  <Layout>
    <PageHeader :page_name="page_name" :image="image" />

    <div class="main">
      <b-row class="founder-section about-component">
        <div class="col-lg-6">
          <b-img
            class="founder-image"
            :src="require('../assets/img/founder-img.png')"
            fluid
          />
        </div>

        <div class="founder-info col-lg-6">
          <h1 class="font-gilroy-bold font-36 blue">
            The Founder
          </h1>

          <h1 class="font-avenir-light font-21">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </h1>
        </div>
      </b-row>

      <b-row class="mission-vision-section about-component">
        <div class="col-lg-5">
          <h1 class="font-gilroy-bold font-36 blue">
            Our Goal
          </h1>

          <h1 class="font-avenir-light font-21">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </h1>
        </div>

        <div class="col-lg-1" />

        <div class="col-lg-5">
          <h1 class="mission-section font-gilroy-bold font-36 blue">
            Our Mission
          </h1>

          <h1 class="font-avenir-light font-21">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </h1>
        </div>
      </b-row>

      <b-row class="history-section about-component">
        <h1 class="mission-section font-gilroy-bold font-36 blue">
          Our History
        </h1>

        <h1 class="font-avenir-light font-21">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        </h1>
      </b-row>

      <Timeline />
    </div>
  </Layout>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import NewsletterModal from "@/components/NewsletterModal";
import Timeline from "@/components/Timeline";

export default {
  data() {
    return {
      page_name: "About Us",
      image: "about-header.png",
    };
  },
  components: {
    PageHeader,
    NewsletterModal,
    Timeline,
  },
  metaInfo() {
    return {
      title: `About Us | Intercon Regenerative Center`,
      meta: [
        {
          key: "description",
          name: "description",
          content: `At Intercon Regenerative Center, we seek to enhance health and address issues by identifying  primary causes of illness and disease, through in-depth one-on-one consultations and specialized tests/ diagnostics. We aim to develop personalized treatment protocols to optimize health, prevent and halt progression of disease and repair damaged organs. `,
        },
        {
          key: "og:title",
          name: "og:title",
          content: `About Us | Intercon Regenerative Center`,
        },
        {
          key: "og:site_name",
          name: "og:site_name",
          content: "Intercon Regenerative Center",
        },
        {
          key: "og:image",
          name: "og:image",
          content: require("@/assets/img/meta.jpg"),
        },
        {
          name: "og:description",
          name: "og:description",
          content: `At Intercon Regenerative Center, we seek to enhance health and address issues by identifying  primary causes of illness and disease, through in-depth one-on-one consultations and specialized tests/ diagnostics. We aim to develop personalized treatment protocols to optimize health, prevent and halt progression of disease and repair damaged organs. `,
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 80px 160px;
  justify-content: center;
  padding-bottom: 40px;
}

.about-component {
  margin-top: 6rem;
  margin-bottom: 6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
}

.founder-image {
  max-width: 354px;
  max-height: 354px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.founder-info {
  margin-top: 100px;
}

.blue {
  color: var(--blue-branding-dark);
}

.history-section {
  text-align: center;
}

@media only screen and (max-width: 1000px) {
  .founder-image {
    max-width: 254px;
    max-height: 254px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .founder-info {
    margin-top: 50px;
  }

  .mission-vision-section {
    margin-top: -2rem;
  }

  .history-section {
    margin-top: -2rem;
    text-align: center;
  }

  .mission-section {
    margin-top: 30px;
  }

  .main {
    padding: 10px 10px;
    padding-top: 25px;
  }
}
</style>

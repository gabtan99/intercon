<template>
  <Layout>
    <PageHeader 
      :page_name="$page.pageConfig.page_name" 
      :image="$page.pageConfig.header_image" 
    />
    <b-container fluid class="who-section">
      <b-row fluid class="who-card">
        <h1 class="font-gilroy-bold font-26 blue title">
          Who we are
        </h1>

        <h1 class="font-avenir-light font-18">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        </h1>
      </b-row>

      <b-img
        class="who-img"
        :src="require('../assets/img/who-we-are.png')"
        fluid
      />
    </b-container>

    <div class="green-gradient">

      <b-container fluid class="values-section">

        <b-img
          class="values-img"
          :src="require('../assets/img/our-values.png')"
          fluid
        />

        <b-row class="values-card">
          <h1 class="font-gilroy-bold font-26 blue title">
            Our Values
          </h1>

          <h1 class="font-gilroy-bold font-21 blue">
            Our Mission
          </h1>
          <h1 class="font-avenir-light font-18 value-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </h1>

          <h1 class="font-gilroy-bold font-21 blue">
            Our Vision
          </h1>
          <h1 class="font-avenir-light font-18 value-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </h1>

          <h1 class="font-gilroy-bold font-21 blue">
            Our Goal
          </h1>
          <h1 class="font-avenir-light font-18 value-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </h1>
        </b-row>
      </b-container>

      <div class="founder-section">
        <b-row class="founder-card">
          <div class="col-lg-2">
            <b-img
              class="founder-image"
              :src="require('../assets/img/founder-img.png')"
              fluid
            />
          </div>

          <div class="col-lg-10">
            <h1 class="font-gilroy-bold font-18">
              Janise Tang Piap
            </h1>
            <h1 class="font-gilroy-bold font-16 light-blue">
              Founder
            </h1>
            <h1 class="font-gilroy-light font-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
              utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in Lorem ipsum dolor sit 
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </h1>
          </div>
        </b-row>
      </div>

    </div>

    <Testimonies :testimonies="$page.testimonies.edges" />

  </Layout>
</template>

<page-query>
query Posts {
  pageConfig: pages (path: "/data/about-page/"){
    page_name
    header_image
    description_title
    page_description
  },
  testimonies: allTestimonies {
    edges {
      node {
        name,
        message,
        image
      }
    }
  }
}

</page-query>

<script>
import PageHeader from "@/components/PageHeader";
import NewsletterModal from "@/components/NewsletterModal";
import Testimonies from "@/components/Testimonies";
import Circles from "@/components/Circles";

export default {
  data() {
    return {
      pageConfig: {}
    };
  },
  components: {
    PageHeader,
    NewsletterModal,
    Testimonies,
    Circles,
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

.who-section {
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 80px 160px;
  justify-content: center;
  padding-bottom: 40px;
  background-image: linear-gradient(
    to top,
    var(--white),
    var(--lightblue-gradient)
  );
  grid-template-columns: repeat(4, 0.18fr);
  grid-template-rows: repeat(1, 0.1fr);
}

.values-section {
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 80px 160px;
  justify-content: center;
  padding-bottom: 40px;
  padding-top: 0px; 
  grid-template-columns: repeat(15, 0.2fr);
  grid-template-rows: repeat(2, 0.1fr);
}

.founder-section {
  height: 250px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 80px;
  justify-content: center;
  padding-bottom: 40px;
  margin-bottom: 100px;
}

.green-gradient {
  background-image: linear-gradient(
    to bottom,
    var(--white),
    var(--lightgreen-gradient)
  );
}

.title {
  margin-bottom: 2rem;
}

.value-item {
  margin-bottom: 2rem;
}

.who-card {
  padding: 40px;
  box-shadow: 0px 5px 10px #76767629;
  margin: auto;
  width: 600px;
  background-color: #fff;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  padding-right: 80px;
}

.who-img {
  max-width: 421px;
  max-height: 421px;
  grid-column: 5 / span 1;
  grid-row: 3 / span 1;
}

.values-card {
  padding: 40px;
  box-shadow: 0px 5px 10px #76767629;
  margin: auto;
  width: 800px;
  display: block;
  background-color: #fff;
  grid-column: 5 / span 2;
  grid-row: 3 / span 2;
}

.values-img {
  max-width: 390px;
  max-height: 787px;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}

.founder-card {
  padding: 40px;
  box-shadow: 0px 5px 10px #76767629;
  margin: auto;
  width: 90%;
  background-color: #fff;
  margin-top: 60px;
}

.founder-image {
  max-width: 120px;
  max-height: 120px;
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

.light-blue {
  color: var(--blue-branding-light);
}

@media only screen and (max-width: 1000px) {

  .founder-section {
    max-height: 250px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: center;
    padding-bottom: 40px;
    margin-bottom: 20%;
  }

  .who-section {
    display: flex;
    padding: 20px;
    padding-top: 80px;
  }

  .who-img {
    max-width: 321px;
    max-height: 321px;
  }

  .values-img {
    max-width: 290px;
    max-height: 687px;
  }

  .values-section {
    display: flex;
    padding: 20px;
  }

  .founder-image {
    max-width: 100px;
    max-height: 100px;
    display: block;
    margin-bottom: 2rem;
  }

  .founder-info {
    margin-top: 50px;
  }
}

@media only screen and (max-width: 800px) {
  .founder-section {
    margin-bottom: 40%;
  }

  .who-img {
    margin-top: -50px;
  }
}

@media only screen and (max-width: 600px) {
  .founder-section {
    margin-bottom: 50%;
  }
}

@media only screen and (max-width: 500px) {
  .founder-section {
    margin-bottom: 60%;
  }
}
</style>

<template>
  <Layout>
    <PageHeader
      :page_name="$page.pageConfig.page_name"
      :image="$page.pageConfig.header_image"
    />
    <b-container fluid class="who-section">
      <b-row fluid class="who-card">
        <h1 class="font-gilroy-bold font-36 blue title">
          {{ $page.pageConfig.about_company_title }}
        </h1>

        <h1 class="font-avenir-light font-18">
          {{ $page.pageConfig.about_company_description }}
        </h1>
      </b-row>

      <b-img
        class="who-img"
        :src="$page.pageConfig.about_company_image.src"
        fluid
      />
    </b-container>

    <div class="green-gradient">
      <b-container fluid class="values-section">
        <b-img
          class="values-img"
          :src="$page.pageConfig.values_image.src"
          fluid
        />

        <b-row class="values-card">
          <h1 class="font-gilroy-bold font-36 blue title">
            {{ $page.pageConfig.values_title }}
          </h1>

          <div class="value-container">
            <h1 class="font-gilroy-bold font-21 light-blue">
              {{ $page.pageConfig.mission_title }}
            </h1>
            <h1 class="font-avenir-light font-18 value-item">
              {{ $page.pageConfig.mission_description }}
            </h1>
          </div>

          <div class="value-container">
            <h1 class="font-gilroy-bold font-21 light-blue">
              {{ $page.pageConfig.vision_title }}
            </h1>
            <h1 class="font-avenir-light font-18 value-item">
              {{ $page.pageConfig.vision_description }}
            </h1>
          </div>

          <div class="value-container">
            <h1 class="font-gilroy-bold font-21 light-blue">
              {{ $page.pageConfig.goal_title }}
            </h1>
            <h1 class="font-avenir-light font-18 value-item">
              {{ $page.pageConfig.goal_description }}
            </h1>
          </div>
        </b-row>
      </b-container>

      <div class="founder-section">
        <b-row class="founder-card">
          <div class="col-lg-2">
            <b-img
              class="founder-image"
              :src="$page.pageConfig.founder_image.src"
              fluid
            />
          </div>

          <div class="col-lg-10 founder-info">
            <h1 class="font-gilroy-bold font-18 name">
              {{ $page.pageConfig.founder_name }}
            </h1>
            <h1 class="font-gilroy-bold font-16 light-blue">
              {{ $page.pageConfig.founder_label }}
            </h1>
            <h1 class="font-gilroy-light font-16">
              {{ $page.pageConfig.founder_description }}
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
    about_company_image
    about_company_title
    about_company_description
    values_image
    values_title
    mission_title
    mission_description
    vision_title
    vision_description
    goal_title
    goal_description
    founder_image
    founder_name
    founder_label
    founder_description
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

export default {
  data() {
    return {
      pageConfig: {},
    };
  },
  components: {
    PageHeader,
    NewsletterModal,
    Testimonies,
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
  padding-left: 200px;
  justify-content: center;
  padding-bottom: 40px;
  background-image: linear-gradient(
    to top,
    var(--white),
    var(--lightblue-gradient)
  );
  grid-template-rows: repeat(1, 0.1fr);
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-items: center;
}

.values-section {
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 80px 160px;
  justify-content: center;
  padding-bottom: 40px;
  padding-top: 0px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(2, 0.1fr);
  margin-top: -80px;
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

.value-container {
  margin: 2rem 0px;
}

.who-card {
  padding: 40px;
  box-shadow: 0px 5px 10px #76767629;
  margin: auto;
  width: 600px;
  background-color: #fff;
  grid-column: 1 / span 3;
  grid-row: 1 / span 2;
  padding-right: 150px;
}

.who-img {
  max-width: 421px;
  max-height: 421px;
  grid-column: 3 / span 2;
  grid-row: 3 / span 1;
}

@media only screen and (max-width: 1300px) {
  .who-section {
    padding: 80px 160px;
  }
  .who-card {
    padding: 40px;
    box-shadow: 0px 5px 10px #76767629;
    margin: auto;
    width: 600px;
    background-color: #fff;
    grid-column: 2 / span 3;
    grid-row: 1 / span 2;
    padding-right: 130px;
  }

  .who-img {
    max-width: 421px;
    max-height: 421px;
    grid-column: 4 / span 2;
    grid-row: 3 / span 1;
  }
}

.values-card {
  padding: 40px;
  box-shadow: 0px 5px 10px #76767629;
  margin: auto;
  width: 800px;
  display: block;
  background-color: #fff;
  grid-column: 5 / span 1;
  grid-row: 3 / span 2;
}

.values-img {
  max-width: 390px;
  max-height: 787px;
  grid-column: 2 / span 1;
  grid-row: 1 / span 2;
}

.founder-card {
  padding: 40px 20px;
  box-shadow: 0px 5px 10px #76767629;
  margin: auto;
  width: 80%;
  background-color: #fff;
  margin-top: 60px;
}

.founder-image {
  max-width: 120px;
  max-height: 120px;
  margin: auto;
  display: block;
}

.blue {
  color: var(--blue-branding-dark);
}

.light-blue {
  color: var(--blue-branding-light);
}

@media only screen and (min-width: 1920px) {
  .values-img {
    grid-column: 1 / span 3;
    margin: auto;
  }

  .values-card {
    grid-column: 2 / span 5;
  }
}

@media only screen and (max-width: 1054px) {
  .founder-section {
    max-height: 250px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: center;
    padding-bottom: 40px;
    margin-bottom: 50px;
  }

  .founder-card {
    width: 95%;
  }

  .who-section {
    display: flex;
    padding: 20px;
    padding-top: 80px;
  }

  .who-card {
    padding-right: 40px;
  }

  .who-img {
    max-width: 321px;
    max-height: 321px;
  }

  .values-img {
    display: none;
  }

  .values-section {
    display: flex;
    padding: 20px;
    margin-top: 0px;
  }

  .founder-image {
    max-width: 100px;
    max-height: 100px;
    display: block;
    margin-bottom: 2rem;
  }
}

@media only screen and (max-width: 975px) {
  .founder-section {
    margin-bottom: 30%;
  }

  .who-img {
    margin-top: -50px;
  }

  .founder-info {
    text-align: center;
  }
}

@media only screen and (max-width: 600px) {
  .founder-section {
    margin-bottom: 60%;
  }
}

@media only screen and (max-width: 500px) {
  .founder-section {
    margin-bottom: 80%;
  }
}
</style>

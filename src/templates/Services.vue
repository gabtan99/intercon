<template>
  <Layout>
    <div class="mb-5 position-relative service-header">
      <b-img-lazy
        class="service-header__image"
        :srcset="service.header_image.srcset"
        :src="service.header_image.src"
      >
      </b-img-lazy>
      <h1
        class="font-48 text-center position-absolute service-header__title"
        v-bind:style="{ color: service.header_color }"
      >
        {{ service.title }}
      </h1>
    </div>
    <b-container>
      <div class="mb-5 service-body">
        <div class="font-18 service-body__main">
          <div class="font-16 font-avenir-book">
            <span class="service-breadcrumb__services">
              <g-link to="/services">
                <span>Services</span>
              </g-link>
            </span>
            <span> > </span>
            <span class="service-breadcrumb__current">
              {{ service.title }}
            </span>
          </div>
          <h2 class="mt-4 font-26" id="service-introduction">
            What is {{ service.title }}?
          </h2>
          <b-img-lazy
            fluid-grow
            center
            v-if="service.introduction_image"
            :srcset="service.introduction_image.srcset"
            :src="service.introduction_image.src"
          >
          </b-img-lazy>
          <p class="font-18">
            {{ service.introduction }}
          </p>
          <h4 id="service-history">Some History</h4>
          <p class="font-18">
            {{ service.history }}
          </p>
          <h4 id="service-benefits">Benefits</h4>
          <p class="font-18">
            {{ service.benefits.introduction }}
          </p>
          <ul>
            <li
              v-for="(benefit, index) in service.benefits.benefits_list"
              :key="index"
            >
              {{ benefit.benefit }}
            </li>
          </ul>
          <h4 id="service-conditions">Conditions</h4>
          <p class="font-18">
            {{ service.conditions.introduction }}
          </p>
          <ul>
            <li
              v-for="(condition, index) in service.conditions.conditions_list"
              :key="index"
            >
              {{ condition.condition }}
            </li>
          </ul>
          <h4 id="service-statistics">Some Statistics and Analysis</h4>
          <p class="font-18">
            {{ service.stats.intro }}
          </p>
          <template v-for="(stat, index) in service.stats.stats_list">
            <p :key="index + stat.content" class="font-18">
              {{ stat.content }}
            </p>
            <figure :key="index" v-if="stat.with_supporting_image">
              <b-img-lazy
                fluid
                center
                :srcset="stat.figure.srcset"
                :src="stat.figure.src"
                :alt="stat.caption"
              >
              </b-img-lazy>
              <figcaption
                class="mt-2 text-center font-16 font-avenir-book-oblique"
              >
                {{ stat.caption }}
              </figcaption>
            </figure>
          </template>
          <p class="font-18">
            {{ service.stats.summary }}
          </p>
          <hr class="mt-5" />
          <div v-if="service.external_reads.length > 0" class="mb-5">
            <p class="font-16 service-external__title">
              Enjoyed reading about {{ service.title }}? Check these sources
              out!
            </p>
            <a
              v-for="(external, index) in service.external_reads"
              :key="index"
              :href="external.link"
              class="font-16 mb-2 font-gilroy-medium"
            >
              {{ external.title }}
            </a>
          </div>
        </div>
        <aside
          class="d-flex flex-column align-items-center justify-content-center py-5 service-body__aside"
        >
          <div
            class="py-2 font-avenir-book font-18 service-aside__link"
            v-on:click="scrollToLocation('service-introduction')"
            id="service-introduction-button"
          >
            Introduction
          </div>
          <div
            class="py-2 font-avenir-book font-18 service-aside__link"
            v-on:click="scrollToLocation('service-history')"
            id="service-history-button"
          >
            History
          </div>
          <div
            class="py-2 font-avenir-book font-18 service-aside__link"
            v-on:click="scrollToLocation('service-benefits')"
            id="service-benefits-button"
          >
            Benefits
          </div>
          <div
            class="py-2 font-avenir-book font-18 service-aside__link"
            v-on:click="scrollToLocation('service-conditions')"
            id="service-conditions-button"
          >
            Conditions
          </div>
          <div
            class="py-2 font-avenir-book font-18 service-aside__link"
            v-on:click="scrollToLocation('service-statistics')"
            id="service-statistics-button"
          >
            Statistics
          </div>
        </aside>
      </div>
    </b-container>
  </Layout>
</template>

<page-query>
query Services ($path: String!) {
  service: services (path: $path) {
    id
    title
    header_image
    introduction
    introduction_image
    header_color
    history
    benefits {
      introduction
      benefits_list {
        benefit
      }
    }
    conditions {
      introduction
      conditions_list {
        condition
      }
    }
    stats {
      intro
      summary
      stats_list {
        with_supporting_image
        figure
        caption
        content
      }
    }
    external_reads{
      title
      link
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: `${
        this.$page.service.title
      } | Services | Intercon Regenerative Center`,
      meta: [
        {
          key: "description",
          name: "description",
          content: `Learn more about ${this.$page.service.title}`,
        },
        {
          key: "og:title",
          name: "og:title",
          content: `${this.$page.service.title} | Intercon Regenerative Center`,
        },
        {
          key: "og:site_name",
          name: "og:site_name",
          content: "Intercon Regenerative Center",
        },
        {
          key: "og:image",
          name: "og:image",
          content: `${this.$page.service.header_image.src}`,
        },
        {
          name: "og:description",
          name: "og:description",
          content: `A comprehensive read about ${this.$page.service.title}`,
        },
      ],
    };
  },
  data() {
    return {};
  },
  methods: {
    scrollToLocation(hash) {
      let links = document.getElementsByClassName("service-aside__link");
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("service-aside__link--active");
      }
      let button = document.getElementById(`${hash}-button`);
      button.classList.add("service-aside__link--active");
      let section = document.getElementById(hash);
      let rect = section.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo(scrollLeft + rect.left, scrollTop + rect.top - 150);
    },
    handleScroll(e) {
      let introductionSection = document.getElementById("service-introduction"),
        historySection = document.getElementById("service-history"),
        benefitsSection = document.getElementById("service-benefits"),
        conditionsSection = document.getElementById("service-conditions"),
        statisticsSection = document.getElementById("service-statistics");

      let introductionRect = introductionSection.getBoundingClientRect(),
        historyRect = historySection.getBoundingClientRect(),
        benefitsRect = benefitsSection.getBoundingClientRect(),
        conditionsRect = conditionsSection.getBoundingClientRect(),
        statisticsRect = statisticsSection.getBoundingClientRect();

      let scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        offset = -160;

      let introductionY = introductionRect.top + scrollTop + offset,
        historyY = historyRect.top + scrollTop + offset,
        benefitsY = benefitsRect.top + scrollTop + offset,
        conditionsY = conditionsRect.top + scrollTop + offset,
        statisticsY = statisticsRect.top + scrollTop + offset;

      let currentY = window.scrollY,
        hash = "service-introduction";

      if (currentY > introductionY && currentY <= historyY) {
        hash = "service-introduction";
      } else if (currentY > historyY && currentY <= benefitsY) {
        hash = "service-history";
      } else if (currentY > benefitsY && currentY <= conditionsY) {
        hash = "service-benefits";
      } else if (currentY > conditionsY && currentY <= statisticsY) {
        hash = "service-conditions";
      } else if (currentY > statisticsY) {
        hash = "service-statistics";
      }

      let links = document.getElementsByClassName("service-aside__link");
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("service-aside__link--active");
      }
      let button = document.getElementById(`${hash}-button`);
      button.classList.add("service-aside__link--active");
    },
  },
  computed: {
    service() {
      return this.$page.service;
    },
  },
  mounted() {
    console.log(this.$page.service);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.service-header {
  width: 100%;
  max-height: 500px;
  box-shadow: 0px 10px 10px var(--button-shadow);
  -webkit-box-shadow: 0px 10px 10px var(--button-shadow);
  -moz-box-shadow: 0px 10px 10px var(--button-shadow);
  -o-box-shadow: 0px 10px 10px var(--button-shadow);
  -ms-box-shadow: 0px 10px 10px var(--button-shadow);
}

.service-header__image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.service-header__title {
  width: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.service-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  grid-gap: 30px;
  grid-template-areas: "article aside";
}

@media only screen and (max-width: 992px) {
  .service-body {
    grid-template-columns: minmax(0, 1fr) 0px;
    grid-gap: 00px;
  }
}

.service-breadcrumb__services a {
  display: inline;
  color: var(--blue-branding);
}

.service-breadcrumb__current {
  text-decoration: underline;
  color: var(--blue-branding);
}

.service-body__main {
  grid-area: article;
}

.service-body__aside {
  margin: auto;
  width: 80%;
  height: auto;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  margin-top: 4rem;
  top: 15rem;
  grid-area: aside;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 6px var(--gray-2);
  -webkit-box-shadow: 0px 3px 6px var(--gray-2);
  -moz-box-shadow: 0px 3px 6px var(--gray-2);
  -o-box-shadow: 0px 3px 6px var(--gray-2);
  -ms-box-shadow: 0px 3px 6px var(--gray-2);
}

.service-aside__link {
  cursor: pointer;
}

.service-aside__link--active {
  font-family: Avenir-Black;
}

.service-aside__link:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 992px) {
  .service-body__aside {
    display: none;
  }

  .service-aside__link {
    display: none;
  }
}

.service-external__title {
  font-family: Avenir-MediumOblique;
}

p {
  white-space: pre-line;
  font-family: Avenir-Book;
  color: var(--blue-branding-dark);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Gilroy-Bold;
  color: var(--green-branding-dark);
}

h4 {
  font-size: 2.1rem;
  margin-top: 2.5rem;
  margin-bottom: 0;
}

ul {
  margin-left: 6rem;
  color: var(--green-branding-dark);
  margin-bottom: 1rem;
  font-family: Avenir-Book;
}

li {
  margin-bottom: 1rem;
}

figure {
  margin-top: 2rem;
}

figcaption {
  color: var(--green-branding-dark);
}

hr {
  border: 1px solid var(--green-branding);
}

a {
  display: block;
  color: var(--green-branding-light);
}
</style>

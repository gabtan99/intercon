<template>
  <Layout>
    <div
      class="mb-5 position-relative service-header"
    >
      <img
        class="service-header__image"
        :src="service.header_image.src"
      />
      <h1
        class="font-48 text-center position-absolute service-header__title"
        v-bind:style="{color: service.header_color}"
      >
        {{service.title}}
      </h1>
    </div>
    <b-container>
      <div
        class="service-body"
      >
        <article
          class="font-18 service-body__main"
        >
          <div
            class="font-16 font-avenir-book"
          >
            <span
              class="service-breadcrumb__services"
            >
              <g-link
                to="/services"
              >
                <span>Services</span>
              </g-link>
            </span>
            <span> > </span>
            <span
              class="service-breadcrumb__current"
            >
              {{service.title}}
            </span>
          </div>
          <h2
            class="mt-4 font-26"
          >
            What is {{service.title}}?
          </h2>
          <b-img
            fluid
            center
            v-if="service.introduction_image"
            :src="service.introduction_image.src"
          >
          </b-img>
          <p>
            {{service.introduction}}
          </p>
          <h4>Some History</h4>
          <p>
            {{service.history}}
          </p>
          <h4>Benefits</h4>
          <p>
            {{service.benefits.introduction}}
          </p>
          <ul>
            <li
              v-for="(benefit, index) in service.benefits.benefits_list"
              :key="index"
            >
              {{benefit.benefit}}
            </li>
          </ul>
          <h4>Conditions</h4>
          <p>
            {{service.conditions.introduction}}
          </p>
          <ul>
            <li
              v-for="(condition, index) in service.conditions.conditions_list"
              :key="index"
            >
              {{condition.condition}}
            </li>
          </ul>
          <h4>Some Statistics and Analysis</h4>
          <p>
            {{service.stats.intro}}
          </p>
          <template
            v-for="(stat,index) in service.stats.stats_list"
          >
            <p
              :key="index + stat.content"
            >
              {{stat.content}}
            </p>
            <figure
              :key="index"
              v-if="stat.with_supporting_image"
            >
              <b-img
                fluid
                center
                :src="stat.figure.src"
              >
              </b-img>
              <figcaption
                class="mt-2 text-center font-16 font-avenir-book-oblique"
              >
                {{stat.caption}}
              </figcaption>
            </figure>
          </template>
          <p>
            {{service.stats.summary}}
          </p>
          <hr
            class="mt-5"
          >
          <div
            v-if="service.external_reads.length > 0"
            class="mb-5"
          >
            <p
              class="font-16 service-external__title"
            >
              Enjoyed reading about {{service.title}}? Check these sources out!
            </p>
            <a
              v-for="(external, index) in service.external_reads"
              :key="index"
              :href="external.link"
              class="font-16 mb-2 font-gilroy-medium"
            >
              {{external.title}}
            </a>
          </div>
        </article>
        <aside
          class="service-body__aside"
        >
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
  data(){
    return {
    }
  },
  computed : {
    service() {
      console.log(this.$page.service);
      return this.$page.service;
    }
  }
}
</script>

<style scoped>
  .service-header {
    width: 100%;
    max-height: 500px;
    box-shadow: 0px 30px 30px var(--button-shadow);
    -webkit-box-shadow: 0px 30px 30px var(--button-shadow);
    -moz-box-shadow: 0px 30px 30px var(--button-shadow);
    -o-box-shadow: 0px 30px 30px var(--button-shadow);
    -ms-box-shadow: 0px 30px 30px var(--button-shadow);
  }

  .service-header__image {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  .service-header__title {
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  .service-body {
    display: grid;
    grid-template-columns: minmax(0,1fr) 300px;
    grid-gap: 30px;
    grid-template-areas:
      "article aside";
  }

  @media only screen and (max-width: 992px) {
    .service-body{
      grid-template-columns: minmax(0, 1fr);
      grid-template-areas:
        "article";
    }
  }

  .service-breadcrumb__services a{
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
    border: 10px solid red;
    height: 100px;
    grid-area: aside;
  }

  @media only screen and (max-width: 992px) {
    .service-body__aside{
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

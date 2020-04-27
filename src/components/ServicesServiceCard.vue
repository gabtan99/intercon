<template>
    <b-row
      align-v="center"
      class="mx-4 mb-5 service-card-block"
      no-gutters
    >
      <div
        class="col-lg-4 service-card__thumbnail-container"
      >
        <img
          :alt="service.node.title"
          :src="service.node.header_image.src"
          class="service-card__thumbnail"
        />
      </div>
      <div
        class="col-lg-8 p-5 service-card__content"
      >
        <h2
          class="font-26 font-gilroy-bold mb-3 service-card__title"
        >
          {{service.node.title}}
        </h2>
        <p
          class="font-16 font-avenir-light mb-4 service-card__description"
        >
          {{service.node.preview_description}}
        </p>
        <b-row
          class="ml-2"
        >
          <div
            class="col-sm-6"
          >
            <h4
              class="mb-3 font-21 font-gilroy-light service-card__list-title"
            >
              Benefits
            </h4>
            <div
              class="d-flex flex-column"
            >
              <div
                v-for="(benefit, index) in service.node.preview_benefits"
                :key="index"
                class="mb-2 d-flex font-16 font-avenir-light service-card__list-item"
              >
                <font-awesome
                  icon="check"
                  class="mr-2 service-card__check-bullet"
                />
                {{benefit.benefit}}
              </div>
            </div>
          </div>
          <div
            class="col-sm-6 service-card__conditions-block"
          >
            <h4
              class="mb-3 font-21 font-gilroy-light service-card__list-title"
            >
              Conditions
            </h4>
            <div
              class="d-flex flex-column"
            >
              <div
                v-for="(condition, index) in service.node.preview_conditions"
                :key="index"
                class="mb-2 d-flex font-16 font-avenir-light service-card__list-item"
              >
                <font-awesome
                  icon="check"
                  class="mr-2 service-card__check-bullet"
                />
                {{condition.condition}}
              </div>
            </div>
          </div>

        </b-row>
        <b-row
          align-h="end"
        >
          <g-link
            :to="service.node.path"
            class="mt-3 mr-5 font-18 font-avenir-book service-card__learn-more"
          >
            Learn More
          </g-link>
        </b-row>
      </div>

    </b-row>
</template>

<script>
  export default {
    props: ['service'],
  }
</script>

<style scoped>
  .service-card-block {
    border-radius: 0.5rem;
    box-shadow: 0px 3px 6px var(--gray-2);
    -webkit-box-shadow: 0px 3px 6px var(--gray-2);
    -moz-box-shadow: 0px 3px 6px var(--gray-2);
    -o-box-shadow: 0px 3px 6px var(--gray-2);
    -ms-box-shadow: 0px 3px 6px var(--gray-2);
  }

  .service-card__thumbnail {
    height: 330px;
    width: 100%;
    object-fit: cover;
  }

  .service-card__title {
    color: var(--blue-branding);
  }

  .service-card__description {
    color: var(--black-text);
  }

  @media only screen and (max-width: 576px) {
    .service-card__conditions-block {
      margin-top: 1rem;
    }
  }

  .service-card__list-title {
    color: var(--blue-branding);
  }

  .service-card__check-bullet {
    color: var(--green-branding);
  }

  .service-card__list-item {
    color: var(--blue-content-text);
  }

  .service-card__learn-more {
    color: var(--blue-learn-more);
  }
</style>

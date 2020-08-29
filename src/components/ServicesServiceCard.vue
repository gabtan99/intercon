<template>
  <b-row
    class="mx-4 mb-5 service-card-block"
    no-gutters
    v-on:click="goToService(service.node.path)"
  >
    <div class="col-lg-4 service-card__thumbnail-container">
      <g-image
        :alt="service.node.title"
        :src="service.node.header_image.src"
        :srcset="service.node.header_image.srcset"
        class="service-card__thumbnail"
      />
    </div>
    <div class="col-lg-8 px-5 service-card__content">
      <h2 class="font-26 font-gilroy-bold mb-3 service-card__title">
        {{ service.node.title }}
      </h2>
      <p class="font-16 font-avenir-light mb-4 service-card__description">
        {{ service.node.preview_description }}
      </p>
      <b-row class="ml-2">
        <div class="col-sm-6">
          <h4 class="mb-3 font-21 font-gilroy-light service-card__list-title">
            Benefits
          </h4>
          <div class="d-flex flex-column">
            <div
              v-for="(benefit, index) in service.node.preview_benefits"
              :key="index"
              class="mb-2 d-flex font-16 font-avenir-light service-card__list-item"
            >
              <font-awesome
                icon="check"
                class="mr-2 service-card__check-bullet"
              />
              {{ benefit.benefit }}
            </div>
          </div>
        </div>
        <div class="col-sm-6 service-card__conditions-block">
          <h4 class="mb-3 font-21 font-gilroy-light service-card__list-title">
            Conditions
          </h4>
          <div class="d-flex flex-column">
            <div
              v-for="(condition, index) in service.node.preview_conditions"
              :key="index"
              class="mb-2 d-flex font-16 font-avenir-light service-card__list-item"
            >
              <font-awesome
                icon="check"
                class="mr-2 service-card__check-bullet"
              />
              {{ condition.condition }}
            </div>
          </div>
        </div>
      </b-row>
    </div>
  </b-row>
</template>

<script>
export default {
  props: ["service"],
  methods: {
    goToService(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.service-card-block {
  background-color: white;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 6px var(--gray-2);
  -webkit-box-shadow: 0px 3px 6px var(--gray-2);
  -moz-box-shadow: 0px 3px 6px var(--gray-2);
  -o-box-shadow: 0px 3px 6px var(--gray-2);
  -ms-box-shadow: 0px 3px 6px var(--gray-2);
  transition: all ease-in 0.15s;
}

.service-card-block:hover {
  transform: translateX(0.5rem);
  transform: scale(1.01);
  box-shadow: 0px 6px 9px var(--gray-2);
  -webkit-box-shadow: 0px 6px 9px var(--gray-2);
  -moz-box-shadow: 0px 6px 9px var(--gray-2);
  -o-box-shadow: 0px 6px 9px var(--gray-2);
  -ms-box-shadow: 0px 6px 9px var(--gray-2);
}

.service-card__thumbnail {
  height: 260px;
  width: 100%;
  object-fit: cover;
}

.service-card__title {
  color: var(--black-text);
}

.service-card__description {
  color: var(--black-text);
}

.service-card__content {
  padding: 20px 0px;
}

@media only screen and (max-width: 576px) {
  .service-card__conditions-block {
    margin-top: 1rem;
  }
}

@media only screen and (max-width: 1200px) {
  .service-card__thumbnail {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
}

@media only screen and (max-width: 991px) {
  .service-card__content {
    padding-bottom: 20px;
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
</style>

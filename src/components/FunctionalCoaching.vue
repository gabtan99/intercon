<template>
  <b-row class="mx-4 mb-5 service-card-block" no-gutters>
    <div class="col-lg-7 p-5 service-card__content">
      <h2 class="font-24 font-gilroy-bold mb-3 service-card__title">
        Functional Health and Wellness Coaching
      </h2>
      <p class="font-16 font-avenir-light mb-4 service-card__description">
        Hyperbaric oxygen therapy involves breathing pure oxygen in a
        pressurized room or tube. Hyperbaric oxygen therapy is a
        well-established treatment for decompression sickness, a hazard of scuba
        diving.
      </p>
    </div>
    <div class="col-lg-5 service-card__thumbnail-container">
      <g-image
        src="../../uploads/brown-coffee.jpg"
        class="service-card__thumbnail"
      />
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
  height: 200px;
  width: 100%;
  object-fit: cover;
  -webkit-clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%);
}

.service-card__title {
  color: var(--black-text);
}

.service-card__description {
  color: var(--gray-4);
}

@media only screen and (max-width: 576px) {
  .service-card__conditions-block {
    margin-top: 1rem;
  }
}

@media only screen and (max-width: 991px) {
  .service-card-block {
    flex-direction: column-reverse;
  }
}

@media only screen and (max-width: 1200px) {
  .service-card__thumbnail {
    height: 230px;
    width: 100%;
    object-fit: cover;
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

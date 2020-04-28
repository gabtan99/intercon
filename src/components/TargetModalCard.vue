<template>
  <div>
    <b-card
      tag="article"
      class="service-card"
      img-top
      img-alt="image"
      img-height="130"
      :img-src="servicesContent.service_image.src"
    >
      <h4
        class="font-gilroy-medium font-18"
        style="margin: 8px 0px 8px; color: var(--blue-branding);"
      >
        {{ servicesContent.service_name }}
      </h4>
      <b-card-text
        class="font-avenir-light font-16"
        style="margin-bottom: 10px;"
      >
        {{ servicesContent.service_description }}
      </b-card-text>

      <div class="button-style">
        <!-- :href="servicesContent.service_name" -->
        <a
          href="/services"
          class="font-gilroy-regular font-16"
          style="color: #057097; text-decoration: none;"
        >
          Learn More
        </a>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ['servicesContent'],
}
</script>
<style scoped>
.service-card {
  position: relative;
  width: 230px;
  margin: 5px;
  border: none;
  padding: 0px;
  box-shadow: 0 3px 3px 1px var(--gray-1);
}

.button-style {
  display: block;
  margin: 0 auto;
  width: 110px;
  padding: 5px;
  text-align: center;
  border-radius: 500px;
  background: transparent;
  border: 0.5px solid #e5e3e3;
  cursor: pointer;
}

.button-style:hover {
  box-shadow: 0 2px 2px 1px var(--gray-1);
}

@media only screen and (max-width: 767px) {
  .service-card {
    position: relative;
    width: 100%;
    margin: 5px;
  }

  .button-style {
    width: 150px;
  }
}
</style>

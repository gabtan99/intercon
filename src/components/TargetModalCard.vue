<template>
  <div>
    {{ getServiceInfo(servicesContent.service_name) }}

    <b-card
      tag="article"
      class="service-card card-img-top"
      img-top
      img-alt="image"
      img-height="150"
      :img-src="singleService.header_image.src"
    >
      <h4
        v-b-popover.hover.top="{
          title: this.singleService.title,
          customClass: 'font-avenir-medium font-16',
        }"
        class="font-gilroy-medium font-18 ellipsis"
      >
        {{ singleService.title }}
      </h4>
      <b-card-text
        class="font-avenir-light font-16"
        style="margin-bottom: 10px;"
      >
        {{ servicesContent.service_description }}
      </b-card-text>

      <div class="button-style">
        <g-link
          :to="singleService.path"
          class="font-gilroy-regular font-16"
          style="color: #057097; text-decoration: none;"
        >
          Learn More
        </g-link>
      </div>
    </b-card>
  </div>
</template>

<static-query>
query {
  services: allServices {
    edges {
      node {
        title
        path
        header_image
      }
    }
  }
}
</static-query>

<script>
export default {
  props: ['servicesContent'],
  data() {
    return {
      singleService: {},
    }
  },
  methods: {
    getServiceInfo: function (title) {
      this.$static.services.edges.map((item) => {
        if (title === item.node.title) {
          this.singleService = item.node
        }
      })
    },
  },
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

.card-img-top {
  object-fit: cover;
}

.ellipsis {
  margin: 8px 0px 8px;
  color: var(--blue-branding);
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.button-style:hover {
  box-shadow: 0 2px 2px 1px var(--gray-1);
}

@media only screen and (max-width: 1000px) {
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

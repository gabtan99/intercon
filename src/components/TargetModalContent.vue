<template>
  <div class="target-content">
    <div style="display: flex; margin-bottom: 10px; align-items: center;">
      <img class="icon-style" :src="targetContent.target_icon.src" alt="icon" />
      <h1
        class="font-gilroy-bold"
        style="padding-top: 1rem;  padding-left: 0.5rem;"
      >
        {{ targetContent.target_name }}
      </h1>
    </div>

    <p class="font-avenir-light font-18" style="margin-bottom: 15px;">
      {{ targetContent.target_description }}
    </p>

    <div class="service-style">
      <TargetModalCard
        v-for="item in targetServices"
        :key="item.service_name"
        :servicesContent="item"
      />
    </div>
  </div>
</template>

<script>
import TargetModalCard from "@/components/TargetModalCard";

export default {
  props: ["targetContent", "targetServices"],
  components: {
    TargetModalCard,
  },
  methods: {
    log: function(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
.target-content {
  padding: 18px;
}

.icon-style {
  width: 36px;
  height: 36px;
  margin: 0px 10px;
  border-radius: 500px;
}

.service-style {
  display: flex;
  flex-wrap: wrap;
}

@media only screen and (max-width: 767px) {
  .service-style {
    display: flex;
    flex-direction: column;
  }

  .icon-style {
    font-size: 20pt;
    color: var(--blue-icon);
    margin-right: 10px;
  }
}
</style>

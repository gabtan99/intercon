<template>
  <b-container class="mt-5">
    <FunctionalCoaching />

    <ServicesServiceCard
      v-for="service in services"
      :key="service.node.id"
      :service="service"
    />
  </b-container>
</template>

<script>
import ServicesServiceCard from "@/components/ServicesServiceCard";
import FunctionalCoaching from "@/components/FunctionalCoaching";

export default {
  components: {
    ServicesServiceCard,
    FunctionalCoaching,
  },
  props: ["services"],
};
</script>

<style scoped></style>

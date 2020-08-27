<template>
  <b-container class="mt-5">
    <ServicesServiceCard
      v-for="service in services"
      :key="service.node.id"
      :service="service"
    />
  </b-container>
</template>

<script>
import ServicesServiceCard from "@/components/ServicesServiceCard";
export default {
  components: {
    ServicesServiceCard,
  },
  props: ["services"],
};
</script>

<style scoped></style>

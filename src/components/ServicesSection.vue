<template>
  <b-container class="mt-5 container">
    <FunctionalCoaching :coaching="coaching" />

    <ServicesServiceCard
      v-for="service in services"
      :key="service.node.id"
      :service="service"
    />
    <Pager
      :info="pageInfo"
      class="font-avenir-medium font-21 pagination-style"
    />
  </b-container>
</template>

<script>
import ServicesServiceCard from "@/components/ServicesServiceCard";
import FunctionalCoaching from "@/components/FunctionalCoaching";
import { Pager } from "gridsome";

export default {
  components: {
    ServicesServiceCard,
    FunctionalCoaching,
    Pager,
  },
  props: ["services", "coaching", "pageInfo"],
};
</script>

<style>
.pagination-style {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
}

.container {
  margin-bottom: 100px;
}

.pagination-style a {
  margin: 5px;
  padding: 8px 13px;
  color: var(--blue-branding);
  border-radius: 5px;
  transition: all ease-in 0.15s;
}

.pagination-style a:hover {
  text-decoration: none;
  transform: translateX(0.5rem);
  transform: scale(1.01);
  box-shadow: 0px 6px 9px var(--gray-2);
  -webkit-box-shadow: 0px 6px 9px var(--gray-2);
  -moz-box-shadow: 0px 6px 9px var(--gray-2);
  -o-box-shadow: 0px 6px 9px var(--gray-2);
  -ms-box-shadow: 0px 6px 9px var(--gray-2);
}

.pagination-style a.active {
  margin: 10px;
  color: white;
  background-color: var(--blue-branding);
}

@media only screen and (max-width: 1000px) {
  .pagination-style a {
    font-size: 1.8rem;
  }
}
</style>

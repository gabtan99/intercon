<template>
  <div class="container center">
    <div class="center">
      <h1 class="font-avenir-black font-16 abbrev">
        F A Q
      </h1>
      <h1 class="font-gilroy-bold font-26">
        Frequently Asked Questions
      </h1>
    </div>
    <div class="row">
      <div v-if="!faqs || !faqs.length">
        <ComingSoon />
      </div>
      <div class="col-lg-6" v-else v-for="item in faqs" v-bind:key="item.id">
        <FAQItem 
          :question="item.node.question"
          :answer="item.node.answer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FAQItem from "@/components/FAQItem";
import ComingSoon from "@/components/ComingSoon";

export default {
  components: {
    FAQItem,
    ComingSoon,
  },
  props: ["faqs"],
};
</script>

<style scoped>
.container {
  padding: 50px 10px;
}

.center {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.abbrev {
  color: var(--gray-3);
}
</style>

<template>
  <div class="container">
    <font-awesome :icon="'question-circle'" class="icon" />
    <div>
      <h4 class="font-avenir-medium font-21 line-spaced">
        {{ this.question }}
      </h4>
      <p class="font-avenir-book font-18 answer line-spaced">
        {{ this.answer }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question", "answer"],
};
</script>

<style scoped>
.container {
  max-width: 500px;
  padding: 50px 10px;
  display: flex;

  justify-content: center;
  flex-direction: row;
}

.line-spaced {
  line-height: 25px;
}

.icon {
  margin: 0px 20px;
  font-size: 30px;
  color: var(--green-branding);
}

.answer {
  color: var(--gray-4);
}
</style>

<template>
  <div class="container">
    <font-awesome :icon="'question-circle'" class="icon" />
    <div>
      <h4 class="font-avenir-medium font-21 line-spaced">
        May tanong ka ba bro?
      </h4>
      <p class="font-avenir-book font-18 answer line-spaced">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the
      </p>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container {
  max-width: 500px;
  padding: 50px 10px;
  display: flex;

  justify-content: center;
  flex-direction: row;
}

.line-spaced {
  line-height: 30px;
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

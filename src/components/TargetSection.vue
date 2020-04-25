<template>
  <div class="main">
    <h1 class="font-gilroy-bold font-48">Target Groups</h1>

    <div class="card-container">
      <TargetSectionCard :target="targets[0].node" />
      <TargetSectionCard :target="targets[1].node" />
      <TargetSectionCard :target="targets[0].node" />

      <div class="link-style">
        <span
          class="font-gilroy-medium font-36"
          style="color: var(--green-branding); cursor: default;"
        >
          +6
        </span>
        <a href="/targets">
          <span
            class="font-gilroy-regular font-18"
            style="color: var(--blue-branding);"
          >
            Explore All ›
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TargetSectionCard from '@/components/TargetSectionCard'
export default {
  props: ['targets'],
  methods: {
    log: function (e) {
      console.log(e)
    },
  },
  components: {
    TargetSectionCard,
  },
}
</script>

<style scoped>
.main {
  display: block;
  text-align: center;
  padding: 80px;
  background-image: linear-gradient(
    to top,
    var(--white),
    var(--lightgreen-gradient)
  );
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.link-style {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration-color: var(--blue-branding);
}

@media only screen and (max-width: 767px) {
  .main {
    display: flex;
    flex-direction: column;
    padding-bottom: 0px;
  }

  h1 {
    font-size: 28pt;
  }

  .link-style {
    padding-top: 25px;
  }
}
</style>

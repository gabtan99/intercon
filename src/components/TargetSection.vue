<template>
  <div class="main">
    <h1 class="font-gilroy-bold font-36 heading">
      {{ targetConfig.target_section_title }}
    </h1>

    <div class="card-container">
      <TargetSectionCard :target="targets[0].node" />
      <TargetSectionCard :target="targets[1].node" />
      <TargetSectionCard :target="targets[2].node" />

      <div class="link-style">
        <span
          class="font-gilroy-medium font-36"
          style="color: var(--green-branding); cursor: default;"
        >
          +{{ targets.length - 3 }}
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
import TargetSectionCard from "@/components/TargetSectionCard";
export default {
  props: ["targets", "targetConfig"],
  methods: {
    log: function(e) {
      console.log(e);
    },
  },
  created() {
    this.targets = this.targets
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  },
  components: {
    TargetSectionCard,
  },
};
</script>

<style scoped>
.heading {
  color: var(--blue-branding);
}
.main {
  display: block;
  text-align: center;
  background-image: linear-gradient(
    to top,
    #fcfcfc,
    var(--lightgreen-gradient)
  );
  padding: 10rem 0;
  padding-bottom: 5rem;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px;
}

.link-style {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration-color: var(--blue-branding);
  margin: 20px;
}

@media only screen and (max-width: 1000px) {
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

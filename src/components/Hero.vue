<template>
  <div class="hero">
    <h1 class="hero-title" v-html="settings.hero_title" />
    <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
    <button @click="showModal = true">Watch Video</button>

    <b-modal centered hide-header hide-footer size="lg" v-model="showModal">
      <font-awesome
        class="close-icon"
        :icon="'times'"
        @click="showModal = false"
      />
      <div>
        <youtube
          :fitParent="true"
          :resize="true"
          :resizeDelay="0"
          :player-vars="{
            autoplay: 1,
          }"
          video-id="WZdEP1L-EZE"
        />
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
      showModal: false,
    };
  },
};
</script>

<style>
.hero {
  text-align: center;
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0 8rem 0;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
  margin: 0;
  padding: 0;
}
.hero-subtitle {
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.68;
  padding: 0;
  margin: 0;
  opacity: 0.6;
}

.close-icon {
  position: absolute;
  right: 10px;
  margin: 10px;
  font-size: 13pt;
  color: var(--white);
  cursor: pointer;
}
</style>

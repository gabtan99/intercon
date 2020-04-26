<template>
  <div class="main">
    

    <div class="col-lg-6">
      <h1 class="hero-title font-gilroy-bold font-42">The Future of <br/> Personalized Healthcare</h1>

      <h1 class="hero-subtitle font-avenir-light font-24">
        Enhance and optimize your body’s self <br/>
        healing mechanisms in the most safest and <br/>
        natural way possible.
      </h1>

      <div class="hero-buttons">
        <GreenButton>
          Learn More
        </GreenButton>

        <WhiteButton :onClick="watchVideo" >
          Watch Video
        </WhiteButton>
      </div>
    </div>

    <div class="col-lg-6">
      <b-img
        fluid
        class="hero-image" 
        src="../assets/img/hero-img.png">
      </b-img>
    </div>


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
import GreenButton from "@/components/GreenButton";
import WhiteButton from "@/components/WhiteButton";

export default {
  components: {
    GreenButton,
    WhiteButton,
  },
  data() {
    return {
      settings: require("../../data/theme.json"),
      showModal: false,
    };
  },
  methods: {
    watchVideo() {
      this.showModal = true
    },
  },
};
</script>

<style>
.main {
  display: flex;
  flex-direction: row;
  padding: 80px 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-title {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.hero-subtitle {
  margin-bottom: 4rem;
}

.hero-buttons {
  margin-bottom: 10rem;
}

.hero-image {
  margin-top: -4rem;
}

.white-button {
  margin-left: 2rem;
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

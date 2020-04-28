<template>
  <b-modal centered hide-header hide-footer size="lg" v-model="showModal">
    <b-row>
      <font-awesome class="close-icon" :icon="'times'" @click="hideModal" />
    </b-row>
    <div class="modal-style">
      <h1 class="font-avenir-light title">
        Subscribe to our channel and be part of our growing community!
      </h1>
      <a class="font-gilroy-light font-18 youtube-link" :href="youtubeLink">
        <font-awesome :icon="['fab', 'youtube']" class="social" />
        {{ youtubeHandle }}
      </a>
    </div>
    <div>
      <youtube
        :fitParent="true"
        :resize="true"
        :resizeDelay="0"
        :player-vars="{
          autoplay: 1,
        }"
        video-id="r1ZLSbQ0r0I"
      />
    </div>
  </b-modal>
</template>

<script>
import GreenButton from "@/components/GreenButton";
import WhiteButton from "@/components/WhiteButton";
import Waves from "@/components/Waves";
import YoutubeModal from "@/components/YoutubeModal";

export default {
  props: ["showModal", "youtubeLink", "youtubeHandle", "hideModal"],
};
</script>

<style scoped>
.title {
  text-align: center;
}

.modal-style {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0px 20px;
}

.youtube-icon {
  color: #ff0000;
  margin: 2px 5px;
}

.youtube-link {
  display: flex;
  text-decoration: none;
  color: inherit;
  padding: 5px 0px 0px;
}

.youtube-link:hover {
  color: var(--green-branding-light);
  text-decoration: underline;
}

.close-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 13pt;
  color: var(--gray-2);
  cursor: pointer;
}
</style>

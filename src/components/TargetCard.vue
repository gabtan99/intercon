<template>
  <div
    @click="showModal = !showModal"
    class="card"
    :style="{
      '--background-color': target.background_color,
    }"
  >
    <font-awesome class="icon-style" :icon="target.target_icon" />
    <span class="target-name font-16 font-gilroy-bold">
      {{ target.target_name }}
    </span>

    <b-modal
      centered
      hide-header
      hide-footer
      size="lg"
      id="modal-scrollable"
      scrollable
      v-model="showModal"
    >
      <font-awesome
        class="close-icon"
        :icon="'times'"
        @click="showModal = false"
      />
      <TargetModalContent
        :targetContent="target"
        :targetServices="target.target_services"
      />
    </b-modal>
  </div>
</template>

<script>
import TargetModalContent from '@/components/TargetModalContent'

export default {
  data() {
    return {
      showModal: false,
      selectedTarget: '',
    }
  },
  props: ['target'],
  components: {
    TargetModalContent,
  },
  methods: {
    log: function (e) {
      console.log(e)
    },
  },
}
</script>

<style scoped>
.card {
  position: relative;
  border: 1px solid #eeeeee;
  border-radius: 3px;
  padding: 20px;
  margin: 10px;
  background-color: var(--background-color);
  height: 180px;
  width: 220px;
  transition: all 0.2s ease-in-out;
}

.card:hover {
  transition-delay: 0.2s;
  transform: scale(1.03);
  cursor: pointer;
}

.target-name {
  position: absolute;
  padding: 15px;
  right: 0;
  bottom: 0;
  color: var(--blue-branding);
}

.icon-style {
  font-size: 15pt;
}

.close-icon {
  position: absolute;
  right: 20px;
  margin: 18px;
  font-size: 13pt;
  color: var(--gray-2);
  cursor: pointer;
}

@media only screen and (max-width: 767px) {
  .card {
    position: relative;
    border: 1px solid #eeeeee;
    border-radius: 3px;
    width: 300px;
    height: 180px;
  }

  .close-icon {
    position: absolute;
    right: 18px;
    margin: 18px;
    font-size: 18pt;
    color: var(--gray-2);
    cursor: pointer;
  }
}
</style>

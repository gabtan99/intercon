<template>
  <div
    v-on:click="show(target.target_name)"
    class="card"
    :style="{
      '--background-color': target.background_color,
    }"
  >
    {{ sectionTargetModal() }}
    <img class="icon-style" :src="target.target_icon.src" alt="icon" />
    <span class="target-name font-18 font-gilroy-bold">
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
        :targetContent="selectedTargetContent"
        :targetServices="selectedTargetServices"
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
      selected: this.selectedTarget,
      selectedTargetContent: {},
      selectedTargetServices: [],
    }
  },
  props: ['target', 'selectedTarget'],
  components: {
    TargetModalContent,
  },
  methods: {
    show: function (target) {
      this.selectedTargetContent = this.target
      this.selectedTargetServices = this.target.target_services
      this.showModal = true
    },
    sectionTargetModal: function () {
      if (this.selectedTarget) {
        if (this.selectedTarget === this.target.target_name)
          this.show(this.selectedTarget)
      }
    },
  },
}
</script>

<style scoped>
.card {
  position: relative;
  border: none;
  border-radius: 3px;
  padding: 20px;
  margin: 10px;
  background-color: var(--background-color);
  height: 180px;
  width: 220px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 3px 3px 1px var(--gray-1);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 1px 5px 8px 2px var(--gray-2);
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
  width: 32px;
  height: 32px;
  border-radius: 500px;
}

.close-icon {
  position: absolute;
  right: 20px;
  margin: 18px;
  font-size: 13pt;
  color: var(--gray-2);
  cursor: pointer;
}

.close-icon:hover {
  position: absolute;
  right: 20px;
  margin: 18px;
  font-size: 13pt;
  color: var(--gray-5);
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

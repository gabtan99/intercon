<template>
  <div
    v-on:click="handleClick(target.item.name)"
    class="card"
    :style="{
      '--card-height': target.item.height,
      '--background-color': target.item.background,
      '--margin-style': target.item.margin ? 0 + 'px' : 15 + 'px',
    }"
  >
    <font-awesome
      :icon="target.item.icon"
      class="icon-style"
      :style="{ '--icon-color': target.item.color }"
    />
    <span class="target-name font-16 font-gilroy-bold">
      {{ target.item.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['target'],
  methods: {
    handleClick: function (title) {
      console.log(title)
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
  margin-top: var(--margin-style);
  background-color: var(--background-color);
  height: var(--card-height);
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
  color: var(--icon-color);
}

@media only screen and (max-width: 767px) {
  .card {
    position: relative;
    border: 1px solid #eeeeee;
    border-radius: 3px;
    width: 300px;
    height: 200px;
  }
}
</style>

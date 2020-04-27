<template>
  <div>
    <a href="/targets" style="text-decoration: none; color: inherit;">
      <b-card class="card-style">
        <font-awesome class="icon-style" :icon="target.target_icon" />
        <h4
          class="font-gilroy-regular font-24"
          style="color: var(--blue-branding);"
        >
          {{ target.target_name }}
        </h4>
        <b-card-text class="font-avenir-light font-16 text-style">
          {{ target.target_description }}
        </b-card-text>
      </b-card>
    </a>
  </div>
</template>

<script>
export default {
  props: ['target'],
  methods: {
    log: function (e) {
      console.log(e)
    },
  },
}
</script>

<style scoped>
.card-style {
  height: 200px;
  width: 250px;
  margin: 15px;
  padding: 10px;
  cursor: pointer;
  border: none;
  box-shadow: 0 3px 3px 1px var(--gray-1);
  transition: all 0.2s ease-in-out;
}

.card-style:hover {
  transform: scale(1.05);
  box-shadow: 1px 5px 8px 2px var(--gray-2);
  cursor: pointer;
}

.icon-style {
  font-size: 18pt;
  margin: 10px;
  color: var(--blue-branding);
}

.text-style {
  margin: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}

@media only screen and (max-width: 767px) {
  .card-style {
    width: 300px;
  }

  .text-style {
    margin: 5px;
    font-size: 10pt;
    -webkit-line-clamp: 4;
  }
}
</style>

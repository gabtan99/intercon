<template>
  <div>
    <router-link
      :to="{ path: '/targets', query: { selectedTarget: target.target_name } }"
      style="text-decoration: none; color: inherit;"
    >
      <b-card class="card-style">
        <img class="icon-style" :src="target.target_icon" alt="icon" />
        <h4 class="font-gilroy-medium font-21">
          {{ target.target_name }}
        </h4>
        <b-card-text class="font-avenir-light font-16 text-style">
          {{ target.target_description }}
        </b-card-text>
      </b-card>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["target"],
};
</script>

<style scoped>
.card-body {
  display: flex;
  flex-direction: column;
  background: white;
}

.card-style {
  height: 200px;
  width: 250px;
  margin: 15px;
  cursor: pointer;
  border: none;
  box-shadow: 0 3px 3px 1px var(--gray-1);
  transition: all 0.2s ease-in-out;
}

.card-style:hover {
  transform: scale(1.05);
  box-shadow: 1px 5px 8px 2px var(--gray-1);
  cursor: pointer;
}

.icon-style {
  width: 40px;
  height: 40px;
  border-radius: 500px;
  color: var(--blue-branding);
  margin: auto;
}

.text-style {
  margin: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

@media only screen and (max-width: 1000px) {
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

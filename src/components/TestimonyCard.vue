<template>
  <div class="container">
    <img src="../assets/img/red-light.png" />
    <p class="content font-avenir-oblique font-16">
      “My migraine is gone! Thank you Intercon for the service! Bless us O Lord
      for these thy gifts, which we are about to receive from thy bounty through
      Christ our Lord. Amen”
    </p>
    <p class="author font-avenir-book font-16">
      - Schuyler Ng
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
    };
  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
  box-shadow: 0px 5px 5px #76767629;
  object-fit: cover;
  width: 130px;
  height: 130px;
  margin: 5px auto;
}

.container {
  box-shadow: 0px 5px 5px #76767629;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 260px;
  padding: 15px 10px;
}

.content {
  padding: 20px;
  padding-bottom: 10px;
  color: var(--blue-branding-dark);
}

.author {
  padding: 0px 20px;
  color: var(--blue-branding-dark);
  text-align: right;
}
</style>

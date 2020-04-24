<template>
  <div>
    <b-card
      img-src="../assets/img/colon-hydrotherapy.png"
      img-alt="Image"
      img-height="118"
      img-top
      tag="article"
      class="service-card"
    >
      <div class="service-icon-div">
        <font-awesome class="service-icon" :icon="'star-of-life'" />
      </div>

      <h4
        class="font-gilroy-medium font-18"
        style="margin: 12px 0px 8px; color: var(--blue-branding);"
      >
        Colon Hydrotherapy
      </h4>

      <b-card-text
        class="font-avenir-light font-16"
        style="margin-bottom: 10px;"
      >
        Just a little indication. And I know you're saying, 'Oh Bob, you've done
        it this time.' And you may be right. I like to beat the brush. That's
        crazy. Let your imagination be your guide. This piece of canvas is your
        world.
      </b-card-text>

      <div class="button-style">
        <span class="font-gilroy-regular font-16" style="color: #057097;">
          Learn More
        </span>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.service-card {
  position: relative;
  margin: 5px;
}

.service-icon-div {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 29px;
  top: 103px;
  background-color: white;
  box-shadow: 0 3px 3px 1px var(--gray-2);
  border-radius: 50%;
}

.service-icon {
  font-size: 8pt;
  color: var(--blue-branding);
}

.button-style {
  display: block;
  margin: 0 auto;
  width: 100px;
  padding: 6px;
  text-align: center;
  border-radius: 500px;
  background: transparent;
  border: 0.5px solid #e5e3e3;
  cursor: pointer;
}

.button-style:hover {
  box-shadow: 0 2px 2px 1px var(--gray-1);
}

@media only screen and (max-width: 767px) {
  .button-style {
    width: 150px;
  }
}
</style>

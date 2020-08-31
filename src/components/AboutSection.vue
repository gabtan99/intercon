<template>
  <div class="main">
    <div class="about-description">
      <h1 class="about-title font-gilroy-bold font-36">
        {{ aboutConfig.about_section_title }}
      </h1>

      <p class="about-subtitle font-avenir-book font-18">
        {{ aboutConfig.about_section_description }}
      </p>
    </div>

    <div class="about-details">
      <b-row class="lower">
        <div class="col-lg-4 image p-6">
          <b-img
            fluid
            :src="require('../assets/img/about-section.png')"
            class="about-image"
          />
        </div>

        <div class="col-lg-6 p-5">
          <div class="about-detail-item">
            <div class="title-div">
              <b-img
                class="icon-style"
                :src="require('../assets/img/bandaid.png')"
                alt="icon"
              />

              <h1 class="detail-title font-gilroy-bold font-21">
                {{ aboutConfig.about_bullet_1_title }}
              </h1>
            </div>

            <div>
              <p class="detail-info font-avenir-light font-18">
                {{ aboutConfig.about_bullet_1_description }}
              </p>
            </div>
          </div>

          <div class="about-detail-item">
            <div class="title-div">
              <b-img
                class="icon-style"
                :src="require('../assets/img/leafy.png')"
                alt="icon"
              />
              <div>
                <h1 class="detail-title font-gilroy-bold font-21">
                  {{ aboutConfig.about_bullet_2_title }}
                </h1>
              </div>
            </div>

            <div>
              <p class="detail-info font-avenir-light font-18">
                {{ aboutConfig.about_bullet_2_description }}
              </p>
            </div>
          </div>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ["aboutConfig"],
};
</script>

<style scoped>
p {
  line-height: 2.7rem;
}

.title-div {
  display: flex;
  flex-direction: row;

  align-items: center;
}

.icon-style {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.main {
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  padding-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: var(--lightgreen-gradient);
}

.about-description {
  text-align: center;
}

.about-title {
  color: var(--blue-branding-dark);
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.about-subtitle {
  margin-bottom: 4rem;
  padding: 0 2rem;
}

.about-details {
  width: 80%;
  max-width: 90%;
}

.lower {
  justify-content: center;
  align-items: center;
}

.about-detail-item {
  margin-top: 4rem;
}

.about-detail-image {
  margin-left: 2rem;
}

.detail-items {
  margin-left: 2rem;
}

.detail-title {
  color: var(--blue-branding-dark);
  margin: auto 0px;
  margin-left: 2rem;
}

.detail-info {
  margin-top: 2rem;
}

.image {
  align-self: center;
}

@media only screen and (min-width: 1000px) {
  .about-subtitle {
    margin-bottom: 0rem;
  }
}
</style>

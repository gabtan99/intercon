<template>
  <div>
    <b-modal id="modal-lg" ref="newsletter" class="newsletter" size="lg" hide-footer hide-header body-class="p-0">
      <img src="../assets/img/icon-exit.png" class="exit" @click="$bvModal.hide('modal-lg')" />
      <div id="container">
        <img src="../assets/img/modal-picture.png" class="picture" />
        <div id="content-container">
          <div id="text-container">
            <h1 style="text-align:center" class="font-gilroy-medium font-36">Join Our Community!</h1>
            <h3
              style="text-align:center"
              class="font-gilroy-light font-21"
            >Get the most recent news for Health, Therapy, Wellness, and more.</h3>
          </div>
          <div id="form-container">
            <form @submit.prevent="handleSubmit">
              <input placeholder="Your email address" type="email" />
              <b-button id="submit" type="submit">Join Now</b-button>
            </form>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit() {},
    showModal() {
      this.$refs["newsletter"].show();
    },
    hideModal() {
      this.$refs["newsletter"].hide();
    }
  },
  mounted() {
    // put when to show modal here
    // this.showModal()
  }
};
</script>

<style scoped>
.exit {
  height: 15px;
  width: 15px;
  position: absolute;
  top: 30px;
  right: 36px;
  cursor: pointer;
}

b-modal.newsletter {
  padding: 0px;
}

#container {
  display: flex;
}

#container > div {
  flex-grow: 1;
}

#content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#text-container {
  padding: 20px 60px;
}

#submit {
  margin-top: 20px;
  width: 100%;
  height: 30px;
  background-color: var(--green-branding);
}

#form-container {
  padding: 20px 60px;
  width: 100%;
}

h1 {
  font-weight: 400;
}

input {
  width: 100%;
  font-size: 16px;
  outline: 0;
  border-width: 0 0 2px;
}

::placeholder {
  color: #a8a4a4;
}
</style>
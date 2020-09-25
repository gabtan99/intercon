<template>
  <Layout>
    <div class="main">
      <b-container class="container">
        <b-row class="form">
          <b-col lg="5" class="form-container side-margin">
            <div>
              <div>
                <h1 class="font-gilroy-bold font-42 blue">Get in touch</h1>
                <p class="font-avenir-light font-18 blue">
                  We're here to help and answer any questions you might have.
                  Looking forward to hearing from you!
                </p>
              </div>

              <form
                method="POST"
                ref="contactform"
                class="contact-form"
                name="contact"
                autocomplete="off"
              >
                <div class="sender-info">
                  <div class="form-item">
                    <label
                      for="name"
                      class="font-gilroy-medium font-16 blue required"
                      >Name</label
                    >
                    <input
                      type="text"
                      class="font-gilroy-regular font-16 required"
                      name="name"
                      ref="name"
                      autocomplete="off"
                    />
                  </div>
                  <div class="form-item">
                    <label
                      for="email"
                      class="font-gilroy-medium font-16 blue required"
                      >Email Address</label
                    >
                    <input
                      type="_replyto"
                      class="font-gilroy-regular font-16 required"
                      name="email"
                      ref="email"
                      autocomplete="off"
                    />
                  </div>
                  <div class="form-item">
                    <label
                      for="subject"
                      class="font-gilroy-medium font-16 blue required"
                      >Subject</label
                    >
                    <select
                      id="subject"
                      name="subject"
                      ref="subject"
                      class="options font-gilroy-regular font-16 blue"
                    >
                      <option selected value="Inquiry">Inquiry</option>
                      <option value="Appointment">Appointment</option>
                      <option value="Customer Service">Customer Service</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div class="form-item">
                    <label
                      for="message"
                      class="font-gilroy-medium font-16 blue required"
                      >Message</label
                    >
                    <textarea
                      name="message"
                      ref="message"
                      class="font-gilroy-regular font-16 blue required"
                    ></textarea>
                  </div>
                </div>

                <GreenButton class="submitBtn" :onClick="submitForm">
                  Submit
                  <font-awesome
                    :icon="['fas', 'paper-plane']"
                    class="plane-icon"
                  />
                </GreenButton>
              </form>
            </div>
          </b-col>

          <b-col lg="6" class="padded">
            <div class="card-container">
              <div class="card">
                <ClientOnly>
                  <div class="map">
                    <Map />
                  </div>
                </ClientOnly>
                <div class="card-details">
                  <b-row>
                    <div class="col-sm-7 visit-us">
                      <h2 class="font-gilroy-bold font-18 blue">Visit Us</h2>
                      <span class="contact-info">
                        <p class="font-avenir-light font-16 blue">
                          210B Del Monte Ave, La Loma, Quezon City, 1114 Metro
                          Manila
                        </p>
                        <br />
                        <p class="font-avenir-light font-16 blue">
                          8AM - 8PM
                        </p>
                      </span>
                    </div>

                    <div class="col-sm-5">
                      <h2 class="font-gilroy-bold font-18 blue">
                        Get Social
                      </h2>
                      <span class="contact-info">
                        <a
                          href="https://www.facebook.com/interconregenerative/"
                        >
                          <font-awesome
                            :icon="['fab', 'facebook-square']"
                            class="social"
                        /></a>
                        <a
                          href="https://www.instagram.com/interconregenerative/"
                        >
                          <font-awesome
                            :icon="['fab', 'instagram']"
                            class="social"
                          />
                        </a>
                        <a
                          href="mailto:info@interconregenerative.com"
                          target="_top"
                        >
                          <font-awesome :icon="'envelope'" class="social" />
                        </a>
                      </span>
                    </div>
                  </b-row>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </Layout>
</template>

<script>
import GreenButton from "@/components/GreenButton";
import Map from "@/components/Map";

export default {
  components: {
    GreenButton,
    Map,
  },
  data() {
    return {};
  },
  methods: {
    submitForm() {
      const { name, email, subject, message } = this.$refs;

      if (name.value.length <= 0 || message.value.length <= 0) {
        alert("Please fill up all fields before submitting.");
      } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email.value
        )
      ) {
        alert("You have entered an invalid email address!");
      } else {
        this.$refs.contactform.submit();
      }
    },
  },
  metaInfo() {
    return {
      title: `Contact Us - Intercon Regenerative Center`,
      meta: [
        {
          key: "description",
          name: "description",
          content: `At Intercon Regenerative Center, we seek to enhance health and address issues by identifying  primary causes of illness and disease, through in-depth one-on-one consultations and specialized tests/ diagnostics. We aim to develop personalized treatment protocols to optimize health, prevent and halt progression of disease and repair damaged organs. `,
        },
        {
          key: "og:title",
          name: "og:title",
          content: `Contact Us - Intercon Regenerative Center`,
        },
        {
          key: "og:site_name",
          name: "og:site_name",
          content: "Intercon Regenerative Center",
        },
        {
          key: "og:image",
          name: "og:image",
          content: require("@/assets/img/meta.jpg"),
        },
        {
          name: "og:description",
          name: "og:description",
          content: `At Intercon Regenerative Center, we seek to enhance health and address issues by identifying  primary causes of illness and disease, through in-depth one-on-one consultations and specialized tests/ diagnostics. We aim to develop personalized treatment protocols to optimize health, prevent and halt progression of disease and repair damaged organs. `,
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  background-image: linear-gradient(
    to bottom,
    var(--white),
    var(--lightblue-gradient)
  );
}

.side-margin {
  margin-left: 20px;
  margin-right: 20px;
}

.form-item {
  width: 100%;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 5px;
}

.card {
  width: 100%;

  box-shadow: 0 4px 4px 0 rgba(155, 155, 155, 0.2);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0px;
  margin: 5% 0px;
}

.card-details {
  padding: 35px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(155, 155, 155, 0.2);
}

label {
  font-weight: 0;
}

label.required::after {
  content: "*";
  margin-left: 4px;
  color: red;
}

.sender-info {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}

.sender-info > div:last-of-type {
  margin: 0;
}

input:focus,
textarea:focus {
  border-color: #006838;
}

input,
textarea,
select {
  border: 1px solid var(--gray-2);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  width: 100%;
  margin-bottom: 1.5rem;
  background-color: var(--white);
}

textarea {
  resize: none;
  height: 140px;
}

.icon {
  margin-right: 20px;
  font-size: 18px;
}

.social {
  margin: 2px;
  margin-right: 10px;
  color: var(--gray-3);
  font-size: 24px;
}

.social:hover {
  color: var(--gray-5);
}

.blue {
  color: var(--blue-branding-dark);
}

.submitBtn {
  float: right;
}

.plane-icon {
  margin-left: 10px;
}

.form {
  margin: 0;
  padding-top: 40px;
  padding-bottom: 85px;
  justify-content: center;
}

.form-container {
  padding-bottom: 40px;
}
</style>

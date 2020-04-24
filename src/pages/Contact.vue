<template>
  <Layout>
      <b-container class="container">
        <b-row class="row-container">
          <b-col sm="5">
            <div class="form-container">
              <div class="contact-header">
                <h1 class="font-gilroy-medium font-36 blue">Get in touch</h1>
                <p class="font-avenir-light font-18 blue">We're here to help and answer any questions you might have. Looking forward to hearing from you!</p>
              </div>

              <form 
                class="contact-form" 
                name="contact"
              >

                <div class="sender-info">
                  <div class="form-item">
                    <label for="name" class="font-gilroy-regular font-16 blue required">Name</label>
                    <input type="text" class="font-gilroy-regular font-16 required" name="name" autocomplete="off"/>
                  </div>
                  <div class="form-item">
                    <label for="email" class="font-gilroy-regular font-16 blue required">Email Address</label>
                    <input type="email" class="font-gilroy-regular font-16 required" name="email" autocomplete="off"/>
                  </div>
                  <div class="form-item">
                    <label for="subject" class="font-gilroy-regular font-16 blue required">Subject</label>
                    <select id="subject" name="subject" class="options font-gilroy-regular font-16 blue">
                      <option disabled selected value style="display:none"> -- select a subject -- </option>
                      <option value="prices">Prices</option>
                      <option value="services">Services</option>
                      <option value="targets">Targets</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div class="form-item">
                    <label for="message" class="font-gilroy-regular font-16 blue required">Message</label>
                    <textarea name="message" class="font-gilroy-regular font-16 blue required"></textarea>
                  </div>
                </div>

                <GreenButton class="submitBtn"
                :onClick=submitForm
                >
                  Submit
                  <font-awesome :icon="['fas', 'paper-plane']" class="plane-icon"/>
                </GreenButton>
              </form>
            </div>
          </b-col>
          <b-col sm="1"/>
          <b-col sm="6">
            <div class="card-container">
              <div class="card">
                <div class="map">
                  <!-- insert map here -->
                </div>
                <div class="card-details">

                  <b-row> 

                    <div class="col-sm-6 visit-us">
                      <h2 class="font-gilroy-medium font-18 blue">Visit Us</h2>
                      <span class="contact-info">
                        <p class="font-avenir-light font-16 blue">
                          210B Del Monte Ave, La Loma, Quezon City, 1114 Metro Manila
                        </p>
                        <br>
                        <p class="font-avenir-light font-16 blue">
                          8AM - 8PM
                        </p>
                      </span>
                    </div>
                    <div class="col-sm-1"/>
                    <div class="col-sm-5">
                      <h2 class="font-gilroy-medium font-18 blue">Get Social</h2>
                      <span class="contact-info">
                        <a href="https://www.facebook.com/interconregenerative/">
                          <font-awesome
                            :icon="['fab', 'facebook-square']"
                            class="social"
                        /></a>
                        <a href="https://www.instagram.com/interconregenerative/">
                          <font-awesome :icon="['fab', 'instagram']" class="social" />
                        </a>
                        <a class="font-avenir-light font-16">
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
  </Layout>
</template>

<script>
  import GreenButton from "@/components/GreenButton";

    export default {
      components: {
        GreenButton
      },
      data() {
        return{
        }
      },
      methods: {
        submitForm(){
          
        }
      }
    }
</script>

<style scoped>

.row-container {
  margin-bottom: 12rem;
}

.contact-header {
  padding: 6rem 0 2rem 0;
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
  margin-top: 9rem;
  width: 100%;
  height: 450px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-details {
  height: 46%;
  padding: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.label {
  font-weight: 0;
}

label.required::after {
  content: '*';
  margin-left: 4px;
  color: red;
}

.sender-info {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}

.sender-info > div:last-of-type {
  margin: 0;
}

input:focus,textarea:focus {
  border-color: #006838;
}

input,textarea,select {
  background: transparent;
  border: 1px solid var(--gray-2);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  width: 100%;
  margin-bottom: 2rem;
}

textarea {
  resize: none;
  height: 140px;
}

.button {
  color: var(--white);
  background: #006838;
  outline: none;
  border: 0;
  padding: 0.8rem 0.8rem;
  border-radius: 5rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  letter-spacing: 0.035em;
  width: 14rem;
  float: right;
}

.button:hover {
  opacity: 0.6;
}

.button:focus {
  border: 1px solid var(--color-base-1);
}

.icon {
  margin-right: 20px;
  font-size: 18px;
}

.social {
  margin: 2px;
  margin-right: 10px;
  color: var(--gray-5);
  font-size: 24px;
}

.social:hover {
  color: var(--gray-3);
}

.blue {
  color: #123450
}

.submitBtn {
  float: right
}

.plane-icon {
  margin-left: 10px;
}
</style>
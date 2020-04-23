<template>
  <Layout>
    <div class="container">

      <b-container>
        <b-row>
          <b-col sm="14">
            <div class="contact-header">
              <h1 class="contact-title">Get in touch</h1>
              <p>We're here to help and answer any questions you might have. Looking forward to hearing from you!</p>
            </div>

            <form class="contact-form" name="contact">

              <div class="sender-info">
                <div class="form-item">
                  <label for="name" class="label required">Name</label>
                  <input type="text" name="name"/>
                </div>
                <div class="form-item">
                  <label for="email" class="label required">Email Address</label>
                  <input type="email" name="email"/>
                </div>
                <div class="form-item">
                  <label for="subject" class="label required">Subject</label>
                  <select id="subject" name="subject">
                    <option value="1">Apple</option>
                    <option value="2">Banana</option>
                    <option value="3">Pineapple</option>
                  </select>
                </div>
                <div class="form-item">
                  <label for="message" class="label required">Message</label>
                  <textarea name="message"></textarea>
                </div>
              </div>
        
              <button class="button">Submit</button>

            </form>
          </b-col>

          <b-col sm="8">
            hello world
          </b-col>
        </b-row>
      </b-container>

    </div>
  </Layout>
</template>

<script>
export default {}
</script>

<style scoped>
.contact-header {
  padding: 2rem 0 4rem 0;
}
.contact-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.sender-info {
  display: flex;
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
  border-color: var(--color-contrast-1);
}
input,textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
</style>


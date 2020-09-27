<template>
  <Layout>
    {{ setAutoModal() }}

    <!-- <PageHeader
      page_name="Functional Health and Wellness Coaching"
      image="../uploads/colon-hydrotherapy.png"
    /> -->
    <div class="main-container">
      <div class="journal-container">
        <div
          class="journal-content content font-avenir-light"
          v-html="this.$page.coaching.content"
        />
      </div>
    </div>

    <div class="ssbuttons"></div>

    <NewsletterModal currPage="FUNCTIONALCOACHING" />
  </Layout>
</template>

<page-query>
query {
  coaching: coaching (path: "/data/coaching-section"){
    content
  }
}
</page-query>

<script>
import PageHeader from '@/components/PageHeader'
import NewsletterModal from '@/components/NewsletterModal'

export default {
  metaInfo: {
    title:
      'Functional Health and Wellness Coaching | Intercon Regenerative Center',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'At Intercon Regenerative Center, we seek to enhance health and address issues by identifying  primary causes of illness and disease, through in-depth one-on-one consultations and specialized tests/ diagnostics. We aim to develop personalized treatment protocols to optimize health, prevent and halt progression of disease and repair damaged organs. ',
      },
      {
        key: 'og:title',
        name: 'og:title',
        content:
          'Functional Health and Wellness Coaching | Intercon Regenerative Center',
      },
      {
        key: 'og:site_name',
        name: 'og:site_name',
        content: 'Intercon Regenerative Center',
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: require('@/assets/img/target-header.png'),
      },
      {
        name: 'og:description',
        name: 'og:description',
        content:
          'At Intercon Regenerative Center, we seek to enhance health and address issues by identifying  primary causes of illness and disease, through in-depth one-on-one consultations and specialized tests/ diagnostics. We aim to develop personalized treatment protocols to optimize health, prevent and halt progression of disease and repair damaged organs. ',
      },
    ],
  },
  data() {
    return {
      selectedTarget: '',
      pageConfig: {},
    }
  },
  components: {
    PageHeader,
    NewsletterModal,
  },
  methods: {
    setAutoModal: function () {
      if (this.$route.params)
        this.selectedTarget = this.$route.query.selectedTarget
    },
  },
}
</script>

<style>
.journal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0;
}

.journal-content {
  width: 80%;
  text-justify: inter-word;
}

.journal-content img {
  display: block;
  margin: 0 auto;
  object-fit: cover;
  width: 100%;
  height: 400px;
}

.content p {
  line-height: 1.8;
  font-size: 1.8rem;
  margin: 2rem 0rem;
}

h2 {
  font-family: Gilroy-Bold;
  font-size: 2.4rem;
  margin: 2rem 0rem;
}
h3 {
  font-family: Gilroy-Bold;
  font-size: 1.5rem;
}
h4,
h5,
h6 {
  font-family: Gilroy-Bold;
  font-size: 1.15rem;
}

@media only screen and (max-width: 1000px) {
  .journal-content {
    width: 95%;
    margin: auto;
    text-justify: inter-word;
  }

  img[alt='image'] {
    width: 100%;
    max-height: 50%;
  }
}
</style>

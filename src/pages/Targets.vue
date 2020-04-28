<template>
  <Layout>
    {{ setAutoModal() }}

    <PageHeader :page_name="page_name" :image="image" />
    <div class="header-text" style="">
      <h1 class="font-gilroy-bold font-36">
        {{ settings.targets_header_text }}
      </h1>
      <p class="font-avenir-light font-18">
        {{ settings.targets_page_description }}
      </p>
    </div>
    <div class="main-container">
      <TargetCard
        v-for="item in $page.targets.edges"
        :key="item.node.id"
        :target="item.node"
        :selectedTarget="selectedTarget"
      />
    </div>
    <NewsletterModal currPage="TARGETS" />
  </Layout>
</template>

<page-query>
query Target {
	targets: allTargets {
    edges {
      node {
        id
        target_name
        target_description
        background_color
        target_icon
        target_services {
          service_name
          service_description
        }
      }
    }
  }
}
</page-query>

<script>
import TargetCard from '@/components/TargetCard'
import PageHeader from '@/components/PageHeader'
import NewsletterModal from '@/components/NewsletterModal'

export default {
  metaInfo: {
    title: 'Targets | Intercon Regenerative Center',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Target groups that we offer to restore and regenerate for you!',
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Targets | Intercon Regenerative Center',
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
          'Check out the target groups that you wish to restore with the services we offer!',
      },
    ],
  },
  data() {
    return {
      settings: require('../../data/theme.json'),
      page_name: 'Targets',
      image: 'target-header.png',
      selectedTarget: '',
    }
  },
  components: {
    TargetCard,
    PageHeader,
    NewsletterModal,
  },
  methods: {
    setAutoModal: function () {
      if (this.$route.params)
        this.selectedTarget = this.$route.params.selectedTarget
    },
  },
}
</script>

<style scoped>
.heading {
  color: var(--blue-branding-dark);
  margin: 10px 0px;
}

.subheading {
  text-align: center;
}

.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: auto;
}

.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 50px 160px;
}

.header-text {
  display: block;
  text-align: center;
  width: 70%;
  padding-top: 50px;
  margin: 0 auto;
}

@media only screen and (max-width: 767px) {
  .main-container {
    column-count: 1;
    column-gap: 1em;
    margin: 0 auto;
    padding: 30px 0px 50px;
    width: 100%;
  }

  .header-text {
    display: block;
    text-align: left;
    width: 70%;
  }
}
</style>

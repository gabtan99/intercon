<template>
  <Layout>
    <NewsletterModal currPage="LANDING"/>
    <div class="container">
      <Hero />
      <!-- <ProjectsGrid :projects="$page.projects.edges" /> -->
    </div>
    <Waves/>
    <!-- <LatestJournals :journals="$page.journals.edges" /> -->
    <TargetSection :targets="$page.targets.edges" />
    <Instagram :images="$page.images.edges" />
    <Testimonies />
    
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
  journals: allJournalPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  },
  images: allInstagramPhoto {
    edges {
      node {
        shortcode,
        thumbnail_src
      }
    }
  },
  targets: allTargets {
    edges {
      node {
        id
        target_name
        target_description
        target_icon
      }
    }
  }
}

</page-query>

<script>
import Hero from "@/components/Hero";
import Waves from "@/components/Waves";
import ProjectsGrid from "@/components/ProjectsGrid";
import LatestJournals from "@/components/LatestJournals";
import Instagram from "@/components/Instagram";
import TargetSection from "@/components/TargetSection";
import Testimonies from "@/components/Testimonies";
import NewsletterModal from "@/components/NewsletterModal"

export default {
  metaInfo: {
    title: "Intercon Regenerative Center",
    meta: [{ name: "author", content: "John Doe" }],
  },
  components: {
    Hero,
    Waves,
    ProjectsGrid,
    LatestJournals,
    TargetSection,
    Instagram,
    Testimonies,
    NewsletterModal,
  },
};
</script>

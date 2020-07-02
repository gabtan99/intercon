<template>
  <Layout>
    <NewsletterModal currPage="LANDING" />
    <div class="container">
      <Hero />
      <!-- <ProjectsGrid :projects="$page.projects.edges" /> -->
    </div>
    <Waves />
    <!-- <LatestJournals :journals="$page.journals.edges" /> -->
    <AboutSection />
    <TargetSection :targets="$page.targets.edges" />
    <Testimonies :testimonies="$page.testimonies.edges" />
    <Instagram />
  </Layout>
</template>

<page-query>
query Posts {
  blog: allBlogPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
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
  },
  testimonies: allTestimonies {
    edges {
      node {
        name,
        message,
        image
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
import AboutSection from "@/components/AboutSection";
import TargetSection from "@/components/TargetSection";
import Testimonies from "@/components/Testimonies";
import NewsletterModal from "@/components/NewsletterModal";

export default {
  components: {
    Hero,
    Waves,
    ProjectsGrid,
    LatestJournals,
    AboutSection,
    TargetSection,
    Instagram,
    Testimonies,
    NewsletterModal,
  },
  metaInfo() {
    return {
      title: `Intercon Regenerative Center`,
      meta: [
        {
          key: "description",
          name: "description",
          content: `At Intercon Regenerative Center, we seek to enhance health and address issues by identifying  primary causes of illness and disease, through in-depth one-on-one consultations and specialized tests/ diagnostics. We aim to develop personalized treatment protocols to optimize health, prevent and halt progression of disease and repair damaged organs. `,
        },
        {
          key: "og:title",
          name: "og:title",
          content: `Intercon Regenerative Center`,
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

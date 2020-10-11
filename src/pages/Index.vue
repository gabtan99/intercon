<template>
  <Layout>
    <NewsletterModal currPage="LANDING" />

    <div class="container">
      <Hero :heroConfig="$page.heroConfig" :socials="$page.socials" />
      <!-- <ProjectsGrid :projects="$page.projects.edges" /> -->
    </div>
    <Waves />
    <!-- <LatestJournals :journals="$page.journals.edges" /> -->
    <AboutSection :aboutConfig="$page.aboutConfig" />
    <TargetSection
      :targets="$page.targets.edges"
      :targetConfig="$page.targetConfig"
    />
    <Testimonies
      :testimonies="$page.testimonies.edges"
      :testimoniesConfig="$page.testimoniesConfig"
    />
    <Instagram
      :instagramConfig="$page.instagramConfig"
      :instagramHandle="$page.socials.instagram_handle"
      :instagramLink="$page.socials.instagram_link"
    />
  </Layout>
</template>

<page-query>
query Posts {
  targetConfig: pages (path: "/data/home-page/"){
    target_section_title
  },
  instagramConfig: pages (path: "/data/home-page/"){
    instagram_section_title
  },
  testimoniesConfig: pages (path: "/data/home-page/"){
    testimony_section_title
  },
  aboutConfig: pages (path: "/data/home-page/"){
    about_section_title
    about_section_description
    about_bullet_1_title
    about_bullet_1_description
    about_bullet_2_title
    about_bullet_2_description
    about_bullet_1_icon
    about_bullet_2_icon
    about_main_image
  },
  heroConfig: pages (path: "/data/home-page/"){
    hero_title
    hero_subtitle
    youtube_handle
    youtube_link
  },
  socials: pages (path: "/data/socials") {
    youtube_channel_url
    instagram_handle
    instagram_url
    facebook_url
    email
  },
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

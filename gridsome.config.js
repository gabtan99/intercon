// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Intercon Regenerative Center",
  siteUrl: `https://www.interconregenerative.com`,
  host: "0.0.0.0",
  titleTemplate: "%s",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "targets/**/*.md",
        typeName: "Targets",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "services/**/*.md",
        typeName: "Services",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "testimonies/**/*.md",
        typeName: "Testimonies",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    {
      use: "@zefman/gridsome-source-instagram",
      options: {
        username: "interconregenerative", // Instagram username
        typeName: "InstagramPhoto", // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GA_TRACKING_ID || 'UA-164792439-1'
      }
    },
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};

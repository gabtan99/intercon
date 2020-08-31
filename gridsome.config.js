// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Intercon Regenerative Center',
  siteUrl: `https://www.interconregenerative.com`,
  host: '0.0.0.0',
  titleTemplate: '%s',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/blog/**/*.md',
        typeName: 'BlogPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/targets/**/*.md',
        typeName: 'Targets',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/services/**/*.md',
        typeName: 'Services',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/testimonies/**/*.md',
        typeName: 'Testimonies',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/*.md',
        typeName: 'Coaching',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        config: {
          '/*': {
            changefreq: 'weekly',
            priority: 0.5,
          },
        },
      },
    },
    // {
    //   use: "@zefman/gridsome-source-instagram",
    //   options: {
    //     username: "interconregenerative", // Instagram username
    //     typeName: "InstagramPhoto", // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
    //   },
    // },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GA_TRACKING_ID || 'UA-164792439-1',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/**/*.json',
        typeName: 'Pages',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
  ],
  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
}

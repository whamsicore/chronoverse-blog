// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Chronoverse",
  siteUrl: `https://www.chronoverse.io`,
  host: "0.0.0.0",
  titleTemplate: "%s - Sci-fi Universe",
  siteDescription: "A portal into a sci-fi universe",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
        use: 'gridsome-plugin-gtag',
        options: {
            config: {
                id: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
    },
    // {
    //   use: '@gridsome/plugin-google-analytics',
    //   options: {
    //     // id: 'UA-193823822-1' // Chrono3
    //     // id: 'G-BL5NWJQ786' // Chrono2
    //     // id: '2409188968'
    //     // id: 'G-P64N7PKXLL'
    //     // id: '267671387'
    //   }
    // }
  ], // ZZ: Don't know if this is being used or not. 
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};

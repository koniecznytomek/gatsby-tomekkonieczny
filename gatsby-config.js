module.exports = {
  siteMetadata: {
    title: `tomekkonieczny.com`,
    description: `Personal portfolio.`,
    author: `@tomekkonieczny`,
    siteUrl: `https://tomekkonieczny.com`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          styles: `src/styles`,
          types: `src/types`,
          work: `src/components/templates/Work`,
          hooks: `src/hooks`
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-172679136-1',
        head: true,
        pageTransitionDelay: 1,
        cookieDomain: 'tomekkonieczny.com',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icons: [
          {
            src: `/static/favicons/fav.png`,
            size: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: "Bishal Mishra, UX &amp; Product Designer",
    titleTemplate: "Bishal UX Designer",
    description:
      "Bishal is a UX and a Product Designer experienced in designing cross-platform applications and various user bases from small to large scale.",
    url: "https://bishal.cc", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@bishaller",
    author: `@bishaller`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 100,
          placeholder: `dominantColor`,
          backgroundColor: `transparent`,
        }
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bishal Mishra`,
        short_name: `Bishal`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2A60EC`,
        display: `minimal-ui`,
        icon: `src/images/bishal_mishra_favicon.png`, // This path is relative to the root of the site.
        cache_busting_mode: "none",
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
          precachePages: [
              `/`,
              `/about/`,
              `/writings/`,
          ],
      },
  },
  ],
};

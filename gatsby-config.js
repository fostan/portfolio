require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Fostan`,
    siteUrl: `https://www.fostan.xyz`,
    description: "Front-End Development & UX/UI Design",
    image: "/social.jpg",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        openGraph: {
          type: "website",
          locale: "en_IE",
          url: "https://www.fosan.xyz/",
          site_name: "Fostan.xyz",
          lang: "en",
        },
      },
    },
  ],
};

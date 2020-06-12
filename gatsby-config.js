module.exports = {
  siteMetadata: {
    title: "Gatsby Starter - Forty V2",
    author: "Hunter Chang",
    description: "A Gatsby.js V2 Starter based on Forty by HTML5 UP",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/images/website-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBnBXEphm4euZiuQvInTqhqXnQl-jAQZyM",
          authDomain: "ipptest-e7d85.firebaseapp.com",
          databaseURL: "https://ipptest-e7d85.firebaseio.com",
          projectId: "ipptest-e7d85",
          storageBucket: "ipptest-e7d85.appspot.com",
          messagingSenderId: "83690735029",
          appId: "1:83690735029:web:d198da05eb9d7fa9c8c5fc",
          measurementId: "G-6F27DJTK7R",
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};

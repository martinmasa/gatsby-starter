module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter'
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter',
        short_name: 'gatsby starter',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#258',
        display: 'minimal-ui',
        icon: 'src/images/m-icon.png' // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline'
  ]
};

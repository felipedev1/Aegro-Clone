const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Aegro - Software de Gestão Agrícola`,
    description: `Aegro é o software de gestão agrícola ideal para fazendas e consultorias. Caderno de campo, máquinas agrícolas, estoque, financeiro e relatórios em um único sistema.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aegro - Software de Gestão Agrícola`,
        short_name: `Aegro`,
        start_url: `/`,
        background_color: `#00C65E`,
        theme_color: `#FFF`,
        display: `minimal-ui`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
}

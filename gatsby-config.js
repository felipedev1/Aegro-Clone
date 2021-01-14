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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-apollo',
            options: {
                uri: 'http://127.0.0.1:5000/graphql'
            }
        },
        {
            resolve: 'gatsby-plugin-typescript',
            options: {
                isTSX: true,
                jsxPragma: 'jsx',
                allExtensions: true,
            }
        },
        'gatsby-plugin-sass',
    ]
}
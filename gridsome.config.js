module.exports = {
    siteName: require('./package.json').name,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('tailwindcss')(),
                    require('autoprefixer')(),
                ]
            }
        }
    }
}

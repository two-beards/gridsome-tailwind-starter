const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        content: [
            './src/**/*.vue',
        ]
    },
    theme: {
        // by default, just include all the tailwind colors.
        // we will likely customize these anyway but it helps to get started.
        colors: { ...colors }
    },
    corePlugins: {
        container: false
    },
    variants: {},
    plugins: [],
}

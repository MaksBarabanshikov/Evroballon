import news from "../data/news.json"

const isProd = process.argv.includes("--production")
const isDev = !isProd

const app = {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: isProd
    },

    webpack: {
        mode: isProd? "production" : "development"
    },

    imagemin: {
        verbose: true
    },

    fonter: {
        formats: ['ttf', 'woff', 'eot', 'svg']
    }
}

export default app
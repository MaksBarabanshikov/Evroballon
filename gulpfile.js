const {src, dest, watch, series, parallel} = require("gulp")
const browserSync = require("browser-sync").create()
const del = require("del")

//Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const fileInclude = require("gulp-file-include")
const htmlmin = require("gulp-htmlmin")
const size = require("gulp-size")


// обработка HTML
const html = () => {
    return src("./src/html/*.html")
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "html",
                message: error.message
            }))
        }))
        .pipe(fileInclude())
        .pipe(size({title : "До сжатия"}))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(size({title: "После сжатия"}))
        .pipe(dest("./dist"))
        .pipe(browserSync.stream())
}

// Удаление дериктории
const clear = () => {
    return del("./dist")
}

// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
}

// Наблюдение
const watcher = () => {
    watch("./src/html/**/*.html", html)
}


exports.html = html
exports.watch = watcher

//Сборка
exports.dev = series(
    clear,
    html,
    parallel(watcher, server)
)
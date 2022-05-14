// обработка HTML
import gulp from "gulp"

//плагины
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import fileInclude from "gulp-file-include"
import htmlmin from "gulp-htmlmin"
import size from "gulp-size"
import webpHtml from "gulp-webp-html"

// конфигурация
import path from '../config/path.js'
import app from '../config/app.js'

const html = () => {
    return gulp.src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "html",
                message: error.message
            }))
        }))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(size({title : "До сжатия"}))
        // .pipe(htmlmin(app.htmlmin))
        .pipe(size({title: "После сжатия"}))
        .pipe(gulp.dest(path.html.dest))
}

export default html
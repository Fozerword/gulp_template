
import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import pug from "gulp-pug";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Hi! Error: <%= error.message %>"
            }))
        )
        //.pipe(fileInclude()) use pug
        .pipe(pug({
            //compression HTML file
            pretty: true,
            //notify about file compres
            verbose: true
        }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(webpHtmlNosvg())
        .pipe(
            versionNumber({
                'value': '%DT%',
                'append':{
                    'key': '_v',
                    'cover': 0,
                    'to':[
                        'css',
                        'js',
                    ]
                },
                'output':{
                    'file': 'gulp/version.json' // version.json file create
                }
            })
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}

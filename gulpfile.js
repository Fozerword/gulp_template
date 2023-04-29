//general modul
import gulp from "gulp";
//import path
import { path } from "./gulp/config/path.js";

//import plugins

import { plugins } from "./gulp/config/plugins.js";


global.app ={
    path: path,
    gulp: gulp,
    plugins: plugins
}

//import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { images } from "./gulp/tasks/images.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";


//wacher my files 
function watcher(){
    gulp.watch(app.path.watch.files , copy);
    gulp.watch(app.path.watch.html , html);
    gulp.watch(app.path.watch.scss , scss);
    gulp.watch(app.path.watch.js , js);
    gulp.watch(app.path.watch.images , images);
}

const mainTasks = gulp.parallel(copy, html, images, scss, js);
//buid scenario tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

//default execution scenario
gulp.task('default', dev);

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
import { img } from "./gulp/tasks/img.js";


//wacher my files 
function watcher(){
    gulp.watch(app.path.watch.files , copy);
    gulp.watch(app.path.watch.html , html);
}

const mainTasks = gulp.parallel(copy, html, img);
//buid scenario tasks
const dev = gulp.series(reset, mainTasks, watcher);

//default execution scenario
gulp.task('default', dev);

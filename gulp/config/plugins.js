import replace from "gulp-replace"; // search and replace
import plumber from "gulp-plumber"; // processing mistake
import notify from "gulp-notify"; // message (hints)
import browsersync from "browser-sync"; // local server
//Export object

export const plugins =  {                  // <----------- this object
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync
}
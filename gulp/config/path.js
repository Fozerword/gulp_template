import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()); //name rootFolder

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        css: `${buildFolder}/css/`,
        html:  `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        img: `${buildFolder}/img/`
    },  //folder results
    src: {
        scss: `${srcFolder}/scss/style.scss`,
        html:  `${srcFolder}/*.pug`,
        files: `${srcFolder}/files**/*.*`,
        img: `${srcFolder}/img/*.*`
    },
    watch: {
        scss: `${srcFolder}/scss/**/*.scss`,
        html:  `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files**/*.*`,
        img: `${srcFolder}/img/*.*`
    }, //check progect
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}
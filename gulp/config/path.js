import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()); //name rootFolder

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html:  `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        images: `${buildFolder}/img/`
    },  //folder results
    src: {
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html:  `${srcFolder}/*.pug`,
        files: `${srcFolder}/files**/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html:  `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files**/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`
    }, //check progect
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}
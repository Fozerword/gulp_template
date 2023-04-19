import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()); //name rootFolder

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        html:  `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        img: `${buildFolder}/img/`
    },  //folder results
    src: {
        html:  `${srcFolder}/*.pug`,
        files: `${srcFolder}/files**/*.*`,
        img: `${srcFolder}/img/*.*`
    },
    watch: {
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
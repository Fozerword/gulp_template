export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}` //* only html
        },
        notify: false,
        port: 2828,
    });
}
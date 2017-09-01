/**
 * Created by xiaobxia on 2017/8/4.
 */
const gulp = require('gulp');
const browserSync = require('browser-sync');
const middleware = require('./config/middleware');
const config = require('./config/gulpfile.common');
const tasks = require('./gulpTasks/index');

const distPath = config.paths.dirs.build;
const paths = config.paths;

let transferHtml = tasks.transferFile(gulp, {
  taskName: 'transferHtml',
  srcPath: paths.html,
  distPath: distPath
});

let transferImages = tasks.transferFile(gulp, {
  taskName: 'transferImages',
  srcPath: paths.images,
  distPath: distPath
});

let buildScss = tasks.scss(gulp, {
  taskName: 'buildScss',
  srcPath: paths.scss,
  distPath: distPath
});

let es6 = tasks.es6(gulp, {
  taskName: 'es6',
  srcPath: paths.js,
  distPath: distPath
});

let pug = tasks.pug(gulp, {
  taskName: 'pug',
  srcPath: paths.pug,
  distPath: distPath
});

let cleanDist = tasks.cleanDist(gulp, {
  taskName: 'cleanDist',
  path: distPath
});


gulp.task('server', function (cb) {
  browserSync({
    server: {
      baseDir: distPath,
      middleware: middleware.get()
    },
    port: config.server.port,
    notify: false,
    ghostMode: false,
    open: true
  }, cb);
});

gulp.task('build', gulp.series(cleanDist, gulp.parallel(transferHtml, buildScss, es6, transferImages, pug)));

gulp.task('watch', function () {
  function serverReload(cb) {
    browserSync.reload();
    cb();
  }
  //watch的时候不clean
  gulp.watch(paths.pug, gulp.series(pug, serverReload));
  gulp.watch(paths.html, gulp.series(transferHtml, serverReload));
  gulp.watch(paths.scss, gulp.series(buildScss, serverReload));
  gulp.watch(paths.js, gulp.series(es6, serverReload));
});

gulp.task('default', gulp.series('build', 'server', 'watch'));

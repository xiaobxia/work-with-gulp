/**
 * Created by xiaobxia on 2017/8/4.
 */
const gulp = require('gulp');
const config = require('./config/gulpfile.common');
const tasks = require('./gulpTasks/index');

const distPath = config.paths.dirs.build;
const paths = config.paths;

let htmlMin = tasks.htmlMin(gulp, {
  taskName: 'htmlMin',
  srcPath: paths.html,
  distPath: distPath
});

let imageMin = tasks.imageMin(gulp, {
  taskName: 'imageMin',
  srcPath: paths.images,
  distPath: distPath
});

let buildScss = tasks.scssMin(gulp, {
  taskName: 'buildScss',
  srcPath: paths.scss,
  distPath: distPath
});

let es6Min = tasks.es6Min(gulp, {
  taskName: 'es6Min',
  srcPath: paths.js,
  distPath: distPath
});


let cleanDist = tasks.cleanDist(gulp, {
  taskName: 'cleanDist',
  path: distPath
});

gulp.task('build', gulp.series(cleanDist, gulp.parallel(htmlMin, buildScss, es6Min, imageMin)));

gulp.task('default', gulp.series('build'));

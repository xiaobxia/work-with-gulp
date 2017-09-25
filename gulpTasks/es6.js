/**
 * Created by xiaobxia on 2017/8/4.
 */
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

/**
 * @param option
 *
 * taskName
 * srcPath
 * distPath
 *
 * @returns {string|string}
 */
module.exports = function (gulp, option) {
  gulp.task(option.taskName, function () {
    return gulp.src(option.srcPath)
      .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(option.distPath));
  });
  return option.taskName;
};


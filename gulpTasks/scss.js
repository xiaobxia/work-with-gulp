/**
 * Created by xiaobxia on 2017/8/4.
 */
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

/**
 * @param option
 *
 * taskName
 * srcPath
 * distPath
 */
module.exports = function (gulp, option) {
  gulp.task(option.taskName, function () {
    return gulp.src(option.srcPath)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(option.distPath));
  });
  return option.taskName;
};


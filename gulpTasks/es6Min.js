/**
 * Created by xiaobxia on 2017/8/4.
 */
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

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
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(option.distPath));
  });
  return option.taskName;
};

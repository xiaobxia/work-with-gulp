/**
 * Created by xiaobxia on 2017/8/4.
 */
const uglify = require("gulp-uglify");
/**
 * @param gulp
 * @param option
 *
 * taskName
 * srcPath
 * distPath
 *
 * @returns {string|string|string}
 */
module.exports = function (gulp, option) {
  gulp.task(option.taskName, function () {
    return gulp.src(option.srcPath)
      .pipe(uglify())
      .pipe(gulp.dest(option.distPath));
  });
  return option.taskName;
};


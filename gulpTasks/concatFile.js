/**
 * Created by xiaobxia on 2017/8/4.
 */
const concat = require("gulp-concat");

/**
 * @param option
 *
 * taskName
 * srcPath
 * distFileName
 * distPath
 *
 * @returns {*}
 */
module.exports = function (gulp, option) {
  gulp.task(option.taskName, function () {
    return gulp.src(option.srcPath)
      .pipe(concat(option.distFileName)).pipe(gulp.dest(option.distPath));
  });
  return option.taskName;
};


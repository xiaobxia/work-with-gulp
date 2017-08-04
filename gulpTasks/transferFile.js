/**
 * Created by xiaobxia on 2017/8/4.
 */
/**
 * @param option
 *
 * taskName
 * srcPath
 * distPath
 *
 * @returns {*}
 */
module.exports = function (gulp, option) {
  gulp.task(option.taskName, function () {
    return gulp.src(option.srcPath)
      .pipe(gulp.dest(option.distPath));
  });
  return option.taskName;
};

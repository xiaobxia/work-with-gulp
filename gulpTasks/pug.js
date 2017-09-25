/**
 * Created by xiaobxia on 2017/9/1.
 */
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
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
  gulp.task(option.taskName, function buildHTML() {
    return gulp.src(option.srcPath)
      .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(pug({
        // locals: {
        //   AA: 'aa',
        //   BB: 'bb'
        // },
        // doctype: 'html'
      })).pipe(gulp.dest(option.distPath));
  });
  return option.taskName;
};

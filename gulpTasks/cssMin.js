/**
 * Created by xiaobxia on 2017/8/4.
 */
/**
 * Created by xiaobxia on 2017/8/4.
 */
const cleanCSS = require('gulp-clean-css');
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
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(option.distPath));
  });
};


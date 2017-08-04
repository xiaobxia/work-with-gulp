/**
 * Created by xiaobxia on 2017/8/4.
 */
const imagemin = require('gulp-imagemin');

/**
 * @param gulp
 * @param option
 *
 * taskName
 * srcPath
 * distPath
 */
module.exports = function (gulp, option) {
  gulp.task(option.taskName, function () {
    return gulp.src(option.srcPath)
      .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({plugins: [{removeViewBox: true}]})
      ]))
      .pipe(gulp.dest(option.distPath))
  });
  return option.taskName;
};


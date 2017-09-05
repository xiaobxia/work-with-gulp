/**
 * Created by xiaobxia on 2017/8/4.
 */
const sass = require('gulp-sass');
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
      .pipe(sass())
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(option.distPath));
    //局部更新，不会导致页面重刷（重刷意味着产生ajax请求，也意味着页面的状态变了）
    //.pipe(browserSync.reload({stream:true}));
  });
  return option.taskName;
};

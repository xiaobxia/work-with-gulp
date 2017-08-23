/**
 * Created by xiaobxia on 2017/8/23.
 */
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
/**
 * 使用时暴露给浏览器的使用module.exports
 * 内部使用import和export
 *
 * @param gulp
 * @param option
 *
 * taskName
 * className
 * srcPath
 * fileName
 * distPath
 *
 * @returns {string|string|string|string|string|string|*}
 */
module.exports = function (gulp, option) {
  gulp.task(option.taskName, function () {
    return browserify({
      //编写插件时暴露的变量
      standalone: option.className
    })
      .transform(babelify)
      .require(option.srcPath, {entry: true})
      .bundle()
      .pipe(source(option.fileName))
      .pipe(buffer())
      .pipe(gulp.dest(option.distPath));
  });
  return option.taskName;
};

/**
 * Created by xiaobxia on 2017/8/4.
 */
const htmlmin = require('gulp-htmlmin');
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
    let options = {
      removeComments: true,//清除HTML注释
      collapseWhitespace: true,//压缩HTML
      collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
      removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
      minifyJS: true,//压缩页面JS
      minifyCSS: true//压缩页面CSS
    };
    return gulp.src(option.srcPath)
      .pipe(htmlmin(options))
      .pipe(gulp.dest(option.distPath));
  });
  return option.taskName;
};


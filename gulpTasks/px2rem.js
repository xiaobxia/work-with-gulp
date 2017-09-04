/**
 * Created by xiaobxia on 2017/9/4.
 */
const gulp = require('gulp');
const px2rem = require('gulp-px3rem');

// .selector {
//   width: 150px; (编译出来是rem)
//   height: 64px; /*px*/  (使用device pixel ratio，编译出来是px)
//   font-size: 28px; /*px*/ (使用device pixel ratio，编译出来是px)
//   border: 1px solid #ddd; /*no*/ (不编译)
// }
gulp.task('px2rem', function() {
  gulp.src('./*.css')
    .pipe(px2rem({
      baseDpr: 2,             // base device pixel ratio (default: 2)
      //拆分出3个版本的css,基于device pixel ratio
      threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
      remVersion: true,       // whether to generate rem version (default: true)
      //基准
      remUnit: 75,            // rem unit value (default: 75)
      //6位小数点
      remPrecision: 6         // rem precision (default: 6)
    }))
    .pipe(gulp.dest('./dest'))
});

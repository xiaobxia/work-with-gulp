/**
 * Created by xiaobxia on 2017/9/5.
 */
const gulp = require('gulp');
const debug = require('gulp-debug');

gulp.task('default', () =>
  gulp.src('foo.js')
    //打印会通过流的文件
    .pipe(debug({title: 'unicorn:'}))
    .pipe(gulp.dest('dist'))
);

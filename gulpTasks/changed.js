/**
 * Created by xiaobxia on 2017/9/5.
 */
const gulp = require('gulp');
const changed = require('gulp-changed');

const SRC = 'src/*.js';
const DEST = 'dist';
/**
 * 只会编译改变过了的
 * 但是只适合没有依赖的
 *
 * 如果是依赖改变（如var），就需要全部编译，所以需要写两个任务，监听两个路径
 */
gulp.task('default', () =>
  gulp.src(SRC)
    .pipe(changed(DEST))
    //.pipe(dosomething())
    .pipe(gulp.dest(DEST))
);

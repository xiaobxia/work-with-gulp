/**
 * Created by xiaobxia on 2017/9/6.
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const rev = require('gulp-rev');
const revCollector = require('gulp-rev-collector');

//原理就是正则匹配，然后替换路径

gulp.task('css', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(rev())
    .pipe(gulp.dest('dist/css'))
    .pipe(rev.manifest())
    //json
    .pipe(gulp.dest('rev/css'));
});

gulp.task('scripts', function () {
  return gulp.src('src/js/*.js')
    .pipe(rev())
    .pipe(gulp.dest('dist/js'))
    .pipe(rev.manifest())
    //json
    .pipe(gulp.dest('rev/js'));
});


gulp.task('rev', function () {
  //json文件和接收注入的html文件
  return gulp.src(['rev/**/*.json', 'src/*.html'])
    .pipe(revCollector({
      replaceReved: true,
      dirReplacements: {
        //替换
        '/css/': '/dist/css',
        '/js/': '/dist/js/'
      }
    }))
    .pipe(gulp.dest('dist'));
});

/**
 * Created by xiaobxia on 2017/9/4.
 */
const gulp =require('gulp');
const header = require('gulp-header');

let pkg = require('./package.json');
let banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('px2rem', function() {
  gulp.src('./foo/*.js')
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('./dist/'))
});

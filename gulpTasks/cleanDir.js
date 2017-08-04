/**
 * Created by xiaobxia on 2017/8/4.
 */
const del = require('del');
/**
 * @param option
 *
 * taskName
 * path
 *
 * @returns {*}
 */
module.exports = function (gulp, option) {
  gulp.task(option.taskName, function () {
    return del(option.path);
  });
  return option.taskName
};

/**
 * Created by xiaobxia on 2017/8/4.
 */
let cleanDist = require('./cleanDir');
let transferFile = require('./transferFile');
let concatFile = require('./concatFile');
let htmlMin = require('./htmlMin');
let jsMin = require('./jsMin');
let cssMin = require('./cssMin');
let scss = require('./scss');
let scssMin = require('./scssMin');
let es6 = require('./es6');
let es6Min = require('./es6Min');
let imageMin = require('./imageMin');
let pug = require('./pug');

module.exports = {
  cleanDist,
  transferFile,
  concatFile,
  htmlMin,
  jsMin,
  cssMin,
  scss,
  scssMin,
  es6,
  es6Min,
  imageMin,
  pug
};

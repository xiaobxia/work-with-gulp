/**
 * Created by xiaobxia on 2017/8/4.
 */
const url = require('url');
const proxy = require('proxy-middleware');
const proxyConfig = require('./gulpfile.common').server.proxy;

function baseMiddleWare(req, res, next) {
  console.log(req.url);
  next();
}

const MiddleWare = {
  get(){
    let list = [baseMiddleWare];
    if (proxyConfig.length!==0) {
      for (let i = 0; i < proxyConfig.length; i++) {
        const item = proxyConfig[i];
        let proxyOptions = url.parse(item.target);
        proxyOptions.route = item.path;
        list.push(proxy(proxyOptions));
      }
    }
    return list;
  }
};

module.exports = MiddleWare;

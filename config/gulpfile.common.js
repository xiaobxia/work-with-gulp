/**
 * Created by xiaobxia on 2017/8/4.
 */
const config = {
  paths: {
    dirs: {
      build: 'dist'
    },
    //  * 能匹配 a.js,x.y,abc,abc/,但不能匹配a/b.js
    //  *.* 能匹配 a.js,style.css,a.b,x.y
    //  */*/*.js 能匹配 a/b/c.js,x/y/z.js,不能匹配a/b.js,a/b/c/d.js
    //  ** 能匹配 abc,a/b.js,a/b/c.js,x/y/z,x/y/z/a.b,能用来匹配所有的目录和文件
    //  **/*.js 能匹配 foo.js,a/foo.js,a/b/foo.js,a/b/c/foo.js
    //  a/**/z 能匹配 a/z,a/b/z,a/b/c/z,a/d/g/h/j/k/z
    //  a/**b/z 能匹配 a/b/z,a/sb/z,但不能匹配a/x/sb/z,因为只有单**单独出现才能匹配多级目录
    //  ?.js 能匹配 a.js,b.js,c.js
    //  a?? 能匹配 a.b,abc,但不能匹配ab/,因为它不会匹配路径分隔符
    //  [xyz].js 只能匹配 x.js,y.js,z.js,不会匹配xy.js,xyz.js等,整个中括号只代表一个字符
    //  [^xyz].js 能匹配 a.js,b.js,c.js等,不能匹配x.js,y.js,z.js

    //定死路径可以优化速度
    html: './src/**/*.html',
    images: './src/**/*.{JPG,jpg,png,gif,ico}',
    scss: './src/**/*.scss',
    css: './src/**/*.css',
    js: './src/**/*.js',
    pug: './src/*/*.pug',
    fonts: './src/**/*.{eot,svg,ttf,woff,woff2}'
  },
  autoprefixBrowser: ['chrome >20', 'safari > 10'],
  //proxy例子: {"path": "/api","target": "http://121.40.18.21/api"}
  server: {
    proxy: [],
    port: 4000
  }

};

module.exports = config;

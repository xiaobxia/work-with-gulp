/**
 * Created by xiaobxia on 2017/8/4.
 */
const config = {
  paths: {
    dirs: {
      build: 'dist'
    },
    html: './src/**/*.html',
    images: './src/**/*.{JPG,jpg,png,gif,ico}',
    scss: './src/**/*.scss',
    css: './src/**/*.css',
    js: './src/**/*.js',
    fonts: './src/**/*.{eot,svg,ttf,woff,woff2}'
  },
  autoprefixBrowser: ['chrome >20', 'safari > 10'],
  //{"path": "/api","target": "http://121.40.18.21/api"}
  server: {
    proxy: [],
    port: 4000
  }

};

module.exports = config;

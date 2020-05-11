/*
 * @Description: webpack 配置文件
 * @Author: Edmund
 * @Email: q1592193221@gmail.com
 * @Date: 2019-10-21 13:50:21
 * @LastEditTime: 2019-11-26 21:18:31
 * @LastEditors: Edmund
 */



const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('/')) // 当引用路径中包含@这个符号时,表示从根目录访问
      .set('components', resolve('components'))
      .set('pages', resolve('pages'))
      .set('api', resolve('api'))
      .set('platform', resolve('platform'))
      .set('static', resolve('/static'))
    // .set('common',resolve('common'))
  }
}

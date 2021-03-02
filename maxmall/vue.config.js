/*
 * @Descripttion:
 * @version: X3版本
 * @Author:
 * @Date: 2021-03-02 10:18:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-02 10:23:17
 */
// 开发环境下的接口代理  访问/a代理到/b，则实际访问的/b
// webpack的配置表传送给nodejs服务器
// nodejs遵循commonjs规范抛出就不用import了
module.exports = {
  // 自动加载devServer中的配置表
  devServer: {
    host: "localhost",
    port: "8080",
    // 代理
    proxy: {
      // 访问/pay时实现拦截转发到target中
      "/api": {
        // 目标网址,内部访问到慕课网的接口
        target: "https://order.imooc.com",
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  }
};

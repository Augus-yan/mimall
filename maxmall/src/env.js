/*
 * @Descripttion:
 * @version: X3版本
 * @Author:
 * @Date: 2021-03-02 15:17:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-02 15:36:23
 */
let baseUrl
// 根据不同的环境输出不同的url地址
// 在package.json中增加 --mode=XXX参数（环境变量传给参数）
// process.env取到当前nodejs服务器下的环境变量
switch (process.env.NODE_ENV) {
  // 开发development，测试test，生产production
  case 'development':
    baseUrl =
      '  https://dev-www.easy-mock.com/mock/5e664553f4760626a3a312e0/example/api'
    break

  case 'test':
    baseUrl =
      'https://test-www.easy-mock.com/mock/5e664553f4760626a3a312e0/example/api'
    break

  case 'production':
    baseUrl =
      'pro-https://www.easy-mock.com/mock/5e664553f4760626a3a312e0/example/api'
    break

  // 自定义环境变量prev一定要在加一个文件.env.prev，并且在里面配置
  case 'prev':
    baseUrl =
      'https://pre-www.easy-mock.com/mock/5e664553f4760626a3a312e0/example/api'
    break

  default:
    baseUrl =
      'https://dev-www.easy-mock.com/mock/5e664553f4760626a3a312e0/example/api'
    break
}

export default {
  baseUrl
}

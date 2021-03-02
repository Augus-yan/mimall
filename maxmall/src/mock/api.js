/*
 * @Descripttion:
 * @version: X3版本
 * @Author:
 * @Date: 2021-03-02 17:32:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-02 17:53:27
 */
import Mock from 'mockjs'

Mock.mock('/api/user/login', {
  /* eslint-disable */
  "status": 0,
  "data": {
    "id|10-10000": 0,
    "username": "DDDZ",
    "usernamE": "@name",
    "usernameC": "@cname",
    "phone": 6386
  },
  "msg": "DDDZ的接口测试json"
})

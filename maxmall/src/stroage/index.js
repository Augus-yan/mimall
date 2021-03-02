/*
 * @Descripttion:
 * @version: X3版本
 * @Author:
 * @Date: 2021-03-02 11:59:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-02 13:56:56
 */
//storage/index.js
//Storage封装 如：value为{"user":{"username":"jack","age":30,"sex":1}}

const STORAGE_KEY = 'mall'

export default {
  //module_name是某个模块如user
  //存储值
  //storage/index.js (第二种情况返回的值：'data','this.getStorage()['data']')
  setItem(key, value, module_name) {
    //获取某个模块下面的属性user下面的username
    if (module_name) {
      //拿到data下面的所有值引入getItem  this.getStorage()['data']
      let val = this.getItem(module_name)
      //this.getStorage()['data']['username']='DDDZ'
      //val[key]相当于JSON.parse(window.sessionStorage.getItem('mail'))['id'] //打印001
      val[key] = value
      //module_name成为key，val为value执行第一种情况 ('data','this.getStorage()['data']')
      this.setItem(module_name)
    } else {
      //此时的val为sessionStorage的JSON格式
      let val = this.getStorage()
      //往大的模块中覆盖旧的值 this.getStorage()['data']=this.getStorage()['data']
      val[key] = value
      //存完之后转换为字符串写入Storage信息中覆盖原来的Storage_key
      window.sessionStorage.setItem(Storage_Key, JSON.stringify(val))
    }
  },
  // 获取
  getItem(key, module_name) {
    if (module_name) {
      //递归获取 module_name变成key this.getItem('data');到第一种情况返回this.getStorage()['data'] 为val
      let val = this.getItem(module_name)
      //return this.getStorage()['data']['username']
      if (val) return val[key]
    }
    //获取的user相当于(JSON.parse(window.sessionStorage.getItem("mall") || '{}'))["user"]
    return this.getStorage()[key]
  },
  //获取整个缓存信息
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(storage_key) || '{}')
  },
  // 清除
  clear(key, module_name) {
    //获取
    let val = this.getStorage()
    if (module_name) {
      //this.getStorage()['data'] 判断如果没有值，返回
      if (!val[module_name]) return
      //this.getStorage()['data']['username'] 删除
      delete val[module_name][key]
    } else {
      //删除 this.getStorage()['id']
      delete val[key]
    }
    //更新
    window.sessionStorage.setItem(Storage_Key, JSON.stringify(val))
  }
}

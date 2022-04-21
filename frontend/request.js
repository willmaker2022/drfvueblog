
import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import qs from 'qs'// 引入qs模块，用来序列化post类型的数据
import merge from 'lodash/merge' //可以用来合并对象,遇到相同属性名的时候，如果属性值是纯对象或集合的时候，会合并属性值
import { loginOut } from '@/utils'

const req = axios.create({
  timeout: 1000 * 30,// 默认请求超时时间
  withCredentials: true
})
/**
 *  动态设置请求头
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
req.addReq = (contentType = 'json') =>{
  return contentType === 'json' ?{'Content-Type': 'application/json; charset=utf-8'} : {'Content-Type':'application/x-www-form-urlencoded'}
}
/**
 * 请求拦截
 */
req.interceptors.request.use(config => {
  config.headers['token'] = Vue.cookie.get('token') // 请求头带上token
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
req.interceptors.response.use(response => {
  if (response.data && response.data.code === 401) { // 401, token失效
    loginOut()
    router.push({ name: 'login' })
  }
  return response
}, error => {
  return Promise.reject(error)
})

/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
req.adornUrl = (actionName) => {
 return (process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/proxyApi/' : window.SITE_CONFIG.baseUrl) + actionName
}

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
req.adornParams = (params = {}, openDefultParams = true) => {
  var defaults = {
    't': new Date().getTime()
  }
  return openDefultParams ? merge(defaults, params) : params
}

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
req.adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
  var defaults = {
    't': new Date().getTime()
  }
  data = openDefultdata ? merge(defaults, data) : data
  return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}

export default req
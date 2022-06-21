/*
 * @Author: wanghao 1570058176@qq.com
 * @Date: 2022-06-21 22:03:17
 * @LastEditors: wanghao 1570058176@qq.com
 * @LastEditTime: 2022-06-21 23:54:56
 * @FilePath: \web\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";
// cookies
import { getToken, getUsername } from "./cookies";
// import { getTokenCars } from "./cookiesCars";
// ElementUI 单独引入
import { Message } from 'element-ui';
// sha1
import sha1 from "js-sha1";
// 创建实例
const service = axios.create({
  baseURL: "",    // 请求地址  /apiLogin/getCode/
  timeout: 5000,  // 超时
});

// 拦截器
// 添加请求拦截器
service.interceptors.request.use(function (config) {
  console.log('request',config)
  // 在发送请求之前做些什么
  config.headers['Token'] = getToken();  // 携带token
  // config.headers['Tokencars'] = getTokenCars();  // 携带会员的token
  config.headers['Username'] = getUsername();  // 携带token
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  console.log('response')
  const data = response.data;
  // 不为0，即接口异常时
  if (data.resCode !== 0) {
    Message.error(data.message);
    return Promise.reject(data);
  } else {
    return data; // return Promise.resolve(data);
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
// 暴露service
export default service;
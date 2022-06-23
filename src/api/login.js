/*
 * @Description: 
 * @Author: wh
 * @Date: 2022-06-22 09:15:11
 * @LastEditors: 
 * @LastEditTime: 2022-06-22 11:15:03
 */
import service from "@/utils/request.js";
/**
 * 获取验证码
 */
export function GetCode (data) {
  return service.request({
    method: "post",
    url: `${process.env.VUE_APP_API_LOGIN}/getCode/`, // 由于开发环境下需要拼接process.env.VUE_APP_API_LOGIN前缀，故需要写上该配置
    data
  })
}

/**
 * 登录
 */
export function Login (data) {
  return service.request({
    method: "post",
    url: `${process.env.VUE_APP_API_LOGIN}/login/`,
    data
  })
}
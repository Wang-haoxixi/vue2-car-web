/*
 * @Author: wanghao 1570058176@qq.com
 * @Date: 2022-06-21 21:59:50
 * @LastEditors: wanghao 1570058176@qq.com
 * @LastEditTime: 2022-06-21 23:55:03
 * @FilePath: \web\src\api\login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import service from "@/utils/request.js";
/**
 * 获取验证码
 */
export function GetCode(data) {
  return service.request({
    method: "post",
    url: `${process.env.VUE_APP_API_LOGIN}/getCode/`, // 由于开发环境下需要拼接process.env.VUE_APP_API_LOGIN前缀，故需要写上该配置
    data
  })
}

/**
 * 登录
 */
export function Login(data) {
  return service.request({
    method: "post",
    url: `${process.env.VUE_APP_API_LOGIN}/login/`,
    data
  })
}
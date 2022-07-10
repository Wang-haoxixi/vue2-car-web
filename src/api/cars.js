/*
 * @Description: 
 * @Author: wanghao
 * @Date: 2022-07-10 21:17:43
 * @LastEditors: 
 * @LastEditTime: 2022-07-10 21:18:29
 */
import service from "@/utils/request.js";
/**
 * 获取车辆列表
 */
export function GetCarsList (data) {
  return service.request({
    method: "post",
    url: `${process.env.VUE_APP_API_WEB}/cars/`, // 由于开发环境下需要拼接process.env.VUE_APP_API_WEB前缀，故需要写上该配置
    data
  })
}
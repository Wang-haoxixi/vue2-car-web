/*
 * @Description: 
 * @Author: wanghao
 * @Date: 2022-06-26 17:11:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-26 20:24:03
 */
import service from "@/utils/request.js";
/**
 * 获取停车场
 */
export function Parking (data) {
  return service.request({
    method: "post",
    url: `${process.env.VUE_APP_API_WEB}/parking/`, // 由于开发环境下需要拼接process.env.VUE_APP_API_WEB前缀，故需要写上该配置
    data
  })
}
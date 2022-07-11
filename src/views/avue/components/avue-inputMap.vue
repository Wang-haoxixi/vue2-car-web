<!--
 * @Description: inputMap地图选择器(返回经纬度和详细地址) avue-input-map组件中已内置定位功能，无需多余操作，直接使用组件
 * @Author: wh
 * @Date: 2022-07-11 09:43:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-11 10:10:06
-->
<template>
  <el-row :span="24">
    <el-col :span="6">
      值:{{form}}<br />
      <avue-input-map :params="params" placeholder="请选择地址" v-model="form"></avue-input-map>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        //高德初始化参数
        params: {
          zoom: 10,
          // zoomEnable: false, // 禁止地图缩放层级
          // dragEnable: false, // 禁止地图拖拽
        },
        // 通过经纬度进行地图定位,选择地址后也会返回经纬度信息
        form: [113.10235504165291, 41.03624227495205, "内蒙古自治区乌兰察布市集宁区新体路街道顺达源广告传媒"],
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
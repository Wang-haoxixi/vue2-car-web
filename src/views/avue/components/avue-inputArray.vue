<!--
 * @Description: array 数组输入框
 * @Author: wh
 * @Date: 2022-07-11 10:51:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-11 11:02:29
-->
<template>
  <el-row>
    <el-col :span="6">
      值:{{form}}<br />
      <avue-array v-model="form" placeholder="请输入内容" type="img"></avue-array>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        // 数据绑定
        // form: ['第一条', '第二条', '第三条', '第四条'],
        form: ["https://img01.yzcdn.cn/vant/apple-3.jpg"],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
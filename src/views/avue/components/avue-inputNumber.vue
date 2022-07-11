<!--
 * @Description: inputNumber数字框
 * @Author: wh
 * @Date: 2022-07-09 17:53:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 17:56:49
-->
<template>
  <el-row :span="24">
    <el-col :span="6">
      值:{{form}}<br />
      <avue-input-number v-model="form"></avue-input-number>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      值:{{form}}<br />
      <avue-input-number v-model="form" :precision="2" controls-position=""></avue-input-number>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      有最小最大值的数据:{{hasMinMaxForm}}<br />
      <avue-input-number v-model="hasMinMaxForm" :precision="2" controls-position="" :min="min" :max="max"></avue-input-number>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        form: 1,
        hasMinMaxForm: 1,
        min: 0, // 最小值
        max: 10 // 最大值
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
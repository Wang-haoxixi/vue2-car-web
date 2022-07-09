<!--
 * @Description: input输入框
 * @Author: wh
 * @Date: 2022-07-09 16:02:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 16:15:24
-->
<template>
  <el-row>
    <el-col :span="6">
      值:{{form}}<br />
      <avue-input v-model="form" placeholder="请输入内容"></avue-input>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        form: '我是内容'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
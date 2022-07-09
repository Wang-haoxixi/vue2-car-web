<!--
 * @Description: downFile文件下载
 * @Author: wh
 * @Date: 2022-07-09 15:39:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 15:43:54
-->
<template>
  <div>
    <el-button type="danger" @click="handleDownFile">文件下载</el-button>
  </div>
</template>

<script>
  // 远程文件路径
  var url = "https://avuejs.com/images/logo-bg.jpg";
  export default {
    methods: {
      handleDownFile () {
        this.downFile(url, 'logoName.jpg');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
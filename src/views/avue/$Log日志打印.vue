<!--
 * @Description: $Log日志打印
 * @Author: wh
 * @Date: 2022-07-09 15:28:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 15:30:09
-->
<template>
  <div>
    $Log日志打印
  </div>
</template>

<script>
  export default {
    created () {
      this.$Log.capsule('标题', '内容', 'primary')
      this.$Log.danger('内容')
    }
  }
</script>

<style lang="scss" scoped>

</style>
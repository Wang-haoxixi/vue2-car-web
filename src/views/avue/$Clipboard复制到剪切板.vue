<!--
 * @Description: $Clipboard复制到剪切板
 * @Author: wh
 * @Date: 2022-07-09 14:02:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 14:08:04
-->
<template>
  <div>
    <h1>{{ text }}</h1>
    <el-button type="danger" @click="handleClipboard">拷贝</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        text: '快来拷贝我~'
      }
    },
    methods: {
      handleClipboard () {
        this.$Clipboard({
          text: this.text,
        }).then(() => {
          this.$message.success('复制成功')
        }).catch(() => {
          this.$message.error('复制失败')
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
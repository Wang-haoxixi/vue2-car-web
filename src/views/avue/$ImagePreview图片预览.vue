<!--
 * @Description: $ImagePreview图片预览
 * @Author: wh
 * @Date: 2022-07-09 14:09:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 14:20:09
-->
<template>
  <div>
    <el-button type="danger" @click="handleImagePreview">预览</el-button>
  </div>
</template>

<script>
  // 远程图片前缀
  const link = 'https://lokeshdhakar.com/projects/lightbox2/images/';
  export default {
    data () {
      return {
        datas: [
          { thumbUrl: `${link}thumb-4.jpg`, url: `${link}image-4.jpg` },
          { thumbUrl: `${link}thumb-5.jpg`, url: `${link}image-5.jpg` },
          { thumbUrl: `${link}thumb-6.jpg`, url: `${link}image-6.jpg` },
        ]
      }
    },
    methods: {
      handleImagePreview () {
        // TODO: 待定 目前占不知参数意思
        this.$ImagePreview(this.datas, 1);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
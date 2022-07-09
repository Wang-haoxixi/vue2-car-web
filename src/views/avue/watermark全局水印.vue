<template>
  <div>
    <p v-for="item in 60" :key="item">watermark全局水印watermark全局水印watermark全局水印</p>
  </div>
</template>

<script>
  export default {
    created () {
      this.watermark('文案...');
    }
  }
</script>

<style lang="scss" scoped>

</style>
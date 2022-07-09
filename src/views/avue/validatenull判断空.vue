<!--
 * @Description: validatenull判断空: 可以判断对象、数组、字符串是否为空
 * @Author: wh
 * @Date: 2022-07-09 15:46:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 15:49:01
-->
<template>
  <div>
    validatenull判断空
  </div>
</template>

<script>
  export default {
    created () {
      var obj1 = {}
      var obj2 = []
      var obj3 = [0];
      var str1 = ''
      var str2 = undefined
      var str3 = null;
      console.log(this.validatenull(obj1)) //true
      console.log(this.validatenull(obj2)) //true
      console.log(this.validatenull(obj3)) //false
      console.log(this.validatenull(str1)) //true
      console.log(this.validatenull(str2)) //true
      console.log(this.validatenull(str3)) //true
    }
  }
</script>

<style lang="scss" scoped>

</style>
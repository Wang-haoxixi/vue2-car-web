<!--
 * @Description: grid宫格 - fr单位(全称fraction, 翻译“小部分、部分”)
 * @Author: wh
 * @Date: 2022-07-07 09:49:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-07 10:28:07
-->
<template>
  <div class="grid">
    <div v-for="item in 14" :key="item">{{ item }}</div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  /**
  
    如果我们将grid-template-columns的值更改为1fr 2fr 1fr，
    第二列的宽度将会是其它两列的两倍。总宽现在是四个 fraction 单位，
    第二列占据两个 fraction 单位，其它列各占一个 fraction，
    此时这些子元素都会随着屏幕宽度的变化而跟着变化了。
    这样fraction 单位值更改列或行的值将会更加简单。

  */
  .grid {
    width: 100%;
    height: 200px;

    display: grid;

    //划容器为四个fr的列，其中中间的占两份fr，两边占一份
    grid-template-columns: 1fr 2fr 1fr;

    //划容器为三个fr的行，每行各占一份
    grid-template-rows: 1fr 1fr 1fr;

    >div:nth-child(2n) {
      background-color: bisque;
    }

    >div:nth-child(2n-1) {
      background-color: cadetblue;
    }
  }
</style>
<template>
  <div class="grid">
    <div v-for="item in 5" :key="item">{{ item }}</div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .grid {
    width: 100%;
    height: 500px;

    display: grid;

    //划容器为四个fr的列，其中中间的占两份fr，两边占一份
    grid-template-columns: 1fr 2fr 1fr;
    //划容器为三个fr的行，每行各占一份
    grid-template-rows: 1fr 1fr 1fr;

    // grid-row-gap: 20px; //控制行间隙
    // grid-column-gap: 10px; //控制列间隙 
    grid-gap: 2%;
    //gap 属性是用来设置网格行与列之间的间隙（gutters），是grid-column-gap  和  grid-row-gap的简写

    >div:nth-child(2n) {
      background-color: bisque;
    }

    >div:nth-child(2n-1) {
      background-color: cadetblue;
    }
  }
</style>
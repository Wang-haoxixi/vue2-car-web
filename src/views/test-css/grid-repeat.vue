<!--
 * @Description: grid宫格 - repeat函数
 * @Author: wh
 * @Date: 2022-07-07 10:24:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-07 10:46:08
-->
<template>
  <div class="grid">
    <div v-for="item in 5" :key="item">{{ item }}</div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .grid {
    width: 100%;
    height: 500px;

    display: grid;

    // grid-template-columns: repeat(3, 1fr);

    // grid-template-rows: repeat(3, 1fr);

    >div:nth-child(2n) {
      background-color: bisque;
    }

    >div:nth-child(2n-1) {
      background-color: cadetblue;
    }

    /**
		
		在上面代码中，repeat(3, 100px)等于100px 100px 100px。第一个参数指定行与列的数量，第二个参数指定它们的宽度，这就和之前的布局完全一样。
		
		*/

    // 然后是auto-fit，让我们跳过固定数量的列，将3替换为自适应数量：(限制于容器的高)
    // grid-template-columns: repeat(auto-fit, 100px);
    // grid-template-rows: repeat(auto-fit, 100px);
    /**
		现在，栅格将会根据容器的宽度调整其数量。它会尝试在容器中容纳尽可能多的 100px 宽的列。但如果我们将所有列硬写为 100px，我们将永远没法获得所需的弹性，因为它们很难填充整个宽度。
		*/

    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(2, 100px);
    // minmax()函数定义的范围大于或等于 min， 小于或等于 max。
    // 因此，现在每列将至少为 100px。但如果有更多的可用空间，栅格布局将简单地将其均分给每列，因为这些列变成了 fraction 单位，而不是 固定的100px。
  }
</style>
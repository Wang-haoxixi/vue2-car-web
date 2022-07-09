<!--
 * @Description: 导出Excel
 * @Author: wh
 * @Date: 2022-07-09 14:23:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 14:53:05
-->
<template>
  <div>
    <el-button type="danger" @click="handleExportExcel">导出Excel</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        opt: {
          title: '文档标题',
          column: [{
            label: '标题',
            prop: 'title'
          }],
          data: [{
            title: "测试数据1"
          }, {
            title: "测试数据2"
          }]
        }
      }
    },
    methods: {
      // 导出Excel
      handleExportExcel () {
        console.log('export...')
        // TODO: xlsx  需引入excel操作包
        this.$Export.excel({
          title: this.opt.title || new Date().getTime(),
          columns: this.opt.column,
          data: this.opt.data
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
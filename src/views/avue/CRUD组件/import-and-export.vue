<!--
 * @Description: 导入导出
 * @Author: wh
 * @Date: 2022-07-11 15:34:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-11 15:51:35
-->
<template>
  <div>
    <avue-crud :option="option" :data="data"></avue-crud>

    <hr />

    <div style="display:flex;">
      <el-button size="small" type="primary" @click="handleGet">下载模版</el-button>
      &nbsp;&nbsp;
      <el-upload :auto-upload="false" :show-file-list="false" action="action" :on-change="handleChange">
        <el-button size="small" type="primary">导入 excel</el-button>
      </el-upload>
    </div>
    <br />
    <avue-crud :option="option2" :data="data2"></avue-crud>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        /**表格1 */
        data: [{
          text1: '内容1-1',
          text2: '内容1-2',
          deep: {
            text3: '内容1-3',
          }
        }, {
          text1: '内容2-1',
          text2: '内容2-2',
          deep: {
            text3: '内容2-3',
          }
        }],
        option: {
          excelBtn: true,
          column: [{
            label: '列内容1',
            prop: 'text1',
          }, {
            label: '列内容2',
            prop: 'text2',
          }, {
            label: '列内容3',
            prop: 'text3',
            bind: 'deep.text3'
          }]
        },

        /**表格2 */
        data2: [],
        option2: {
          column: [{
            label: 'id',
            prop: 'id'
          }, {
            label: '姓名',
            prop: 'name'
          }, {
            label: '年龄',
            prop: 'sex'
          }]
        }
      }
    },
    methods: {
      // 下载模板
      handleGet () {
        window.open('/cdn/demo.xlsx')
      },
      // 导入
      handleChange (file, fileLis) {
        this.$Export.xlsx(file.raw)
          .then(data => {
            this.data2 = data.results;
          })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
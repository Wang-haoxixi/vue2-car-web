<!--
 * @Description: inputTabel表格选择器
 * @Author: wh
 * @Date: 2022-07-11 10:13:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-11 10:46:22
-->
<template>
  <el-row>
    <el-col :span="6">
      值:{{form}}<br />
      <avue-input-table :props="props" :column="column" :on-load="onLoad" v-model="form" placeholder="请选择数据"></avue-input-table>
      格式化值:{{form}}<br />
      <avue-input-table :props="props" :column="column" :formatter="formatter" :on-load="onLoad" v-model="form" placeholder="请选择数据"></avue-input-table>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        // 字段列
        column: {
          children: {
            border: false, //表格边框
            column: [{
              label: '姓名xxx',
              width: 120, //label宽度
              search: true, //是否可对该字段进行搜索
              prop: 'name'
            }, {
              label: '性别sss',
              search: true,
              prop: 'sex'
            }],
          },
        },
        // 必填字段属性
        props: {
          label: 'name',
          value: 'id'
        },
        // 绑定数据
        form: '0' //默认值
      }
    },
    methods: {
      // 格式化数据
      formatter (row) {
        console.log("row", row)
        if (!row.name) return ''
        return row.name + '-' + row.sex
      },
      // 首次加载触发
      onLoad ({ page, value, data }, callback) {
        //首次加载去查询对应的值
        if (value) {
          console.log('首次查询', value)
          callback({
            id: '0',
            name: '张三',
            sex: '男'
          })
          return
        }
        if (data) {
          console.log('搜索查询参数', data)
        }
        if (page) {
          console.log('分页参数', page)
        }
        //分页查询信息
        callback({
          total: 2,
          data: [{
            id: '0',
            name: '张三',
            sex: '男'
          }, {
            id: '1',
            name: '李四',
            sex: '女'
          }]
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
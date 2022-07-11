<!--
 * @Description: page: 首次加载调用on-load方法加载数据，返回page分页对象信息,赋值page的total总条数即可,如果total为0的话，或者simplePage为true只有1页的时候，分页选择器会隐藏
 * @Author: wh
 * @Date: 2022-07-11 13:44:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-11 14:19:54
-->
<template>
  <div>
    {{page}}
    <avue-crud :data="data" :option="option" :page.sync="page" @size-change="sizeChange" @current-change="currentChange"></avue-crud>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        page: {
          currentPage: 1,
          total: 0,
          // layout: "total,pager,prev, next",
          // background: false,
          pageSize: 10
        },
        data: [],
        option: {
          align: 'center',
          menuAlign: 'center',
          column: [{
              label: '姓名',
              prop: 'name'
            },
            {
              label: '性别',
              prop: 'sex'
            }
          ]
        }
      }
    },
    created () {
      this.getList()
    },
    methods: {
      // 获取列表
      getList () {
        this.page.total = 40
        if (this.page.currentPage === 1) {
          this.data = [{
            id: 1,
            name: '张三',
            sex: '男'
          }, {
            id: 2,
            name: '李四',
            sex: '女'
          }]
        } else if (this.page.currentPage == 2) {
          this.data = [{
            id: 3,
            name: '王五',
            sex: '女'
          }, {
            id: 4,
            name: '赵六',
            sex: '女'
          }]
        }
      },
      // 切换每页条数
      sizeChange (val) {
        this.page.currentPage = 1 //重置回第一页
        this.page.pageSize = val
        this.getList()
        this.$message.success('条数' + val)
      },
      // 切换当前页
      currentChange (val) {
        this.page.currentPage = val
        this.getList()
        this.$message.success('页码' + val)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
<!--
 * @Description: search搜索: cascader为需要联动的子选择框prop值，可以写多个，形成一对多的关系,需要手动调用内部的dicInit方法去初始化表格联动数据
 * @Author: wh
 * @Date: 2022-07-11 14:22:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-11 15:01:07
-->
<template>
  <div>
    <avue-crud ref="crud" :option="option" :data="data"></avue-crud>
  </div>
</template>

<script>
  var baseUrl = 'https://cli.avuejs.com/api/area'
  export default {
    data () {
      return {
        data: [{
            id: 1,
            name: '张三',
            province: '110000',
            city: '110100',
            area: '110101',
          },
          {
            id: 2,
            name: '李四',
            province: '140000',
            city: '140600',
            area: '140623'
          }
        ],
        option: {
          excelBtn: true,
          column: [{
              label: '省份',
              prop: 'province',
              type: 'select',
              props: {
                label: 'name',
                value: 'code'
              },
              cascader: ['city'],
              search: true,
              dicUrl: `${baseUrl}/getProvince`,
              rules: [{
                required: true,
                message: '请选择省份',
                trigger: 'blur'
              }]
            },
            {
              label: '城市',
              prop: 'city',
              type: 'select',
              cascader: ['area'],
              props: {
                label: 'name',
                value: 'code'
              },
              search: true,
              dicUrl: `${baseUrl}/getCity/{{key}}`,
              rules: [{
                required: true,
                message: '请选择城市',
                trigger: 'blur'
              }]
            },
            {
              label: '地区',
              prop: 'area',
              type: 'select',
              props: {
                label: 'name',
                value: 'code'
              },
              search: true,
              dicUrl: `${baseUrl}/getArea/{{key}}`,
              rules: [{
                required: true,
                message: '请选择地区',
                trigger: 'blur'
              }]
            }
          ]
        }
      }
    },
    mounted () {
      this.$nextTick(() => this.$refs.crud.dicInit('cascader'))
    }
  }
</script>

<style lang="scss" scoped>

</style>
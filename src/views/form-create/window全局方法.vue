<!--
 * @Description: 
 * @Author: wh
 * @Date: 2022-07-09 09:44:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 10:00:40
-->
<template>
  <!-- 使用 window 全局方法formCreate.create(rule,option)创建表单 -->
  <div id="app3">
    <div id="form-create"></div>
  </div>
</template>

<script>
  export default {
    mounted () {
      //表单插入的节点
      const root = document.getElementById('form-create')

      //$f为表单api
      const $f = window.formCreate.create(
        //表单生成规则
        [{
            type: 'input',
            field: 'goods_name',
            title: '商品名称'
          },
          {
            type: 'datePicker',
            field: 'created_at',
            title: '创建时间'
          }
        ],
        //组件参数配置
        {
          el: root,
          //显示表单重置按钮
          resetBtn: true,
          //表单提交事件
          onSubmit: (formData, fApi) => {
            console.log(formData)
            //按钮进入提交状态
            fApi.btn.loading()
          }
        })
    }
  }
</script>

<style lang="scss" scoped>

</style>
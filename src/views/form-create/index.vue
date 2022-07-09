<!--
 * @Description: form-create-test
 * @Author: wh
 * @Date: 2022-07-08 17:49:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 10:08:50
-->
<template>
  <div>
    <!-- 可通过以下3种方式创建表单: -->
    <!-- 组件模式, Vue 原型方法, Window 全局方法 -->
    <h1><strong>form-create-test</strong></h1>
    <!-- 组件模式 -->
    <div id="app1">
      <form-create v-model="fApi" :rule="rule" :option="option" :value.sync="form"></form-create>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        //实例对象
        fApi: {},
        //表单数据
        form: {
          goods_name: "",
          created_at: "",
        },
        //表单生成规则
        rule: [{
            type: 'input', //输入框
            field: 'goods_name',
            title: '商品名称',
            // value: "哈哈哈", //默认值
          },
          {
            type: 'datePicker', // 时间选择器
            field: 'created_at',
            title: '创建时间',
            // value: "2022-07-10"
          }
        ],
        //组件参数配置
        option: {
          //表单提交事件
          onSubmit: (formData) => {
            console.log("formData:", formData);
            console.log("form:", this.form)
            console.log("fApi:", this.fApi)
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
</style>
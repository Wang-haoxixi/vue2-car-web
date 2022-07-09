<!--
 * @Description: Input 输入框
 * @Author: wh
 * @Date: 2022-07-09 10:17:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 10:25:43
-->
<template>
  <div>
    <form-create :rule="rule" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        rule: [
          // 方式一
          formCreate.maker.input('商品名称1', 'goods_name1').props({
            placeholder: '请输入商品名称'
          }).validate([{
            required: true,
            message: '请输入商品名称',
            trigger: 'blur'
          }]),
          // 方式二
          {
            type: "input",
            title: "测试测试",
            field: "test",
            value: "I an test!!!",
            props: {
              "type": "input",
              "placeholder": "请输入测试值",
            },
            validate: [{
              required: true,
              message: '请输入test内容',
              trigger: 'blur'
            }, ],
          },
          {
            type: "input",
            title: "商品名称2",
            field: "goods_name2",
            value: "iphone 7",
            props: {
              "type": "textarea",
              "placeholder": "请输入商品名称",
              "rows": 5
            },
            validate: [{
              required: true,
              message: '请输入goods_name',
              trigger: 'blur'
            }, ],
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
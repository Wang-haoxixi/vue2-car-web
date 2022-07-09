<!--
 * @Description: 
 * @Author: wh
 * @Date: 2022-07-09 09:24:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 09:42:03
-->
<template>
  <div id="app2">
    <!-- 使用 vue 原型方法$formCreate(rule,option) 创建表单 -->
    <div id="form-create"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        fApi: {},
        model: {}
      }
    },
    mounted () {
      //表单插入的节点
      const root = document.getElementById('form-create')
      //fApi为表单api
      this.fApi = this.$formCreate(
        //表单生成规则
        [
          this.$formCreate.maker.input('商品名称', 'goods_name', ''),
          this.$formCreate.maker.date('创建时间', 'created_at')
        ],
        //组件参数配置
        {
          el: root,
          //表单提交事件
          onSubmit: (formData, fApi) => {
            console.log("fApi", fApi)
            console.log("formData", formData)
            fApi.btn.loading() // 加载中
          }
        })
      console.log(this.fApi)
    }
  }
</script>

<style lang="scss" scoped>

</style>
<!--
 * @Description: $DialogForm弹窗表单
 * @Author: wh
 * @Date: 2022-07-09 11:51:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 13:58:33
-->
<template>
  <div>
    <el-button type="danger" @click="handleShowDiolog">弹框</el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleShowDiolog () {
        this.$DialogForm.show({
          title: '弹窗页面测试', // 弹框标题
          width: '60%', // 弹框宽度
          menuPosition: 'right', // 按钮位置
          // 弹框配置项
          option: {
            submitText: '完成', //提交按钮文本
            span: 24, // 弹框内容占比
            // 字段设置
            column: [{
              label: "姓名",
              prop: "name",
              // 校验
              rules: [{
                required: true,
                message: "请输入姓名",
                trigger: "blur"
              }],
            }]
          },
          // 关闭前的回调
          beforeClose: (done) => {
            this.$message.success('关闭前方法')
            done() // 执行
          },
          callback: (res) => {
            console.log(res);
            // this.$message.success('关闭等待框')
            // 2s后才可以再次填写表单
            setTimeout(() => {
              res.done();
            }, 2000)

            // 5s后关闭弹框
            setTimeout(() => {
              res.close();
            }, 5000)
            // setTimeout(() => {
            //   res.done()
            //   setTimeout(() => {
            //     this.$message.success('关闭弹窗')
            //     res.close()
            //   }, 1000)
            // }, 1000)
          }
        })
      }
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>

</style>
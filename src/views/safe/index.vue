<!--
 * @Description: 安全设置
 * @Author: wh
 * @Date: 2022-06-22 09:15:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-08 15:35:16
-->
<template>
  <div>
    <headerBack column="安全设置" />
    <ul class="links">
      <router-link to="/password" tag="a" class="arrow">
        修改登录密码
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        设置资金密码
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        绑定手机号
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        绑定银行号
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "User",
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
<template>
    <div class="password">
        <headerBack column="修改登录密码" />
        <div class="car-form">
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input placeholder="原始密码" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="新密码" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="确认密码" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <button class="code-btn" type="button">获取验证码</button>
                    <el-input placeholder="验证码" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="confirm-btn" type="primary" @click="onSubmit">确定</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Password",
    data() {
        return {
            form: {
                name: '',
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
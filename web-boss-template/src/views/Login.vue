<template>
  <div>
        <el-input v-model='params.phone' placeholder="请输入手机号"></el-input>
        <el-input v-model='params.password' placeholder="请输入密码"></el-input>
      <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
import Api from '../api/driver/driver'
export default {
  name: 'login',
  data(){
    return{
      params:{
        phone:'18500410543',
        password:'c2beef62dc17677f2a63f81a5125523f',
        userPhone:'',
        validateCode:''
      }
    }
  },
  methods: {
    login(){
      this.params.validateCode = this.params.phone
      this.params.userPhone = this.params.phone
      Api.login({...this.params})
      // this.$router.push('/')
    }
  },
}
</script>


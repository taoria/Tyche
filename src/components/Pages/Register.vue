<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :sm="16" :md="12" :lg="8">
        注册邮箱：
        <el-input placeholder="注册邮箱" v-model="email">
        </el-input>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :sm="16" :md="12" :lg="8">
        用户名：
        <el-input placeholder="输入用户名" v-model="username">
        </el-input>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :sm="16" :md="12" :lg="8">
        密码：
        <el-input placeholder="输入密码" type="password" v-model="password">
        </el-input>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :sm="16" :md="12" :lg="8">
        确认密码：
        <el-input name="repwd" placeholder="确认密码" type="password" v-model="repassword">
        </el-input>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center" :gutter="15">
      <el-col :xs="24" :sm="14" :md="12" :lg="8">
        <el-button id="login" v-on:click="SendRegister" style="width:100%" type="primary">注册</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<<script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        repassword: "",
        email: ""
      };
    },
    methods: {
      SendRegister() {
        if (this.repassword != this.password) {
          this.$message.error("错误的密码,两次输入的密码应该相同");
          return 0;
        }
        var params = new URLSearchParams();
        params.append('username', this.username);
        params.append('password',this.password);
        params.append('email',this.email);
        this.axios.post("http://localhost:5000/users/Register", params)
          .then((response) => {
            console.log(response.data);
          }, (error) => {
            this.$message.error("发生了不可名状的错误");
          });
      }
    }
  };
</script>
<<style>
  .login {
    margin: 0 auto;
  }
</style>

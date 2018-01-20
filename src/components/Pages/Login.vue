<template>
<div>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :xs="24" :sm="16" :md="12" :lg="8">
      用户名：
      <el-input placeholder="输入用户名"   v-model="username">
      </el-input>
    </el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :xs="24" :sm="16" :md="12" :lg="8">
      密码：
      <el-input placeholder="输入密码" type="password"  v-model="password">
      </el-input>
    </el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="center" :gutter="15">
    <el-col :xs="10" :sm="4" :md="4" :lg="4">
      <el-button id="login" v-on:click="check" style="width:100%" type="primary">登录</el-button>
    </el-col>
    <el-col :xs="10" :sm="4" :md="4" :lg="4">
      <el-button id="logout" v-on:click="check" style="width:100%" type="primary">注册</el-button>
    </el-col>
  </el-row>
  </div>
</template>
<<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>
<<style>
.login {
  margin: 0 auto;
}
</style>

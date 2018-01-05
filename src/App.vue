<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#fff">
      <el-menu-item index="1"><router-link to="Character">人物卡管理</router-link></el-menu-item>
      <el-menu-item index="2">规则管理</el-menu-item>
      <el-menu-item index="3">用户中心</el-menu-item>
    </el-menu>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {    
        activeIndex: '1'
      };
    }
  };
</script>


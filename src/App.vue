<template>
  <div>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#dd4343" text-color="#FFF" active-text-color="#fff">
        <el-menu-item index="1">
          <router-link to="Character">人物卡管理</router-link>
        </el-menu-item>
        <el-menu-item index="2">规则管理</el-menu-item>
        <el-menu-item index="3">用户中心</el-menu-item>
      </el-menu>
    </el-header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {
    field,
    divinfo,
    GetRuleList,
    CacheRule,
    LoadCacheRule
  } from './info'
  export default {
    created: function() {
      this.LoadFakeJson("COC6");
    },
    mounted:function(){
      this.LoadFakeJson("COC6");
    },
     methods: {
        LoadFakeJson :function(str) {
          var data;
          this.$http.get('/static/' + str + '.json').then(response => {
            data = response.data;
            CacheRule(data);
          }, response => {});
          return data;
        }
      },
    data() {
      return {
        activeIndex: '1'
      }
    }
  }
</script>

<<style>

</style>




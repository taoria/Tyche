<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-col :span="8" :xs="24" :sm="6" :md="4" :lg="2" :offset="0">
        <router-link to="Character">
          <el-menu-item index="1">
            人物卡管理
          </el-menu-item>
        </router-link>
      </el-col>
      <el-col :span="8" :xs="24" :sm="6" :md="4" :lg="2" :offset="0">
        <router-link to="Rule">
          <el-menu-item index="2">规则管理</el-menu-item>
        </router-link>
      </el-col>
      <el-col :span="8" :xs="24" :sm="6" :md="4" :lg="2" :offset="0">
        <router-link to="User">
        <el-menu-item index="3">用户中心</el-menu-item>
        </router-link>
      </el-col>
    </el-menu>
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
    mounted: function() {
      this.LoadFakeJson("COC6");
    },
    methods: {
      LoadFakeJson: function(str) {
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




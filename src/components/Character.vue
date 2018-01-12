<template>
  <el-container>
    <el-header>  <parsing-rule :requestType="'characterCard'" v-on:after-data-loaded="OnLoad"></parsing-rule></el-header>
    <el-main>
      <!-- 通过parsing-rule组件去获取对应的规则文件 -->
    
      <div class='toptab'>
        <el-tabs v-model="activeName" tab-position="bottom">
          <el-tab-pane v-for="p in TopList " :key="p.name" :label="p.hint" :name="p.name"></el-tab-pane>
        </el-tabs>
      </div>
      <CharacterSheet :sheet-divisions='dataDivisions'>
      </CharacterSheet>
    </el-main>
  </el-container>
</template>
<script>
  import CharacterSheet from "./CharacterSheet.vue";
  import {
    GetRuleList,
    CacheRule,
    LoadCacheRule
  } from '../info'
  export default {
    components: {
      CharacterSheet: CharacterSheet
    },
    data() {
      return {
        dataDivisions: [],
        activeName: '',
        TopList: [{
          name: "create",
          hint: "创建人物"
        }, {
          name: "manage",
          hint: "管理人物"
        }, {
          name: "show",
          hint: "查看人物"
        }]
      };
    },
    mounted: function() {
    },
    methods: {
      OnLoad(object){
          this.dataDivisions = object;
      }
    }
  };
</script>
<<style>
  body {
    text-align: center;
  }
  .toptab {
    margin: 0 auto;
  }
  button {
    width: 500px;
  }
</style>
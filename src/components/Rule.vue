<template>
  <div>
    <parsing-rule :requestType="''" v-on:after-data-loaded="OnLoad"></parsing-rule>
    <el-container>
      <el-header>
        <el-tabs v-model="activeName" tab-position="top">
          <el-tab-pane v-for="item in tableName " :key="item.name" :label="item.hint" :name="item.name"></el-tab-pane>
        </el-tabs>
      </el-header>
      <el-aside>
        <el-tabs v-model="activeDiv" tab-position="left">
          <el-tab-pane v-for="divs in tablePgs" :key="divs.name" :label="divs.hint" :name="divs.divname"></el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-main>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column v-for="item in tableIt " :key="item.name" :label="item.hint" :name="item.name" :prop="item.name" width="180">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  export default {
    computed: {
      tableIt: function() {
        var table = this.GetTable();
        if (table != undefined)
          return table.itemList;
      },
      tablePgs: function() {
        var table = this.GetTable();
        if (table == undefined)
          return;
        if (table.divisions != undefined) {
          return table.divisions;
        } else {
          console.log("can't load division info of " + table.name)
        }
      },
      tableData:function(){
        if(this.tablePgs==undefined) return;
        if(this.activeDiv in this.tablePgs){
          return this.tablePgs[this.activeDiv].content;
        }
        return [];
      }
    },
    methods: {
      OnLoad(object) {
        this.rule = object.rule;
        this.tableName = object.itemList;
      },
      GetTable() {
        if (this.activeName == '') {
          return;
        } else {
          var tableList = this.rule[this.activeName];
          if (tableList == undefined) {
            return;
          }
          return tableList;
        }
      }

    },
    data() {
      return {
        rule: '',
        tableItem: [],
        tableName: [],
        currentTable: '',
        activeName: '',
        activeDiv: ''
      }
    }
  }
</script>

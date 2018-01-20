<template>
  <div>

    <el-container>
      <el-header>
        <parsing-rule :requestType="''" v-on:after-data-loaded="OnLoad"></parsing-rule>
      </el-header>
    </el-container>
    <el-container>
      <item-dialog :id='clickId' :items='ClickItem' :vis='DialogVisible' v-on:change='OnChanges' v-on:cancelClicked='OnCancel' v-on:saveClicked='OnSave' :itemList='tableIt'>
      </item-dialog>
      <el-tabs v-model="activeName" tab-position="top">
        <el-tab-pane v-for="item in tableName " :key="item.name" :label="item.hint" :name="item.name"></el-tab-pane>
      </el-tabs>
      <el-aside>
        <el-tabs v-model="activeDiv" tab-position="left">
          <el-tab-pane v-for="divs in tablePgs" :key="divs.divname" :label="divs.hint" :name="divs.divname"></el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-main>
        <el-table :data="tableData">
          <el-table-column type="index" :index="indexMethod"></el-table-column>
          <el-table-column v-for="(val,key) in tableIt " :key="key" :label="val" :name="key" :prop="key" width="180">
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.$index)" type="text" size="small">修改</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="text">添加 </el-button>
      </el-main>

    </el-container>
  </div>
</template>
<script>
export default {
  computed: {
    tableIt: function() {
      var table = this.GetTable();

      if (table != undefined) {
        console.log(table.itemList);
        return table.itemList;
      }
    },
    ClickItem: function() {
      return this.clickItem;
    },
    tablePgs: function() {
      var table = this.GetTable();
      if (table == undefined) return;
      if (table.divisions != undefined) {
        return table.divisions;
      } else {
        console.log("can't load division info of " + table.name);
      }
    },
    DialogVisible: function() {
      return this.visMod;
    },
    tableData: function() {
      if (this.tablePgs == undefined) return;
      for (var i = 0; i < this.tablePgs.length; i++) {
        if (this.tablePgs[i].divname == this.activeDiv)
          return this.tablePgs[i].content;
      }
      return [];
    }
  },
  methods: {
    OnLoad(object) {
      if (object == undefined) return;
      this.rule = object.rule;
      this.tableName = object.itemList;
    },
    OnChanges: function(id, name, str) {
    //  this.tableData[id][name] = str;
    },
    OnCancel: function(id) {
      this.clickItem ={};
      this.clickId =0;
      this.visMod = false;
    },
    OnSave:function(item){
      console.log(item);
      this.$set(this.tableData,this.clickId,item);
      this.clickItem ={};
      this.clickId =0;
      this.visMod = false;
    },
    indexMethod: function(index) {
      return index;
    },
    GetTable() {
      if (this.activeName == "") {
        return;
      } else {
        var tableList = this.rule[this.activeName];
        if (tableList == undefined) {
          return;
        }
        return tableList;
      }
    },
    handleClick(id) {
      this.clickItem = this.tableData[id];
      this.clickIdId = id;
      this.visMod = true;
    }
  },
  data() {
    return {
      rule: "",
      tableItem: [],
      tableName: [],
      currentTable: "",
      activeName: "",
      activeDiv: "",
      clickId: {},
      clickItem: {},
      visMod: false
    };
  }
};
</script>

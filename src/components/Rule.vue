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
      <el-header>
        <span>
          <el-button type="text" v-on:click='OnNewDiv'>添加一项</el-button>
          <el-tabs v-model="activeName" tab-position="top">
            <el-tab-pane v-for="item in tableName" :key="item.name" :label="item.hint" :name="item.name"></el-tab-pane>
          </el-tabs>
        </span>
      </el-header>
      <el-aside>
        <el-row>
          <el-tabs v-model="activeDiv" tab-position="left">
            <el-tab-pane v-for="divs in tablePgs" :key="divs.divname" :label="divs.hint" :name="divs.divname"></el-tab-pane>
          </el-tabs>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="2">
          <el-button type="text" v-on:click='OnNewDiv'>添加一页</el-button>
          </el-col>
        </el-row>
        <item-dialog :id='-1' :items='NewDivision' :vis='NewDivDialogVis' v-on:change='OnDivDialogChange' v-on:cancelClicked='OnDivDialogCancel' v-on:saveClicked='OnDivSave' :itemList='{name:"名称",hint:"提示"}'></item-dialog>
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
        return table.itemList;
      }
    },
    ClickItem: function() {
      return this.clickItem;
    },
    ///获取当前的
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
    NewDivDialogVis: function() {
      return this.divDialogVis;
    },
    tableData: function() {
      if (this.tablePgs == undefined) return;
      for (var i = 0; i < this.tablePgs.length; i++) {
        if (this.tablePgs[i].divname == this.activeDiv)
          return this.tablePgs[i].content;
      }
      return [];
    },
    NewDivision: function() {
      this.newDiv = { name: "name", hint: "提示" };
      return this.newDiv;
    }
  },
  methods: {
    OnLoad(object) {
      if (object == undefined) return;
      this.rule = object.rule;
      console.log(this.rule);
      this.tableName = object.itemList;
    },
    OnChanges: function(id, name, str) {
      //  this.tableData[id][name] = str;
    },
    OnCancel: function(id) {
      this.clickItem = {};
      this.clickId = 0;
      this.visMod = false;
    },
    OnSave: function(item) {
      this.$set(this.tableData, this.clickId, item);
      this.clickItem = {};
      this.clickId = 0;
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
        if (tableList.length == 0) {
        }
        return tableList;
      }
    },
    handleClick(id) {
      this.clickItem = this.tableData[id];
      this.clickIdId = id;
      this.visMod = true;
    },
    OnDivDialogChange(id, name, str) {},
    OnDivSave(item) {
      this.divDialogVis = false;
      this.rule;
    },
    OnDivDialogCancel() {
      this.divDialogVis = false;
    },
    OnNewDiv() {
      this.divDialogVis = true;
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
      newDiv: {},
      visMod: false,
      divDialogVis: false
    };
  }
};
</script>
<style>
  .el-row {
    margin-top: 20px;
  }
</style>

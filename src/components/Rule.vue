<template>
  <div>
    <el-container>
      <el-header>
        <el-row type='flex' justify="center">
          <keep-alive>
            <parsing-rule :requestType="''" v-on:after-data-loaded="OnLoad"></parsing-rule>
          </keep-alive>
        </el-row>
      </el-header>
      <item-dialog :id='-1' :items='NewDivision' :vis='NewDivDialogVis' v-on:change='OnDivDialogChange' v-on:cancelClicked='OnDivDialogCancel' v-on:saveClicked='OnDivSave' :itemList='{name:"名称",hint:"提示"}'></item-dialog>
    </el-container>
    <el-header>
      <item-dialog :id='clickId' :items='ClickItem' :vis='DialogVisible' v-on:change='OnChanges' v-on:cancelClicked='OnCancel' v-on:saveClicked='OnSave' :itemList='tableIt'>
      </item-dialog>
      <span>
        <el-row type='flex' justify="center">
          <el-button type="text" v-on:click='OnNewDiv'>添加一项</el-button>
        </el-row>
        <el-tabs v-model="activeName" tab-position="top">
          <el-tab-pane v-for="item in tableName" :key="item.name" :label="item.hint" :name="item.name"></el-tab-pane>
        </el-tabs>

      </span>
    </el-header>
    <el-container>
      <el-aside>
        <el-row type='flex' justify="center" class="lefttabs">
          <el-tabs v-model="activeDiv" tab-position="left">
            <el-tab-pane v-for="divs in tablePgs" :key="divs.divname" :label="divs.hint" :name="divs.divname"></el-tab-pane>
          </el-tabs>
        </el-row>
        <el-row type='flex' justify="center">
          <el-button type="text" v-on:click='OnNewDiv'>添加一页</el-button>
        </el-row>
      </el-aside>
      <el-main>
        <el-table :data="tableData">
          <el-table-column v-for="(value,key) in tableIt " :key="key" :label="value" :name="key" :prop="key" :width='ColWidth(key)'>
            <template slot-scope="scope">
              <div v-if='key=="ex"'>
                <i class="el-icon-circle-plus-outline"></i>
                <span v-if='JSON.stringify(scope.row.ex).length<32'>{{ JSON.stringify(scope.row.ex) }}</span>
                <span v-else>{{ "......" }}</span>
              </div>
              <div v-else>
                <span>{{scope.row[key]}} </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.$index)" type="text" size="small">修改</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row type='flex' justify="center" class="lefttabs">
          <el-button type="text">添加 </el-button>
          <el-button type="text" @click='OnUpdate'>保存 </el-button>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  mounted: function() {},
  computed: {
    ClickItem: function() {
      return this.clickItem;
    },
    ///获取当前的
    tablePgs: function() {
      var table = this.GetTable();
      if (table == undefined) return;
      if (table.divisions != undefined) {
        console.log("载入规则分割:");
        console.log(table.divisions);
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
        console.log("遍历当前所属的规则子项");
        console.log(this.tablePgs[i].divname);
        if (this.tablePgs[i].divname == this.activeDiv)
          console.log("寻找到当前规则子项的内容");
        console.log(this.tablePgs[i].content);
        this.tableIt = this.tablePgs[i].itemList;
        console.log(this.tableIt);
        return this.tablePgs[i].content;
      }
    },
    NewDivision: function() {
      this.newDiv = { name: "name", hint: "提示" };
      return this.newDiv;
    }
  },
  methods: {
    ColWidth: function(key) {
      if (key == "ex") {
        return "300";
      } else {
        return "180";
      }
    },
    OnUpdate() {
      console.log(this.topRule);
      var params = new URLSearchParams();
      console.log(params);
      params.append("rule", JSON.stringify(this.topRule));
      this.$http
        .post(
          "rules/update/" + this.topRule.rulename,
          params
        )
        .then(response => {
          var data = response.data;
          this.$message({
            message: data,
            type: "success"
          });
        })
        .catch(function(error) {
          this.$message.error("更新失败了");
        });
    },
    OnLoad(object) {
      if (object == undefined) return;
      this.rule = object.rule;
      this.topRule = object;
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
      console.log("尝试保存项:" + this.clickId);
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
      this.clickId = id;
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
      divDialogVis: false,
      tableIt: {},
      topRule: {}
    };
  }
};
</script>
<style>
.lefttabs {
  margin-top: 20px;
}
</style>

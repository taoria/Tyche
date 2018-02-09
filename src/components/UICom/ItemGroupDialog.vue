<template>
  <div>
    <el-dialog title="" :visible.sync="vis" center :fullscreen='true'>
      <span slot="title">请选择</span>
      <span>
        <el-col :span="24" :xs="24" :sm="16" :md="24" :lg="24" :offset="0">
          <div v-for="(value,key) in proItems" :key='key'>
            {{itemList[key]}}:
            <div v-if='key!="ex"'>
              <str-field :placeholder="'请输入'+key" :name='key' :value='value' bound="none" v-on:change='onchange'>
              </str-field>
            </div>
            <div v-else>
              <div v-if='key==="ex"'>
                <str-field :placeholder="'请输入'+key" :name='key' :value='tempEx' bound="none" v-on:change='onchange'> </str-field>
              </div>
            </div>
          </div>
        </el-col>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="info" @click="closeSave()">保 存</el-button>
        <el-button type="info" @click="closeCancel(0)">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["items", , "id", "vis", "itemList"],
  computed: {
    proItems: function() {
      this.itemsCopy = JSON.parse(JSON.stringify(this.items));
      this.tempEx = this.JsonStr(this.itemsCopy.ex);
      return this.itemsCopy;
    }
  },
  data() {
    return {
      tempex: "",
      itemsCopy: {}
    };
  },
  methods: {
    trylog(ob) {
      return ob;
    },
    JsonStr(ob) {
      var js = {};
      for (var key in ob) {
        if (key != "elm" && key != "isRootInsert") js[key] = ob[key];
      }
      return JSON.stringify(js);
    },
    closeCancel: function(resultId) {
      this.itemsCopy = {};
      this.$emit("cancelClicked", resultId);
    },
    closeSave: function() {
      try {
        if ("ex" in this.itemsCopy) {
          this.itemsCopy["ex"] = JSON.parse(this.tempEx);
        }
      } catch (err) {
        console.log(err);
        this.$message.error("错误附加值格式,附加值格式是json格式");
        return;
      } finally {
      }
      this.$emit("saveClicked", this.itemsCopy);
    },
    onchange(name, val) {
      if (name != "ex") this.itemsCopy[name] = val;
      else this.tempEx = val;
    }
  }
};
</script>
<template>
  <div>
    <el-dialog title="" :visible.sync="vis" center :fullscreen='true'>
      <span slot="title">请选择</span>
      <span>
        <el-col :span="24" :xs="24" :sm="16" :md="24" :lg="24" :offset="0">
          <div v-for="(value,key) in proItems" :key='key'>
            {{itemList[key]}}:
            <div v-if='key!="ex"'>
              <str-field :placeholder="'请输入'+key" :name='key' :value='value' bound="none" :change='onchange'>
              </str-field>
            </div>
            <div v-else>
              <div v-if='key==="ex"'>
                <str-field :placeholder="'请输入'+key" :name='key' :value='JsonStr(value)' bound="none" :change='onchange'> </str-field>
              </div>
            </div>
          </div>
        </el-col>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="info" @click="closeSave(0)">保 存</el-button>
        <el-button type="info" @click="closeCancel(0)">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["items", , "id", "vis", "itemList"],
  computed:{
    proItems:function(){
      console.log("update");
      this.$forceUpdate();
      return this.items;
    }
  },
  data() {
    return {};
  },
  methods: {
    trylog(ob) {
      return ob;
    },
    JsonStr(ob) {
      var js = {};
      for(var key in ob){
        if(key!='elm'&&key!='isRootInsert')
           js[key] = ob[key];
      }
      return JSON.stringify(js);
    },
    closeCancel: function(resultId) {
      console.log(this.items);
      this.$emit("cancelClicked", resultId);
    },
    closeSave: function() {},
    onchange(name, val) {
      this.$emit("change", this.id, name, value);
    }
  }
};
</script>
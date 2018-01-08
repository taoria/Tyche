<<template>
  <button-group-dialog :infos='rules' :dialog-name='"当前规则:"+rules[ruleid].name' v-on:getResult='chooseResult'>
  </button-group-dialog>
</template>
<script>
  import {
    GetRuleList,
    CacheRule,
    LoadCacheRule
  } from '../../info'
  export default {
    props: ["requestType"],
    data() {
      return {
        currentRule: "COC6",
        ruleid: 0,
        rules: GetRuleList()
      }
    },
    mounted: function() {
      this.LoadFakeJson(this.rules[this.ruleid].name);
      this.LoadData();
    },
 
    methods: {
         chooseResult: function(id) {
      this.ruleid = id;
      if (LoadCacheRule(this.rules[this.ruleid].name) == undefined)
        this.LoadFakeJson(this.rules[this.ruleid].name);
      this.LoadData();
    },
      LoadFakeJson: function(str) {
        var data;
        this.$http.get('static/' + str + '.json').then(response => {
          //从本地文件获取JSON
          data = response.data;
          //将文件缓存
          CacheRule(data);
          this.LoadData();
        }, response => {});
        return data;
      },
      GetElement: function(str) {
        //获取当前选择的规则名称
      
        var name = this.rules[this.ruleid].name;
        var lcc = LoadCacheRule(name);
        if (lcc == undefined) {
          console.log("Can't find rule named:" + name);
        }
        if (str === '' || str == undefined) {
          return lcc;
        }
     
        var target = lcc[str];
          console.log(target);
        if (target == undefined) {
          console.log("Can't find feature named:" + str);
          return;
        }
     
        var divisions = target.divisions;
        return divisions;
      },
      LoadData: function() {
        //向父组件发送规则内容
        this.$emit('after-data-loaded', this.GetElement(this.requestType));
      }
    }
  }
</script>

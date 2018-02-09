<<template>
  <button-group-dialog :infos='rules' :dialog-name='"当前规则:"+RuleName()' v-on:getResult='chooseResult'>
  </button-group-dialog>
</template>
<script>
import { GetRuleList, CacheRule, LoadCacheRule } from "../../info";
export default {
  props: ["requestType"],
  data() {
    return {
      currentRule: "COC6",
      ruleid: 0,
      rules: []
    };
  },
  mounted: function() {
    this.GetRuleList();
  },
  methods: {
    RuleName:function(){
      if(this.rules.length>0)
      return this.rules[this.ruleid].name;
      else
      return "尚未添加规则";
    },
    chooseResult: function(id) {
      this.ruleid = id;
      if (this.rules.length == 0) {
        return ;
      }
      if (LoadCacheRule(this.rules[this.ruleid].name) == undefined)
        this.LoadJson(this.rules[this.ruleid].name);
      this.LoadData();
    },
    GetRuleList: function() {
        console.log("gettin gules");
      this.$http.get("http://localhost:5000/rule/getlist").then(
        response => {
          var data = response.data;
          //将文件缓存
             console.log(data);
          this.rules = data;
          if (this.rules.length > 0){
            this.LoadJson(this.rules[this.ruleid].name);
         
          }
        },
        response => {}
      );
    },
    LoadJson: function(str) {
      var data;
      if (LoadCacheRule(str) == undefined) {
        this.$http.get("http://localhost:5000/rule/get/" + str).then(
          response => {
            data = response.data;
            //将文件缓存
            CacheRule(data);
            console.log(data);
            this.LoadData();
          },
          response => {}
        );
        return data;
      }
    },
    GetElement: function(str) {
      //获取当前选择的规则名称
      console.log(this.rules);
      var name = this.rules[this.ruleid].name;
      var lcc = LoadCacheRule(name);
      if (lcc == undefined) {
        console.log("Can't find rule named:" + name);
        return;
      }
      if (str === "" || str == undefined) {
        return lcc;
      }
      lcc = lcc.rule;
      if (lcc == undefined) return;
      if (str in lcc) {
        var target = lcc[str];
        if (target == undefined) {
          console.log("Can't find feature named:" + str);
          return;
        }
        var divisions = target.divisions;
        return divisions;
      }
      return;
    },
    LoadData: function() {
      //向父组件发送规则内容
      this.$emit("after-data-loaded", this.GetElement(this.requestType));
    }
  }
};
</script>

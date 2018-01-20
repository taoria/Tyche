<<template>
  <button-group-dialog :infos='rules' :dialog-name='"当前规则:"+rules[ruleid].name' v-on:getResult='chooseResult'>
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
      rules: GetRuleList()
    };
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
      if (LoadCacheRule(str) == undefined) {
        console.log("try to get files");
        this.$http.get("http://localhost:3000/Data/" + str + ".json").then(
          response => {
            data = response.data;
            //将文件缓存

            CacheRule(data);
            this.LoadData();
          },
          response => {}
        );
        return data;
      }
    },
    GetElement: function(str) {
      //获取当前选择的规则名称
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

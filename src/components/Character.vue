<template>
  <el-container>
    <el-main>
      <button-group-dialog :infos='rules' :dialog-name='"当前规则:"+rules[ruleid].name' v-on:getResult='chooseResult'></button-group-dialog>
      <CharacterSheet :sheet-divisions='dataDivisions'>
      </CharacterSheet>
    </el-main>
  </el-container>
</template>
<script>
  import CharacterSheet from "./CharacterSheet.vue";
  import {
    field,
    divinfo,
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
        ruleid: 0,
        rules: GetRuleList(),
        dataDivisions:[]
      };
    },
    mounted: function() {
      this.LoadFakeJson("COC6");
    },
    methods: {
      chooseResult: function(id) {
        console.log("hi");
        this.ruleid = id;
        if (id == 0) {
          this.divisions = cocdiv;
        } else {
          this.divisions = [];
        }
      },
      loadRule(str) {
        fs.readFile('./' + str + '.json', 'utf8', (err, data) => {
          if (err) throw err;
          loaded = data;
        })
      },
      get_current_rule: function() {
        return this.rules[this.ruleid].name;
      },
      LoadFakeJson: function(str) {
        var data;
        this.$http.get('/static/' + str + '.json').then(response => {
          data = response.data;
          CacheRule(data);
          this.GetCharacterSheet();
        }, response => {});
        return data;
      },
      //从规则中提取角色表单
      GetCharacterSheet: function() {
        var name = this.rules[this.ruleid].name;
        var lcc = LoadCacheRule(name);
        if(lcc==undefined)return;
        if (lcc.characterCard == undefined) {
          console.log("cant find rule named :" + name);
          return;
        }
        var characterCard = lcc.characterCard;
        var size = characterCard.divisions.length;
        var divisions = new Array();
        for (var i = 0; i < size; i++) {
          var fieldlist =   this.GetFieldList(characterCard.divisions[i].content);
          var difi = new divinfo(fieldlist,characterCard.divisions[i].hint);
          difi.name = characterCard.divisions[i].divname;
          divisions.push(difi);
        }
        this.dataDivisions  = divisions;
      },
      GetFieldList: function(content) {
        var fields = new Array();
        for (var i = 0; i < content.length; i++) {
          var fi = new field(content[i].name, content[i].inputType, content[i].boundType, content[i].ex,content[i].hint);
          fields.push(fi);
        }
        return fields;
      }
    }
  };
</script>
<<style>
  body {
    text-align: center;
  }
  button {
    width: 500px;
  }
</style>
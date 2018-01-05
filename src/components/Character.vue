<template>
  <el-container>
    <el-main>
      <button-group-dialog :infos='rules' :dialog-name='"当前规则:"+rules[ruleid].name' v-on:getResult='chooseResult'></button-group-dialog>
      <CharacterSheet :sheet-divisions='divisions'>
      </CharacterSheet>
    </el-main>
  </el-container>
</template>
<script>
  import CharacterSheet from "./CharacterSheet.vue";
  import {field,divinfo,GetRuleList} from '../info'
  export default {
    components: {
      CharacterSheet: CharacterSheet
    },

    data() {
      return {
        ruleid: 0,
        rules:GetRuleList(),
        divisions: cocdiv
      };
    },
    methods: {
      chooseResult:function(id){
          console.log("hi");
         this.ruleid =  id;
           if (id == 0) {
          this.divisions = cocdiv;
          }else{
            this.divisions = [];
          }
      },
      get_current_rule: function() {
        return this.rules[this.ruleid].name;
      }
    }
  };
  var info_lists_base = [{
      id: 0,
      ifield: new field("base_info", true, "min:3,max:22", "力量")
    },
    {
      id: 1,
      ifield: new field("base_info", true, "min:3,max:22", "体型")
    },
    {
      id: 2,
      ifield: new field("base_info", true, "min:3,max:22", "体质")
    },
    {
      id: 3,
      ifield: new field("base_info", true, "min:3,max:22", "敏捷")
    },
    {
      id: 4,
      ifield: new field("base_info", true, "min:3,max:22", "智力")
    },
    {
      id: 5,
      ifield: new field("base_info", true, "min:3,max:22", "魅力")
    }
  ];
  var cocdiv = [{
      name: "base_info",
      divinfo: new divinfo(info_lists_base)
    },
    {
      name: "skills",
      divinfo: new divinfo(info_lists_base)
    },
    {
      name: "background",
      divinfo: new divinfo(info_lists_base)
    },
    {
      name: "items",
      divinfo: new divinfo(info_lists_base)
    },
    {
      name: "history",
      divinfo: new divinfo(info_lists_base)
    }
  ];
</script>
<<style>
  body {
    text-align: center
  }
  div {
    margin: 0 auto;
  }
  button {
    width: 500px;
  }
</style>
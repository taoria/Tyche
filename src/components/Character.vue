<template>
  <div>
    <!-- <Dropdown trigger="click">
      <Button type="primary">
        {{get_current_rule()}}
        <Icon type="arrow-down-b"></Icon>
      </Button>
      <DropdownMenu slot="list">
        <DropdownItem v-for="rule in rules" :key="rule.id" >
          <button  type="dashed" @click="on_click_item(rule.id)">{{rule.name}}</button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown> -->
    <CharacterSheet :sheet-divisions='divisions'>
    </CharacterSheet>
  </div>
</template>
<script>
 import CharacterSheet from "./CharacterSheet.vue"
function field(stype,sinput,svaluebind,sshowname){
  this.type = stype;
  this.input = sinput;
  this.valuebind = svaluebind;
  this.showname = sshowname;
}

function divinfo(melists){
  this.list = melists;
}
export default {
   components: {
          CharacterSheet: CharacterSheet
        },
  data(){
    return {
      ruleid:0,
      rules:[
      {id:0,name:"COC6"},
      {id:1,name:"DND3R"},
      {id:2,name:"DND5E"}
      ],
      divisions:cocdiv
    }
  },
  methods:{
    on_click_item:function(id){
        this.ruleid = id;
        if(id==0){
          alert("coc entered");
          this.divisions = cocdiv;
        }
    },
    get_current_rule:function(){
      return this.rules[this.ruleid].name;
    }
  }
}
var info_lists_base = [
  {id:0,ifield:new field("base_info",true,"min:3,max:20","力量" )},
                {id:1,ifield: new field("base_info",true,"min:3,max:20","体型" )},
               {id:2,ifield:  new field("base_info",true,"min:3,max:20","体质" )},
              {id:3,ifield:   new field("base_info",true,"min:3,max:20","敏捷" )},
              {id:4,ifield:   new field("base_info",true,"min:3,max:20","智力" )},
             {id:5,ifield:    new field("base_info",true,"min:3,max:20","魅力" )}
                ];
var cocdiv = [ {name:"base_info",divinfo:new divinfo(info_lists_base)},
            {name:"skills",divinfo:new divinfo(info_lists_base)},
            {name:"background",divinfo:new divinfo(info_lists_base)},
            {name:"items",divinfo:new divinfo(info_lists_base)},
            {name:"history",divinfo:new divinfo(info_lists_base)}];
</script>
<<style>
body{text-align:center} 
div{
  margin:0 auto;
} 
button{
  width:500px;
}
</style>
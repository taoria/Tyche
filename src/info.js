function field(stype, sinput, svaluebind, sshowname) {
  this.type = stype;
  this.input = sinput;
  this.inf = new Array();
  this.showname = sshowname;
  this.setInf = function(str) { 
    var res=str.split(',');
    for(var p=0;p<res.length;p++){
        var unit  =  res[p].split(':');
        this.inf[unit[0]] = unit[1];
    }
  }; 
  this.setInf(svaluebind);
  this.getUnit=function(str){
    console.log(str+":"+this.inf[str]);
    return this.inf[str];
  };
}
function divinfo(melists) {
  this.list = melists;
}
function GetRuleList(){
  return [{id:0,name:"COC6"},{id:1,name:"DND3R"}]
}
function ParseString(str,targetstr){

}
function GetRule(ruleName){

}
function importFile(){
  var selectedFile = document.getElementById("files").files[0];
  var name = selectedFile.name;
  var size = selectedFile.size;
  console.log("文件名:"+name+"大小："+size);

  var reader = new FileReader();
  reader.readAsText(selectedFile);
  reader.onload = function(){
      console.log(this.result);//当读取完成之后会回调这个函数，然后此时文件的内容存储到了result中。直接操作即可。
  };
}
export { //很关键
  field,divinfo,GetRuleList
}
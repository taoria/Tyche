//一些简单的数据
function auto(str) {}
function range(min, max) {}
function field(sname, sinput, sbound, no_ex,shint) {
  this.name = sname;
  this.inputType = sinput;
  this.boundType = sbound;
  this.hint = shint;
  this.ex = no_ex;
}
var RuleCaches = new Array();
function CacheRule(data) {
  var name = data.rulename;
  var rule = data.rule;
  RuleCaches[name] = rule;
}
function LoadCacheRule(str) {
  if (RuleCaches[str] == undefined) {
    console.log("error no cached rules");
  }
  return RuleCaches[str];
}
function divinfo(melists,hint) {
  this.name = "未定义名称";
  this.hint = hint;
  this.list = melists;
}
function GetRuleList() {
  return [{ id: 0, name: "COC6" }, { id: 1, name: "DND3R" }];
}
export { field, divinfo, GetRuleList, CacheRule, LoadCacheRule };

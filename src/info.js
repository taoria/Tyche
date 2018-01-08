//一些简单的数据
function auto(str) {}
function range(min, max) {}
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
function GetRuleList() {
  return [{ id: 0, name: "COC6" }, { id: 1, name: "DND3R" }];
}
export {GetRuleList, CacheRule, LoadCacheRule };

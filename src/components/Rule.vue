<template>
  <div>
    <button-group-dialog :infos='rules' :dialog-name='"当前规则:"+rules[ruleid].name' v-on:getResult='chooseResult'></button-group-dialog>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="属性项名" width="180">
      </el-table-column>
      <el-table-column prop="hint" label="属性项提示" width="180">
      </el-table-column>
      <el-table-column prop="inputType" label="输入类型" width="100">
      </el-table-column>
      <el-table-column prop="boundType" label="约束类型" width="100">
      </el-table-column>
      <el-table-column prop="ex" label="附加码" width="100">
      </el-table-column>
    </el-table>
  </div>
</template>

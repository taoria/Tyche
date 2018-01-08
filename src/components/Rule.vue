<template>
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
</template>
<script>
  export default {
    data() {
      return {
        currentRule:"COC6",
        tableData:[]
      }
    }
  }
</script>

  
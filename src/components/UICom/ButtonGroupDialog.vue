<template>
  <div>
    <el-button type="text" @click="centerDialogVisible = true">{{dialogName}}</el-button>
    <el-dialog title="" :visible.sync="centerDialogVisible" center :fullscreen='true'>
      <span slot="title">请选择</span>
      <div>
        <el-button v-for="info in infos" :key="info.id" @click="getResult(info.id)" type="primary">{{info.name}}</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="info" @click="getResult(0)">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["infos", "dialogName"],
  data() {
    return {
      centerDialogVisible: false
    };
  },
  methods: {
    getResult: function(resultId) {
      this.centerDialogVisible = false;
      this.$emit("getResult", resultId);
      return resultId;
    }
  }
};
</script>
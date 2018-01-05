<template>
  <div>
    <el-button type="text" @click="centerDialogVisible = true">{{dialogName}}</el-button>
    <el-dialog title="" :visible.sync="centerDialogVisible" width="30%" center>
      <span>请选择</span>
      <div v-for="info in infos" :key="info.id" @click="getResult(info.id)">
        <el-button>{{info.name}}</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="getResult(0)">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    props: ['infos', 'dialogName'],
    data() {
      return {
        centerDialogVisible: false
      }
    },
    methods: {
      getResult: function(resultId) {
        this.centerDialogVisible = false;
        this.$emit('getResult',resultId); 
        return resultId;
      }
    }
  }
</script>
<<template>
  <div>
    <el-form-item :label='lab'>
      <el-input v-model='val' style="width: 200px"></el-input>
    </el-form-item>
  </div>
</template>
<<script>
  export default {
      props: ['fieldLabel'],
    data() {
   
      return {
        val: this.value,
        lab: this.fieldLabel
      }
    }
  }
</script>

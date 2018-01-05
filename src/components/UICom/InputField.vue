<<template>
  <div>
    <el-form-item class="item" :label='lab' >
      <el-slider
        v-model="val"
        show-input :min='min' :max='max'>
    </el-slider>
    </el-form-item>
  </div>
</template>
<<script>
  export default {
      props: ['fieldLabel','max','min'],
    data() {
      return {
        val: this.value,
        lab: this.fieldLabel
      }
    }
  }
</script>
<<style>
.item{
}
</style>


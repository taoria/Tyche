<<template>
  <div>
    <div v-if="bound==='range'">
      <el-form-item class="item" :label='fieldLabel'>
        <el-slider v-model="val" show-input :min='ex[0]' :max='ex[1]'>
        </el-slider>
      </el-form-item>
    </div>
    <div v-else-if="bound==='none'">
      <el-form-item class="item" :label='fieldLabel'>
        <el-input v-model='val' :placeholder="'请输入'+fieldLabel"></el-input>
      </el-form-item>
    </div>
  </div>
</template>
<<script>
  export default {
    props: ['fieldLabel', 'bound', 'ex'],
    mounted: function() {
      console.log(this.bound);
    },
    data() {
      return {
        val: this.value,
        lab: this.fieldLabel
      }
    }
  }
</script>
<<style>

</style>


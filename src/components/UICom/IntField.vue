<<template>
  <div>
    <div v-if="bound==='range'">
      <el-form-item class="item" :label='fieldLabel' >
         <el-input-number v-model="val"   :min='ex[0]' :max='ex[1]' @change="onchange"></el-input-number>
      </el-form-item>
    </div>
    <div v-else-if="bound==='none'">
      <el-form-item class="item" :label='fieldLabel'>
        <el-input v-model='val' :placeholder="'请输入'+fieldLabel" @change="onchange"></el-input>
      </el-form-item>
    </div>
  </div>
</template>
<<script>
  export default {
    props: ['fieldLabel', 'bound', 'ex','change','name'],
    mounted: function() {
      console.log(this.bound);
    },
    methods:{
      onchange(){
        this.change(this.name);
      }
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


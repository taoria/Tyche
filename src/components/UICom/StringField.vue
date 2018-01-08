<<template>
  <div>
    <div v-if="bound==='none'">
      <el-form-item class="item" :label='fieldLabel'>
        <el-input v-model='val' :placeholder="'请输入'+fieldLabel" @change="onchange"></el-input>
      </el-form-item>
    </div>
    <div v-else-if="bound==='select'">
      <el-form-item class="item" :label='fieldLabel'>
        <el-autocomplete class="inline-input" v-model="val" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect" @change="onchange"></el-autocomplete>
      </el-form-item>
    </div>
  </div>
</template>
<<script>
  export default {
    props: ['fieldLabel', 'bound', 'ex', 'change', 'name'],
    mounted: function() {},
    methods: {
      querySearch(queryString, cb) {
        var results = queryString ? this.ex.filter(this.createFilter(queryString)) : this.ex;
        console.log(this.ex);
        cb(results);
      },
      createFilter(queryString) {
        return (ex) => {
          return (this.ex.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect() {},
      onchange() {
        this.change(this.name,this.val);
      }
    },
    data() {
      return {
        val: '',
        lab: this.fieldLabel
      }
    }
  }
</script>
<<style>

</style>

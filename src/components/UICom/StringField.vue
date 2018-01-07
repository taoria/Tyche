<<template>
  <div>
    <div v-if="bound==='none'">
      <el-form-item class="item" :label='fieldLabel'>
        <el-input v-model='val' :placeholder="'请输入'+fieldLabel"></el-input>
      </el-form-item>
    </div>
    <div v-else-if="bound==='select'">
      <el-form-item class="item" :label='fieldLabel'>
        <el-autocomplete class="inline-input" v-model="val2" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
      </el-form-item>
    </div>
  </div>
</template>
<<script>
  export default {
    props: ['fieldLabel', 'bound', 'ex'],
    mounted: function() {
    },
    methods: {
      querySearch(queryString, cb) {
        console.log(this.ex);
        var results = queryString ? this.ex.filter(this.createFilter(queryString)) : this.ex;
        cb(results);
      },
      createFilter(queryString) {
        return (ex) => {
          return (this.ex.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(){

      }
    },
    data() {
      return {
        val: '',
        val2: '',
        lab: this.fieldLabel
      }
    }
  }
</script>
<<style>

</style>

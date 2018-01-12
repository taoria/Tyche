<<template>
  <div>
    <div v-if="bound==='none'">
        <el-input  v-model='val' :placeholder="'请输入'+fieldLabel" @change="onchange" >{{val}}</el-input>
    </div>
    <div v-else-if="bound==='select'">
        <el-autocomplete class="inline-input" v-model="val" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect" @change="onchange"></el-autocomplete>
    </div>
  </div>
</template>
<<script>
  export default {
    props: ['fieldLabel', 'bound', 'ex', 'change', 'name', 'value'],
    computed:{
      val:{
        get:function(){
          return this.value;
        },
        set:function(value){
          this.tempVal = value;
        }
      }
    },
    methods: {
      querySearch(queryString, cb) {
        var results = queryString ? this.ex.filter(this.createFilter(queryString)) : this.ex;
        cb(results);
      },
      createFilter(queryString) {
        return (ex) => {
          return (this.ex.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect() {},
      onchange() {
        this.$emit("change",this.name,this.tempVal);
      }
    },
    data() {
      return {
        tempVal:{},
        lab: this.fieldLabel
      }
    }
  }
</script>
<<style>

</style>

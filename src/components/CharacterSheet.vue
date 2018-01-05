<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <div class="field-contianer">
                <div class="big-div" v-for="divs in sheetDivisions" :key="divs.name">
                    <div class="little-field" v-for="field in divs.divinfo.list" :key="field.id" style="">
                        <input-field :field-label='field.ifield.showname'></input-field>
                    </div>
                </div>
            </div>
        </el-form>
      <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
    </div>
</template>
<script>
    export default {
        name: "InputCom",
        props: ['sheetDivisions'],
        data() {
            return {
                value: '',
                form: {}
            }
        }
    }
</script>
<<style>
    .big-div {
        width: 800px;
        margin: 0 auto;
    }
    .field-container {
        width: 800px;
        margin: 0 auto;
    }
    .little-field {
        
    }
</style>

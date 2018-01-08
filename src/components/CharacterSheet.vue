<template>
    <div>
        <el-form ref="form" :model="form" label-width="120px">
            <el-container>
                <el-aside>
                    <el-tabs v-model="activeName" tab-position="left">
                        <el-tab-pane v-for="divs in sheetDivisions" :key="divs.name" :label="divs.hint" :name="divs.name"></el-tab-pane>
                    </el-tabs>
                </el-aside>
                <el-main>
                    <div class="field-container">
                        <el-row>
                            <el-col :span="24" :offset="0">
                                <div class="little-field" v-for="field in PageList(activeName)" :key="field.id">
                                    <el-col :span="8" :offset="0">
                                        <div v-if="field.inputType==='int'">
                                            <int-field  :field-label='field.hint' :bound='field.boundType' :ex='field.ex'></int-field>
                                        </div>
                                    </el-col>
                                    <el-col :span="8" :offset="0">
                                        <div v-if="field.inputType==='string'">
                                            <str-field  :field-label='field.hint' :bound='field.boundType' :ex='field.ex'></str-field>
                                        </div>
                                    </el-col>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-main>
            </el-container>
        </el-form>
    </div>
</template>
<script>
    export default {
        props: ['sheetDivisions'],
        methods: {
            trylog:function(x){
                return x;
            },
            PageList:function(activeName){
                var page = this.GetPage(activeName);
                if(page==undefined) return [];
                console.log(page);
                return page.list;
            },
            GetPage(activeName){
                if(this.sheetDivisions==undefined) return;
                for(var i=0;i<this.sheetDivisions.length;i++){
                    
                    if(this.sheetDivisions[i].name===this.activeName){
                       
                        return this.sheetDivisions[i];
                      
                    }
                }
               
                return this.sheetDivisions[0];
            }
        },
        mounted:function(){
            console.log(this.sheetDivisions);
        },
        data() {
            return {
                value: '',
                page: 0,
                form: {},
                activeName: ''
            }
        }
    }
</script>
<<style>
    .field-container {}
    .little-field {
        width: 80%;
    }
</style>

<template>
 <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :offset="0">
    <div>

        <el-form ref="form" :model="sheetDivisionArray" label-width="80px">
            <el-container>
                <el-aside width="80px">
                    <el-tabs v-model="activeName" tab-position="left">
                        <el-tab-pane v-for="divs in sheetDivisions" :key="divs.name" :label="divs.hint" :name="divs.divname"></el-tab-pane>
                    </el-tabs>
                </el-aside>
                <el-main>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :offset="0">
                        <div class="field-container">
                            <el-row>
                                <div c v-for="field in PageList(activeName)" :key="field.id">
                                    <el-col :span="8" :xs="24" :sm="24" :md="12" :lg="6" :offset="0">
                                        <div v-if="field.inputType==='int'">
                                            <int-field :name='field.name' :change='change' :field-label='field.hint' :bound='field.boundType' :ex='field.ex' ></int-field>
                                        </div>
                                    </el-col>
                                    <el-col :span="8" :xs="24" :sm="24" :md="12" :lg="6" :offset="0">
                                        <div v-if="field.inputType==='string'">
                                            <str-field :name='field.name' :change='change' :field-label='field.hint' :bound='field.boundType' :ex='field.ex'></str-field>
                                        </div>
                                    </el-col>
                                </div>
                            </el-row>
                        </div>
                    </el-col>
                </el-main>
            </el-container>
        </el-form>
    </div>
 </el-col>
</template>
<script>
    export default {
        props: ['sheetDivisions'],
        methods: {
            trylog: function(x) {
                return x;
            },
            PageList: function(activeName) {
                var page = this.GetPage(activeName);
                if (page == undefined) return [];
                return page.content;
            },
            GetPage(activeName) {
                if (this.sheetDivisions == undefined) return;
                for (var i = 0; i < this.sheetDivisions.length; i++) {
                    if (this.sheetDivisions[i].divname === this.activeName) {
                        return this.sheetDivisions[i];
                    }
                }
                return this.sheetDivisions[0];
            },
            change(name,val){

            }
        },
        mounted: function() {
           
        },
        data() {
            return {
                value: '',
                page: 0,
                form: {},
                sheetDivisionArray:{},
                activeName: ''
            }
        }
    }
</script>
<<style>
    .field-container {}
</style>

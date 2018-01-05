<template>
    <div>
        <el-form ref="form" :model="form" label-width="120px">
            <div class="field-container">
                <div class="little-field" v-for="field in sheetDivisions[page].divinfo.list" :key="field.id" style="">
                    <input-field :field-label='field.ifield.showname' :min='parseInt(field.ifield.getUnit("min"))' :max='parseInt(field.ifield.getUnit("max"))'></input-field>
                </div>
            </div>
        </el-form>
        <div class="block">
            <el-pagination background layout="prev, pager, next" :total="100" :page-size="sheetDivisions.length" :current-page.sync="page">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        name: "InputCom",
        props: ['sheetDivisions'],
        methods: {},
        data() {
            return {
                value: '',
                page: 0,
                form: {
                }
            }
        }
    }
</script>
<<style>
    .big-div {
        width: 80%;
        margin: 0 auto;
    }
    .field-container {
        margin: 0 auto;
    }
    .little-field {
        width: 35%;
    }
</style>

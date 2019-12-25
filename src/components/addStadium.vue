<template>
    <div class="form">
    <el-form label-position="right"  class="demo-table-expand" label-width="80px">
                <el-form-item label="场馆名称" >
                    <el-input
                            size="small"
                            placeholder="请输入内容"
                            v-model="stadium.name">
                    </el-input>
                </el-form-item>

                <el-form-item label="场馆电话">
                    <el-input
                            size="small"
                            placeholder="请输入内容"
                            v-model="stadium.phone">
                    </el-input>
                </el-form-item>
                <el-form-item label="场馆地址">
                    <el-input
                            size="small"
                            placeholder="请输入内容"
                            v-model="stadium.address">
                    </el-input>
                </el-form-item>
        <el-form-item label="场馆场地">
            <el-select v-model="stadium.stadium" multiple placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
                <el-form-item >
                    <el-button
                            size="mini"
                            type="primary"
                            @click="handleAdd">确认添加</el-button>
                </el-form-item>
    </el-form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                stadium:{
                    name:'',
                    phone: '',
                    address: '',
                    stadium:[]
                },
                options:[
                    {
                        label: '场地1',
                        value: '选项1'
                    },
                    {
                        label: '场地2',
                        value: '选项2'
                    },
                    {
                        label: '场地3',
                        value: '选项3'
                    },
                    {
                        label: '场地4',
                        value: '选项4'
                    },
                    {
                        label: '场地5',
                        value: '选项5'
                    }
                ]
            }
        },
        methods:{
            handleAdd(){

            }
        }
    }
</script>
<style scoped>
    .form{
        width: 100%;
    }
</style>
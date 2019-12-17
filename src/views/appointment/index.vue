<template>
    <el-table
            :data="tableData"
            stripe
            style="width: 100%">
        <el-table-column type="expand">
            <template scope="props">
                <el-form label-position="left"  inline class="demo-table-expand" size="small" label-width="80px" >
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="场馆">
                                <el-input
                                        size="small"
                                        disabled="true"
                                        placeholder="请输入内容"
                                        v-model="props.row.stadium">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="场地">
                                <el-input
                                        size="small"
                                        disabled="true"
                                        placeholder="请输入内容"
                                        v-model="props.row.site">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                            <el-col :span="8">
                                <el-form-item label="开始日期">
                                    <el-date-picker
                                            v-model="props.row.startTime"
                                            type="datetime"
                                            value-format="yyyy-MM-dd HH:mm:ss"
                                            placeholder="选择日期时间" @change="startChange">
                                    </el-date-picker>
                                </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="结束日期">
                                <el-date-picker
                                        v-model="props.row.endTime"
                                        type="datetime"
                                        value-format="yyyy-MM-dd HH:mm:ss"
                                        placeholder="选择日期时间" @change="endChange(props.row)">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="租金">
                                <el-input
                                        size="small"
                                        disabled="true"
                                        placeholder="请输入内容"
                                        v-model="props.row.rent">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="">
                                <el-button
                                        size="mini"
                                        type="primary"
                                        @click="handleEdit(props.$index,props.row)">确认修改</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column
                prop="stadium"
                label="场馆"
                width="150">
        </el-table-column>
        <el-table-column
                prop="site"
                label="场地"
                width="150">
        </el-table-column>
        <el-table-column
                prop="rent"
                label="租金"
                width="100">
        </el-table-column>
        <el-table-column
                prop="startTime"
                label="开始日期"
                 width="180">
        </el-table-column>
        <el-table-column
                prop="endTime"
                label="结束日期"
                width="180">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">取消订单</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    stadium:'体育馆',
                    site:'羽毛球场地',
                    rent:'80',
                    startTime:'2019-10-12 8:30:00',
                    endTime: '2019-10-12 9:30:00'
                },
                    {
                        stadium:'体育馆',
                        site:'羽毛球场地',
                        rent:'80',
                        startTime:'2019-10-12 8:30:00',
                        endTime: '2019-10-12 9:30:00'
                    },
                    {
                        stadium:'体育馆',
                        site:'羽毛球场地',
                        rent:'80',
                        startTime:'2019-10-12 8:30:00',
                        endTime: '2019-10-12 9:30:00'
                    },
                    {
                        stadium:'体育馆',
                        site:'羽毛球场地',
                        rent:'80',
                        startTime:'2019-10-12 8:30:00',
                        endTime: '2019-10-12 9:30:00'
                    }
                ]
            }
        },
        methods:{
           startChange(row){
               console.log(row);
               // let newTime = new Date(e);
               //console.log(newTime.getTime());
           },

           changeRent(){
               let newStart = x;
           },
            handleEdit(index,row) {
                console.log(index, row);
                let newTime1 = new Date(row.startTime);
                let newTime2 = new Date(row.endTime);
                let diff = newTime2.getTime() - newTime1.getTime();
                diff = diff / (1000 * 60*60);
                this.tableData[index].rent = diff*88;
            }
        }
    }
</script>